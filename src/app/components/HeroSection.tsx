"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import dynamic from "next/dynamic";
import { useState } from 'react';
import QuantumButton from "./QuantumButton";

const StarField = dynamic(() => import("./StarField"), { ssr: false });
const GridPortal = dynamic(() => import("./GridPortal"), { ssr: false });

export default function HeroSection() {
    
    
    const [isWarping, setIsWarping] = useState(false);

    const handleJump = () => {
        setIsWarping(true);
        setTimeout(() => {
            window.location.href = '/events';
        }, 2000);
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                <Canvas>
                    <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={50} />
                    <Suspense fallback={null}>
                        {isWarping ? <GridPortal /> : null}
                    </Suspense>
                </Canvas>
            </div>
            <div className={`lg:-mt-10 -mt-14 absolute inset-0 z-20 text-white flex justify-center items-center flex-col transition-opacity duration-1000 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-center lg:text-[28px] sm:text-[20px] hidden lg:block">CHRIST [Deemed to be University], Bangalore Yestwanthpur Campus</p>
                <p className="text-center lg:text-[28px] sm:text-[23px] block lg:hidden mb-2">CHRIST [Deemed to be University]<br></br><span className="sm:text-[20px]">Bangalore Yestwanthpur Campus</span></p>
                <p className="text-center lg:text-[25px] sm:text-[17px] text-[15px]">Department of Computer Science</p>
                <p className="text-center lg:text-[20px] sm:text-[15px]">Presents</p>
                <h1 className="ml-2 lg:-mt-7 mb-6 font-quad text-center lg:text-[200px] sm:text-[150px] text-[125px]" style={{ fontFamily: 'var(--font-quad)' }}>Flux</h1>
                <p className="-mt-16 lg:text-[35px] sm:text-xl">Into the Quantum Verse</p>
                <p className="lg:text-[20px] sm:text-xl mt-4">February 27th - 28th, 2025</p>
            </div>
            <div className={`absolute bottom-16 md:bottom-24 w-full flex justify-center z-20 px-4 transition-opacity duration-1000 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                {/* <button 
                    className="text-lg md:text-2xl text-white rounded-full py-2 px-5 md:py-3 md:px-7 border-2 border-white hover:text-black hover:bg-white hover:border-black transition-all duration-500"
                    onClick={handleJump}
                >
                    Jump into the Quantum Verse
                </button> */}
                <QuantumButton onClick={handleJump} />
            </div>
        </div>
    );
}