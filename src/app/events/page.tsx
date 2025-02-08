"use client";

import { Suspense, useState, useRef, useMemo, useEffect } from "react";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
import dynamic from "next/dynamic";
import Loading3DModel from "../components/Loading3DModel";

const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function EventsPage() {
    const places = [
        { name: "Kelowna, Empire Of Okanagan", lat: 49.8821, lng: -119.4778, img: "12.png", stackIndex: 0, desc: "Race against time to uncover the truth behind this mysterious Earth and the secrets it hides.", type: "Quest" }, // 🇨🇦
        { name: "Alcatraz Island, California Republic ", lat: 37.8267, lng: -122.423, img: "7.png", stackIndex: 0, desc: "A forgotten prison turned high-tech fortress. Escape, uncover the truth, or be lost to the system forever.", type: "Escape Room" },  // 🇺🇸 West Coast
        { name: "Houston, Texas Republic", lat: 29.7604, lng: -95.3698, img: "4.png", stackIndex: 0, desc: "In the ruthless markets of the Texas Republic, outbid, outbuild, and outsmart your rivals to create the ultimate machine.", type: "PC Building Auction"},      // 🇺🇸 Central
        { name: "New York City, Confederate States Of New England", lat: 40.7128, lng: -74.0060, img: "5.png", stackIndex: 0, desc: "Bahoo needs a strategist. Solve the challenges, uncover the truth, and seize control of destiny.", type: "IT Manager" },     // 🇺🇸 East Coast
        { name: "New York City, Confederate States Of New England", lat: 37, lng: -74.0060, img: "8.png", stackIndex: 1, desc: "With the Soviet Union’s AI war machine reshaping the world, will you resist its expansion or embrace its rule? The fate of nations hangs in the balance.", type: "MUN - UNSC" },   // 🇺🇸 East Coast (Stacked)
        { name: "Berlin, German Democratic Republic", lat: 52.5200, lng: 13.4050, img: "2.png", stackIndex: 0, desc: "Infiltrate the GDR’s Ministry of Propaganda through a high-stakes web-building contest. Master HTML, CSS, and JavaScript to outcode, outthink, and outmaneuver your rivals.", type: "Web Development" },    // 🇩🇪
        { name: "World", lat: 9.033872, lng: 38.750080, img: "13.png", stackIndex: 0, desc: "Capture the essence of Flux through photography, reels, and videography—but with a twist! Integrate a surprise object or topic into your work and showcase your creativity.", type: "Photography" }, 
        { name: "Vorkuta, Union Of Soviet Socialist Republics", lat: 67.5, lng: 64.0, img: "6.png", stackIndex: 0, desc: "Trapped in a Soviet gulag, you and your partner face Marshal Sokolov’s brutal test. Answer correctly to survive—outsmart him to escape.", type: "IT Quiz" },          // 🇷🇺   
        { name: "Bangalore, South Asian Union", lat: 12.9716, lng: 77.5946, img: "1.png", stackIndex: 0, desc: "A high-energy clash of creativity, innovation, and strategy. Build, develop, and pitch your startup while competing against rivals to claim the title of \"Most Successful Startup.\"", type: "Hackathon" },          // 🇮🇳
        { name: "Bangalore, South Asian Union", lat: 9, lng: 77.5946, img: "3.png", stackIndex: 1, desc: "A high-stakes cyber challenge where deception and logic collide. Trace digital remnants, decrypt buried secrets, and outlast system defenses. With every keystroke, the truth unravels—but are you ready for what you’ll uncover?", type: "Coding & Debugging" },        // 🇮🇳 (Stacked)
        { name: "Shenzen, Republic Of China", lat: 22.5431, lng: 114.0579, img: "11.png", stackIndex: 0, desc: "Drop in, fight hard, and outlast the competition. Only the best survive. Will you claim victory?", type: "BGMI" }   // 🇨🇳 (Last before looping)
    ];

    const globeRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [globeLoaded, setGlobeLoaded] = useState(false);

    // Memoize the StarField component
    const MemoizedStarField = useMemo(() => (
        <Suspense fallback={null}>
            <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
        </Suspense>
    ), []); // Empty dependency array means this will only be created once

    const nextEvent = () => {
        const newIndex = (currentIndex + 1) % places.length;
        setCurrentIndex(newIndex);
        focusOnLocation(places[newIndex].lat, places[newIndex].lng);
    };

    const prevEvent = () => {
        const newIndex = (currentIndex - 1 + places.length) % places.length;
        setCurrentIndex(newIndex);
        focusOnLocation(places[newIndex].lat, places[newIndex].lng);
    };

    const focusOnLocation = (lat, lng) => {
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);
        }
    };

    const handleLabelClick = (place) => {
        console.log("Clicked")
        const index = places.indexOf(place); // Get index based on object reference
        if (index !== -1) {
            setCurrentIndex(index);
            focusOnLocation(place.lat, place.lng);
        }
    };

    useEffect(() => {
        if (globeLoaded && globeRef.current) {
            const { lat, lng } = places[0];
            globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);

            // **Disable Zoom and Rotation Controls**
            globeRef.current.controls().enableZoom = false;
            globeRef.current.controls().enablePan = false;
        }
    }, [globeLoaded]); // Only run after the globe is ready

    return (
        <div className="fixed inset-0 w-full h-full bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                {MemoizedStarField}
            </div>
            <div className="absolute inset-0 z-10">
                <Suspense fallback={<Loading3DModel />}>
                    <div style={{ width: '100%', height: '100vh' }}>
                        <Globe 
                        
                            ref={globeRef}
                            animateIn={false}
                            onGlobeReady={() => setGlobeLoaded(true)}
                            backgroundColor="rgba(0, 0, 0, 0)" 
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            htmlElementsData={places}
                            htmlElement={(place) => {
                                const el = document.createElement("div");
                                el.style.width = "250px";
                                el.style.height = "50px";
                                el.style.display = "flex"; 
                                el.style.alignItems = "center";
                                el.style.justifyContent = "center";
                                el.style.transform = `translate(-50%, ${place.offset * 100}%)`;
                                el.style.pointerEvents = "auto"; // Ensures interactions are enabled
                                el.title = place.name;
                        
                                // Create an image inside the label
                                const img = document.createElement("img");
                                img.src = place.img;
                                img.style.width = "110%";
                                img.style.height = "110%";
                                img.style.objectFit = "contain"; 
                                img.style.cursor = "pointer"; // Ensures cursor changes on hover
                        
                                // Attach event listener for click
                                img.addEventListener("click", (event) => {
                                    event.stopPropagation(); // Prevents any event bubbling issues
                                    handleLabelClick(place);
                                });
                        
                                el.appendChild(img);
                                return el;
                            }}
                        />
                    </div>
                </Suspense>
            </div>
            <div className="absolute bottom-10 z-20 flex justify-center gap-4 w-full">
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
            <div className="hidden lg:block absolute top-10 z-20 text-white text-xl px-4 py-2 m-10 rounded-md ">
                <div className="w-[300px] overflow-hidden rounded-lg shadow-sm border backdrop-blur-md 2xl:backdrop-blur-sm bg-white/10">
                    <div className=" grid grid-rows-auto gap-5 px-4 py-5 sm:p-6">
                        <img src={places[currentIndex].img} className="w-[250px] h-[50px]"></img>
                        <p className="text-center text-2xl"> {places[currentIndex].type} </p>
                        <p className="text-md font-bold text-center"> {places[currentIndex].name} </p>
                        <p className="text-center text-sm"> {places[currentIndex].desc} </p>
                            <div className="flex justify-center">
                                <button 
                                    onClick={nextEvent} 
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                                > 
                                    Learn More
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}