

import React, { useState } from 'react';
import { runFlow } from '../../services/apiService';
import './ChatComponent.css'; // Import the CSS file for styling

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const result = await runFlow(message);
      const responseText = result.outputs[0].outputs[0].results.message.text;
      setChatHistory([...chatHistory, { sender: 'user', text: message }, { sender: 'bot', text: responseText }]);
      setMessage('');
      setResponse(responseText);
    } catch (error) {
      setResponse('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.sender}`}>
              {chat.text}
            </div>
          ))}
          {isLoading && <div className="chat-message bot">Flow is running...</div>}
        </div>
        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your message"
            className="chat-input"
          />
          <button type="submit" className="chat-submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatComponent;