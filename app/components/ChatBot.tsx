"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">QuickReach AI Chat</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p className="text-gray-700 dark:text-gray-300">Hello! How can I assist you today?</p>
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  )
}

export default ChatBot

