export const OnThisPageSidebar = () => {
  const sections = [
    { id: '#what-is-n8n', title: 'What is n8n?' },
    { id: '#core-concepts', title: 'Core Concepts' },
    { id: '#installation', title: 'Installation' },
  ];

  return (
    <div className="sticky top-24">
      <h3 className="text-sm font-semibold text-white mb-4 uppercase">On this page</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={section.id}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors block border-l-2 border-gray-700 pl-4 hover:border-blue-400"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};