import { Triangle, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface DocsHeaderProps {
  onSearchClick: () => void;
}

export const DocsHeader = ({ onSearchClick }: DocsHeaderProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center space-x-2">
            <Triangle className="w-6 h-6 fill-primary" />
            <span className="text-xl font-bold">n8n Docs</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Documentación</a>
            <a href="https://n8n.io/faq/api-usage/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">API</a>
            <a href="https://community.n8n.io/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Comunidad</a>
            <a href="https://n8n.io/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Blog</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="h-9 w-full flex items-center justify-between rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:w-64 px-3"
              onClick={onSearchClick}
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="truncate">Buscar en la documentación...</span>
              </div>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2" onClick={onSearchClick}>
              <Search className="h-6 w-6" />
              <span className="sr-only">Buscar</span>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 text-lg mt-8">
                  <Link to="/" onClick={() => setIsSheetOpen(false)} className="text-muted-foreground hover:text-foreground">Documentación</Link>
                  <a href="https://n8n.io/faq/api-usage/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">API</a>
                  <a href="https://community.n8n.io/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Comunidad</a>
                  <a href="https://n8n.io/blog/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Blog</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};