import { useEffect, useRef } from 'react';

export default function QuantumJump() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full">
            <video 
                ref={videoRef}
                autoPlay
                playsInline
                muted 
                className="w-full h-full object-cover"
            >
                <source src="/img/GridWormhole.mp4" type="video/mp4" />
            </video>
        </div>
    );
}