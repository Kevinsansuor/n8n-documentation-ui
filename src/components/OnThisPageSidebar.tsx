export const OnThisPageSidebar = () => {
  const sections = [
    { id: '#what-is-n8n', title: 'What is n8n?' },
    { id: '#core-concepts', title: 'Core Concepts' },
    { id: '#installation', title: 'Installation' },
  ];

  return (
    <div className="sticky top-24">
      <h3 className="text-sm font-semibold text-foreground mb-4 uppercase">On this page</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={section.id}
              className="text-sm text-muted-foreground hover:text-blue-500 transition-colors block border-l-2 border-border pl-4 hover:border-blue-500"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};