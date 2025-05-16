"use client";

import {
  Inbox,
  BarChart,
  CreditCard,
  Shield,
  CheckCircle,
  MapPin,
  BadgeHelp,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { SmoothScrollLink } from "./components/SmoothScrollLink";
import { ChatWidget } from "./components/ChatWidget";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] scroll-smooth">
      {/* Hero Section */}
      <section
        className="text-white py-24 px-6 sm:px-10 md:px-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, var(--hero-gradient-from), var(--hero-gradient-to))",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-300 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "7s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-5"></div>

        <div className="absolute top-2 left-4 z-20">
          <div className="inline-block text-2xl font-bold">
            <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-transparent bg-clip-text">
              SoftSell
            </span>
          </div>
        </div>

        <ThemeToggle />

        <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center text-center relative z-10 mt-10">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg blur-3xl opacity-20"></div>
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight  text-white">
              Transform Unused Software{" "}
              <span className="text-indigo-200">into Cash</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed">
            SoftSell helps businesses monetize their unused software licenses
            quickly, securely, and at the best market rates.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <button
              className="transition-all py-3 rounded-md font-semibold text-lg shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transform duration-300 min-w-44 relative group"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--primary)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></div>
              Sell Licenses
            </button>
            <SmoothScrollLink
              href="#how-it-works"
              className="text-white flex items-center gap-2 font-medium hover:text-indigo-200 transition-colors duration-300 group"
            >
              <span>How it works</span>
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </SmoothScrollLink>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 px-6 sm:px-10 md:px-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-light)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--foreground)" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-[var(--primary)]/20"
                style={{
                  color: "var(--primary)",
                }}
              >
                <Inbox size={28} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Upload License
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Submit your software license details through our secure portal
                for evaluation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-[var(--primary)]/20"
                style={{
                  color: "var(--secondary)",
                }}
              >
                <BarChart size={28} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Get Valuation
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Receive a competitive market-based valuation within 24 hours.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-[var(--primary)]/20"
                style={{
                  color: "var(--secondary)",
                }}
              >
                <CreditCard size={28} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Get Paid
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Accept our offer and receive payment through your preferred
                method within 3 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 px-6 sm:px-10 md:px-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-dark)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-18"
            style={{ color: "var(--primary-foreground)" }}
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="border rounded-lg p-6 hover:shadow-md transition relative overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="text-green-500 mb-4 absolute -right-4 -bottom-10">
                <CheckCircle size={64} strokeWidth={1} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Best Market Rates
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                We leverage our extensive network to offer you the highest
                possible value for your licenses.
              </p>
            </div>
            <div
              className="border rounded-lg p-6 hover:shadow-md transition relative overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="text-orange-500 mb-4 absolute -right-4 -bottom-10">
                <Shield size={64} strokeWidth={1} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Secure Transactions
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Advanced encryption and compliance protocols ensure your data
                and transactions are fully protected.
              </p>
            </div>
            <div
              className="border rounded-lg p-6 hover:shadow-md transition relative overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="text-blue-500 mb-4 absolute -right-4 -bottom-10">
                <MapPin size={64} strokeWidth={1} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Global Reach
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Our international buyer network means we can sell licenses from
                any region with maximum return.
              </p>
            </div>
            <div
              className="border rounded-lg p-6 hover:shadow-md transition relative overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="text-purple-500 mb-4 absolute -right-4 -bottom-10">
                <BadgeHelp size={64} strokeWidth={1} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--primary-foreground)" }}
              >
                Dedicated Support
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Our experts guide you through every step with personalized
                service and industry insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 px-6 sm:px-10 md:px-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-light)" }}
      >
        <div className="max-w-5xl mx-auto ">
          <h2
            className="text-3xl font-bold text-center mb-12 "
            style={{ color: "var(--foreground)" }}
          >
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg shadow-sm border border-[var(--border)]">
              <p
                className="italic mb-6"
                style={{ color: "var(--testimonial-text)" }}
              >
                &ldquo;SoftSell helped us recover over $50,000 from unused
                enterprise licenses after our company downsized. The process was
                painless and their valuation exceeded our expectations.&rdquo;
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                  }}
                >
                  JD
                </div>
                <div className="ml-4">
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    Jennifer Davis
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    CTO, Horizon Technologies
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg shadow-sm border border-[var(--border)]">
              <p
                className="italic mb-6"
                style={{ color: "var(--testimonial-text)" }}
              >
                &ldquo;As a startup that acquired too many licenses, SoftSell
                was a lifesaver. Their team handled everything professionally,
                and the funds we recovered helped extend our runway by two
                months.&rdquo;
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--secondary)",
                  }}
                >
                  MR
                </div>
                <div className="ml-4">
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    Michael Rodriguez
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Founder, NexusAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-16 px-6 sm:px-10 md:px-20 transition-colors duration-300"
        style={{ backgroundColor: "var(--section-dark)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--primary-foreground)" }}
          >
            Get in Touch
          </h2>
          <form
            className="p-8 rounded-lg shadow-md border relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-indigo-500 before:rounded-lg before:-z-10 before:opacity-50"
            style={{
              backgroundColor: "var(--form-bg)",
              borderColor: "var(--form-border)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400"
                  style={{
                    backgroundColor: "var(--input)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400"
                  style={{
                    backgroundColor: "var(--input)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400"
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                required
                placeholder="Your Company"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="licenseType"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                License Type
              </label>
              <select
                id="licenseType"
                className="w-full px-3 py-3 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400 pr-10"
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                required
              >
                <option value="" style={{ backgroundColor: "var(--input)" }}>
                  Select License Type
                </option>
                <option
                  value="enterprise"
                  style={{ backgroundColor: "var(--input)" }}
                >
                  Enterprise Software
                </option>
                <option
                  value="cloud"
                  style={{ backgroundColor: "var(--input)" }}
                >
                  Cloud Services
                </option>
                <option
                  value="developer"
                  style={{ backgroundColor: "var(--input)" }}
                >
                  Developer Tools
                </option>
                <option
                  value="security"
                  style={{ backgroundColor: "var(--input)" }}
                >
                  Security Solutions
                </option>
                <option
                  value="other"
                  style={{ backgroundColor: "var(--input)" }}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-400"
                style={{
                  backgroundColor: "var(--input)",
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
                required
                placeholder="Tell us about your software licenses..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md font-semibold transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg text-white"
              style={{
                background:
                  "linear-gradient(to right, var(--button-gradient-from), var(--button-gradient-to))",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-10 px-6 sm:px-10 md:px-20"
        style={{ backgroundColor: "var(--section-dark)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            <span className="mr-1">💻</span>
            <span>SoftSell</span>
          </div>

          <p className="text-sm" style={{ color: "var(--primary-foreground)" }}>
            © 2025 SoftSell. All rights reserved.
          </p>
          <p
            className="text-sm my-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            by{" "}
            <a
              href="https://github.com/Aman-Jangid"
              style={{ color: "var(--primary)" }}
            >
              Aman-Jangid
            </a>
          </p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
