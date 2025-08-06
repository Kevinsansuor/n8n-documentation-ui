import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface ChatbotToggleProps {
  onToggle: () => void;
}

export const ChatbotToggle = ({ onToggle }: ChatbotToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
    >
      <MessageSquare className="h-7 w-7" />
      <span className="sr-only">Abrir chat</span>
    </Button>
  );
};