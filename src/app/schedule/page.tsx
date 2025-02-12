'use client';

import dynamic from "next/dynamic";
import { Suspense, useMemo, useState } from "react";
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function ScheduleTable() {
  const [activeDay, setActiveDay] = useState(1);

  const events = [
    {
      title: "Startathon",
      description: "A high-energy event where creativity, innovation, and business acumen collide. Build and pitch your own startup over multiple rounds.",
      time: ["08:00 - 17:30", "08:00 - 15:00"],
      venue: "B Block, 2nd Floor",
      type: "Solo",
      passes: "1",
      days: [1, 2],
      region: "Bangalore, South Asian Union",
      coordinators: ["Cris Grace: +91 90350 10120", "Laksh D: +91 79759 48835"]
    },
    {
      title: "Digital Dystopia",
      description: "Model United Nations debate on AI warfare. Join the UNSC to shape global policy on AI weapons and ethics.",
      time: ["11:00 - 17:30", "09:30 - 15:00"],
      venue: "B Block, 2nd Floor B-220",
      type: "Duo",
      passes: "1 MUN PASS",
      days: [1, 2],
      region: "New York City, Confederate States Of New England",
      coordinators: ["Avinash: +91 86180 61281"]
    },
    {
      title: "ДΟПΡΟС",
      description: "IT Quiz with a Soviet twist. Test your knowledge in this high-stakes Kahoot-style challenge.",
      time: ["11:30 - 14:30"],
      venue: "6th Floor, Seminar Hall",
      type: "Duo",
      passes: "2",
      days: [1],
      region: "Vorkuta, Soviet Union",
      coordinators: ["Md Sohal: +91 99451 57324", "Cheeranjeevi P: +91 78923 04079"]
    },
    {
      title: "Wort und Macht",
      description: "Web-building contest through challenging rounds of HTML, CSS, and JavaScript. Infiltrate the Ministry through your coding skills.",
      time: ["14:30 - 17:30"],
      venue: "Lab 03, A Block Second Floor",
      type: "Duo",
      passes: "2",
      days: [1],
      region: "Berlin, German Democratic Republic",
      coordinators: ["Prakash R Suthar: +91 89718 33784"]
    },
    {
      title: "Facility Zero",
      description: "AI-themed escape room challenge. Break free from Bahoo's facility and uncover its dark secrets.",
      time: ["14:30 - 17:00"],
      venue: "C Block, 2nd Floor",
      type: "Trios",
      passes: "3",
      days: [1],
      region: "Alcatraz Island, California Republic",
      coordinators: ["Anisha Kumari: +91 75269 76187", "Nitija Anil: +91 90317 33605"]
    },
    {
      title: "Algol",
      description: "Coding debugging and CTF challenge. Battle against a resistant system as you hack and debug your way to victory.",
      time: ["09:30 - 13:00"],
      venue: "Lab 01, A Block 2nd Floor",
      type: "Duo",
      passes: "2",
      days: [2],
      region: "Bangalore, South Asian Union",
      coordinators: ["Laksh D: +91 79759 48835", "Rishita Jaiswal: +91 91230 13403"]
    },
    {
      title: "Build 'n' Bid",
      description: "PC Building auction and assembly competition. Bid for components and build the ultimate gaming or server system.",
      time: ["09:30 - 13:00"],
      venue: "Hybrid (Offline: B-210)",
      type: "Duo",
      passes: "2",
      days: [2],
      region: "Houston, Texas Republic",
      coordinators: ["Cris Grace: +91 90350 10120", "Sarthak Jaiswal: +91 93058 97506"]
    },
    {
      title: "Technocrats Of Turmoil",
      description: "IT Manager role-play and group discussion. Prove your leadership skills at the mysterious Bahoo corporation.",
      time: ["10:30 - 14:30"],
      venue: "Seminar Hall 1 & 2",
      type: "Solo",
      passes: "1",
      days: [2],
      region: "New York City, Confederate States Of New England",
      coordinators: ["Prakash R Suthar: +91 89718 33784", "Nitsa Mehndiratta: +91 80537 71120"]
    },
    {
      title: "BGMI",
      description: "Battle Royale gaming tournament. Team up and fight for survival in this intense mobile gaming competition.",
      time: ["11:00 - 17:30", "11:00 - 15:30"],
      venue: "Nexus Commons",
      type: "Quads",
      passes: "1 BGMI PASS",
      days: [1, 2],
      region: "Shenzen, Republic Of China",
      coordinators: ["Nitin Chaurasia: +91 62976 91161"]
    },
    {
      title: "Race Against Time",
      description: "Campus-wide quest with puzzles and challenges. Navigate through Soviet bunkers and cryptic ruins to uncover hidden truths.",
      time: ["All Day"],
      venue: "Event Venues",
      type: "Any",
      passes: "Open with registration",
      days: [1, 2],
      region: "World",
      coordinators: ["Cris Grace: +91 90350 10120", "Laksh D: +91 79759 48835"]
    },
    {
      title: "Pravda",
      description: "Photography and reel-making competition. Capture the essence of Flux through your creative lens.",
      time: ["All Day"],
      venue: "Event Venues",
      type: "Solo",
      passes: "1",
      days: [1, 2],
      region: "World",
      coordinators: ["A Abhinav: +91 73866 03417", "Devdatt Rajesh: +91 96455 17578"]
    }
  ];

  const getSortedEvents = () => {
    const filteredEvents = events.filter(event => event.days.includes(activeDay));
    
    return [...filteredEvents].sort((a, b) => {
      const timeA = a.time[activeDay === 2 && a.time.length === 2 ? 1 : 0];
      const timeB = b.time[activeDay === 2 && b.time.length === 2 ? 1 : 0];
      
      // Put "All Day" events at the top
      if (timeA === "All Day") return -1;
      if (timeB === "All Day") return 1;
      
      // Extract hours from time strings for comparison
      const [startA] = timeA.split(" - ")[0].split(":");
      const [startB] = timeB.split(" - ")[0].split(":");
      
      return parseInt(startA) - parseInt(startB);
    });
  };

  const MemoizedStarField = useMemo(() => (
    <Suspense fallback={null}>
      <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
    </Suspense>
  ), []);

  return (
    <div className="relative bg-black">
      <div className="fixed inset-0 z-0">
        {MemoizedStarField}
      </div>
      <div className="relative z-10 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <img src="/img/fluxLogo1.png" className="w-48 mx-auto" />

          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-2 rounded-lg ${
                activeDay === 1 ? 'bg-blue-600' : 'bg-gray-800'
              } transition-colors`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-2 rounded-lg ${
                activeDay === 2 ? 'bg-blue-600' : 'bg-gray-800'
              } transition-colors`}
            >
              Day 2
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="w-full border-collapse">
              <thead className="bg-gray-800/80 backdrop-blur-sm">
                <tr>
                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">Event</th>
                  <th className="p-4 text-left">Venue</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Passes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {getSortedEvents().map((event, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-800/50 backdrop-blur-sm transition-colors"
                  >
                    <td className="p-4 text-blue-400">
                      {(event.time.length === 2 && activeDay === 2) ? event.time[1] : event.time[0]}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-white">{event.title}</div>
                      <div className="text-sm text-gray-400 mt-1">{event.description}</div>
                      <div className="text-xs text-gray-500 mt-2">
                        {event.coordinators.map((coordinator, idx) => (
                          <div key={idx}>{coordinator}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">{event.venue}</td>
                    <td className="p-4 text-gray-300">{event.type}</td>
                    <td className="p-4 text-gray-300">{event.passes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}