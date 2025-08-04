import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  {
    title: 'Primeros Pasos',
    items: [
      { title: 'Guía de la Documentación', href: '/article' },
      { title: 'Opciones de Hospedaje', href: '/hosting-options' },
    ],
  },
  {
    title: 'Conceptos Clave',
    items: [
      { title: 'Resumen de Conceptos', href: '/core-concepts' },
      { title: 'Nodos', href: '/nodes' },
      { title: 'Workflows', href: '/workflows' },
    ],
  },
  {
    title: 'Avanzado',
    items: [
      { title: 'Seguridad y APIs', href: '/advanced' },
    ],
  },
];

export const SidebarNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full">
      {navItems.map((section) => (
        <div key={section.title} className="mb-6">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'block text-sm py-1.5 px-3 rounded-md transition-colors',
                    location.pathname === item.href
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};