"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Model3D from "./Model3D";
import Loading3DModel from "./Loading3DModel";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

export default function HeroSection() {
    
    return (
        <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Suspense fallback={null}>
                    <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                </Suspense>
            </div>
            <div className="absolute inset-0 z-10">
                <Canvas className="w-full h-full" camera={{ position: [0, 0, 10], fov: 45 }}>
                    <Suspense fallback={<Loading3DModel />}>
                        <Model3D />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-16 md:bottom-24 w-full flex justify-center z-20 px-4">
                <button className="text-lg md:text-2xl text-white rounded-full py-2 px-5 md:py-3 md:px-7 border-2 border-white hover:text-black hover:bg-white hover:border-black transition-all duration-500">
                    Jump into the Quantum Verse
                </button>
            </div>
        </div>
    );
}
