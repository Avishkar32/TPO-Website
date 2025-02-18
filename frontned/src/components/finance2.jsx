import React, { useState } from 'react';
import { X, Ship, Compass } from 'lucide-react';

const FinanceRoadmap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const currentLevel = 20;

  const levels = [
    { id: 15, title: "Savings Basics" },
    { id: 16, title: "Emergency Fund" },
    { id: 17, title: "Budgeting 101" },
    { id: 18, title: "Debt Management" },
    { id: 19, title: "Credit Scores" },
    { id: 20, title: "Investment Basics" },
    { id: 21, title: "Stock Market" },
    { id: 22, title: "Bonds & Fixed Income" },
    { id: 23, title: "Mutual Funds" },
    { id: 24, title: "ETFs" },
    { id: 25, title: "Risk Management" },
    { id: 26, title: "Tax Planning" },
    { id: 27, title: "Retirement Basics" },
    { id: 28, title: "401(k) Plans" },
    { id: 29, title: "IRA Accounts" },
    { id: 30, title: "Estate Planning" },
    { id: 31, title: "Insurance" },
    { id: 32, title: "Real Estate" },
    { id: 33, title: "Advanced Investing" },
    { id: 34, title: "Financial Freedom" }
  ];

  return (
    <div className="relative bg-[#1a237e] p-8 h-[800px] w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 bg-blue-300 animate-wave"
            style={{
              left: '-100%',
              right: '-100%',
              top: `${i * 12 + Math.random() * 4}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800">
        <path
          d="M200,0 Q220,100 180,200 Q140,300 220,400 Q300,500 180,600 Q60,700 200,800"
          fill="none"
          stroke="#64b5f6"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="5,5"
          className="opacity-40"
        />
      </svg>

      <div className="relative h-full">
        {levels.map((level, index) => {
          const progress = (index / (levels.length - 1)) * 100;
          const xOffset = Math.sin(progress / 30) * 100;
          
          return (
            <div
              key={level.id}
              className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300
                ${level.id < currentLevel ? 'opacity-100' : 'opacity-60'}`}
              style={{
                top: `${progress}%`,
                transform: `translate(${xOffset}px, -50%)`
              }}
            >
              <button
                className={`group relative w-12 h-12 rounded-full flex items-center justify-center
                  ${level.id === currentLevel ? 'bg-green-400 animate-pulse' : 
                    level.id < currentLevel ? 'bg-blue-400' : 'bg-gray-400'}`}
                onClick={() => setActiveNode(level.id)}
              >
                {level.id === currentLevel && (
                  <Ship className="text-white w-6 h-6 animate-bounce" />
                )}
                
                <span className="absolute -left-32 transform -translate-x-full whitespace-nowrap
                  bg-white text-blue-900 px-3 py-1 rounded-lg text-sm font-medium
                  opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  {level.title}
                </span>
                
                <span className="absolute -right-8 text-white font-bold">
                  {level.id}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="absolute top-4 right-4 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
        <Compass className="text-blue-200 w-10 h-10 animate-spin-slow" />
      </div>

      {activeNode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative shadow-2xl">
            <button 
              onClick={() => setActiveNode(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">
              {levels.find(l => l.id === activeNode)?.title}
            </h3>
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
              <p className="text-gray-600">Video content coming soon!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinanceRoadmap;

const style = `
@keyframes wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-wave {
  animation: wave 7s infinite linear;
}

.animate-spin-slow {
  animation: spin 6s linear infinite;
}
`;