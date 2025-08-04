import { DocsLayout } from '@/components/DocsLayout';
import { CategoryCard } from '@/components/CategoryCard';
import { Input } from '@/components/ui/input';
import { Search, FileText, ListTree, Terminal, Puzzle, Workflow, Settings, Database, Cloud, Mail, Clock, Table, Code, Shield, KeyRound, BookKey } from 'lucide-react';

const gettingStarted = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Introduction',
    description: 'Learn about n8n and its capabilities',
  },
  {
    icon: <ListTree className="w-6 h-6" />,
    title: 'Core Concepts',
    description: 'Understand the fundamental principles of n8n',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Installation',
    description: 'Set up n8n on your system',
  },
];

const coreConcepts = [
    { icon: <Puzzle className="w-6 h-6" />, title: 'Nodes', description: 'Explore the building blocks of n8n' },
    { icon: <Workflow className="w-6 h-6" />, title: 'Workflows', description: 'Create and manage automated processes' },
    { icon: <Settings className="w-6 h-6" />, title: 'Settings', description: 'Configure n8n to suit your needs' },
];

const nodes = [
    { icon: <Database className="w-6 h-6" />, title: 'Database Nodes', description: 'Connect to various databases' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Service Nodes', description: 'Integrate with cloud platforms' },
    { icon: <Mail className="w-6 h-6" />, title: 'Communication Nodes', description: 'Send emails and messages' },
];

const workflows = [
    { icon: <Clock className="w-6 h-6" />, title: 'Triggers', description: 'Automate workflows based on events' },
    { icon: <Table className="w-6 h-6" />, title: 'Data Manipulation', description: 'Transform and process data' },
    { icon: <Code className="w-6 h-6" />, title: 'Custom Functions', description: 'Extend n8n with custom code' },
];

const advanced = [
    { icon: <Shield className="w-6 h-6" />, title: 'Security', description: 'Ensure the security of your n8n instance' },
    { icon: <KeyRound className="w-6 h-6" />, title: 'Authentication', description: 'Manage user access and permissions' },
    { icon: <BookKey className="w-6 h-6" />, title: 'API', description: 'Interact with n8n programmatically' },
];


const Index = () => {
  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to n8n Docs</h1>
          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Search docs"
              className="bg-[#1f2937] border-gray-700 h-14 pl-12 text-lg w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gettingStarted.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreConcepts.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Nodes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nodes.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Workflows</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflows.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Advanced</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advanced.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Index;