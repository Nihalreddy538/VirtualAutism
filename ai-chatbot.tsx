"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"

// AI Chatbot component for answering questions about virtual autism
export default function AIChatbot() {
  // Initial message from the chatbot
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Sam, Your personalised chatbot.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // For debugging
  const apiKey = "sk-0374547b60f6427da4c1322b94dc0603" // will replace with env var later

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call DeepSeek API
      console.log("Sending message to API:", input)

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      console.log("Received response:", data)

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ])
    } catch (error) {
      console.error("Error:", error)
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't process your request. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="chatbot" className="py-10 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">AI Symptom Checker</h2>

        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-500 text-white p-3 text-center font-bold">Virtual Autism Helper</div>

          <div className="h-64 overflow-y-auto p-3 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[85%] ${
                  message.role === "user" ? "bg-blue-100 dark:bg-blue-800 ml-auto" : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg max-w-[85%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about virtual autism..."
              className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-r-md px-3 py-2 hover:bg-blue-600 disabled:bg-blue-300"
              disabled={isLoading}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>

        <div className="max-w-md mx-auto mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          Try asking: "What are signs of virtual autism?" or "How much screen time is safe for a 3-year-old?"
        </div>
      </div>
    </section>
  )
}

