import React, { useState, useEffect } from 'react';

interface Heading {
  id: string;
  title: string;
  level: number;
}

interface OnThisPageSidebarProps {
  contentRef: React.RefObject<HTMLElement>;
}

export const OnThisPageSidebar = ({ contentRef }: OnThisPageSidebarProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = Array.from(
      contentRef.current.querySelectorAll('h2, h3')
    ) as HTMLElement[];

    const newHeadings = headingElements
      .filter(el => el.id)
      .map(el => ({
        id: el.id,
        title: el.innerText,
        level: Number(el.tagName.substring(1)),
      }));
    
    setHeadings(newHeadings);
  }, [contentRef]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      let currentId = '';
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top < 120) {
          currentId = heading.id;
          break;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <div className="sticky top-24">
      <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">On this page</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block border-l-2 text-sm transition-colors ${
                activeId === heading.id
                  ? 'border-blue-500 text-blue-500 font-semibold'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
              } ${heading.level === 3 ? 'pl-8' : 'pl-4'}`}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};