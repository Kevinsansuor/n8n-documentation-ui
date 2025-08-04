import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'what-is-n8n', title: 'What is n8n?' },
  { id: 'core-concepts', title: 'Core Concepts' },
  { id: 'installation', title: 'Installation' },
];

export const OnThisPageSidebar = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      // Itera hacia atrás para encontrar la última sección que se ha desplazado
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        // 120px de desplazamiento para el encabezado fijo
        if (element && element.getBoundingClientRect().top < 120) {
          currentId = section.id;
          break;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Llama al manejador en el montaje para establecer el estado inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-24">
      <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">On this page</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block border-l-2 pl-4 text-sm transition-colors ${
                activeId === section.id
                  ? 'border-blue-500 text-blue-500 font-semibold'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};