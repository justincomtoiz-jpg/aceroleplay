import React from 'react';

const Footer: React.FC = () => {
  const discordLink = 'https://discord.gg/85q45wnm29';

  return (
    <footer className="bg-slate-950/90 border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 mb-6">
          Ace Roleplay © 2025 • Serious FiveM Roleplay Community
        </p>
        <p className="text-gray-500 mb-6">
          Questions? Reach out via Discord
        </p>
        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition transform hover:scale-105"
        >
          Join our Discord
        </a>
        <p className="text-gray-600 text-sm mt-8">
          Cloned for shits and giggles • Original site appears partially broken as of Dec 18, 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
