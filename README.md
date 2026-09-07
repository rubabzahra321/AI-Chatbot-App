# 🤖 AI Chatbot App

> A full-stack AI-powered chatbot application built with React, Node.js, Express, and the Groq API.

AI Chatbot App is an interactive conversational application that allows users to communicate with an AI assistant through a modern web interface.

The application uses a React frontend to provide an interactive user experience and an Express.js backend to securely communicate with the Groq API. User messages are sent to the backend, processed using the Llama 3.1 language model, and returned as AI-generated responses.

This project was built as a hands-on implementation of AI API integration and full-stack application development.

---

# 🚀 Features

- 💬 Interactive AI chatbot interface
- 🤖 AI-generated responses using Groq API
- 🧠 Powered by Llama 3.1 language model
- ⚡ Fast AI inference through Groq
- 🌐 Modern React-based user interface
- 🔗 Frontend and backend API integration
- ⌨️ Send messages using the Enter key
- 📝 Support for multi-line input using Shift + Enter
- 💡 Predefined suggestion prompts
- ⏳ Loading and typing indicators
- 🚨 Error handling for API and server issues
- 🔒 Secure API key management using environment variables
- 📱 Responsive and modern user interface

---

# 🏗️ System Architecture

The application follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │        USER         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │   User Interface    │
                    └──────────┬──────────┘
                               │
                         HTTP Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Express.js Backend │
                    │                     │
                    │   /api/chat API     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Groq API       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Llama 3.1 8B Instant│
                    │        LLM          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    AI Response      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │ Displays Response   │
                    └─────────────────────┘
```

---

# 🧠 How It Works

The application follows a simple full-stack AI communication flow.

### 1. User Enters a Message

The user writes a question or prompt in the chatbot interface.

### 2. React Sends Request

The React frontend sends the user's message to the backend using a POST request.

```text
POST /api/chat
```

The message is sent in JSON format.

```json
{
  "message": "User question"
}
```

---

### 3. Express Backend Receives Request

The Node.js and Express.js server receives the message through the API endpoint.

```text
/api/chat
```

---

### 4. Backend Communicates with Groq API

The backend sends the user's message to the Groq API.

The API key remains securely stored in environment variables and is never exposed to the frontend.

---

### 5. Llama Language Model Processes the Message

The application uses the following language model:

```text
llama-3.1-8b-instant
```

The model processes the user's message and generates an AI response.

---

### 6. Response Returns to Backend

Groq returns the generated response to the Express server.

---

### 7. Backend Sends Response to Frontend

The Express backend returns the response in JSON format.

Example:

```json
{
  "reply": "AI generated response"
}
```

---

### 8. React Displays the Response

The frontend receives the AI response and displays it in the chatbot interface.

---

# 🔄 Application Workflow

```text
User
 │
 ▼
Enter Message
 │
 ▼
React Frontend
 │
 ▼
POST Request
 │
 ▼
Express.js Backend
 │
 ▼
Groq API
 │
 ▼
Llama 3.1 Language Model
 │
 ▼
AI Generated Response
 │
 ▼
Express.js Backend
 │
 ▼
React Frontend
 │
 ▼
Display Response to User
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development and build tool |
| JavaScript | Application logic |
| Node.js | Backend runtime environment |
| Express.js | Backend API development |
| Groq SDK | AI API integration |
| Llama 3.1 8B Instant | Large Language Model |
| CORS | Cross-origin communication |
| dotenv | Environment variable management |
| Nodemon | Backend development server |

---

# 📚 Concepts Implemented

This project includes hands-on implementation of several important concepts:

### Frontend Development

- React Components
- React Hooks
- useState
- Event Handling
- Conditional Rendering
- API Integration
- Asynchronous JavaScript
- Fetch API
- Loading States
- Error Handling

### Backend Development

- Node.js
- Express.js
- REST API
- POST Requests
- JSON Request Handling
- Environment Variables
- Middleware
- CORS Configuration
- Error Handling

### AI Integration

- Large Language Models
- AI API Integration
- Prompt-based AI Interaction
- Groq API
- Llama Language Model

---

# 📂 Project Structure

```text
AI-Chatbot-App/
│
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── README.md
│
├── index.html
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
│
└── backend/
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── .env
    └── node_modules/
```

> **Note:** The `.env` file and `node_modules` folders should never be pushed to GitHub.

---

# ⚙️ Installation and Setup

## 1. Clone the Repository

```bash
git clone https://github.com/rubabzahra321/AI-Chatbot-App.git
```

Navigate to the project directory:

```bash
cd AI-Chatbot-App
```

---

# 2. Install Frontend Dependencies

From the root project directory:

```bash
npm install
```

---

# 3. Install Backend Dependencies

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

---

# 4. Configure Environment Variables

