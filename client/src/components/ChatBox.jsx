import React, { useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [chatRecipient, setChatRecipient] = useState("John Doe");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  const handleAttachFile = () => {
    // Handle attaching a file
    console.log("Attach file");
  };

  const handleEmojiClick = () => {
    // Handle emoji button click
    console.log("Open emoji picker");
  };

  return (
    <div className="bg-white rounded-lg  p-2 h-full flex flex-col">
      {/* Chat recipient */}
      <div className="p-2 border-b mb-4">{chatRecipient}</div>

      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 bg-yellow-100 text-gray-800`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message input and actions */}
      <div className="relative flex items-center space-x-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handleAttachFile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>

        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={handleEmojiClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>

        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-grow border rounded-lg p-2 outline-none bg-yellow-100 text-gray-800"
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
