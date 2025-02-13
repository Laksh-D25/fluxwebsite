'use client'
import dynamic from "next/dynamic";
import { useMemo } from "react";
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });
export default function AboutPage() {
    
    const MemoizedStarField = useMemo(() => (
        <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
    ), []);

    const aboutContent = [
        {
            title: "About Flux",
            content: (
                <p className="text-justify text-lg lg:text-xl xl:text-2xl leading-relaxed mb-12">
                    In 2024, Google's revolutionary quantum chip promised to unlock the multiverse. Instead, it vanished, leaving behind mysterious "Flux Rifts" that defied explanation. By 2025, these rifts began appearing across the globe—wild, unpredictable, and dangerous.
                    <br /><br />
                    The chip didn't disappear—it reappeared in 1955 Soviet Union, where it was reverse-engineered into ECHO, a groundbreaking AI that reshaped history. But something went wrong. The rifts spiraled out of control, and now the multiverse itself is unraveling.
                    <br /><br />
                    As the largest rift yet opens, explorers prepare to step inside. At the edge of this cosmic void, a voice calls out:
                    <br />
                    "Welcome, travelers. I need your help."
                    <br /><br />
                    Christ (Deemed to Be University) BYC's flagship IT fest invites you to delve into the unknown, uncover the secrets of the multiverse, and race to save ECHO before time runs out. The adventure starts now.
                </p>
            ),
            img: (
                <h1 
                    className="font-quad text-6xl lg:text-7xl xl:text-8xl mt-2 -mb-2" 
                    style={{ fontFamily: 'var(--font-quad)' }}
                >
                    Flux
                </h1>
            ),
            single: true
        },
        {
            title: "CHRIST",
            subtitle: "Deemed to be University, Yeshwanthpur Campus",
            content: (
                <p className="text-justify text-lg lg:text-xl xl:text-2xl leading-relaxed mb-12">
                    CHRIST (Deemed to be University), established in 1969, was inspired by the educational vision of St. Kuriakose Elias Chavara, a 19th-century South Indian educationalist and social reformer. He founded the Carmelites of Mary Immaculate (CMI) in 1831, which administers the University.
                    <br /><br />
                    Recognized for its innovative curricula and holistic education, CHRIST became a Deemed to be University in 2008. It holds an 'A+' NAAC accreditation and is ranked 60th in the NIRF India Rankings 2024. Serving over 30,000 students, the University offers Bachelor, Master, and Doctoral programmes across diverse fields at campuses in Bangalore, Pune (Lavasa), and Delhi NCR (Ghaziabad).
                </p>
            ),
            img: (
                <img 
                    src="/img/icon.webp" 
                    alt="CHRIST University Logo" 
                    className="h-24 w-auto lg:h-32 xl:h-40"
                />
            ),
            single: true
        },
        {
            title: "Department of Computer Science",
            content: (
                <p className="text-justify text-lg lg:text-xl xl:text-2xl leading-relaxed mb-12">
                    The Department of Computer Science at CHRIST (Deemed to be University) is committed to nurturing outstanding computer professionals imbued with ethical principles and human values, thus playing a crucial role in shaping the future of our nation. Our educational methodology revolves around equipping young minds to navigate the dynamic challenges of the IT industry.
                    <br /><br />
                    We aim to instill a global perspective while firmly grounding students in the rich tapestry of Indian values. Focusing on fostering innovation and addressing intricate challenges, our department plays a pivotal role in shaping students and influencing the technological landscape.
                </p>
            ),
            single: true
        },
        {
            title: "Samagra",
            subtitle: "Computer Science Association",
            content: (
                <p className="text-justify text-lg lg:text-xl xl:text-2xl leading-relaxed mb-12">
                    Samagra, the Computer Science Association, stands as the vibrant hub of our computer science department teaming with an enthusiasm for excellence and an unwavering commitment to innovation. Comprising a vibrant community of students, faculty, and enthusiasts alike, Samagra is not just an association but an essential foundation of the Department's principles.
                    <br /><br />
                    At its core, Samagra is dedicated to fostering a collaborative ecosystem where ideas flourish, talents thrive, and boundaries are pushed. With a vision to enrich the academic experience and nurture a culture of continuous learning, Samagra serves as a catalyst for personal and professional growth within the computer science domain.
                </p>
            ),
            img: (
                <img 
                    src="/img/samagra.png" 
                    alt="Samagra Logo" 
                    className="h-24 w-auto lg:h-32 xl:h-40"
                />
            ),
            single: true
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>
            
            <div className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    
                    
                    <div className="space-y-8">
                        {aboutContent.map((section, index) => (
                            <div 
                                key={index} 
                                className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-700 overflow-hidden"
                            >
                                {section.single ? (
                                    <div className="p-8">
                                        <div className="border-b border-gray-700 pb-6 mb-6 flex justify-center flex-col">
                                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                                                {section.title}
                                            </h2>
                                            {section.subtitle && (
                                                <h3 className="text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-2 text-center">
                                                    {section.subtitle}
                                                </h3>
                                            )}
                                        </div>
                                        <div className="px-4">
                                            {section.content}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="border-b border-gray-700">
                                            <div className="p-8 flex flex-col lg:flex-row items-center gap-6">
                                                <div className="flex-shrink-0 p-4 bg-black/20 rounded-lg border border-gray-600 items-center">
                                                    {section.img}
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                                                        {section.title}
                                                    </h2>
                                                    {section.subtitle && (
                                                        <h3 className="text-xl lg:text-2xl xl:text-3xl text-gray-300 mt-2 text-center lg:text-left">
                                                            {section.subtitle}
                                                        </h3>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            {section.content}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}