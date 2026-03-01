import React from 'react';

export const BackgroundGlow = () => {
   return (
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
         {/* Soft Yellow Glow */}
         <div
            className="absolute inset-0 z-0"
            style={{
               backgroundImage: `
            radial-gradient(circle at center, #FFF991 0%, transparent 70%)
          `,
               opacity: 0.6,
               mixBlendMode: "multiply",
            }}
         />
      </div>
   );
};

export default BackgroundGlow;
