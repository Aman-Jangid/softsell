"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "How do I sell my license?",
  "What are your commission fees?",
  "Is it safe to sell licenses?",
  "What software licenses do you accept?",
  "How long does the process take?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { role: "user" as const, content }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();

      if (data.response) {
        setMessages([
          ...newMessages,
          { role: "assistant" as const, content: data.response },
        ]);
      } else {
        console.error("API error:", data.error || "Unknown error");
        setMessages([
          ...newMessages,
          {
            role: "assistant" as const,
            content:
              "I'm sorry, I couldn't process your request. Please try again later.",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat fetch error:", error);

      setMessages([
        ...newMessages,
        {
          role: "assistant" as const,
          content:
            "I'm sorry, I couldn't process your request. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);

    if (!isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant" as const,
          content:
            "Hello! I'm SoftSell's virtual assistant. How can I help you with selling your software licenses today?",
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg focus:outline-none transition-transform hover:scale-110 bg-[var(--primary)]/60 hover:bg-[var(--primary)]/80"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X
            size={30}
            className="text-[var(--primary-foreground)]/60"
            strokeWidth={1.4}
          />
        ) : (
          <MessageSquare
            size={30}
            className="text-[var(--primary-foreground)]/60"
            strokeWidth={1.4}
          />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-lg shadow-xl overflow-hidden flex flex-col"
          style={{
            height: "400px",
          }}
        >
          {/* Chat header */}
          <div
            className="p-3 flex items-center justify-between brightness-120"
            style={{
              background:
                "linear-gradient(to right, var(--hero-gradient-from), var(--hero-gradient-to))",
            }}
          >
            <h3 className="font-medium text-[var(--primary-foreground)]">
              SoftSell Support
            </h3>
            <button
              onClick={toggleChat}
              className="p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} style={{ color: "var(--primary-foreground)" }} />
            </button>
          </div>

          {/* Messages container */}
          <div
            className="flex-1 p-3 overflow-y-auto"
            style={{ backgroundColor: "var(--background)" }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.role === "user" ? "ml-2 text-right" : "mr-2"
                  }`}
                  style={{
                    backgroundColor:
                      message.role === "user"
                        ? "var(--primary)"
                        : "var(--muted)",
                    color:
                      message.role === "user"
                        ? "var(--primary-foreground)"
                        : "var(--foreground)",
                  }}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div
                  className="max-w-[80%] rounded-lg px-3 py-2"
                  style={{ backgroundColor: "var(--muted)" }}
                >
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions - only show when there are few messages */}
          {messages.length < 3 && (
            <div
              className="p-3 border-t h-25 overflow-auto"
              style={{
                borderColor: "var(--border)",
                background: "var(--muted)",
              }}
            >
              <p
                className="text-xs mb-2"
                style={{ color: "var(--muted-foreground)" }}
              >
                Suggested questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs px-2 py-1 bg-[var(--primary)]/30 hover:bg-[var(--primary)]/50 rounded-full cursor-pointer"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t flex"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(to right, var(--hero-gradient-from), var(--hero-gradient-to))",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-l-md focus:outline-none"
              style={{
                backgroundColor: "var(--muted)",
                color: "var(--foreground)",
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-3 py-2 flex items-center justify-center bg-[var(--primary)]/60 hover:bg-[var(--primary)]/80 rounded-r-md"
              style={{
                color: "var(--primary-foreground)",
                opacity: !input.trim() || isLoading ? 0.7 : 1,
              }}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
