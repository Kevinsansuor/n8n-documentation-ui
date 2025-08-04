import { CategoryCard } from '@/components/CategoryCard';
import { FileText, ListTree, Terminal, Puzzle, Workflow, Settings, Database, Cloud, Mail, Clock, Table, Code, Shield, KeyRound, BookKey } from 'lucide-react';
import React from 'react';

const allCategories = [
  {
    title: 'Primeros Pasos',
    items: [
      {
        icon: <FileText className="w-6 h-6" />,
        title: 'Guía de la Documentación',
        description: 'Un resumen completo de los recursos disponibles para n8n.',
        link: '/article',
      },
      {
        icon: <ListTree className="w-6 h-6" />,
        title: 'Conceptos Clave',
        description: 'Comprende los principios fundamentales de n8n.',
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
    title: 'Conceptos Clave',
    items: [
        { icon: <Puzzle className="w-6 h-6" />, title: 'Nodos', description: 'Explora los bloques de construcción de n8n.', link: '/nodes' },
        { icon: <Workflow className="w-6 h-6" />, title: 'Workflows', description: 'Crea y gestiona procesos automatizados.', link: '/workflows' },
        { icon: <Settings className="w-6 h-6" />, title: 'Configuración', description: 'Configura n8n para que se adapte a tus necesidades.', link: '/article' },
    ],
  },
  {
    title: 'Nodos',
    items: [
        { icon: <Database className="w-6 h-6" />, title: 'Nodos de Base de Datos', description: 'Conéctate a varias bases de datos.', link: '/nodes' },
        { icon: <Cloud className="w-6 h-6" />, title: 'Nodos de Servicios en la Nube', description: 'Intégrate con plataformas en la nube.', link: '/nodes' },
        { icon: <Mail className="w-6 h-6" />, title: 'Nodos de Comunicación', description: 'Envía correos electrónicos y mensajes.', link: '/nodes' },
    ],
  },
  {
    title: 'Workflows',
    items: [
        { icon: <Clock className="w-6 h-6" />, title: 'Disparadores', description: 'Automatiza flujos de trabajo basados en eventos.', link: '/workflows' },
        { icon: <Table className="w-6 h-6" />, title: 'Manipulación de Datos', description: 'Transforma y procesa datos.', link: '/workflows' },
        { icon: <Code className="w-6 h-6" />, title: 'Funciones Personalizadas', description: 'Extiende n8n con código personalizado.', link: '/workflows' },
    ],
  },
  {
    title: 'Avanzado',
    items: [
        { icon: <Shield className="w-6 h-6" />, title: 'Seguridad', description: 'Asegura la seguridad de tu instancia de n8n.', link: '/advanced' },
        { icon: <KeyRound className="w-6 h-6" />, title: 'Autenticación', description: 'Gestiona el acceso y los permisos de los usuarios.', link: '/advanced' },
        { icon: <BookKey className="w-6 h-6" />, title: 'API', description: 'Interactúa con n8n programáticamente.', link: '/advanced' },
    ],
  },
];


export const IndexPageContent = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a la Documentación de n8n</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Encuentra las guías, tutoriales y referencias que necesitas. Usa la barra de búsqueda en la cabecera para empezar.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {allCategories.map(category => (
          <section key={category.title}>
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map(item => <CategoryCard key={item.title} {...item} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};