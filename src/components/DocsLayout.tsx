import { DocsHeader } from '@/components/DocsHeader';
import { SearchProvider } from '@/context/SearchContext';
import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <SearchProvider>
      <div className="bg-background min-h-screen text-foreground">
        <DocsHeader />
        <main>{children}</main>
      </div>
    </SearchProvider>
  );
};