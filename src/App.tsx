import React, { useEffect, useState } from 'react';
import { KitchenCanvas } from './components/KitchenCanvas';

function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const texts = [
    { text: "Crafted with precision", side: "left" },
    { text: "Built to last forever", side: "right" },
    { text: "Innovative design", side: "left" },
    { text: "Premium materials", side: "right" },
    { text: "Lifetime warranty", side: "left" }
  ];

  // Calculate which text should be visible based on the current frame
  const getTextOpacity = (index: number) => {
    const framesPerText = 20;
    const textStartFrame = index * framesPerText;
    const textEndFrame = textStartFrame + framesPerText;
    
    if (currentFrame >= textStartFrame && currentFrame < textEndFrame) {
      // Fade in for first 5 frames, stay visible for 10 frames, fade out for last 5 frames
      if (currentFrame - textStartFrame < 5) {
        return (currentFrame - textStartFrame) / 5;
      } else if (currentFrame - textStartFrame > 15) {
        return 1 - ((currentFrame - textStartFrame - 15) / 5);
      }
      return 1;
    }
    return 0;
  };

  return (
    <div className="relative">
      <KitchenCanvas onFrameChange={setCurrentFrame} />
      
      {/* Text overlays */}
      <div className="fixed inset-0 pointer-events-none">
        {texts.map((item, index) => (
          <div
            key={index}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              item.side === 'left' ? 'left-12' : 'right-12'
            } transition-opacity duration-300`}
            style={{ opacity: getTextOpacity(index) }}
          >
            <h2 className={`text-5xl font-bold text-white ${
              item.side === 'right' ? 'text-right' : 'text-left'
            }`}>
              {item.text}
            </h2>
          </div>
        ))}
      </div>

      {/* Scroll height control */}
      <div className="h-[500vh]"></div>
    </div>
  );
}

export default App;