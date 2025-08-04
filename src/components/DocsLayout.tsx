import { DocsHeader } from '@/components/DocsHeader';
import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <DocsHeader />
      <main>{children}</main>
    </div>
  );
};