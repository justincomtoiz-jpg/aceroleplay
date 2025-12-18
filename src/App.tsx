import React, { useState, useEffect } from 'react';
import {
  ServerIcon,
  UsersIcon,
  LinkIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface ServerInfo {
  loading: boolean;
  online: boolean;
  hostname: string;
  players: number;
  maxPlayers: number;
  lastChecked: string;
}

const App: React.FC = () => {
  const cfxCode = 'pkbdm8';
  const cfxLink = `cfx.re/join/${cfxCode}`;
  const discordLink = 'https://discord.gg/85q45wnm29';

  const [serverInfo, setServerInfo] = useState<ServerInfo>({
    loading: true,
    online: false,
    hostname: 'Ace Roleplay',
    players: 0,
    maxPlayers: 64,
    lastChecked: '',
  });

  const [connectEndpoint, setConnectEndpoint] = useState<string>('45.92.36.118:30125');

  const fetchServerStatus = async () => {
    setServerInfo(prev => ({ ...prev, loading: true }));

    try {
      const response = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${cfxCode}`);
      if (!response.ok) throw new Error('API error');

      const json = await response.json();

      if (json.Data) {
        const data = json.Data;
        const endpoint = json.connectEndPoints?.[0] || connectEndpoint;

        setConnectEndpoint(endpoint);
        setServerInfo({
          loading: false,
          online: true,
          hostname: data.hostname || 'Ace Roleplay',
          players: data.clients || 0,
          maxPlayers: data.sv_maxclients || 64,
          lastChecked: new Date().toLocaleString(),
        });
      } else {
        throw new Error('No data');
      }
    } catch (error) {
      setServerInfo({
        loading: false,
        online: false,
        hostname: 'Ace Roleplay',
        players: 0,
        maxPlayers: 64,
        lastChecked: new Date().toLocaleString(),
      });
    }
  };

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = () => {
    window.location.href = `fivem://connect/${connectEndpoint}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cfxLink);
    alert('CFX link copied to clipboard!');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 py-16 max-w-5xl">
        <header className="text-center mb-16">
          <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            Ace Roleplay
          </h1>
          <p className="mt-6 text-2xl text-gray-300">
            Serious RP • Active Staff • Custom Scripts • Thriving Community
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <button
            onClick={handleCopy}
            className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold text-lg flex items-center gap-4 transition transform hover:scale-105 shadow-lg"
          >
            <LinkIcon className="w-8 h-8" />
            Copy Server Link
          </button>
          <button
            onClick={() => window.open(discordLink, '_blank')}
            className="px-10 py-5 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold text-lg flex items-center gap-4 transition transform hover:scale-105 shadow-lg"
          >
            <span className="text-3xl">🎮</span>
            Join Discord
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold flex items-center gap-4">
              <ServerIcon className="w-12 h-12 text-cyan-400" />
              Server Status
            </h2>
            <button
              onClick={fetchServerStatus}
              className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              <ArrowPathIcon className={`w-8 h-8 ${serverInfo.loading ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {serverInfo.loading ? (
            <p className="text-center text-xl py-12">Fetching live status...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full ${serverInfo.online ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
                <span className="font-semibold">{serverInfo.online ? 'Online' : 'Offline'}</span>
              </div>
              <div>
                Server: <span className="font-bold text-cyan-300">{serverInfo.hostname}</span>
              </div>
              <div className="flex items-center gap-4">
                <UsersIcon className="w-8 h-8 text-purple-400" />
                Players: <span className="font-extrabold text-3xl">{serverInfo.players}/{serverInfo.maxPlayers}</span>
              </div>
              <div>
                Last checked: <span className="text-gray-400">{serverInfo.lastChecked}</span>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mb-16">
          <button
            onClick={handleConnect}
            className="px-16 py-8 text-3xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-3xl shadow-2xl transform hover:scale-110 transition duration-300"
          >
            Connect via FiveM
          </button>
          <p className="mt-8 text-gray-400 text-lg">
            Or search <strong>Ace Roleplay</strong> in the FiveM browser
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <ShieldCheckIcon className="w-10 h-10 text-amber-400" />
              How to Join
            </h2>
            <ol className="space-y-5 text-left text-gray-300 text-lg">
              <li>1. Install FiveM (requires legit GTA V)</li>
              <li>2. Search "Ace Roleplay" in server list</li>
              <li>3. Use Connect button for direct join</li>
              <li>4. Join Discord for verification</li>
            </ol>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10">
            <h2 className="text-3xl font-bold mb-8">Quick Rules</h2>
            <ul className="space-y-4 text-left text-gray-300 text-lg">
              <li>• Serious roleplay only – stay IC</li>
              <li>• No RDM/VDM, metagaming, powergaming</li>
              <li>• Respect staff decisions</li>
              <li>• Common sense & respect everyone</li>
            </ul>
            <a
              href="https://www.ace-roleplay.net/rules-hybrid.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 text-cyan-400 hover:text-cyan-300 text-lg"
            >
              → Full Rules Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
