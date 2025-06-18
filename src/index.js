import App from './App';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FaPaperPlane, FaMicrophone, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import all icons needed
import profile from './assets/profile.png'; // Ensure this path is correct
import './index.css'; // Global styles including Tailwind directives and fonts
const container = document.getElementById('root'); // Assumes a div with id="root" exists in public/index.html
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  );
} else {
  // Log an error if the root element is not found, which prevents the app from rendering.
  console.error('Root element with ID "root" not found in the document. React app cannot mount.');
}
// ...existing code...
export default App;