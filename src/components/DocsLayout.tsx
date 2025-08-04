import { DocsHeader } from '@/components/DocsHeader';
import { SearchCommand } from '@/components/SearchCommand';
import React, { useState, useEffect } from 'react';

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
      <main>{children}</main>
    </div>
  );
};