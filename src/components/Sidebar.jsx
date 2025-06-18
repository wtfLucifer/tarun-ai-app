function Sidebar({ messages = [] }) {
  return (
    // Sidebar container with fixed width, border, and scrollability.
    <div className="w-64 bg-white border-r border-black text-black p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 font-bangers text-red-600">Chat History</h2> {/* Title for chat history */}
      {/* Conditional rendering based on message presence */}
      {messages.length === 0 ? (
        <p className="text-gray-400">No chats yet.</p>
      ) : (
        // Map through messages to display them
        messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 rounded bg-black text-white hover:bg-gray-900 cursor-pointer">
            {/* Display first 40 characters of the message */}
            {msg.text.slice(0, 40)}...
          </div>
        ))
      )}
    </div>
  );
}
// ...existing code...
export default Sidebar;