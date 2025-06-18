import Sidebar from './components/Sidebar';
import Header from './components/Header';
import GeminiBot from './components/GeminiBot';
// filepath: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ...existing code...
// Assumes a div with id="root" exists in public/index.html
const container = document.getElementById('root');
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