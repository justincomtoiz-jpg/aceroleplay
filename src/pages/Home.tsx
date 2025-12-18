import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {
  ServerIcon,
  UsersIcon,
  LinkIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

interface ServerInfo {
  loading: boolean;
  online: boolean;
  hostname: string;
  players: number;
  maxPlayers: number;
  lastChecked: string;
}

const Home: React.FC = () => {
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
    // (Same fetch logic as before – unchanged)
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
    alert('CFX link copied!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-transparent animate-pulse"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl mb-8">
            Ace Roleplay
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto">
            A Premier Serious Roleplay Experience • Custom Framework • Player-Driven Economy • Immersive Storytelling
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <button
              onClick={handleConnect}
              className="px-16 py-6 text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
            >
              Connect to Server
            </button>
            <button
              onClick={handleCopy}
              className="px-12 py-6 text-xl font-semibold bg-cyan-600 hover:bg-cyan-500 rounded-2xl flex items-center gap-4 transition transform hover:scale-105"
            >
              <LinkIcon className="w-8 h-8" />
              Copy CFX Link
            </button>
            <button
              onClick={() => window.open(discordLink, '_blank')}
              className="px-12 py-6 text-xl font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-2xl flex items-center gap-4 transition transform hover:scale-105"
            >
              <span className="text-3xl">🎮</span>
              Join Discord
            </button>
          </div>

          {/* Live Player Badge */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <UsersIcon className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold">
              {serverInfo.loading ? 'Loading...' : `${serverInfo.players}/${serverInfo.maxPlayers} Online`}
            </span>
            <div className={`w-4 h-4 rounded-full ${serverInfo.online ? 'bg-emerald-400 animate-pulse' : 'bg-red-600'}`} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Ace Roleplay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500 transition">
              <CurrencyDollarIcon className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-4">Player-Driven Economy</h3>
              <p className="text-gray-400">Businesses, jobs, and black markets shaped by community actions.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500 transition">
              <WrenchScrewdriverIcon className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h3 className="text-2xl font-semibold mb-4">Custom Scripts & MLOs</h3>
              <p className="text-gray-400">Unique features and detailed interiors for immersive RP.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500 transition">
              <UserGroupIcon className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
              <h3 className="text-2xl font-semibold mb-4">Active Factions</h3>
              <p className="text-gray-400">Police, EMS, Gangs, and Civilian organizations with deep lore.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500 transition">
              <ShieldCheckIcon className="w-16 h-16 mx-auto mb-6 text-amber-400" />
              <h3 className="text-2xl font-semibold mb-4">Dedicated Staff</h3>
              <p className="text-gray-400">Fair rule enforcement and constant community support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Server Status Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-5xl font-bold flex items-center gap-6">
                <ServerIcon className="w-14 h-14 text-cyan-400" />
                Live Server Status
              </h2>
              <button onClick={fetchServerStatus} className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition">
                <ArrowPathIcon className={`w-8 h-8 ${serverInfo.loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            {/* (Same status display as before, but larger) */}
            {serverInfo.loading ? (
              <p className="text-center text-2xl py-12">Fetching live data...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl">
                <div className="flex items-center gap-6">
                  <div className={`w-8 h-8 rounded-full ${serverInfo.online ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
                  <span className="font-bold">{serverInfo.online ? 'ONLINE' : 'OFFLINE'}</span>
                </div>
                <div>Hostname: <span className="font-bold text-cyan-300">{serverInfo.hostname}</span></div>
                <div className="flex items-center gap-6">
                  <UsersIcon className="w-10 h-10 text-purple-400" />
                  Players: <span className="font-extrabold text-4xl">{serverInfo.players}/{serverInfo.maxPlayers}</span>
                </div>
                <div>Last checked: <span className="text-gray-400">{serverInfo.lastChecked}</span></div>
              </div>
            )}
          </div>
        </div>
 
      </section>
      {/* Factions Section – Professional Bento Grid Layout */}
<section className="py-24 bg-slate-900/30">
  <div className="container mx-auto px-6 max-w-7xl">
    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Factions & Opportunities
    </h2>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
      {/* EMS */}
      <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500 transition-all duration-500 shadow-2xl">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2369649800079979" 
            alt="EMS paramedics responding to an emergency" 
            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-4xl font-black text-emerald-400 drop-shadow-2xl">EMS</div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">Emergency Medical Services</h3>
          <p className="text-gray-300 leading-relaxed">Dedicated paramedics and firefighters delivering critical care in high-pressure scenarios with advanced medical scripting.</p>
        </div>
      </div>

      {/* SASP */}
      <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500 transition-all duration-500 shadow-2xl">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src="https://img.gta5-mods.com/q75/images/2018-ford-xlt-f350-superduty-quad-cad-custom-ambulance-els/330616-20190828173812_1.jpg" 
            alt="SASP officers on highway patrol" 
            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-4xl font-black text-blue-400 drop-shadow-2xl">SASP</div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">San Andreas State Police</h3>
          <p className="text-gray-300 leading-relaxed">Professional law enforcement with structured ranks, highway patrol, investigations, and tactical units.</p>
        </div>
      </div>

      {/* DOJ */}
      <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500 transition-all duration-500 shadow-2xl">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img 
            src="https://rockstarintel.com/wp-content/uploads/2024/09/DOJ-1024x549.jpg" 
            alt="DOJ courtroom proceedings" 
            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-4xl font-black text-amber-400 drop-shadow-2xl">DOJ</div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Department of Justice</h3>
          <p className="text-gray-300 leading-relaxed">Judges, prosecutors, and defense attorneys conducting realistic trials and legal proceedings.</p>
        </div>
      </div>
    </div>

   {/* Freelancer – Full-Width Horizontal Banner Below */}
<div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500 transition-all duration-500 shadow-2xl">
  <div className="aspect-[21/9] md:aspect-[32/9] relative overflow-hidden">
    <img 
      src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=760411349724951" 
      alt="Diverse civilian life and jobs in the city" 
      className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute bottom-8 left-8 text-5xl font-black text-cyan-400 drop-shadow-2xl">Freelancer / Civilian Careers</div>
  </div>
  <div className="p-10">
    <p className="text-xl text-gray-300 mb-8 text-center max-w-5xl mx-auto">
      Endless opportunities for player-driven stories—from public services to entrepreneurship.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      {[
        { name: 'Bus Driver', color: 'cyan', description: 'Operate public buses across the city, transporting passengers and creating RP opportunities around daily commutes and interactions.' },
        { name: 'Mechanic', color: 'blue', description: 'Repair and customize vehicles at garages, offering services to civilians and factions while building a reputation in the automotive world.' },
        { name: 'Store Owner', color: 'green', description: 'Run your own shop, manage inventory, set prices, and engage in economic RP with customers and suppliers.' },
        { name: 'Go Postal', color: 'indigo', description: 'Deliver packages and mail throughout the city, navigating routes and handling special deliveries for immersive logistics RP.' },
        { name: 'Scuba Diving', color: 'teal', description: 'Explore underwater locations for treasures, salvage, or missions, requiring gear and diving skills for adventurous RP.' },
        { name: 'Metal Detecting', color: 'yellow', description: 'Search beaches and parks for hidden valuables using detectors, turning finds into profit or story hooks.' },
        { name: 'Hunting', color: 'orange', description: 'Track and hunt wildlife in designated areas, selling pelts and meat while following conservation rules.' },
        { name: 'Fishing', color: 'sky', description: 'Cast lines at various spots to catch fish, compete in tournaments, or supply seafood to markets and restaurants.' },
        { name: 'Taxi Driver', color: 'amber', description: 'Provide rides to passengers across the city, engaging in conversations and unexpected RP scenarios en route.' },
        { name: 'City Electrician', color: 'violet', description: 'Maintain power grids, fix outages, and install wiring for buildings, essential for city infrastructure RP.' },
      ].map((job) => (
        <Accordion key={job.name} className="bg-white/10 rounded-2xl overflow-hidden shadow-lg">
          <AccordionSummary
            expandIcon={<ChevronDownIcon className="w-6 h-6 text-gray-400" />}
            className={`p-5 hover:bg-${job.color}-500/20 transition duration-300 cursor-pointer flex items-center justify-center`}
          >
            <span className="font-semibold text-gray-200">{job.name}</span>
          </AccordionSummary>
          <AccordionDetails className="p-5 bg-white/5">
            <p className="text-gray-300 text-sm">{job.description}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
</div>
  </div>
</section>
    </div>
  );
};

export default Home;
