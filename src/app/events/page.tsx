"use client";

import { Suspense, useState, useRef, useMemo, useEffect } from "react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Loading3DModel from "../components/Loading3DModel";
import QuantumJump from "../components/QuantumJump";
import dynamic from "next/dynamic";
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

// Define interfaces for type safety
interface Place {
    name: string;
    lat: number | null;
    lng: number | null;
    img: string;
    stackIndex: number;
    desc: string;
    type: string;
    url: string;
    event_name: string;
}

interface GlobeRef {
    pointOfView: (coords: { lat: number; lng: number; altitude: number }, duration?: number) => void;
    controls: () => {
        enableZoom: boolean;
        enablePan: boolean;
    };
}

interface GlobeProps {
    ref: React.RefObject<GlobeRef>;
    animateIn: boolean;
    onGlobeReady: () => void;
    backgroundColor: string;
    globeImageUrl: string;
    htmlElementsData: Place[];
    htmlElement: (place: Place) => HTMLDivElement;
}

interface GlobeComponentType extends React.ComponentType<GlobeProps> {}

// Update Globe import with proper typing
const Globe = dynamic(() => import("react-globe.gl"), { 
    ssr: false, 
    loading: QuantumJump 
}) as GlobeComponentType; // Using any here as react-globe.gl doesn't export proper types

