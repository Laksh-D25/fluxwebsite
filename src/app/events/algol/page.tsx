'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/algol.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/3.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Bangalore, South Asian Union</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Laksh D: +91 79759 48835</p>
      <p className="text-sm">Rishita Jaiswal: +91 91230 13403</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
    <div>
        <p className="text-lg font-semibold">Event</p>
        <p className="text-sm">Coding & Debugging</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Passes</p>
        <p className="text-sm">2 Required</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Type</p>
        <p className="text-sm">Duo</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Date</p>
        <p className="text-sm">Day 2</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Time</p>
        <p className="text-sm">09:30 - 13:00</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Venue</p>
        <p className="text-sm">Lab 01, A Block 2nd Floor</p>
    </div>
</div>
    </div>
    
      <p className="mt-4 text-white">
        Put your coding skills to the ultimate test! This unique event combines classic programming challenges with an exciting capture the flag format. Battle against a resistant system as you hack, debug, and uncover hidden truths.
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - Capture the Flag </dt>
                <dd className="mt-2 text-sm text-white">you will trace the digital remnants left behind—decipher cryptic messages, debug corrupted code, and decrypt buried secrets. Every line of code brings you closer to the truth hidden beneath layers of deception.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - The Code-Off</dt>
                <dd className="mt-2 text-sm text-white">The system resists. Fail-safes trigger. Not everyone makes it through. The non-selected participants cast their votes, deciding who falls before the final battle. The survivors face The Code Battle, solving the very challenges chosen to break them.</dd>
        </div>
    </dl>
  </div>
</div>
    )
}