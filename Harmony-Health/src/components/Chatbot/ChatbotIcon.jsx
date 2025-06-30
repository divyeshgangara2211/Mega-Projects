import React from 'react';
import './Chatbot.css';

const ChatbotIcon = ({ onClick, isOpen }) => {
  return (
    <div className={`chatbot-icon ${isOpen ? 'active' : ''}`} onClick={onClick}>
      {isOpen ? (
        // Close icon when chatbot is open
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      ) : (
        // Chat icon when chatbot is closed
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-7.152.52c-2.43 0-4.817-.178-7.152-.52C3.37 16.447 2 14.714 2 12.77V6.74c0-1.946 1.37-3.678 3.348-3.97zM17.34 15.936a4.22 4.22 0 01-1.93 1.274A46.564 46.564 0 0112 17.75a46.564 46.564 0 01-3.41-.54 4.22 4.22 0 01-1.93-1.274c.82-.92 1.69-1.823 2.63-2.709.55-.53 1.5-.53 2.05 0l.71.68.71-.68c.55-.53 1.5-.53 2.05 0 .94.886 1.81 1.789 2.63 2.709z" clipRule="evenodd" />
        </svg>
      )}
      {!isOpen && <span className="chatbot-badge">1</span>}
    </div>
  );
};

export default ChatbotIcon; 