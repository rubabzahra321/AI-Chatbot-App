import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      setResponse(data.reply || "No response received.");
    } catch (error) {
      console.error(error);
      setResponse(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <main className="chat-container">
        {/* Header */}
        <header className="chat-header">
          <div className="brand">
            <div className="logo">
              <span>✦</span>
            </div>

            <div>
              <h1>Groq AI</h1>
              <p>
                <span className="status-dot"></span>
                AI Assistant
              </p>
            </div>
          </div>

          <div className="online-badge">
            <span></span>
            Online
          </div>
        </header>

        {/* Chat Area */}
        <section className="chat-area">
          {!response && !loading ? (
            <div className="welcome">
              <div className="welcome-icon">✦</div>

              <h2>How can I help you?</h2>

              <p>
                Ask me anything. I'm here to help you learn, create,
                brainstorm, and solve problems.
              </p>

              <div className="suggestions">
                <button
                  onClick={() =>
                    setMessage("Explain artificial intelligence simply")
                  }
                >
                  💡 Explain AI simply
                </button>

                <button
                  onClick={() =>
                    setMessage("Give me a JavaScript project idea")
                  }
                >
                  💻 Coding idea
                </button>

                <button
                  onClick={() =>
                    setMessage("Help me create a study plan")
                  }
                >
                  📚 Study plan
                </button>
              </div>
            </div>
          ) : (
            <div className="conversation">
              <div className="message user-message">
                <div className="avatar user-avatar">You</div>

                <div className="message-content">
                  <div className="message-label">You</div>
                  <div className="message-text">{message}</div>
                </div>
              </div>

              <div className="message ai-message">
                <div className="avatar ai-avatar">✦</div>

                <div className="message-content">
                  <div className="message-label">Groq AI</div>

                  <div className="message-text">
                    {loading ? (
                      <div className="typing">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      response
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Input Area */}
        <div className="input-section">
          <div className="input-wrapper">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Groq AI..."
              rows="1"
              disabled={loading}
            />

            <button
              className="send-button"
              onClick={sendMessage}
              disabled={!message.trim() || loading}
              aria-label="Send message"
            >
              {loading ? (
                <div className="button-loader"></div>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="input-hint">
            <span>Enter to send</span>
            <span>•</span>
            <span>Shift + Enter for new line</span>
          </div>
        </div>

        {/* Footer */}
        <footer>
          Powered by <strong>Groq</strong> • AI responses may contain
          mistakes
        </footer>
      </main>
    </div>
  );
}

export default App;