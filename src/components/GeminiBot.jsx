import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
function GeminiBot({ setChatHistory }) {
  const [input, setInput] = useState(''); // State for the user's input text
  const [response, setResponse] = useState(''); // State for the bot's response
  const [recordMessage, setRecordMessage] = useState(''); // State for the record button specific message

  // Handles sending the user's message to the Gemini API.
  const handleSend = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    // Add user input to chat history immediately
    setChatHistory(prev => [...prev, { type: 'user', text: input }]);
    setResponse('Thinking...'); // Show thinking indicator
    setInput(''); // Clear input field
    setRecordMessage(''); // Clear any record button message

    try {
      // Prepare chat history for the API payload
      // Only send the current user's input for this interaction unless full conversation history is required.
      const chatHistoryForApi = [{ role: "user", parts: [{ text: input }] }];

      const payload = { contents: chatHistoryForApi };
      const apiKey = ""; // API key will be injected by the Canvas runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json(); // Parse the JSON response

      console.log("📤 Prompt:", input);
      console.log("🔍 Gemini raw response:", data);

      let botReply = '';
      try {
        // Extract the bot's reply from the Gemini response structure
        if (data?.candidates?.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
          botReply = data.candidates[0].content.parts[0].text;
        } else if (data.error?.message) {
          // Handle API errors
          botReply = `Gemini API error: ${data.error.message}`;
        } else {
          // Handle unexpected response formats
          botReply = 'Unexpected Gemini response format or no content.';
        }
      } catch (e) {
        console.error("❌ Failed to parse Gemini response:", e);
        botReply = 'Parsing error in Gemini response.';
      }

      setResponse(botReply); // Update the displayed response
      setChatHistory(prev => [...prev, { type: 'bot', text: botReply }]); // Add bot response to chat history

    } catch (error) {
      console.error('❌ Error connecting to Gemini API:', error);
      setResponse('Error connecting to Gemini API.');
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Error connecting to Gemini API.' }]);
    }
  };

  // Handles the click event for the record button.
  const handleRecord = () => {
    // Set the specific message to be displayed.
    setRecordMessage("not yet active, need to add billing details, smh. kindly type pleazzz");
    setResponse(''); // Clear any previous bot response
    setInput(''); // Clear input field as a new action is performed
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-white overflow-y-auto">
      {/* Area where the AI response or record message is displayed */}
      <div className="flex-grow whitespace-pre-line text-black text-2xl font-bebas mb-4 p-4 rounded-lg bg-gray-100 shadow-inner">
        {/* Display recordMessage if set, otherwise AI response, otherwise default prompt */}
        {recordMessage || response || 'Ask something...'}
      </div>

      {/* Input field and action buttons */}
      <div className="flex items-center gap-3">
        {/* Text input field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { // Allows sending message by pressing Enter key
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          placeholder="Type your question..."
          // Tailwind CSS classes for styling the input field
          className="flex-1 p-4 rounded-lg bg-black text-white border border-black text-xl font-bebas placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        
        {/* Record button with specific message functionality */}
        <button
          onClick={handleRecord}
          className="p-4 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200 shadow-md transform hover:scale-105"
          aria-label="Record Voice Input"
        >
          <FaMicrophone className="text-white text-2xl" />
        </button>

        {/* Send button to trigger AI interaction */}
        <button
          onClick={handleSend}
          className="p-4 rounded-full bg-black hover:bg-gray-800 transition-colors duration-200 shadow-md transform hover:scale-105"
          aria-label="Send Message"
        >
          <FaPaperPlane className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
}
// ...existing code...
export default GeminiBot;