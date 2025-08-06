import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, X, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatbotProps {
  onClose: () => void;
}

export const Chatbot = ({ onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?", sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // TODO: Aquí se implementará la lógica de la petición HTTP.
    // Por ahora, simulamos una respuesta del bot.
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "Gracias por tu mensaje. Estoy procesando tu solicitud.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    // Auto-scroll to the bottom when new messages are added
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="fixed bottom-4 right-4 w-full max-w-sm h-[600px] flex flex-col shadow-lg z-50">
      <CardHeader className="flex flex-row items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6 text-primary" />
          <CardTitle className="text-lg">Asistente Virtual</CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Minimizar chat</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe un mensaje..."
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};