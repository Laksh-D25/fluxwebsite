"use client";

import { Suspense, useState, useEffect } from "react";
import Globe from 'react-globe.gl';
import dynamic from "next/dynamic";
import Loading3DModel from "../components/Loading3DModel";

const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function EventsPage() {
    const places = [
        { name: "Vorkuta, Russia", lat: 67.5, lng: 64.0, img: "6.png", stackIndex: 0 },
        { name: "Alcatraz Island", lat: 37.8267, lng: -122.423, img: "7.png", stackIndex: 0 },
        { name: "New York City", lat: 40.7128, lng: -74.0060, img: "5.png", stackIndex: 0 },
        { name: "New York City 2", lat: 37, lng: -74.0060, img: "8.png", stackIndex: 1 }, // Stacked
        { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050, img: "2.png", stackIndex: 0 },
        { name: "Bangalore", lat: 12.9716, lng: 77.5946, img: "1.png", stackIndex: 0 },
        { name: "Bangalore 2", lat: 9, lng: 77.5946, img: "3.png", stackIndex: 1 }, // Stacked
        { name: "Houston, USA", lat: 29.7604, lng: -95.3698, img: "4.png", stackIndex: 0 },
        { name: "Delhi, India", lat: 22.5431, lng: 114.0579, img: "11.png", stackIndex: 0 },
        { name: "Kelowna, Canada", lat: 49.8821, lng: -119.4778, img: "12.png", stackIndex: 0 }
    ];
    

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
                </div>
    );
}