const VP = dynamic(() => import("../components/VanishingPoint"), { ssr: false });
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function EventsPage() {
    const router = useRouter()
    const places: Place[] = [
        { name: "Kelowna, Empire Of Okanagan", lat: 49.8821, lng: -119.4778, img: "12.png", stackIndex: 0, desc: "Race against time to uncover the truth behind this mysterious Earth and the secrets it hides.", type: "Quest", url: "/events/raceagainsttime", event_name: 'Race Against Time' },
        { name: "Alcatraz Island, California Republic ", lat: 37.8267, lng: -122.423, img: "7.png", stackIndex: 0, desc: "A forgotten prison turned high-tech fortress. Escape, uncover the truth, or be lost to the system forever.", type: "Escape Room",  url: "/events/facilityzero", event_name: 'Facility Zero' },
        { name: "Houston, Texas Republic", lat: 29.7604, lng: -95.3698, img: "4.png", stackIndex: 0, desc: "In the ruthless markets of the Texas Republic, outbid, outbuild, and outsmart your rivals to create the ultimate machine.", type: "PC Building Auction",  url: "/events/buildnbid", event_name: 'Build \'n\' Bid' },
        { name: "New York City, Confederate States Of New England", lat: 40.7128, lng: -74.0060, img: "5.png", stackIndex: 0, desc: "Bahoo needs a strategist. Solve the challenges, uncover the truth, and seize control of destiny.", type: "IT Manager",  url: "/events/technocratsofturmoil", event_name: 'Technocrats Of Turmoil' },
        { name: "New York City, Confederate States Of New England", lat: 37, lng: -74.0060, img: "8.png", stackIndex: 1, desc: "With the Soviet Union's AI war machine reshaping the world, will you resist its expansion or embrace its rule? The fate of nations hangs in the balance.", type: "MUN - UNSC",  url: "/events/digitaldystopia", event_name: 'Digital Dystopia' },
        { name: "Berlin, German Democratic Republic", lat: 52.5200, lng: 13.4050, img: "2.png", stackIndex: 0, desc: "Infiltrate the GDR's Ministry of Propaganda through a high-stakes web-building contest. Master HTML, CSS, and JavaScript to outcode, outthink, and outmaneuver your rivals.", type: "Web Development",  url: "/events/wortundmacht", event_name: 'Wort und Macht' },
        { name: "World", lat: 9.033872, lng: 38.750080, img: "13.png", stackIndex: 0, desc: "Capture the essence of Flux through photography, reels, and videography—but with a twist! Integrate a surprise object or topic into your work and showcase your creativity.", type: "Photography",  url: "/events/pravda", event_name: 'Pravda' },
        { name: "Vorkuta, Union Of Soviet Socialist Republics", lat: 67.5, lng: 64.0, img: "6.png", stackIndex: 0, desc: "Trapped in a Soviet gulag, you and your partner face Marshal Sokolov's brutal test. Answer correctly to survive—outsmart him to escape.", type: "IT Quiz",  url: "/events/dopros", event_name: 'Dopros' },
        { name: "Bangalore, South Asian Union", lat: 12.9716, lng: 77.5946, img: "1.png", stackIndex: 0, desc: "A high-energy clash of creativity, innovation, and strategy. Build, develop, and pitch your startup while competing against rivals to claim the title of \"Most Successful Startup.\"", type: "Hackathon",  url: "/events/startathon", event_name: 'Startathon' },
        { name: "Bangalore, South Asian Union", lat: 9, lng: 77.5946, img: "3.png", stackIndex: 1, desc: "A high-stakes cyber challenge where deception and logic collide. Trace digital remnants, decrypt buried secrets, and outlast system defenses. With every keystroke, the truth unravels—but are you ready for what you'll uncover?", type: "Coding & Debugging",  url: "/events/algol", event_name: 'Algol' },
        { name: "Shenzen, Republic Of China", lat: 22.5431, lng: 114.0579, img: "11.png", stackIndex: 0, desc: "Drop in, fight hard, and outlast the competition. Only the best survive. Will you claim victory?", type: "BGMI", url: "/events/bgmi", event_name: 'BGMI' },
        { name: "The Concious", lat: null, lng: null, img: "9.png", stackIndex: 0, desc: "Trapped within a fractured subconscious, you must navigate shifting memories, buried truths, and fragmented realities to free the mind of a captive. As the walls of perception twist and distort, one question lingers—what was stolen, and why? Escape is only the beginning.", type: "Horror Experience",  url: "/events/vanishingpoint", event_name: 'Vanishing Point' },
    ];

    const [selectedEvent, setSelectedEvent] = useState<Place>(places[0]);
    const globeRef = useRef<GlobeRef>({} as GlobeRef);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [globeLoaded, setGlobeLoaded] = useState(false);
    const [showVanishingPoint, setShowVanishingPoint] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [opacity, setOpacity] = useState(1);

    const MemoizedStarField = useMemo(() => (
        <Suspense fallback={null}>
            <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
        </Suspense>
    ), []);

    const handleTransition = async () => {
        setIsTransitioning(true);
        setOpacity(0);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setShowVanishingPoint(true);
        setTimeout(() => {
            setOpacity(1);
            setIsTransitioning(false);
        }, 100);
    };

    const nextEvent = async () => {
        const newIndex = (currentIndex + 1) % places.length;
    
        if (showVanishingPoint) {
            // Start transition
            setIsTransitioning(true);
            setOpacity(0);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Update states together to prevent extra render
            setCurrentIndex(newIndex);
            setShowVanishingPoint(false);
            setSelectedEvent(places[newIndex]);
            
            await new Promise(resolve => setTimeout(resolve, 50));
            setOpacity(1);
            
            setTimeout(() => {
                setIsTransitioning(false);
                if (places[newIndex].lat && places[newIndex].lng) {
                    focusOnLocation(places[newIndex].lat, places[newIndex].lng);
                }
            }, 100);
        } else {
            // Regular globe navigation
            setCurrentIndex(newIndex);
            setSelectedEvent(places[newIndex]);
            if (places[newIndex].name.includes("The Concious")) {
                handleTransition();
            } else {
                focusOnLocation(places[newIndex].lat, places[newIndex].lng);
            }
        }
    };
    
    const prevEvent = async () => {
        const newIndex = (currentIndex - 1 + places.length) % places.length;
    
        if (showVanishingPoint) {
            setIsTransitioning(true);
            setOpacity(0);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Bundle state updates
            setCurrentIndex(newIndex);
            setShowVanishingPoint(false);
            setSelectedEvent(places[newIndex]);
            
            await new Promise(resolve => setTimeout(resolve, 50));
            setOpacity(1);
            
            setTimeout(() => {
                setIsTransitioning(false);
                if (places[newIndex].lat && places[newIndex].lng) {
                    focusOnLocation(places[newIndex].lat, places[newIndex].lng);
                }
            }, 100);
        } else {
            setCurrentIndex(newIndex);
            setSelectedEvent(places[newIndex]);
            // Add check for The Conscious when going backwards
            if (places[newIndex].name.includes("The Concious")) {
                handleTransition();
            } else {
                focusOnLocation(places[newIndex].lat, places[newIndex].lng);
            }
        }
    };

    const focusOnLocation = (lat: number | null, lng: number | null) => {
        if (globeRef.current && lat !== null && lng !== null) {
            globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);
        }
    };

    const handleLabelClick = (place: Place) => {
        const index = places.findIndex(p => p.event_name === place.event_name);
        if (index !== -1) {
            setCurrentIndex(index);
            focusOnLocation(place.lat, place.lng);
            setSelectedEvent(place);
        }

        if (place.name.includes("The Concious")) {
            handleTransition();
        }
    };

    const learnMore = () => {
        router.push(places[currentIndex].url)
    }

    useEffect(() => {
        if (globeLoaded && globeRef.current) {
            const { lat, lng } = places[0];
            if (lat !== null && lng !== null) {
                globeRef.current.pointOfView({ lat, lng, altitude: 1.5 }, 2000);
                globeRef.current.controls().enableZoom = false;
                globeRef.current.controls().enablePan = false;
            }
        }
    }, [globeLoaded]);

    /* function getIndex(place: Place){
        for (let i = 0; i < places.length; i++) {
            if (places[i].event_name === place.event_name) {
                return i;
            }
        }
    } */

    useEffect(() => {
        const index = places.findIndex(p => p.event_name === selectedEvent.event_name);
        
        if (index !== -1) {
            setCurrentIndex(index);
            focusOnLocation(selectedEvent.lat, selectedEvent.lng);
        }

        if (selectedEvent.name.includes("The Concious")) {
            handleTransition();
        }
    }, [selectedEvent]);

    /* return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div 
                style={{ 
                    opacity: opacity,
                    transition: 'opacity 1s ease-in-out',
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                {showVanishingPoint ? (
                    <VP />
                ) : (
                    <>
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
                                        globeImageUrl="/earth-night.jpg"
                                        htmlElementsData={places}
                                        htmlElement={(place) => {
                                            const el = document.createElement("div");

                                            if (place.lat === null || place.lng === null) return el;

                                            el.style.width = "250px";
                                            el.style.height = "50px";
                                            el.style.display = "flex";
                                            el.style.alignItems = "center";
                                            el.style.justifyContent = "center";
                                            el.style.transform = `translate(-50%, ${place.offset * 100}%)`;
                                            el.style.pointerEvents = "auto";
                                            el.title = place.name;

                                            const img = document.createElement("img");
                                            img.src = place.img;
                                            img.style.width = "110%";
                                            img.style.height = "110%";
                                            img.style.objectFit = "contain";
                                            img.style.cursor = "pointer";

                                            img.addEventListener("click", (event) => {
                                                event.stopPropagation();
                                                handleLabelClick(place);
                                            });

                                            el.appendChild(img);
                                            return el;
                                        }}
                                    />
                                </div>
                            </Suspense>
                        </div>
                    </>
                )}
            </div>

            {!isTransitioning && (
                <>
                    <div className="hidden lg:block">
                        <div className="absolute bottom-10 z-20 flex justify-center gap-4 w-full">
                            <button 
                                onClick={prevEvent} 
                                className="px-6 py-2 bg-black/30 hover:bg-gray-800/80 text-white rounded-full border-[1px] border-white transition"
                            >
                                Previous Event
                            </button>
                            <button 
                                onClick={nextEvent} 
                                className="px-6 py-2 hover:bg-gray-800 bg-white text-black hover:text-white rounded-full border-[1px] border-white transition"
                            >
                                Next Event
                            </button>
                        </div>
                    </div>

                    <div className="block lg:hidden">
                        <div className="absolute bottom-10 z-20 flex justify-center w-full">
                            <div className="grid grid-rows-2 gap-5"> 
                                <Listbox value={selectedEvent} onChange={setSelectedEvent}>
                                <ListboxButton
                                    className={clsx(
                                    'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                    )}
                                >
                                    {selectedEvent.event_name}
                                    <ChevronDownIcon
                                    className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                    aria-hidden="true"
                                    />
                                </ListboxButton>
                                <ListboxOptions
                                    anchor="bottom"
                                    transition
                                    className={clsx(
                                    'absolute z-50 w-[var(--button-width)] rounded-xl border border-white/5 bg-white/10 backdrop-blur-md p-1',
                                    // Set a fixed height that will show ~5 items
                                    'h-40',
                                    'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900',
                                    'focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                    )}
                                >
                                    {places.map((p) => (
                                    <ListboxOption
                                        key={p.event_name}
                                        value={p}
                                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                    >
                                        <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                        <div className="text-sm/6 text-white">{p.event_name}</div>
                                    </ListboxOption>
                                    ))}
                                </ListboxOptions>
                                </Listbox>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={prevEvent} 
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={learnMore} 
                                        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                                    >
                                        Learn More
                                    </button>
                                    <button 
                                        onClick={nextEvent} 
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="hidden lg:block absolute top-10 z-10 text-white text-xl px-4 py-2 m-10 rounded-md">
                        <div className="w-[300px] overflow-hidden rounded-lg shadow-sm bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-700">
                            <div className="grid grid-rows-auto gap-5 px-4 py-5 sm:p-6">
                            <div className="w-full max-w-md px-4">
                            <Listbox value={selectedEvent} onChange={setSelectedEvent}>
                                <ListboxButton
                                    className={clsx(
                                    'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                    )}
                                >
                                    {selectedEvent.event_name}
                                    <ChevronDownIcon
                                    className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                    aria-hidden="true"
                                    />
                                </ListboxButton>
                                <ListboxOptions
                                    anchor="bottom"
                                    transition
                                    className={clsx(
                                    'absolute z-50 w-[var(--button-width)] rounded-xl border border-white/5 bg-white/10 backdrop-blur-md p-1',
                                    // Set a fixed height that will show ~5 items
                                    'h-40',
                                    'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900',
                                    'focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                    )}
                                >
                                    {places.map((p) => (
                                    <ListboxOption
                                        key={p.event_name}
                                        value={p}
                                        className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                    >
                                        <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                        <div className="text-sm/6 text-white">{p.event_name}</div>
                                    </ListboxOption>
                                    ))}
                                </ListboxOptions>
                                </Listbox>

                                    </div>
                                <img src={places[currentIndex].img} className="w-[250px] h-[50px]" alt={places[currentIndex].name} />
                                <p className="text-center text-2xl">{places[currentIndex].type}</p>
                                <p className="text-md font-bold text-center">{places[currentIndex].name}</p>
                                <p className="text-center text-sm">{places[currentIndex].desc}</p>
                                <div className="flex justify-center">
                                    <button 
                                        onClick={learnMore} 
                                        className="px-16 py-2 bg-black/30 border-white border-[1px] rounded-full text-white hover:bg-white hover:text-black transition"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    ); */
    // ... previous code remains the same until return statement ...

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div 
                style={{ 
                    opacity: opacity,
                    transition: 'opacity 1s ease-in-out',
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                {showVanishingPoint ? (
                    <VP />
                ) : (
                    <>
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
                                        globeImageUrl="/earth-night.jpg"
                                        htmlElementsData={places}
                                        htmlElement={(place: Place) => {
                                            const el = document.createElement("div");

                                            if (place.lat === null || place.lng === null) return el;

                                            el.style.width = "250px";
                                            el.style.height = "50px";
                                            el.style.display = "flex";
                                            el.style.alignItems = "center";
                                            el.style.justifyContent = "center";
                                            el.style.transform = `translate(-50%, ${place.stackIndex * 100}%)`;
                                            el.style.pointerEvents = "auto";
                                            el.title = place.name;

                                            const img = document.createElement("img");
                                            img.src = place.img;
                                            img.style.width = "110%";
                                            img.style.height = "110%";
                                            img.style.objectFit = "contain";
                                            img.style.cursor = "pointer";

                                            img.addEventListener("click", (event) => {
                                                event.stopPropagation();
                                                handleLabelClick(place);
                                            });

                                            el.appendChild(img);
                                            return el;
                                        }}
                                    />
                                </div>
                            </Suspense>
                        </div>
                    </>
                )}
            </div>

            {!isTransitioning && (
                <>
                    <div className="hidden lg:block">
                        <div className="absolute bottom-10 z-20 flex justify-center gap-4 w-full">
                            <button 
                                onClick={prevEvent} 
                                className="px-6 py-2 bg-black/30 hover:bg-gray-800/80 text-white rounded-full border-[1px] border-white transition"
                            >
                                Previous Event
                            </button>
                            <button 
                                onClick={nextEvent} 
                                className="px-6 py-2 hover:bg-gray-800 bg-white text-black hover:text-white rounded-full border-[1px] border-white transition"
                            >
                                Next Event
                            </button>
                        </div>
                    </div>

                    <div className="block lg:hidden">
                        <div className="absolute bottom-10 z-20 flex justify-center w-full">
                            <div className="grid grid-rows-2 gap-5"> 
                                <Listbox value={selectedEvent} onChange={setSelectedEvent}>
                                    <ListboxButton
                                        className={clsx(
                                            'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                        )}
                                    >
                                        {selectedEvent.event_name}
                                        <ChevronDownIcon
                                            className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                            aria-hidden="true"
                                        />
                                    </ListboxButton>
                                    <ListboxOptions
                                        className={clsx(
                                            'absolute z-50 w-[var(--button-width)] rounded-xl border border-white/5 bg-white/10 backdrop-blur-md p-1',
                                            'h-40',
                                            'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900',
                                            'focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                        )}
                                    >
                                        {places.map((p) => (
                                            <ListboxOption
                                                key={p.event_name}
                                                value={p}
                                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                            >
                                                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                                <div className="text-sm/6 text-white">{p.event_name}</div>
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Listbox>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={prevEvent} 
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={learnMore} 
                                        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                                    >
                                        Learn More
                                    </button>
                                    <button 
                                        onClick={nextEvent} 
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="hidden lg:block absolute top-10 z-10 text-white text-xl px-4 py-2 m-10 rounded-md">
                        <div className="w-[300px] overflow-hidden rounded-lg shadow-sm bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-700">
                            <div className="grid grid-rows-auto gap-5 px-4 py-5 sm:p-6">
                                <div className="w-full max-w-md px-4">
                                    <Listbox value={selectedEvent} onChange={setSelectedEvent}>
                                        <ListboxButton
                                            className={clsx(
                                                'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                                            )}
                                        >
                                            {selectedEvent.event_name}
                                            <ChevronDownIcon
                                                className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                                aria-hidden="true"
                                            />
                                        </ListboxButton>
                                        <ListboxOptions
                                            className={clsx(
                                                'absolute z-50 w-[var(--button-width)] rounded-xl border border-white/5 bg-white/10 backdrop-blur-md p-1',
                                                'h-40',
                                                'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900',
                                                'focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                            )}
                                        >
                                            {places.map((p) => (
                                                <ListboxOption
                                                    key={p.event_name}
                                                    value={p}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                                >
                                                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                                    <div className="text-sm/6 text-white">{p.event_name}</div>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </Listbox>
                                </div>
                                <img 
                                    src={places[currentIndex].img} 
                                    className="w-[250px] h-[50px]" 
                                    alt={places[currentIndex].name} 
                                />
                                <p className="text-center text-2xl">{places[currentIndex].type}</p>
                                <p className="text-md font-bold text-center">{places[currentIndex].name}</p>
                                <p className="text-center text-sm">{places[currentIndex].desc}</p>
                                <div className="flex justify-center">
                                    <button 
                                        onClick={learnMore} 
                                        className="px-16 py-2 bg-black/30 border-white border-[1px] rounded-full text-white hover:bg-white hover:text-black transition"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}