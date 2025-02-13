import { useEffect, useRef } from 'react';

export default function QuantumJump() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <video 
                ref={videoRef}
                autoPlay
                playsInline
                muted 
                className="object-cover w-full h-full"
            >
                <source src="/img/GridWormhole.mp4" type="video/mp4" />
            </video>
        </div>
    );
}