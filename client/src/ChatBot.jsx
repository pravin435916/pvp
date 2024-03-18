import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = async () => {
    if (!inputText.trim()) return;

    const newMessage = {
      text: inputText,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    try {
      const response = await axios.post('http://localhost:5000/chatbot', {
        message: inputText
      });

      const botResponse = {
        text: response.data,
        sender: 'bot'
      };

      setMessages([...messages, botResponse]);
    } catch (error) {
      console.error('Error sending message to the server:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-[70vh]">
      <h1 className="text-3xl font-bold p-4 bg-gray-200">Chatbot</h1>
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-green-200'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-200">
        <input
          className="w-full p-2 border rounded-md outline-none"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleMessageSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
