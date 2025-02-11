'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/build.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/4.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Houston, Texas Republic</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Sarthak Jaiswal: +91 93058 97506</p>
      <p className="text-sm">Arjun Soni: +91 97842 16732</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
      <div>
          <p className="text-lg font-semibold">Event</p>
          <p className="text-sm">PC Building Auction</p>
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
          <p className="text-sm">Hybrid (Offline: 2nd Floor B Block B-210)</p>
      </div>
    </div>
    </div>
    
      <p className="mt-4 text-white">
      In the rough and cutthroat markets of the Texas Republic, where PC components are forged and traded, massive auctions draw the fiercest competitors. Amid the chaos of booming bids and rugged stalls, your challenge is clear: secure the best parts, assemble a powerhouse machine, and outwit your rivals.
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - Gaming Build</dt>
                <dd className="mt-2 text-sm text-white">Dive into the competitive world of gaming PCs! Bid for the perfect balance of CPU, GPU, RAM, and storage to create a system optimised for high-performance gaming.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - Server Build</dt>
                <dd className="mt-2 text-sm text-white">Build a reliable, multitasking server system by prioritising processing power, memory, and stability. Focus on efficient performance and compatibility for hosting, databases, or enterprise tasks. Will your build meet server-grade demands?</dd>
        </div>
    </dl>
  </div>
</div>
    )
}