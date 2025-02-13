"use client";
import { useEffect, useState } from 'react';

interface ShootingStarProps {
    delay: number;
    duration: number;
    angle: number;
}

const ShootingStar = ({ delay, duration, angle }: ShootingStarProps) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 60; // Keep stars in upper portion

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
                animation: `shooting-star ${duration}s linear ${delay}s infinite`,
            }}
            className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100px] before:h-[1px] 
                        before:bg-gradient-to-l before:from-white before:via-white/50 before:to-transparent
                        after:content-[''] after:absolute after:top-0 after:left-0 after:w-[50px] after:h-[1px] 
                        after:bg-gradient-to-l after:from-white/30 after:to-transparent"
        />
    );
};

export default function StarField({ count }: { count: number }) {
    const [shootingStars, setShootingStars] = useState<Array<{
        delay: number;
        duration: number;
        angle: number;
    }>>([]);

    useEffect(() => {
        // Create shooting stars with varied properties
        const stars = Array.from({ length: 8 }, () => ({
            delay: Math.random() * 20,
            duration: Math.random() * 1 + 1, // Duration between 1-2 seconds
            angle: Math.random() * 30 + 30, // Angle between 30-60 degrees
        }));
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
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(300px) translateY(300px) rotate(45deg);
                        opacity: 0;
                    }
                }

                @keyframes twinkle {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(0.8);
                    }
                }
            `}</style>
            
            {/* Background stars */}
            {Array.from({ length: count }).map((_, index) => (
                <Star key={index} />
            ))}
            
            {/* Shooting stars */}
            {shootingStars.map((star, index) => (
                <ShootingStar 
                    key={`shooting-${index}`} 
                    delay={star.delay} 
                    duration={star.duration}
                    angle={star.angle}
                />
            ))}
        </>
    );
}

const Star = () => {
    const size = Math.random() * 2 + 1;
    const baseOpacity = Math.random() * 0.7 + 0.3;
    const animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
    const glowIntensity = Math.random() * 5 + 1.5;
    const glowColor = `rgba(255, 255, 255, ${baseOpacity * 0.5})`;
    
    // Random slight blue tint for some stars
    const hasBlueTint = Math.random() > 0.7;
    const starColor = hasBlueTint ? 'rgb(220, 225, 255)' : 'white';

    return (
        <div
            style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: baseOpacity,
                backgroundColor: starColor,
                animation: `twinkle ${animationDuration} ease-in-out infinite`,
                boxShadow: `0 0 ${glowIntensity}px ${glowColor}, 
                           0 0 ${glowIntensity * 1.5}px ${glowColor}, 
                           0 0 ${glowIntensity * 2}px ${glowColor}`,
            }}
            className="rounded-full"
        />
    );
};