import React from 'react';

const Rules: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-6xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Ace Roleplay — Rules
        </h1>

        <div className="text-center mb-12 text-2xl space-x-6 text-gray-400">
          ⚖️ General 🖥️ Server 🎮 In-game 🕵️ Criminal/Gang ⚔️ War
        </div>

        <div className="grid gap-12">
          {/* General */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">⚖️ General Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>Serious roleplay only — always stay in character and respect character separation.</li>
              <li>Be respectful to all players and staff OOC.</li>
              <li>No toxicity, discrimination, or harassment in any channel.</li>
              <li>Use common sense and have fun.</li>
            </ul>
          </section>

          {/* Server */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🖥️ Server Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>No exploiting bugs or glitches.</li>
              <li>No cheating, scripting, or unauthorized mods.</li>
              <li>Follow all staff instructions immediately.</li>
              <li>Reports and tickets must be submitted via Discord.</li>
            </ul>
          </section>

          {/* In-game */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🎮 In-game Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>No RDM/VDM (random/cop-baiting deathmatch or vehicle deathmatch).</li>
              <li>No metagaming or powergaming.</li>
              <li>Value your life — roleplay fear in dangerous situations.</li>
              <li>New Life Rule: Forget previous life events after death/respawn.</li>
            </ul>
          </section>

          {/* Criminal/Gang */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🕵️ Criminal/Gang Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>Gangs must be approved and follow territory guidelines.</li>
              <li>Robberies and crimes require proper roleplay initiation.</li>
              <li>No safe zone crimes (hospitals, police stations unless scenario-appropriate).</li>
              <li>Green zones are strictly no-crime areas.</li>
            </ul>
          </section>

          {/* War */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">⚔️ War/Turf Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>Wars must be staff-approved and scheduled.</li>
              <li>Follow declared war rules for the duration.</li>
              <li>No third-party interference unless agreed.</li>
              <li>Standard RP rules still apply during wars.</li>
            </ul>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-16">
          Rules are subject to staff interpretation. Always ask if unsure.
        </p>
      </div>
    </div>
  );
};

export default Rules;
