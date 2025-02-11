"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useMemo } from 'react';

const StarField = dynamic(() => import("./StarField"), { ssr: false });
const GridPortal = dynamic(() => import("./GridPortal"), { ssr: false });

export default function HeroSection() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isWarping, setIsWarping] = useState(false);

    const tryPlayAudio = async () => {
        try {
            if (audioRef.current && !hasInteracted) {
                audioRef.current.volume = 0.5;
                await audioRef.current.play();
                setHasInteracted(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleJump = () => {
        setIsWarping(true);
        tryPlayAudio();
        // Add your navigation logic here after animation
        setTimeout(() => {
            // Navigate to next page or trigger transition
        }, 2000);
    };

    return (
        <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
            <audio
                ref={audioRef}
                src="/audio/bg1.mp3"
                loop
            />
            <div className="absolute inset-0 z-0">
                <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                <Canvas>
                    <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={50} />
                    <Suspense fallback={null}>
                        {isWarping ? <GridPortal /> : null}
                    </Suspense>
                </Canvas>
            </div>
            <div className={`absolute inset-0 z-20 text-white flex justify-center items-center flex-col transition-opacity duration-1000 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className="font-quad lg:text-[150px] text-[100px]" style={{ fontFamily: 'var(--font-quad)' }}>Flux</h1>
                <p className="-mt-8 lg:text-2xl text-lg">Into the Quantum Verse</p>
            </div>
            <div className={`absolute bottom-16 md:bottom-24 w-full flex justify-center z-20 px-4 transition-opacity duration-1000 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                <button 
                    className="text-lg md:text-2xl text-white rounded-full py-2 px-5 md:py-3 md:px-7 border-2 border-white hover:text-black hover:bg-white hover:border-black transition-all duration-500"
                    onClick={handleJump}
                >
                    Jump into the Quantum Verse
                </button>
            </div>
        </div>
    );
}