Inside the `backend` folder, create a file named:

```text
.env
```

Add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

⚠️ Never upload your `.env` file or API key to GitHub.

---

# 5. Run the Application

Return to the root project directory:

```bash
cd ..
```

Run both the frontend and backend:

```bash
npm run dev
```

The application uses Concurrently to run:

- React frontend
- Express backend

at the same time.

---

# 🌐 Application Ports

| Service | Port |
|---|---|
| React Frontend | Vite default port |
| Express Backend | 5000 |

The backend runs at:

```text
http://localhost:5000
```

The frontend communicates with the backend using:

```text
http://localhost:5000/api/chat
```

---

# 🤖 AI Model

## Llama 3.1 8B Instant

The application uses:

```text
llama-3.1-8b-instant
```

through the Groq API.

The model receives the user's message and generates a conversational response.

The backend sends the message using the Groq SDK.

```text
User Message
      │
      ▼
Groq API
      │
      ▼
Llama 3.1 8B Instant
      │
      ▼
AI Generated Response
```

---

# ⚡ Why Groq?

Groq provides fast inference for Large Language Models.

Using Groq allows this application to generate AI responses with low latency.

The Groq API is integrated into the backend instead of the frontend to keep the API key secure.

```text
Frontend
    │
    ▼
Backend
    │
    ▼
Groq API
```

This architecture prevents sensitive API credentials from being exposed in the browser.

---

# ✨ Application Features in Detail

## 💬 Interactive Chat Interface

Users can enter questions and receive AI-generated responses through a modern chatbot interface.

---

## ⌨️ Keyboard Support

The application supports:

```text
Enter
```

to send a message.

Users can use:

```text
Shift + Enter
```

to create a new line.

---

## 💡 Suggested Prompts

The interface provides predefined prompts to help users start a conversation.

Examples include:

- Explain Artificial Intelligence
- Generate a coding project idea
- Create a study plan

---

## ⏳ Loading State

While the AI is processing a request, the application displays a typing indicator.

This provides visual feedback to the user while waiting for the AI response.

---

## 🚨 Error Handling

The application handles errors such as:

- Backend server connection problems
- API failures
- Invalid requests

If the frontend cannot connect to the backend, the user receives an appropriate error message.

---

## 🔒 API Key Security

The Groq API key is stored inside an environment variable.

```text
backend/.env
```

The API key is accessed using:

```javascript
process.env.GROQ_API_KEY
```

This prevents the API key from being directly exposed in the frontend code.

---


# 🎯 Project Purpose

This project was developed to gain hands-on experience in integrating Artificial Intelligence APIs into real-world web applications.

The goal was to understand how a complete AI-powered application works from frontend to backend.

Through this project, I gained practical experience with:

- Building a React frontend
- Creating REST APIs with Express.js
- Connecting frontend and backend applications
- Integrating an AI API
- Working with Large Language Models
- Managing API keys securely
- Handling asynchronous API requests
- Implementing loading states
- Implementing error handling
- Building a full-stack AI application

This project helped strengthen both my software development foundation and my understanding of practical AI integration.

---

# 🔮 Future Improvements

Possible future improvements include:

- Conversation history
- Multiple chat sessions
- Chat memory
- User authentication
- User profiles
- Streaming AI responses
- Markdown response formatting
- Code syntax highlighting
- File upload support
- PDF-based question answering
- RAG integration
- Chat persistence using a database
- Deployment to cloud platforms
- Improved mobile responsiveness

---

# 📈 Learning Journey

This project is part of my ongoing learning journey in:

```text
Web Development
      │
      ▼
Frontend Development
      │
      ▼
React
      │
      ▼
Backend Development
      │
      ▼
Node.js & Express
      │
      ▼
API Integration
      │
      ▼
Large Language Models
      │
      ▼
Generative AI Applications
      │
      ▼
AI & Agentic AI
```

I believe in learning by building practical projects and applying new concepts to real-world applications.

---

# 👩‍💻 Author

## Rubab Zahra

**Computer Science Undergraduate | AI & Software Development Enthusiast**

Currently exploring:

- Artificial Intelligence
- Generative AI
- Large Language Models
- Retrieval-Augmented Generation
- Vector Databases
- LangChain
- LangGraph
- AI Agents
- Agentic AI

---

# 🤝 Connect With Me

- LinkedIn: [Rubab Zahra](https://www.linkedin.com/in/rubab-zahra-765827332/)
- GitHub: [rubabzahra321](https://github.com/rubabzahra321)

---

# ⭐ Support

If you find this project interesting, consider giving the repository a star.

Your support motivates me to continue learning, building, and sharing my projects.

---

> This project was built as a hands-on learning project to explore full-stack development, Large Language Models, and practical AI API integration.
