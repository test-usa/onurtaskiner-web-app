"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Message {
  id: string
  content: string
  sender: "planner" | "customer"
}

export default function Conversation() {
  const [messages] = useState<Message[]>([
    { id: "1", content: "Hi Alicia, how can I assist you today?", sender: "planner" },
    { id: "2", content: "Hello, I have an issue with my booking.", sender: "customer" },
    { id: "3", content: "The event was canceled. I need a refund.", sender: "customer" },
    { id: "4", content: "I will look into this for you.", sender: "planner" },
    { id: "5", content: "Thank you.", sender: "customer" },
    { id: "6", content: "You're welcome!", sender: "planner" },
    { id: "7", content: "The event was canceled. I need a refund.", sender: "customer" },
    { id: "8", content: "I will look into this for you.", sender: "planner" },
    { id: "9", content: "Thank you.", sender: "customer" },
    { id: "10", content: "You're welcome!", sender: "planner" },
  ])

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-white rounded-lg shadow">
      <div className="border-b p-4">
        <h1 className="text-4xl font-bold text-[#1B1F28]">Conversation</h1>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[600px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn("flex items-start gap-2.5", message.sender === "customer" ? "justify-end" : "justify-start")}
          >
            {message.sender === "planner" && (
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Planner" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            )}

            <div
              className={cn(
                "max-w-xs px-4 py-2 rounded-lg",
                message.sender === "customer"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none",
              )}
            >
              {message.sender === "planner" && <div className="text-xs text-gray-500 mb-1">Planner</div>}
              <p className="text-sm">{message.content}</p>
            </div>

            {message.sender === "customer" && (
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Customer" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
