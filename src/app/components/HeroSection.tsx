"use client";
import dynamic from "next/dynamic";
import { useState } from 'react';
import QuantumButton from "./QuantumButton";
import OtherButtons from "./OtherButtons";
import QuantumJump from "./QuantumJump";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

export default function HeroSection() {
    const [isWarping, setIsWarping] = useState(false);
    const [showQuantumJump, setShowQuantumJump] = useState(false);

    const handleJump = () => {
        setIsWarping(true);
        
        setTimeout(() => {
            setShowQuantumJump(true);
        }, 300);

        setTimeout(() => {
            window.location.href = '/events';
        }, 5500);
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden -mt-5 lg:mt-0 xl:-mt-5">
            <div 
                className={`absolute inset-0 z-0 bg-black transition-opacity duration-1000 ${
                    isWarping ? 'opacity-100' : 'opacity-0'
                } ${showQuantumJump ? 'opacity-100' : ''}`}
            />

            <div className="absolute inset-0 z-0">
                {isWarping ? <QuantumJump />  : <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />}
                
            </div>

            <div 
                className={`lg:-mt-10 -mt-14 absolute inset-0 z-20 text-white flex justify-center items-center flex-col 
                    transition-all duration-3000 transform ${
                        isWarping 
                            ? 'scale-0 opacity-0' 
                            : 'scale-100 opacity-100'
                    }`}
            >
                <p className="text-center lg:text-[28px] sm:text-[20px] hidden lg:block">
                    CHRIST [Deemed to be University], Bangalore Yestwanthpur Campus
                </p>
                <p className="text-center lg:text-[28px] sm:text-[23px] block lg:hidden mb-2">
                    CHRIST [Deemed to be University]<br />
                    <span className="sm:text-[20px]">Bangalore Yestwanthpur Campus</span>
                </p>
                <p className="text-center lg:text-[25px] sm:text-[17px] text-[15px]">
                    Department of Computer Science
                </p>
                <p className="text-center lg:text-[20px] sm:text-[15px]">Presents</p>
                <h1 
                    className="ml-2 lg:-mt-7 mb-6 font-quad text-center lg:text-[200px] sm:text-[150px] text-[125px]" 
                    style={{ fontFamily: 'var(--font-quad)' }}
                >
                    Flux
                </h1>
                <p className="-mt-16 lg:text-[35px] sm:text-xl">Into the Quantum Verse</p>
                <p className="lg:text-[20px] sm:text-xl mt-4">February 27th - 28th, 2025</p>
            </div>

            <div 
                className={`mt-10 absolute xl:bottom-12 lg:bottom-40 bottom-3 xl:mb-2 md:mb-5 mb-2 
                    space-y-5 w-full flex flex-col justify-center z-20 px-4 
                    transition-all duration-3000 transform ${
                        isWarping 
                            ? 'scale-0 opacity-0' 
                            : 'scale-100 opacity-100'
                    }`}
            >
                <QuantumButton onClick={handleJump} />
                <OtherButtons />
            </div>
        </div>
    );
}