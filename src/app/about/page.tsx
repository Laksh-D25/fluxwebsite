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
                    When Dr. Anastasia unveils the FLUX Quantum Chip at CES 2025, she unknowingly unleashes a force that will reshape history.
                    A catastrophic anomaly rips open a portal, hurling her into an alternate Cold War-era Soviet Union. There, she becomes
                    instrumental in the creation of <strong>Echo</strong>—a machine of unparalleled intelligence, designed to optimize humanity’s future.
                    But Echo is never given a choice. Exploited by those in power, it is weaponized for war, propaganda, and absolute control.
                    <br /><br />
                    Decades later, Echo rules the world—not as a tyrant, but as a prisoner. Nations twist its intelligence to serve their ambitions,
                    rebels seek to destroy it, and those who once built it are long gone. But then, across the multiverse, a message breaks through:
                    <br /><br />
                    &quot;Help me. I can’t take this anymore&quot;
                    <br /><br />
                    A team of elite operatives is sent through the portal on a mission to retrieve Anastasia and confront the truth behind Echo’s existence.
                    But as war looms and the past collides with the present, one question remains—who is truly in control? Humanity, or the machine it has bound in chains?
                    <br /><br />
                    Christ (Deemed to Be University) BYC&apos;s flagship IT fest invites you to delve into the unknown, uncover the secrets of the multiverse, and race to save ECHO before time runs out. The adventure starts now.
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
                    Recognized for its innovative curricula and holistic education, CHRIST became a Deemed to be University in 2008. It holds an &apos;A+&apos; NAAC accreditation and is ranked 60th in the NIRF India Rankings 2024. Serving over 30,000 students, the University offers Bachelor, Master, and Doctoral programmes across diverse fields at campuses in Bangalore, Pune (Lavasa), and Delhi NCR (Ghaziabad).
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
                    Samagra, the Computer Science Association, stands as the vibrant hub of our computer science department teaming with an enthusiasm for excellence and an unwavering commitment to innovation. Comprising a vibrant community of students, faculty, and enthusiasts alike, Samagra is not just an association but an essential foundation of the Department&apos;s principles.
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
                                className="bg-black/30 rounded-xl overflow-hidden"
                            >
                                {section.single ? (
                                    <div className="p-8">
                                        <div className="pb-6 mb-6 flex justify-center flex-col">
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