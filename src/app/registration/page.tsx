'use client';

import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

interface PassType {
    bundle: string;
    price: number;
  }
  
  const passType: PassType[] = [
    { bundle: "1 PASS", price: 200 },
    { bundle: "3 PASSES", price: 500 },
    { bundle: "BGMI/MUN PASS", price: 500 },
    { bundle: "10 PASSES", price: 1700 },
  ];

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
        { img: '9.png', type: 'special', teamSize: 2, passesNeeded: 1, name: 'The Vanishing Point' }
    ];

    // Adding Race Against Time separately for display
    const raceAgainstTime = {
        img: '12.png',
        type: 'free',
        teamSize: 1,
        name: 'Race Against Time'
    };

    const [teamCounts, setTeamCounts] = useState({});
    const [isEventsExpanded, setIsEventsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [passes, setPasses] = useState({
        normal: 0,
        mun: 0,
        bgmi: 0
    });

    const getPassCalculation = (event, numTeams) => {
        switch (event.type) {
            case 'normal':
                return `${event.teamSize === 1 ? `${numTeams} Participants = ${numTeams} FLUX passes` : `${numTeams} teams × ${event.teamSize} members = ${numTeams * event.teamSize} FLUX passes`}`
            case 'mun':
                const passesPerTeam = event.teamSize === 1 ? 1 : 2;
                return `${numTeams} teams × ${passesPerTeam} ${event.teamSize === 1 ? 'pass' : 'passes'} per team = ${numTeams * passesPerTeam} MUN passes`;
            case 'bgmi':
                return `${numTeams} teams × 4 members = ${numTeams} BGMI ${numTeams === 1 ? 'pass' : 'passes'} (1 pass per team of 4)`;
            case 'special':
                return `${numTeams} teams × 1 pass per team = ${numTeams} FLUX ${numTeams === 1 ? 'pass' : 'passes'} (1 pass covers 2 people)`;
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

    const recommendFluxPasses = () => {
        const totalPasses = passes.normal + passes.mun + passes.bgmi;
        const recommendations = [];
      
        // Calculate passes for each event type
        const munPassNeeded = passes.mun;   // e.g. 2 passes per MUN team
        const fluxPassNeeded = passes.normal;
        const bgmiPassNeeded = passes.bgmi; // e.g. 1 pass per BGMI team
      
        // 1) Helper function for leftover 0..9
        function leftoverCost(leftover) {
          switch (leftover) {
            case 0: return { cost: 0,   breakdown: [] };
            case 1: return { cost: 200, breakdown: ["1 × 1 FLUX Pass (₹200)"] };
            case 2: return { cost: 400, breakdown: ["2 × 1 FLUX Pass (₹400)"] };
            case 3: return { cost: 500, breakdown: ["1 × 3 FLUX Pass Pack (₹500)"] };
            case 4: return { cost: 700, breakdown: ["1 × 3 FLUX Pass Pack (₹500)", "1 × FLUX Pass (₹200)"] };
            case 5: return { cost: 900, breakdown: ["1 × 3 FLUX Pass Pack (₹500)", "2 × FLUX Pass (₹400)"] };
            case 6: return { cost: 1000, breakdown: ["2 × 3 FLUX Pass Pack (₹1000)"] };
            case 7: return { cost: 1200, breakdown: ["2 × 3 FLUX Pass Pack (₹1000)", "1 × FLUX Pass (₹200)"] };
            case 8: return { cost: 1400, breakdown: ["2 × 3 FLUX Pass Pack (₹1000)", "2 × FLUX Pass (₹400)"] };
            case 9: return { cost: 1500, breakdown: ["3 × 3 FLUX Pass Pack (₹1500)"] };
            default: return { cost: 0,   breakdown: [] }; // fallback
          }
        }
      
        // 2) Function to figure out total FLUX passes with minimal cost
        function getFluxPackRecommendation(passCount) {
          if (passCount <= 0) {
            return { recommendation: "", cost: 0 };
          }
      
          // How many 10-packs do we buy?
          const tenPacks = Math.floor(passCount / 10);
          const leftover  = passCount % 10;
      
          // Cost for the 10-packs
          let cost = tenPacks * 1700;
      
          // Build initial breakdown for 10-packs
          const breakdown = [];
          if (tenPacks > 0) {
            breakdown.push(`${tenPacks} × 10 FLUX Pass Pack (₹${cost})`);
          }
      
          // Now handle leftover
          const leftoverObj = leftoverCost(leftover);
          cost += leftoverObj.cost;
          // Merge leftover breakdown, if any
          breakdown.push(...leftoverObj.breakdown);
      
          // Build final recommendation text
          const recommendationText =
            breakdown.length > 0
              ? "• " + breakdown.join(" + ")
              : "";
      
          return {
            recommendation: recommendationText,
            cost,
          };
        }
      
        // Generate overall recommendations
        if (totalPasses > 0) {
          // FLUX Pass recommendation
          const fluxPack = getFluxPackRecommendation(fluxPassNeeded);
          if (fluxPack.recommendation) {
            recommendations.push(fluxPack.recommendation);
          }
      
          // MUN and BGMI pass details
          const specificPasses = [];
          if (bgmiPassNeeded > 0) {
            specificPasses.push(`• ${bgmiPassNeeded} × BGMI Pass (₹${bgmiPassNeeded * 500})`);
          }
          if (munPassNeeded > 0) {
            specificPasses.push(`• ${munPassNeeded} × MUN Pass (₹${munPassNeeded * 500})`);
          }
          recommendations.push(...specificPasses);
      
          // Calculate total cost
          const totalCost = fluxPack.cost
                          + bgmiPassNeeded * 500
                          + munPassNeeded * 500;
          recommendations.push(`• Total Cost: ₹${totalCost}`);
        } else {
          // Fallback if no events selected
          recommendations.push("• No events selected. Choose your events to see pass recommendations.");
        }
      
        return recommendations;
      };

      
      
      
    
    
    const MemoizedStarField = useMemo(() => (
                <Suspense fallback={null}>
                    <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
                </Suspense>
        ), []);

    const hasAnyEvents = getSelectedEvents().length > 0;
    const categories = [{name: 'Instructions'}, {name: 'Register For FLUX'}]

    return (
        <div className="relative bg-black">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>
            <div className="relative p-4 md:p-8 lg:p-20 z-10">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl text-center my-5">Register For FLUX</h2> 
                <TabGroup className="my-12">
                    <TabList className="flex justify-center gap-4">
                                {categories.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className="rounded-full py-1 px-3 text-2xl font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                                >
                                    {name}
                                </Tab>
                                ))}
                    </TabList>
                    <TabPanels>
                        <TabPanel key="Instructions">
                        <div className="relative p-4 md:p-8 lg:p-20">
                            <div className="max-w-4xl mx-auto">
                                {/* Pass Information Section */}
                                <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6 mb-8">
                                <h2 className="text-3xl font-semibold mb-8 text-center text-white">How To Register For FLUX</h2>

                                {/* Pass Types */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">Types of Passes</h3>
                                    <div className="space-y-4">
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <h4 className="font-medium mb-2 text-white">FLUX Pass</h4>
                                        <p className="text-gray-300">Valid for all events except BGMI and MUN</p>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                        <h4 className="font-medium mb-2 text-white">MUN/BGMI Pass</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Required for MUN and BGMI events</li>
                                        <li>MUN: One pass needed per delegate. For duo participation, two passes required</li>
                                        <li>BGMI: A single pass covers a team of four members</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                {/* Pass Requirements */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">Pass Requirements for Different Events</h3>
                                    <div className="bg-gray-800/50 rounded-lg p-4">
                                    <ul className="space-y-3 text-gray-300">
                                        <li><span className="font-medium text-white">Solo Events:</span> 1 pass per participant (e.g., Technocrats of Turmoil – IT Manager)</li>
                                        <li><span className="font-medium text-white">Duo Events:</span> 2 passes per team (e.g., Wort Und Macht – Web Development)</li>
                                        <li><span className="font-medium text-white">Trio Events:</span> 3 passes per team (e.g., Facility Zero – Escape Room)</li>
                                        <li><span className="font-medium text-white">BGMI:</span> 1 pass for a team of 4 players</li>
                                        <li><span className="font-medium text-white">MUN:</span> 1 pass per delegate; 2 passes for teams of two</li>
                                    </ul>
                                    </div>
                                </div>

                                {/* Pricing Table */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4 text-white">Pass Pricing</h3>
                                    <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-800/50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">Pass Bundle</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-white">Price</th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-700">
                                        {passType.map((pass) => (
                                            <tr key={pass.bundle} className="bg-gray-800/30">
                                            <td className="px-6 py-4 text-white">{pass.bundle}</td>
                                            <td className="px-6 py-4 text-white">₹{pass.price}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>

                                {/* Registration Instructions Section */}
                                <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                                <h2 className="text-3xl font-semibold mb-8 text-center text-white">How to Register</h2>

                                <div className="space-y-6">
                                    {[
                                    {
                                        step: "Step 1: Calculate Required Passes",
                                        desc: "Use the calculator to determine how many FLUX passes, BGMI passes, and MUN Passes you need"
                                    },
                                    {
                                        step: "Step 2: Review Recommendations",
                                        desc: "The calculator will show you the optimal combination of pass bundles to purchase"
                                    },
                                    {
                                        step: "Step 3: Access Payment Portal",
                                        desc: "Click on \"Register Now\" to proceed to the payment portal"
                                    },
                                    {
                                        step: "Step 4: Payment Portal Navigation",
                                        desc: "You will be directed to the payment portal"
                                    },
                                    {
                                        step: "Step 5: Select Fee Type",
                                        desc: 'Click on the dropdown box stating "Select Fee name" and select "FEST"'
                                    },
                                    {
                                        step: "Step 6: Choose Pass Types",
                                        desc: "Select from available options in Categories",
                                        list: [
                                        "FLUX 2025 (Group Pass)(3 Passes)",
                                        "FLUX 2025 (BGMI)",
                                        "FLUX 2025 (MUN)",
                                        "FLUX 2025 (Single Pass)",
                                        "FLUX 2025 (Group Pass)(10 Passes)"
                                        ]
                                    },
                                    {
                                        step: "Step 7: Complete CAPTCHA",
                                        desc: "Fill out the CAPTCHA verification"
                                    },
                                    {
                                        step: "Step 8: Submit Details",
                                        desc: "Fill out all required details correctly and proceed with payment"
                                    },
                                    {
                                        step: "Step 9: Save Receipt",
                                        desc: "Download and save your payment receipt"
                                    },
                                    {
                                        step: "Step 10: Event Registration",
                                        desc: "You will receive a confirmation email with a link within a few days to select your events. For bulk signups, you'll be able to specify which university students are participating in each event."
                                    }
                                    ].map((step, index) => (
                                    <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                                        <h4 className="font-medium text-blue-400 mb-2">{step.step}</h4>
                                        <p className="text-gray-300">{step.desc}</p>
                                        {step.list && (
                                        <ul className="list-disc list-inside mt-2 text-gray-300">
                                            {step.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        )}
                                    </div>
                                    ))}
                                </div>

                                {/* Notes */}
                                <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
                                    <h4 className="font-medium mb-2 text-white">Important Notes:</h4>
                                    <ul className="space-y-2 text-gray-300">
                                    <li>• It is strongly recommended to book passes in advance</li>
                                    <li>• Certain event slots are limited and may not be available for on-spot registration</li>
                                    <li>• Pre-booking helps minimize wait times during registration</li>
                                    <li>• Group bookings may be eligible for special discounts</li>
                                    <li>• Keep your payment receipt safe</li>
                                    <li>• For bulk registrations, maintain a list of participating students</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </TabPanel>
                        <TabPanel key="Register For FLUX">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
                                <div className="lg:col-span-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[...event_list, raceAgainstTime].map((event, index) => (
                                            <div 
                                                key={index} 
                                                className="p-4 shadow flex flex-col items-center border bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700"
                                            >
                                                <img 
                                                    src={event.img} 
                                                    alt={event.name}
                                                    className="w-full max-w-64 h-auto object-cover rounded-lg mb-2"
                                                />
                                                <div className="w-full">
                                                    <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
                                                        {event.type !== 'free' && (
                                                            <>
                                                            <span className="font-medium mr-2 mb-2 sm:mb-0 truncate">
                                                                {event.teamSize === 1 ? 'Number of Participants' : 'Number of Teams'}
                                                            </span>
                                                            <select 
                                                                className="w-full sm:w-48 rounded-md border border-gray-700 backdrop-blur-sm bg-transparent py-1 pl-2 pr-8 cursor-pointer outline-none hover:border-gray-400 focus:border-blue-500"
                                                                value={teamCounts[event.img] || 0}
                                                                onChange={(e) => updateTeamCount(event.img, parseInt(e.target.value))}
                                                            >
                                                                {[0,1,2,3,4,5].map(num => (
                                                                    <option key={num} value={num} className="bg-black">
                                                                        {event.teamSize === 1 
                                                                            ? `${num} Participant${num !== 1 ? 's' : ''}` 
                                                                            : `${num} Teams`
                                                                        }
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            </>
                                                        )}
                                                    </div>
                                                    {event.type === 'free' ? (
                                                        <p className="text-sm text-white mt-2">
                                                            Free participation for members of registered teams
                                                        </p>
                                                    ): null}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                
                                <div className="p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <h3 className="text-xl font-bold mb-4 text-white">Selected Events</h3>
                                    <div className="space-y-4">
                                        {getSelectedEvents().length > 0 ? (
                                            <>
                                                <div 
                                                    className="flex justify-between items-center cursor-pointer"
                                                    onClick={() => setIsEventsExpanded(!isEventsExpanded)}
                                                >
                                                    <span className="font-medium text-white">
                                                        {getSelectedEvents().length} Event{getSelectedEvents().length !== 1 ? 's' : ''} Selected
                                                    </span>
                                                    <span className="text-sm text-white">
                                                        {isEventsExpanded ? '▼ Collapse' : '► Expand'}
                                                    </span>
                                                </div>
                
                                                {isEventsExpanded && (
                                                    <>
                                                        {getSelectedEvents().map((eventImg, index) => {
                                                            const event = event_list.find(e => e.img === eventImg);
                                                            const teamCount = teamCounts[eventImg];
                                                            return (
                                                                <div key={index} className="border-b pb-2">
                                                                    <p className="font-medium mb-1 text-white">{event?.name}</p>
                                                                    <p className="text-sm text-white">
                                                                        {getPassCalculation(event, teamCount)}
                                                                    </p>
                                                                </div>
                                                            );
                                                        })}
                                                        {hasAnyEvents && (
                                                            <div className="border-b pb-2">
                                                                <p className="font-medium text-white">Race Against Time</p>
                                                                <p className="text-sm text-white">
                                                                    Free participation for all members of registered teams
                                                                </p>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <p className="text-white text-sm">Select events using the dropdowns</p>
                                        )}
                
                                        <div className="pt-4">
                                            <h4 className="font-bold mb-2 text-white">Total Passes Required:</h4>
                                            {passes.normal > 0 && (
                                                <p className="text-sm text-white">FLUX Passes: {passes.normal}</p>
                                            )}
                                            {passes.mun > 0 && (
                                                <p className="text-sm text-white">MUN Passes: {passes.mun}</p>
                                            )}
                                            {passes.bgmi > 0 && (
                                                <p className="text-sm text-white">BGMI Passes: {passes.bgmi}</p>
                                            )}
                                        </div>
                                        
                                        <div className="border rounded-lg p-4 backdrop-blur-sm bg-white/10">
                                            <h3 className="text-xl font-bold mb-4 text-white">FLUX Pass Recommendations</h3>
                                            <div className="space-y-4">
                                                {recommendFluxPasses().map((recommendation, index) => (
                                                    <p key={index} className="text-sm text-white">{recommendation}</p>
                                                ))}
                                                {!hasAnyEvents && (
                                                    <p className="text-white text-sm">Select events to see pass recommendations</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button 
                                                onClick={() => {
                                                    if (typeof window !== 'undefined') {
                                                        window.open("https://feebook.southindianbank.com/FeeBookUser/org?id=742", '_blank', 'noopener,noreferrer');
                                                    }
                                                }}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                                            >
                                                Register Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </TabPanel>
                </TabPanels>
                </TabGroup>
            </div>
        </div>
    )};

export default EventRegistration;