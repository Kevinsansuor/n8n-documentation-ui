import { Triangle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './ThemeToggle';

export const DocsHeader = () => {
  return (
    <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center space-x-2">
            <Triangle className="w-6 h-6 fill-primary" />
            <span className="text-xl font-bold">n8n Docs</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">API</a>
            <a href="#" className="hover:text-foreground transition-colors">Community</a>
            <a href="#" className="hover:text-foreground transition-colors">Blog</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="search"
              placeholder="Search"
              className="bg-background border-border pl-9 w-48 rounded-md"
            />
          </div>
          <ThemeToggle />
          <Button variant="outline">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};