import { DocsHeader } from '@/components/DocsHeader';
import { SearchCommand } from '@/components/SearchCommand';
import React, { useState, useEffect } from 'react';
import { SidebarNav } from './SidebarNav';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearch((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <DocsHeader onSearchClick={() => setOpenSearch(true)} />
      <SearchCommand open={openSearch} onOpenChange={setOpenSearch} />
      <div className="container mx-auto flex items-start">
        <aside className="hidden md:block sticky top-[65px] h-[calc(100vh-65px)] w-64 py-8 pr-6 border-r overflow-y-auto">
          <SidebarNav />
        </aside>
        <main className="flex-1 min-w-0 py-8 md:pl-8">
          {children}
        </main>
      </div>
    </div>
  );
};