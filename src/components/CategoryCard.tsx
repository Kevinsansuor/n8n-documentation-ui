import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export const CategoryCard = ({ icon, title, description, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block p-6 bg-card border rounded-lg hover:border-blue-500 transition-colors duration-200 h-full">
      <div className="text-muted-foreground mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-card-foreground mb-2 text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
};