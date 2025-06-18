import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FaPaperPlane, FaMicrophone, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import all icons needed
import profile from './assets/profile.png'; // Ensure this path is correct
import './index.css'; // Global styles including Tailwind directives and fonts
// filepath: src/App.js
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import GeminiBot from './components/GeminiBot';
// ...existing code...
// --- App.js ---
// Main application component, orchestrates the layout and state.
function App() {
  // State to store chat messages for display in the sidebar.
  const [chatHistory, setChatHistory] = useState([]);

  return (
    // Main container with flex layout, filling the screen height.
    <div className="flex h-screen bg-white text-black font-bebas">
      {/* Sidebar component to display chat history */}
      <Sidebar messages={chatHistory} />
      {/* Main content area, takes remaining space, allows scrolling */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header component */}
        <Header />
        {/* GeminiBot component for chat interaction */}
        <GeminiBot setChatHistory={setChatHistory} />
      </div>
    </div>
  );
  
}
export default App;