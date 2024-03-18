// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import ChatBot from './ChatBot';
import Navbar from './components/Navbar';
import ChatBox from './components/ChatBox';
function App() {
  return (
    <Router>
      <div className="font-sans w-full h-full">
        <Navbar/>
        <div className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </div>
        <ChatBox/>
      </div>
    </Router>
  );
}

export default App;
