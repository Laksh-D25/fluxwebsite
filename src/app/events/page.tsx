"use client";

import { Suspense, useState, useRef } from "react";
import Globe from 'react-globe.gl';
import dynamic from "next/dynamic";
import Loading3DModel from "../components/Loading3DModel";

const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function EventsPage() {
    const places = [
        { name: "Alcatraz Island", lat: 37.8267, lng: -122.423, img: "7.png", stackIndex: 0 },  // 🇺🇸 West Coast
        { name: "Houston, USA", lat: 29.7604, lng: -95.3698, img: "4.png", stackIndex: 0 },      // 🇺🇸 Central
        { name: "New York City", lat: 40.7128, lng: -74.0060, img: "5.png", stackIndex: 0 },     // 🇺🇸 East Coast
        { name: "New York City 2", lat: 38, lng: -74.0060, img: "8.png", stackIndex: 1 },   // 🇺🇸 East Coast (Stacked)
        { name: "Kelowna, Canada", lat: 49.8821, lng: -119.4778, img: "12.png", stackIndex: 0 }, // 🇨🇦
        { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050, img: "2.png", stackIndex: 0 },    // 🇩🇪
        { name: "Vorkuta, Russia", lat: 67.5, lng: 64.0, img: "6.png", stackIndex: 0 },          // 🇷🇺   
        { name: "Bangalore", lat: 12.9716, lng: 77.5946, img: "1.png", stackIndex: 0 },          // 🇮🇳
        { name: "Bangalore 2", lat: 9, lng: 77.5946, img: "3.png", stackIndex: 1 },        // 🇮🇳 (Stacked)
        { name: "Shenzhen, China", lat: 22.5431, lng: 114.0579, img: "11.png", stackIndex: 0 }   // 🇨🇳 (Last before looping)
    ];

    const globeRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextEvent = () => {
        const newIndex = (currentIndex + 1) % places.length; // Loop back after last
        setCurrentIndex(newIndex);
        focusOnLocation(places[newIndex].lat, places[newIndex].lng);
    };

    const prevEvent = () => {
        const newIndex = (currentIndex - 1 + places.length) % places.length; // Loop to last when at first
        setCurrentIndex(newIndex);
        focusOnLocation(places[newIndex].lat, places[newIndex].lng);
    };

    const focusOnLocation = (lat, lng) => {
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);
        }
    };
    

    return (
         <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Suspense fallback={null}>
                            <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                        </Suspense>
                    </div>
                    <div className="absolute inset-0 z-10">
                            <Suspense fallback={<Loading3DModel />}>
                            <div style={{ width: '100%', height: '100vh' }}>
                                <Globe 
                                ref={globeRef}
                                backgroundColor="rgba(0, 0, 0, 0)" 
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                htmlElementsData={places}
                                htmlElement={(place) => {
                                    const el = document.createElement("div");
                                    el.style.width = "250px";
                                    el.style.height = "50px";
                                    el.style.backgroundImage = `url(${place.img})`;
                                    el.style.backgroundSize = "contain";
                                    el.style.backgroundRepeat = "no-repeat";
                                    el.style.transform = `translate(-50%, ${place.offset * 100}%)`;
                                    el.title = place.name; // Tooltip with location name
                                    return el;
                                }}
                                />
                            </div>
                            </Suspense>
                    </div>
                    <div className="absolute bottom-10 z-20 flex gap-4">
                        <button 
                            onClick={prevEvent} 
                            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                        >
                            Previous Event
                        </button>
                        <button 
                            onClick={nextEvent} 
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                        >
                            Next Event
                        </button>
                    </div>
                    <div className="absolute top-10 z-20 text-white text-xl bg-gray-900 px-4 py-2 rounded-md">
                        {places[currentIndex].name}
                    </div>
                </div>
    );
}
