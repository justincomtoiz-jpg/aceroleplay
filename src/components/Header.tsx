import React from 'react';
import { NavLink } from 'react-router-dom';
import { ServerIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const discordLink = 'https://discord.gg/85q45wnm29';

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <ServerIcon className="w-10 h-10 text-cyan-400" />
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ace Roleplay
          </h1>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`
            }
          >
            Rules
          </NavLink>
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold flex items-center gap-3 transition transform hover:scale-105"
          >
            <span className="text-2xl">🎮</span>
            Join Discord
          </a>
        </nav>

        {/* Mobile menu placeholder – can expand later */}
      </div>
    </header>
  );
};

export default Header;
