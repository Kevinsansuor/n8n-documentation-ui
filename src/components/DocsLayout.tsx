import { DocsHeader } from '@/components/DocsHeader';
import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <div className="bg-[#0c1017] min-h-screen text-white">
      <DocsHeader />
      <main>{children}</main>
    </div>
  );
};