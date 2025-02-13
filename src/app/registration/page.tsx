'use client';
import React, { useState, useEffect } from 'react';

const EventRegistration = () => {
    const event_list = [
        { img: '12.png', type: 'free', teamSize: 1, name: 'Race Against Time' },
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

    const [selectedEvents, setSelectedEvents] = useState([]);
    // Store teams as arrays of member counts
    const [teamConfigs, setTeamConfigs] = useState({});
    const [passes, setPasses] = useState({
        normal: 0,
        mun: 0,
        bgmi: 0
    });

    const calculatePasses = () => {
        let normalPasses = 0;
        let munPasses = 0;
        let bgmiPasses = 0;
        let hasAtLeastOneEvent = false;

        selectedEvents.forEach(eventImg => {
            const config = event_list.find(event => event.img === eventImg);
            const teams = teamConfigs[eventImg] || [config.teamSize];
            
            if (config) {
                hasAtLeastOneEvent = true;

                switch (config.type) {
                    case 'normal':
                        normalPasses += teams.reduce((sum, members) => sum + members, 0);
                        break;
                    case 'mun':
                        munPasses += teams.reduce((sum, members) => {
                            return sum + (members === 1 ? 1 : 2); // 1 pass for solo, 2 for duo
                        }, 0);
                        break;
                    case 'bgmi':
                        const totalMembers = teams.reduce((sum, members) => sum + members, 0);
                        bgmiPasses += Math.ceil(totalMembers / 4);
                        break;
                    case 'special':
                        normalPasses += teams.length * config.passesNeeded;
                        break;
                }
            }
        });

        if (selectedEvents.includes('12.png') && selectedEvents.length === 1) {
            normalPasses += 1;
        }

        setPasses({
            normal: normalPasses,
            mun: munPasses,
            bgmi: bgmiPasses
        });
    };

    useEffect(() => {
        calculatePasses();
    }, [selectedEvents, teamConfigs]);

    const toggleEvent = (eventImg) => {
        setSelectedEvents(prev => {
            if (prev.includes(eventImg)) {
                const newSelected = prev.filter(e => e !== eventImg);
                const newConfigs = { ...teamConfigs };
                delete newConfigs[eventImg];
                setTeamConfigs(newConfigs);
                return newSelected;
            } else {
                const event = event_list.find(e => e.img === eventImg);
                setTeamConfigs(prev => ({
                    ...prev,
                    [eventImg]: [event.teamSize]
                }));
                return [...prev, eventImg];
            }
        });
    };

    const updateTeamCount = (eventImg, count) => {
        const event = event_list.find(e => e.img === eventImg);
        const newTeams = Array(count).fill(event.type === 'bgmi' ? 4 : event.teamSize);
        setTeamConfigs(prev => ({
            ...prev,
            [eventImg]: newTeams
        }));
    };

    const updateTeamSize = (eventImg, teamIndex, size) => {
        setTeamConfigs(prev => {
            const newTeams = [...prev[eventImg]];
            newTeams[teamIndex] = parseInt(size);
            return {
                ...prev,
                [eventImg]: newTeams
            };
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Event Registration</h2>
            
            <div className="grid grid-cols-3 gap-4 m-10">
                {event_list.map((event, index) => (
                    <div 
                        key={index} 
                        className={`p-4 rounded-lg shadow hover:shadow-md transition-shadow flex justify-center
                            ${selectedEvents.includes(event.img) ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
                    >
                        <div 
                            className="cursor-pointer "
                            onClick={() => toggleEvent(event.img)}
                        >
                            <img 
                                src={event.img} 
                                alt={event.name}
                                className="w-64 object-cover rounded-lg mb-2"
                            />
                            <p className="text-sm text-center text-gray-600">
                                {event.type === 'free' ? 'Free Event' : 
                                 `Max Team Size: ${event.teamSize}`}
                            </p>
                        </div>

                        {selectedEvents.includes(event.img) && (
                            <div className="mt-2 space-y-2">
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-600">Number of Teams</label>
                                    <select 
                                        className="mt-1 w-full rounded border border-gray-300 p-1"
                                        value={teamConfigs[event.img]?.length || 1}
                                        onChange={(e) => updateTeamCount(event.img, parseInt(e.target.value))}
                                    >
                                        {[1,2,3,4,5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    {teamConfigs[event.img]?.map((size, teamIndex) => (
                                        <div key={teamIndex} className="flex flex-col">
                                            <label className="text-sm text-gray-600">
                                                Team {teamIndex + 1} Size
                                            </label>
                                            <select 
                                                className="mt-1 w-full rounded border border-gray-300 p-1"
                                                value={size}
                                                onChange={(e) => updateTeamSize(event.img, teamIndex, e.target.value)}
                                                disabled={event.type === 'bgmi'}
                                            >
                                                {Array.from({length: event.teamSize}, (_, i) => i + 1).map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Required Passes</h3>
                <div className="space-y-2">
                    {passes.normal > 0 && (
                        <p>Normal Passes needed: {passes.normal}</p>
                    )}
                    {passes.mun > 0 && (
                        <p>MUN Passes needed: {passes.mun}</p>
                    )}
                    {passes.bgmi > 0 && (
                        <p>BGMI Passes needed: {passes.bgmi}</p>
                    )}
                    {selectedEvents.length === 0 && (
                        <p className="text-gray-600">Select events to calculate required passes</p>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Selected Events:</h3>
                <ul className="list-disc pl-6">
                    {selectedEvents.map((eventImg, index) => {
                        const event = event_list.find(e => e.img === eventImg);
                        const teams = teamConfigs[eventImg];
                        return (
                            <li key={index}>
                                {event?.name} ({teams?.length} team{teams?.length > 1 ? 's' : ''}: {
                                    teams?.map((size, i) => `Team ${i + 1}: ${size}`).join(', ')
                                })
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default EventRegistration;