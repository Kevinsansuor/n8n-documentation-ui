import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, X, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: number | string;
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
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/TEST-MANUAL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }

      const responseData = await response.json();
      let botText = "No he podido procesar tu respuesta.";

      if (responseData && typeof responseData === 'object') {
        if (responseData.output) {
          botText = responseData.output;
        } else if (responseData.reply) {
          botText = responseData.reply;
        } else if (responseData.message) {
          botText = responseData.message;
        } else if (responseData.text) {
          botText = responseData.text;
        }
      } else if (typeof responseData === 'string') {
        botText = responseData;
      }

      const botResponse: Message = {
        id: Date.now() + 1,
        text: botText,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error('Error al contactar al chatbot:', error);
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "Lo siento, ha ocurrido un error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages, isLoading]);

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
      <CardContent className="flex-1 p-4 min-h-0">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <ChatMessage message={{ id: 'typing-indicator', text: 'Escribiendo...', sender: 'bot' }} />
            )}
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
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};