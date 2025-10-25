import { useState } from 'react';

export default function InfoCard() {
  const tabs = ['About Me', 'Experiences', 'Recommended'];
  const [active, setActive] = useState(1);

  const content = {
    0: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
    1: "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years. My wife Tiffany and my 4 year old twin daughters - Emma and Ella...",
    2: "Recommended connections and items will appear here. Suggest collaborators, templates and more."
  };

  return (
    <div className="glass p-6 rounded-2xl w-full max-w-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          {tabs.map((t,i)=>(
            <button key={t} onClick={()=>setActive(i)}
              className={`pill ${active===i ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-300 border border-transparent'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="h-10 w-10 rounded-full glass flex items-center justify-center text-gray-300">?</div>
      </div>

      <div className="h-40 overflow-auto text-gray-300 leading-6 p-2 instructions">
        {content[active]}
      </div>

      <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
    </div>
  );
}
