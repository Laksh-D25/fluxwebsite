"use client";

export default function StarField({ count }: { count: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <Star key={index} />
            ))}
        </>
    );
}

const Star = () => {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    const animationDelay = `${Math.random() * 3}s`;
    const glowIntensity = Math.random() * 5 + 1.5;
    const glowColor = `rgba(rand(), 255, 255, ${opacity * 0.5})`;

return (
        <div
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                boxShadow: `0 0 ${glowIntensity}px ${glowColor}, 0 0 ${glowIntensity * 2}px ${glowColor}, 0 0 ${glowIntensity * 3}px ${glowColor}`,
            }}
            className="absolute bg-white rounded-full animate-pulse"
        />
    );
};
