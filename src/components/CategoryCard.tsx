import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CategoryCard = ({ icon, title, description }: CategoryCardProps) => {
  return (
    <a href="#" className="block p-6 bg-[#171e29] border border-gray-800 rounded-lg hover:border-blue-500 transition-colors duration-200 h-full">
      <div className="text-gray-400 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-white mb-2 text-lg">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </a>
  );
};