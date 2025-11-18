# Claude Chat Clone

A beautiful, Claude-style chat application that lets you interact with Claude AI directly in your browser.

## ✨ Features
- 💬 Clean, modern chat interface inspired by Claude
- ⌨️ Paste prompts in a textarea and get instant responses
- 🚀 Real-time streaming responses from Claude API
- 📱 Responsive design that works on all devices
- ⚡ Fast and lightweight
- 🎨 Beautiful UI with smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- An Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your API key:**
   
   Edit the `.env` file and add your Anthropic API key:
   ```bash
   ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
   PORT=3000
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   
   Navigate to `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure
```
claude-chat-app/
├── src/                          # TypeScript backend
│   ├── server.ts                 # Express server setup
│   ├── routes/
│   │   └── chat.ts              # Chat API endpoints
│   └── services/
│       └── anthropic.ts         # Claude API integration
├── public/                       # Frontend files
│   ├── index.html               # Main HTML
│   ├── css/
│   │   └── style.css           # Styles
│   └── js/
│       └── main.js             # Frontend logic
├── .env                         # Environment variables
└── package.json                # Dependencies
```

## 🎯 Usage

1. Type or paste your prompt in the textarea at the bottom
2. Press Enter or click the "Send" button
3. Watch as Claude responds in real-time!

**Tip:** Press Enter to send, Shift+Enter for a new line

## 🛠️ Technologies

- **Backend:** Node.js, Express, TypeScript
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **AI:** Anthropic Claude API (claude-3-5-sonnet-20241022)
- **Development:** tsx for hot reloading

## 📝 License
MIT