"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3D from "../components/Model3D";
import Loading3DModel from "../components/Loading3DModel";

export default function EventsPage() {
return (
        <div className="w-full h-screen bg-black text-white flex flex-col items-center pt-20">
            <Canvas camera={{ position: [0, 5, 10], fov: 30 }}>
                <Suspense fallback={<Loading3DModel />}>
                    <Model3D scale={[0.5, 0.5, 0.5]} position={[0, 3, 0]} />
                </Suspense>
            </Canvas>
            <h1 className="text-4xl font-bold mt-10">🚀 Welcome to the Events Page!</h1>
        </div>
    );
}
