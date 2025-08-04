import { Triangle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const DocsHeader = () => {
  return (
    <header className="bg-[#0c1017] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2">
            <Triangle className="w-6 h-6 fill-white" />
            <span className="text-xl font-bold">n8n Docs</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search"
              className="bg-[#171e29] border-gray-700 pl-9 w-48 rounded-md"
            />
          </div>
          <Button variant="outline" className="bg-transparent border-gray-700 hover:bg-[#171e29] hover:text-white rounded-md">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};