import React from 'react';

interface PortfolioHeaderProps {
  name: string;
  title: string;
  description: string;
  ProfileIcon: React.ReactNode;
  badges?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PortfolioHeader({ name, title, description, ProfileIcon, badges, children }: PortfolioHeaderProps) {
  return (
    <header className="w-full flex flex-col items-center py-10 px-4 bg-zinc-900/60">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-violet-300 dark:border-violet-900 mb-4 bg-gray-200/50 dark:bg-zinc-800/60 flex items-center justify-center float-anim">
        {ProfileIcon}
      </div>
      <h1 className="text-3xl font-extrabold mt-1 mb-1 drop-shadow-lg dark:text-white">{name}</h1>
      <div className="text-lg text-violet-600 dark:text-violet-300 font-medium mb-2">{title}</div>
      <div className="mb-3 text-center max-w-2xl text-base text-gray-700 dark:text-gray-300 slide-in-anim">{description}</div>
      <div className="flex flex-wrap gap-4 my-4 justify-center">{badges}</div>
      {children}
    </header>
  );
}
