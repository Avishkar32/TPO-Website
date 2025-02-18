import React, { useState } from 'react';

const FinanceRoadmap = () => {
  const [activeNode, setActiveNode] = useState(null);
  
  const nodes = [
    { id: 1, title: "Summary", color: "#4CAF50" },
    { id: 2, title: "Pythagoras Theorem", color: "#2196F3" },
    { id: 3, title: "Types of Triangles", color: "#FF5722" },
    { id: 4, title: "Sides and Angles", color: "#E91E63" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-[600px] relative w-full max-w-md mx-auto">
      <div className="absolute top-4 left-4 text-xl font-semibold">Rohit</div>
      
      <svg className="absolute inset-0" viewBox="0 0 400 600">
        <path
          d="M100,100 Q150,200 100,300 Q50,400 100,500"
          fill="none"
          stroke="#E3E7FF"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>

      {nodes.map((node, index) => {
        const yPos = 100 + index * 133;
        const xPos = 100 + Math.sin((index * Math.PI) / 4) * 50;
        
        return (
          <div
            key={node.id}
            style={{
              position: 'absolute',
              left: `${xPos}px`,
              top: `${yPos}px`,
            }}
          >
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full border-4 cursor-pointer transition-transform hover:scale-110"
                style={{ borderColor: node.color }}
                onClick={() => setActiveNode(node.id)}
              />
              
              <div
                className="absolute left-16 top-1/2 -translate-y-1/2 py-2 px-4 rounded-lg text-white whitespace-nowrap"
                style={{ backgroundColor: node.color }}
              >
                {node.title}
              </div>

              {index < nodes.length - 1 && (
                <div className="absolute -bottom-4 left-6 w-4 h-4 rounded-full bg-blue-500 z-10">
                  <div className="w-2 h-2 bg-white rounded-full m-1" />
                </div>
              )}
            </div>
          </div>
        )}
      )}

      <div className="absolute bottom-4 flex justify-center w-full gap-4">
        <div className="w-8 h-1 bg-purple-500 rounded" />
        <div className="w-8 h-8 border-2 border-purple-500 rounded" />
        <div className="w-8 h-1 bg-purple-500 rounded" />
      </div>
    </div>
  );
};

export default FinanceRoadmap;