'use client';

import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

const EventRegistration = () => {
    const event_list = [
        { img: '7.png', type: 'normal', teamSize: 3, name: 'Facility Zero' },
        { img: '4.png', type: 'normal', teamSize: 2, name: 'Build \'n\' Bid' },
        { img: '5.png', type: 'normal', teamSize: 1, name: 'Technocrats Of Turmoil' },
        { img: '8.png', type: 'mun', teamSize: 2, name: 'Digital Dystopia' },
        { img: '2.png', type: 'normal', teamSize: 2, name: 'Wort und Macht' },
        { img: '13.png', type: 'normal', teamSize: 1, name: 'Pravda' },
        { img: '6.png', type: 'normal', teamSize: 2, name: 'Dopros' },
        { img: '1.png', type: 'normal', teamSize: 1, name: 'Startathon' },
        { img: '3.png', type: 'normal', teamSize: 2, name: 'Algol' },
        { img: '11.png', type: 'bgmi', teamSize: 4, name: 'BGMI' },
        { img: '9.png', type: 'special', teamSize: 2, passesNeeded: 1, name: 'Vanishing Point' }
    ];

    // Adding Race Against Time separately for display
    const raceAgainstTime = {
        img: '12.png',
        type: 'free',
        teamSize: 1,
        name: 'Race Against Time'
    };

    const [teamCounts, setTeamCounts] = useState({});
    const [passes, setPasses] = useState({
        normal: 0,
        mun: 0,
        bgmi: 0
    });

    const getPassCalculation = (event, numTeams) => {
        switch (event.type) {
            case 'normal':
                return `${numTeams} teams × ${event.teamSize} members = ${numTeams * event.teamSize} normal passes`;
            case 'mun':
                const passesPerTeam = event.teamSize === 1 ? 1 : 2;
                return `${numTeams} teams × ${passesPerTeam} ${event.teamSize === 1 ? 'pass' : 'passes'} per team = ${numTeams * passesPerTeam} MUN passes`;
            case 'bgmi':
                return `${numTeams} teams × 4 members = ${numTeams} BGMI ${numTeams === 1 ? 'pass' : 'passes'} (1 pass per team of 4)`;
            case 'special':
                return `${numTeams} teams × 1 pass per team = ${numTeams} normal ${numTeams === 1 ? 'pass' : 'passes'} (1 pass covers 2 people)`;
            default:
                return '';
        }
    };

    const calculatePasses = () => {
        let normalPasses = 0;
        let munPasses = 0;
        let bgmiPasses = 0;

        Object.entries(teamCounts).forEach(([eventImg, count]) => {
            if (count > 0) {
                const event = event_list.find(e => e.img === eventImg);
                if (event) {
                    switch (event.type) {
                        case 'normal':
                            normalPasses += count * event.teamSize;
                            break;
                        case 'mun':
                            munPasses += count * (event.teamSize === 1 ? 1 : 2);
                            break;
                        case 'bgmi':
                            bgmiPasses += count;
                            break;
                        case 'special':
                            normalPasses += count * event.passesNeeded;
                            break;
                    }
                }
            }
        });

        setPasses({ normal: normalPasses, mun: munPasses, bgmi: bgmiPasses });
    };

    useEffect(() => {
        calculatePasses();
    }, [teamCounts]);

    const updateTeamCount = (eventImg, count) => {
        setTeamCounts(prev => ({
            ...prev,
            [eventImg]: count
        }));
    };

    const getSelectedEvents = () => {
        return Object.entries(teamCounts)
            .filter(([_, count]) => count > 0)
            .map(([img]) => img);
    };

    const MemoizedStarField = useMemo(() => (
                <Suspense fallback={null}>
                    <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                </Suspense>
        ), []);

    const hasAnyEvents = getSelectedEvents().length > 0;

    return (
        <div className="relative bg-black">
        <div className="fixed inset-0 z-0">
                {MemoizedStarField}
        </div>
        <div className="p-4 m-20">
            <h2 className="text-2xl font-bold mb-4">Event Registration</h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        {[...event_list, raceAgainstTime].map((event, index) => (
                            <div 
                                key={index} 
                                className="p-4 rounded-lg shadow flex flex-col items-center border border-gray-200 backdrop-blur-sm bg-white/10"
                            >
                                <img 
                                    src={event.img} 
                                    alt={event.name}
                                    className="w-64 object-cover rounded-lg mb-2"
                                />
                                <div className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        {event.type !== 'free' && (
                                            <>
                                            <span className="font-medium">Number Of Teams</span>
                                            <select 
                                                className="rounded border border-gray-300 p-1 bg-transparent"
                                                value={teamCounts[event.img] || 0}
                                                onChange={(e) => updateTeamCount(event.img, parseInt(e.target.value))}
                                            >
                                                {[0,1,2,3,4,5].map(num => (
                                                    <option key={num} value={num}>{num} Teams</option>
                                                ))}
                                            </select>
                                            </>
                                        )}
                                    </div>
                                    {event.type === 'free' ? (
                                        <p className="text-sm text-white mt-2">
                                            Free participation for members of registered teams
                                        </p>
                                    ): (<p></p>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border rounded-lg p-4 backdrop-blur-sm bg-white/10">
                    <h3 className="text-xl font-bold mb-4">Selected Events</h3>
                    <div className="space-y-4">
                        {getSelectedEvents().map((eventImg, index) => {
                            const event = event_list.find(e => e.img === eventImg);
                            const teamCount = teamCounts[eventImg];
                            return (
                                <div key={index} className="border-b pb-2">
                                    <p className="font-medium mb-1">{event?.name}</p>
                                    <p className="text-sm text-white">
                                        {getPassCalculation(event, teamCount)}
                                    </p>
                                </div>
                            );
                        })}
                        {hasAnyEvents && (
                            <div className="border-b pb-2">
                                <p className="font-medium">Race Against Time</p>
                                <p className="text-sm text-white">
                                    Free participation for all members of registered teams
                                </p>
                            </div>
                        )}

                        <div className="pt-4">
                            <h4 className="font-bold mb-2">Total Passes Required:</h4>
                            {passes.normal > 0 && (
                                <p className="text-sm">Normal Passes: {passes.normal}</p>
                            )}
                            {passes.mun > 0 && (
                                <p className="text-sm">MUN Passes: {passes.mun}</p>
                            )}
                            {passes.bgmi > 0 && (
                                <p className="text-sm">BGMI Passes: {passes.bgmi}</p>
                            )}
                            {!hasAnyEvents && (
                                <p className="text-white text-sm">Select events using the dropdowns</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default EventRegistration;