import { CategoryCard } from '@/components/CategoryCard';
import { FileText, ListTree, Terminal, Puzzle, Workflow, Settings, Database, Cloud, Mail, Clock, Table, Code, Shield, KeyRound, BookKey } from 'lucide-react';
import React from 'react';
import { useSearch } from '@/context/SearchContext';

const allCategories = [
  {
    title: 'Getting Started',
    items: [
      {
        icon: <FileText className="w-6 h-6" />,
        title: 'Guía de la Documentación',
        description: 'Un resumen completo de los recursos disponibles para n8n.',
        link: '/article',
      },
      {
        icon: <ListTree className="w-6 h-6" />,
        title: 'Core Concepts',
        description: 'Understand the fundamental principles of n8n',
        link: '/core-concepts',
      },
      {
        icon: <Terminal className="w-6 h-6" />,
        title: 'Opciones de Hospedaje',
        description: 'Descubre las diferencias entre Cloud, Autoalojado y más.',
        link: '/hosting-options',
      },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
        { icon: <Puzzle className="w-6 h-6" />, title: 'Nodes', description: 'Explore the building blocks of n8n', link: '/nodes' },
        { icon: <Workflow className="w-6 h-6" />, title: 'Workflows', description: 'Create and manage automated processes', link: '/core-concepts' },
        { icon: <Settings className="w-6 h-6" />, title: 'Settings', description: 'Configure n8n to suit your needs', link: '/article' },
    ],
  },
  {
    title: 'Nodes',
    items: [
        { icon: <Database className="w-6 h-6" />, title: 'Database Nodes', description: 'Connect to various databases', link: '/nodes' },
        { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Service Nodes', description: 'Integrate with cloud platforms', link: '/nodes' },
        { icon: <Mail className="w-6 h-6" />, title: 'Communication Nodes', description: 'Send emails and messages', link: '/nodes' },
    ],
  },
  {
    title: 'Workflows',
    items: [
        { icon: <Clock className="w-6 h-6" />, title: 'Triggers', description: 'Automate workflows based on events', link: '/core-concepts' },
        { icon: <Table className="w-6 h-6" />, title: 'Data Manipulation', description: 'Transform and process data', link: '/core-concepts' },
        { icon: <Code className="w-6 h-6" />, title: 'Custom Functions', description: 'Extend n8n with custom code', link: '/core-concepts' },
    ],
  },
  {
    title: 'Advanced',
    items: [
        { icon: <Shield className="w-6 h-6" />, title: 'Security', description: 'Ensure the security of your n8n instance', link: '/article' },
        { icon: <KeyRound className="w-6 h-6" />, title: 'Authentication', description: 'Manage user access and permissions', link: '/article' },
        { icon: <BookKey className="w-6 h-6" />, title: 'API', description: 'Interact with n8n programmatically', link: '/article' },
    ],
  },
];


export const IndexPageContent = () => {
  const { searchTerm } = useSearch();

  const filteredCategories = allCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to n8n Docs</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Find the guides, tutorials, and references you need. Use the search bar in the header to get started.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <section key={category.title}>
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map(item => <CategoryCard key={item.title} {...item} />)}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};