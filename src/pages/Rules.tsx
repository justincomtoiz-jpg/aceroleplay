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

        <div className="grid gap-16">

          {/* General Rules */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">⚖️ General Rules</h2>
            <p className="text-gray-300 mb-6">
              There will be no 'rule lawyering', no hiding in the gray areas of the rules or loop-holeing. It is impossible to write rules for every situation that may arise. Keep in mind the spirit and intent behind the rules.
            </p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>1.0 - You must be 18 or older to join Ace Roleplay!</li>
              <li>1.1 - We cannot go by words alone so if you want evidence of anything we recommend using a recording software, For compliance issues in future issues. This includes everything from bugs to reports to player reports.</li>
              <li>1.2 - You must have a working microphone (Unless Mute RP in-place).</li>
              <li>1.3 - You must be able to understand and speak English since we are an EU/US based server.</li>
              <li>1.4 - You must have access to discord. This is primarily what we use to communicate whether it regards staff, applications, server events, etc.</li>
              <li>1.5 - You must respect one another in and out of RP. Derogatory remarks directed to others regarding race, gender, religion, disabilities or sexual preference will not be tolerated. Any form of harassment or disrespect will result in disciplinary action.</li>
              <li>1.5.1 - If found to be sending threats or any form of racism to anyone in the community you will be removed permanently without appeal.</li>
              <li>1.6 - Steam or discord names that are deemed offensive will receive one warning/kick. Please have appropriate names. If you continue to join after being warned/kicked with the offensive name you will be removed permanently.</li>
              <li>1.7 - If a problem needs to be resolved, always use the chain of command when contacting staff. Open a ticket and Speak to an admin or staff first before speaking to management.</li>
              <li>1.7.1 - If you witness someone breaking the rules refer to rule 1.7!</li>
              <li>1.7.2 - If you submit a ticket please make sure you are using the system properly.</li>
              <li>1.7.3 - DO NOT REQUEST REALTORS! Use the ticket system.</li>
              <li>1.8 - Use the report system and tickets if you have an issue, concerns or bugs before spamming management privately.</li>
              <li>1.9 - If your issue is with a staff member please open a ticket and report it. (Staff report tickets will only be seen by Owner)</li>
              <li>1.10 - Advertising, including links in steam names are not allowed. Use the proper channel in Discord.</li>
              <li>1.11 - NON DMCA/NCS | The use of non dmca/NCS music can result in a penalty within the community.</li>
              <li>1.12 - The server uses a 3-strike system. The first strike is a warning, the second strike is a final warning, and the third strike results in a temporary ban (24 hours to 1 week) depending on the severity of the rule break. Any rule violations after a temporary ban will result in a permanent ban, with appeal eligibility depending on the situation. (Rule 1.5.1 is excluded from the 3 strike system)</li>
              <li>1.13 - A strike can be removed after 30 days, upon staff review.</li>
              <li>1.14 - One Government job per character you cannot be PD and EMS on the same character. (no corruption RP till further notice)</li>
              <li>1.15 - KEEP IN MIND THAT WE ARE A ROLEPLAY SERVER.</li>
              <li>1.16 - No Ragebaiting at all.</li>
              <li>1.17 - Use of AI in any of the applications will automatically lead to a denial.</li>
            </ul>
          </section>

          {/* In-game Rules */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🎮 In-game Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>2.0 - No cop baiting! Do not purposefully try and get police attention on you by doing things you would not do with an officer near you IRL. This includes things like doing burnouts in the middle of the road to gain attention or over revving your motor at lights to bait a pull over/chase.</li>
              <li>2.1 - ERP IS NOT ALLOWED AT ALL!!!!</li>
              <li>2.2 - If you plan to kidnap any player (this includes cops) 3 officers MUST BE on-duty. *If you are unsure on how many cops are on duty, check your phone or hit your “HOME” menu.</li>
              <li>2.3 - YOU CANNOT KILL PD / EMS if there is only one on-duty.</li>
              <li>2.4 - If you feel you have been mistreated in a police situation, do not police the police. Use the proper channels (IE: Reporting said officer to a higher up). Do not contact an admin unless the officer is clearly breaking a server rule. Take abuse of power as in character and report it as you see fit.</li>
              <li>2.5 - Stop and Go System for example you do not have to stay at a red light, act like it’s a stop sign.</li>
              <li>2.6 - Continued disregard for in-game laws including traffic, felony and misdemeanor laws will not be tolerated. This does not mean that you cannot break laws, it just means that driving excessively fast everywhere you go, running every light at high speeds, starting fights for little to no RP reason or any other form of non-RP activity will not be tolerated. This isn't GTA Online!</li>
              <li>2.7 - YOU CANNOT commit any crime 30mins BEFORE OR AFTER A STORM unless the scene has been ongoing from before the countdown.</li>
              <li>2.8 - Just because you are friends with a person, does not permit you to kill them for no reason.</li>
              <li>2.9 - Everything must be RP'd out to the fullest, or you will be spoken to and dealt with by a member of the compliance team.</li>
              <li>2.10 - Do not respawn without permission during RP situations. Remember you are still in RP.</li>
              <li>2.11 - When you are revived, you’re in medical custody until the medic clears you. You cannot immediately run after someone for revenge, you are injured for 15-30 minutes depending on the injuries. For example, if you are stabbed multiple times in the legs and you just got patched up, there is no way you can run out normally. Again, it must be RP’d with a time limit. UNLESS BROKEN OUT BY FRIENDS. You can not return to an RP scene if downed and transported away from the scene. Example; If you get shot and downed during an RP scene, you must clear medical. You can not be “revived”, armor up and retaliate. (WIP)</li>
            </ul>
          </section>

          {/* Server Rules */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🖥️ Server Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>3.0 - Do not go AFK for long periods of time. You will be kicked.</li>
              <li>3.1 - No RDM/VDM. RDM (Random death match): killing/attempting to kill without intent and roleplay. You must verbally confirm your intent with the opposing persons. (Mute persons can emote and Think About */me*)</li>
              <li>3.1.1 - VDM (Vehicle deathmatch): using a vehicle to kill/attempt to kill without intent or roleplay.</li>
              <li>3.2 - Social Media in the city is not initiating. That is considered, “Twitter Beef.” Initiation must be done in person. This also includes OOC or IC from discords.</li>
              <li>3.3 - Deadly action is required to be roleplayed out.</li>
              <li>3.4 - NO KILL ON SIGHT ALLOWED! PLEASE INITIATE BEFORE YOU SHOOT.</li>
              <li>3.5 - Meta-gaming is not allowed. Meta-gaming: the act of using out-of-character/external information for in-game situations. This includes stream sniping, 3rd party VOIP applications, and etc.</li>
              <li>3.6 - Power-gaming is not allowed. Power-gaming: using mechanics or roleplaying mechanics to gain an unfair advantage.</li>
              <li>3.7 - Roleplaying sexual assault (such as non-consensual touching, rape, etc.) is not allowed and will result in an immediate ban. This also applies verbally. Do not joke or mock sexual harassment. We do not tolerate this behavior and a ban appeal will not be allowed.</li>
              <li>3.8 - Suicide or self harm RP and Bigatory RP are not allowed. We understand that this happens IRL, but they are touchy subjects that people do not need to be reminded of. There are minimal exceptions, please contact an admin for permission before roleplaying suicide or terroristic acts.</li>
              <li>3.9 - You can not use discord/Or any kind of third party VC to convey what is happening in the city. That breaks immersion and is a form of meta-gaming.</li>
              <li>3.10 - No exploiting or hacking. This includes: AFK farming, abusing in-game bugs, etc. This will result in an immediate ban.</li>
              <li>3.11 - Follow the NLR rule. NLR (New-Life Rule): if your character is hurt in a way in which they cannot survive (headshotted, burned to death, etc), as soon as you respawn/morgued, you will have no memory of how you died or who “killed” you or “knocked” you out. (It is up to the injured to determine the injuries unless consented RP from both parties example rule 4.1)</li>
              <li>3.11.1 - If you are revived by EMS, you are limited to what you remember depending on PVE or PVP situations. PVE situations you are allowed to remember from the moment you were downed. PVP situations you are not allowed to remember 20min prior to the scene.</li>
              <li>3.12 - Follow FearRP. FearRP is fearing for your life. If you are alone in an alleyway and 4 gang members hold you at gunpoint and you cannot escape without dying, you must follow FearRP. The average person would follow their demands as they are helpless in a situation of such, you wouldn’t just walk away.</li>
              <li>3.13 - Do not FailRP. Due to the mechanics of GTA V, things that are completely unrealistic and down right impossible to do are easily done while in game. Think before you do, your actions should be thought out before you act. Just because you can do it doesn't mean you should.</li>
              <li>3.14 - Combat logging will result in an immediate Strike/Ban/Staff situation.</li>
              <li>3.15 - F8 / Quit or closing FiveM purposely is the act of logging out to avoid RP consequences, Flying back in at a different location, respawning without permission while in an RP situation will result in a BAN!</li>
              <li>3.15.1 - If you crashed, immediately contact either @Police or @EMS in discord to let them know that you have crashed.</li>
              <li>3.16 - Perma-death is upon your request. You control the death of your character. You decide how you die, period. No one can force RP on your character. Perma Death is permanent, do not take this choice lightly. You cannot come back once you are gone. There will be no Heirlooming of items or knowledge.</li>
              <li>3.16.1 - If you choose to kill off your character, you cannot make a revenge character, this rule is set to prevent metagaming.</li>
              <li>3.16.2 - You can not give items, cars, or buildings to your alt souls.</li>
              <li>3.17 - BLOOD OATH Upon a group or gang decision that includes the Killing off / Perma of a character be advised. Perma death must be consented to and in writing, sent into Staff for approval. They must consent to it and have it sent to staff / management. If your blood oath includes PERMA | The player must consent to a memory wipe. You can torture and ocean dump but you can not force a PERMA on someone. Anyone found in breach of this will be classed as POWER gaming. People are allowed to regret their blood oaths.</li>
              <li>3.18 - Do Not Break Character</li>
              <li>3.19 - If a scene has gone OOC, Do not stop the RP, finish the RP and submit a ticket regarding the situation to inform staff. Management and Compliance will conduct an investigation and ask all parties involved before any actions will be taken.</li>
              <li>3.20 - Vigilante RP is not allowed unless authorized by staff! You are not Spider-Man, John Wick, Jason Bourne, or Daredevil.</li>
              <li>3.21 - Animal Characters *Restricted* There are animal characters in the city. These are staff approved peds that are used by verified/approved persons by staff. Animal characters are restricted and are not allowed to: Drive cars No weapons Not allowed to do civilian jobs. You are an animal and should act like one.</li>
              <li>3.22 - Mental Health RP must be approved through the ticket system. Also If this starts to have an adverse effect to the persons involved staff will step in and it will be stopped or altered to bring it back in line.</li>
            </ul>
          </section>

          {/* Criminal / Gang Rules */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">🕵️ Criminal/Gang Rules</h2>
            <p className="text-xl font-semibold text-gray-300 mb-6">Hostages</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.0 - You can not use a hostage that is a known person in your group, gang, club, family, etc.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Torture RP</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.1 - Torture RP must be approved in a submitted ticket before taking place once both parties consent. The initiator of the scene is allowed to choose where the injuries are applied in torture RP and allowed to choose how much the victim is allowed to remember of the scene.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Camping illicit spots</p>
            <p className="text-xl font-semibold text-gray-300 mb-6">Hit and Run - Robberies</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.3 - Robbing a store and fleeing the scene immediately will not be allowed. You are expected to wait until you hear the sirens and have visual contact with the police. You can not run to your car immediately after robbing the store. If you do not see or hear police within 10min.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">House / Store / Warehouse / Jewelry Robberies / Fleeca / Small Roxwood bank and Paleto</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.4 - A group or person(s) can be a max of 4 in robberies.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Drug Runs</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.5 - A group or person(s) can be a max of 4 persons in runs.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Pacific and BIG Roxwood Bank Robberies</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.6 - A group or person(s) can be a max of 6 persons.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">String Robberies</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.7 - String robbing is not allowed. A group or person(s) who continuously robs any job/heists MUST wait a minimum of 30 minutes before you can initiate the next job/heist.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Pursuits</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.8 - The group who committed the crime are the only ones who are allowed to be involved in that pursuit. No Fly-ins.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">General crime</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8 mb-8">
              <li>4.9 - When committing a crime you can be a MAX of 4 people unless a rule states that you can be more.</li>
            </ul>

            <p className="text-xl font-semibold text-gray-300 mb-6">Group crime</p>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>4.10 - A gang/group cannot simultaneously hit multiple jobs at the same time or close to each other. A gang/group goes under the 30min rule together (rule 4.7).</li>
            </ul>
          </section>

          {/* War Rules */}
          <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">⚔️ War Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300 list-disc pl-8">
              <li>5.0 - Bringing other gangs to do dirty work for you during YOUR war is a breach of pre war contracts and will cause your side to lose.</li>
              <li>5.1 - There will be a max of 6 on each side during the war, if you push the home territory of the opposing gang everyone in the gang that is awake is allowed to involve themself from the defending party.</li>
              <li>5.2 - You are not permitted to shoot up public grounds such as Vespucci Medical, PD, legion square, PDM or any worksites.</li>
              <li>5.2.1 - Do not involve civilian workers even if they work for an opposing gangs business.</li>
              <li>5.3 - You cannot bring members to the hospital during a fight, you must wait till one side is down. A member cannot return to a fight if downed.</li>
              <li>5.4 - A gang war does not give immunity to police or other factions you may cause trouble with.</li>
              <li>5.5 - YOU MUST MAKE SURE YOU ONLY ATTACK THE OPPOSING GANG AND USING (they wore the color of the opposing gang) IS NOT A VALID REASON TO GUN SOMEONE DOWN!</li>
              <li>5.6 - You must always initiate before you go killing people to make sure there are no mixups.</li>
              <li>5.7 - When you are in a war you must wear your gang's clothing and color at all times. Write in the ticket and use agreed upon clothing/colours. (if you are alone or low member online count you can wear normal clothing but you are not permitted to do gang activities within that time)</li>
              <li>5.8 - Just because it's a war does not give reason to RDM/VDM.</li>
            </ul>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-16">
          These rules are copied verbatim from the original Ace Roleplay website for reference in this fan-made reimagination.
        </p>
      </div>
    </div>
  );
};

export default Rules;
