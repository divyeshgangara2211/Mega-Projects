import React, { useEffect, useRef } from 'react';
import './Chatbot.css';

const ChatbotWindow = ({ isOpen, onClose, messages, inputValue, setInputValue, handleSendMessage, handleKeyPress, handleFileUpload }) => {
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Focus input field when chat window opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
      <div className="chatbot-header">
        <h3>Health & Wellness Assistant</h3>
        <div className="chatbot-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" width="24" height="24">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="chatbot-messages" ref={messagesContainerRef}>
        {messages.length === 0 ? (
          <div className="chatbot-welcome">
            <div className="welcome-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h4>Welcome to your Health & Wellness Assistant!</h4>
            <p>Ask me anything about yoga, meditation, nutrition, exercise, or any health-related topic.</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
              {message.text}
              <div className="message-time">{message.time}</div>
            </div>
          ))
        )}
      </div>
      
      <div className="chatbot-attachments">
        <label className="attachment-button" htmlFor="file-upload">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clipRule="evenodd" />
          </svg>
          Attach
        </label>
        <label className="attachment-button" htmlFor="image-upload">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
          </svg>
          Image
        </label>
        <input 
          id="file-upload" 
          type="file" 
          accept=".pdf,.doc,.docx,.txt,.csv"
          onChange={handleFileUpload} 
          style={{ display: 'none' }} 
        />
        <input 
          id="image-upload" 
          type="file" 
          accept="image/*"
          onChange={handleFileUpload} 
          style={{ display: 'none' }} 
        />
      </div>
      
      <div className="chatbot-input">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask about health, yoga, meditation..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSendMessage} disabled={!inputValue.trim()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatbotWindow; 