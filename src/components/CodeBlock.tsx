import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (preRef.current) {
      const codeText = preRef.current.querySelector('code')?.innerText || '';
      navigator.clipboard.writeText(codeText).then(() => {
        setIsCopied(true);
        showSuccess("Copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
      }, (err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div className={cn("relative group not-prose", className)}>
      <pre ref={preRef} className="bg-muted border rounded-md p-4 text-sm overflow-x-auto">
        {children}
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:bg-background/50 hover:text-foreground"
        onClick={handleCopy}
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
};