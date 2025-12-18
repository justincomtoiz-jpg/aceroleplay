import React, { useState, useEffect } from 'react';

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('aceCloneDisclaimerSeen');
    if (!hasSeenDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('aceCloneDisclaimerSeen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-10 max-w-2xl border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Important Disclaimer
        </h2>

        <div className="text-lg text-gray-300 space-y-6">
          <p>
            This website is a <strong>fan-made reimagination and clone</strong> of the original Ace Roleplay site[](https://www.ace-roleplay.net) created purely <strong>for shits and giggles, educational purposes, and frontend practice</strong>.
          </p>
          <p>
            It is <strong>not affiliated with, endorsed by, or connected to</strong> the real Ace Roleplay FiveM server, its owners, staff, or community in any way.
          </p>
          <p>
            No intent to infringe on trademarks, copyrights, or intellectual property. All server details, rules, and branding belong to the original creators.
          </p>
          <p className="font-semibold text-cyan-400">
            Please support the real server by visiting the original site and joining their Discord!
          </p>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleClose}
            className="px-12 py-5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-xl font-bold text-xl transition transform hover:scale-105 shadow-lg"
          >
            I Understand – Continue
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          This popup will not appear again.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
