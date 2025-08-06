import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={cn(
        'flex items-start gap-3',
        !isBot && 'justify-end'
      )}
    >
      {isBot && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'rounded-lg px-3 py-2 max-w-xs text-sm',
          isBot
            ? 'bg-muted text-muted-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.text}
      </div>
    </div>
  );
};