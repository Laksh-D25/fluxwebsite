"use client";
import { useEffect, useState } from 'react';

interface ShootingStarProps {
    delay: number;
}

const ShootingStar = ({ delay }: ShootingStarProps) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const angle = Math.random() * 45; // Random angle between 0 and 45 degrees

    return (
        <div
            style={{
                position: 'absolute',
                top: `${startY}%`,
                left: `${startX}%`,
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                transform: `rotate(${angle}deg)`,
                opacity: 0,
                animation: `shooting-star 1.5s linear ${delay}s infinite`,
            }}
            className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-[50px] before:h-[1px] before:bg-gradient-to-l before:from-white before:to-transparent"
        />
    );
};

export default function StarField({ count }: { count: number }) {
    const [shootingStars, setShootingStars] = useState<number[]>([]);

    useEffect(() => {
        // Create 3 shooting stars with random delays
        const stars = Array.from({ length: 8 }, () => Math.random() * 20);
        setShootingStars(stars);
    }, []);

    return (
        <>
            <style jsx global>{`
                @keyframes shooting-star {
                    0% {
                        transform: translateX(0) translateY(0) rotate(45deg);
                        opacity: 1;
                    }
                    70% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(200px) translateY(200px) rotate(45deg);
                        opacity: 0;
                    }
                }
            `}</style>
            
            {/* Regular stars */}
            {Array.from({ length: count }).map((_, index) => (
                <Star key={index} />
            ))}
            
            {/* Shooting stars */}
            {shootingStars.map((delay, index) => (
                <ShootingStar key={`shooting-${index}`} delay={delay} />
            ))}
        </>
    );
}

const Star = () => {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    const animationDelay = `${Math.random() * 3}s`;
    const glowIntensity = Math.random() * 5 + 1.5;
    const glowColor = `rgba(255, 255, 255, ${opacity * 0.5})`;

    return (
        <div
            style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                boxShadow: `0 0 ${glowIntensity}px ${glowColor}, 0 0 ${glowIntensity * 2}px ${glowColor}, 0 0 ${glowIntensity * 3}px ${glowColor}`,
            }}
            className="bg-white rounded-full animate-pulse"
        />
    );
};