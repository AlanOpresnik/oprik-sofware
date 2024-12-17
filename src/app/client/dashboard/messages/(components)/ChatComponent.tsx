'use client'
import React, { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Message } from '@/interface/orderIterface'
import { formatMessageDate } from '@/lib/format/formatMessageDate'
import { useRouter } from 'next/navigation'




interface ChatComponentProps {
    messages: Message[]
}



const ChatComponent: React.FC<ChatComponentProps> = ({ messages }) => {
    const router = useRouter()
  
        setTimeout(() => {
            router.refresh()
        }, 5000);
   
    return (
        <div className="w-full  bg-white/70 shadow-lg rounded-lg">
            <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Mensajes del desarrollador</h2>
            </div>
            { messages.length <= 0  ? (
                <div className="flex items-center justify-center h-full">
                    <p className='py-14 text-2xl font-semibold'>No hay mensajes disponibles</p>
                </div>
            ): (
                <ScrollArea className="h-[600px] p-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`flex ${message.recived ? 'justify-start' : 'justify-end'
                            } mb-4`}
                    >
                        <div
                            className={`flex ${message.recived ? 'flex-row' : 'flex-row-reverse'
                                } items-start max-w-[70%]`}
                        >
                            <Avatar className="w-8 h-8 mr-2">
                                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.dev}`} />
                                <AvatarFallback>{message.dev[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div
                                    className={`rounded-lg p-3 ${message.recived
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'bg-blue-500 text-white'
                                        }`}
                                >
                                    <p className="text-sm font-medium mb-1">{message.dev}</p>
                                    <p className="text-sm">{message.message}</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {formatMessageDate(message.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </ScrollArea>
            )}

        </div>
    )
}

export default ChatComponent

