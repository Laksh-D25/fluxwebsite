"use client";

import { useState, useEffect } from "react";

interface WarpEffectProps {
  onComplete: () => void;
}

export default function WarpEffect({ onComplete }: WarpEffectProps) {
  const [isWarping, setIsWarping] = useState(false);

  useEffect(() => {
    setIsWarping(true);
    const timeout = setTimeout(() => {
      onComplete(); // After animation, redirect to the events page
    }, 2500); // Warp completes in 2.5s

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden z-50">
      {/* Star Trails */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              transform: `translateY(${Math.random() * 200}px) scale(${Math.random() * 1.5 + 0.5})`,
              animation: `warpStar 2.5s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Fading Tunnel Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black opacity-80"></div>

      {/* Scaling Down Effect */}
      {isWarping && (
        <div className="animate-scale-down">
          {/* This will be your 3D model */}
          <div className="w-32 h-32 bg-white rounded-full shadow-xl"></div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes warpStar {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(300px) scale(0.1);
            opacity: 0;
          }
        }
        @keyframes scale-down {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0.3);
          }
        }
        .animate-scale-down {
          animation: scale-down 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
