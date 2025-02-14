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
        <div className="relative w-full bg-black min-h-screen">
            {/* Background container */}
            <div 
                className={`fixed inset-0 z-0 bg-black transition-opacity duration-1000 ${
                    isWarping ? 'opacity-100' : 'opacity-0'
                } ${showQuantumJump ? 'opacity-100' : ''}`}
            />

            {/* StarField/QuantumJump container */}
            <div className="fixed inset-0 z-10 overflow-hidden">
                {isWarping ? (
                    <QuantumJump />
                ) : (
                    <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                )}
            </div>

            {/* Content container */}
            <div className="relative z-20 w-full min-h-screen py-16">
                <div className="container mx-auto px-4">
                    {/* Main Content */}
                    <div className={`flex flex-col items-center justify-center py-8 text-white
                        transition-all duration-3000 transform
                        ${isWarping ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                    >
                        {/* Rest of the content remains the same */}
                        {/* University Name - Desktop */}
                        <p className="text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl hidden lg:block">
                            CHRIST [Deemed to be University], Bangalore Yestwanthpur Campus
                        </p>

                        {/* University Name - Mobile */}
                        <p className="text-center text-xl sm:text-2xl block lg:hidden mb-2">
                            CHRIST [Deemed to be University]<br />
                            <span className="text-lg sm:text-xl">Bangalore Yestwanthpur Campus</span>
                        </p>

                        {/* Department Info */}
                        <p className="text-center text-base sm:text-lg lg:text-xl xl:text-2xl mt-6">
                            Department of Computer Science
                        </p>

                        <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl mt-4">
                            Presents
                        </p>

                        {/* Main Title */}
                        <h1 
                            className="font-quad text-center text-7xl sm:text-8xl lg:text-9xl xl:text-[200px] 
                                my-8 leading-none"
                            style={{ fontFamily: 'var(--font-quad)' }}
                        >
                            Flux
                        </h1>

                        {/* Subtitle and Date */}
                        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                            Into the Quantum Verse
                        </p>
                        
                        <p className="text-base sm:text-lg lg:text-xl mt-6">
                            February 27th - 28th, 2025
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className={`text-white text-center mt-6 space-y-4 flex items-center justify-center w-full
                        transition-all duration-3000 transform
                        ${isWarping ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                    >
                        <div className="space-x-4 flex justify-center items-center w-fit px-10 py-5 bg-gray-800/30 border-[1px] border-gray-700 rounded-xl mx-5">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-start h-full">Contact:</h2>
                            <div className="space-y-2 text-justified text-end border-l border-gray-700 pl-2">
                                <p className="text-sm sm:text-lg">
                                    <u>Cris Grace:</u> +91 90350 10120
                                </p>
                                <p className="text-sm sm:text-lg">
                                    <u>Anisha Kumari:</u> +91 75269 76187
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col items-center justify-center xl:mt-8 lg:mt-6 mt-4 space-y-4
                        transition-all duration-3000 transform
                        ${isWarping ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                    >
                        <QuantumButton onClick={handleJump} />
                        <OtherButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}