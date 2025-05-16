import { GoogleGenerativeAI } from "@google/generative-ai";

interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.length === 0) {
    console.log("No API key provided, using mock response");
    const mockResponse = generateMockResponse(messages);
    return new Response(
      JSON.stringify({
        response: mockResponse,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const lastUserMessage = messages[messages.length - 1]?.content || "";

    const systemInstructions =
      "You are a helpful customer support agent for SoftSell, a company that helps businesses monetize unused software licenses. Be concise and helpful. If asked about something unrelated to software license sales, politely redirect the conversation back to SoftSell services.";

    console.log("Sending request to Gemini");

    let contextPrompt = "";
    if (messages.length > 1) {
      contextPrompt = "Previous conversation:\n";
      for (let i = 0; i < messages.length - 1; i++) {
        const msg = messages[i];
        const role = msg.role === "user" ? "User" : "Assistant";
        contextPrompt += `${role}: ${msg.content}\n`;
      }
      contextPrompt += "\n";
    }

    const fullPrompt = `${systemInstructions}\n\n${contextPrompt}User: ${lastUserMessage}`;

    const result = await model.generateContent(fullPrompt);
    const response = result.response;

    if (!response || !response.text()) {
      console.error("Invalid response format from Gemini:", result);
      throw new Error("Invalid response format from Gemini");
    }

    return new Response(
      JSON.stringify({
        response: response.text(),
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Gemini API error:", error);

    const mockResponse = generateMockResponse(messages);

    return new Response(
      JSON.stringify({
        response: mockResponse,
        error: "Gemini API error, falling back to mock response",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

function generateMockResponse(messages: ChatMessage[]) {
  const lastMessage =
    messages[messages.length - 1]?.content.toLowerCase() || "";

  if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
    return "Hello! I'm SoftSell's virtual assistant. How can I help you with selling your software licenses today?";
  } else if (
    lastMessage.includes("how do i sell my license") ||
    lastMessage.includes("sell license")
  ) {
    return "To sell your license, simply upload your license details through our secure portal. We'll provide a market-based valuation within 24 hours. Once you accept our offer, you'll receive payment within 3 business days!";
  } else if (
    lastMessage.includes("pricing") ||
    lastMessage.includes("commission") ||
    lastMessage.includes("fee")
  ) {
    return "SoftSell charges a competitive commission fee that varies based on license type and value. Our fee structure is transparent and typically ranges from 10-15% of the final sale price. We always aim to get you the best market rate!";
  } else if (lastMessage.includes("safe") || lastMessage.includes("secure")) {
    return "Absolutely! Security is our top priority. We use industry-standard encryption for all transactions, and our verification processes ensure all licenses are legitimate. Your data and financial information are always protected.";
  } else if (
    lastMessage.includes("what software") ||
    lastMessage.includes("which software")
  ) {
    return "We handle licenses for a wide range of enterprise software including Microsoft, Adobe, Oracle, SAP, Autodesk, and many more. Our marketplace has buyers interested in virtually all major software products!";
  } else {
    return "Thank you for your question. As SoftSell's customer support agent, I can help you monetize your unused software licenses. Could you please provide more details about your software licenses or ask a specific question about our service?";
  }
}
