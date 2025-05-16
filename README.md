# SoftSell - Software License Resale Platform

A modern marketing website for a fictional B2B SaaS startup

## Project Overview

SoftSell is a responsive single-page application (SPA) designed to showcase a fictional platform that helps businesses resell unused software licenses. Built as a frontend demo, it highlights key marketing elements, an AI-powered chat widget, and a clean UI.

## Key Features

✔ Responsive Design – Optimized for mobile, tablet, and desktop.  
✔ Interactive Chat Widget – Powered by Gemini AI to answer FAQs (or mock responses if no API key is provided).  
✔ Conversion-Focused Sections – Hero, value proposition, testimonials, and contact form to capture leads.  
✔ Modern UI – Tailwind CSS for styling, subtle animations, and accessible color scheme (indigo/blue gradients).

## Technology Stack

| Component | Choice | Purpose |
| --- | --- | --- |
| Framework | Next.js 14 | React-based SSR and routing |
| Styling | Tailwind CSS | Utility-first CSS for rapid development |
| AI Integration | Gemini API | Dynamic chat responses |
| Icons | Lucide | Clean, consistent iconography |

## Setup & Installation

### Prerequisites

- Node.js v18+
- npm/yarn

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/your-repo/softsell.git
   ```

2. Install dependencies
   ```bash
   npm install  # or yarn
   ```

3. Run the development server
   ```bash
   npm run dev  # or yarn dev
   ```

4. Open http://localhost:3000 in your browser.

## AI Chat Widget Configuration

### Option 1: Mock Mode (Zero Setup)
- Works out-of-the-box with predefined responses.

### Option 2: Gemini AI Integration
- Obtain a free API key from Google Gemini Studio.
- Create a `.env.local` file in the root directory:
  ```env
  GEMINI_API_KEY=paste_the_api_key
  ```
- Restart the dev server.

## Deployment

Recommended Host: Vercel (Used it cause it's optimized for Next.js)

1. Push code to GitHub/GitLab.
2. Import the repo into Vercel.
3. Add environment variables (the ones in `.env.local.example`).
4. Deploy!

## Future Improvements

With additional time, I'd implement:

🔹 Authentication – For businesses to manage licenses.  
🔹 Backend Integration – Real license listings and transactions.  
🔹 Navigation – More pages and Responsive Navigation.
