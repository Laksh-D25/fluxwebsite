'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/vp.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/9.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">The Concious</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Anisha Kumari: +91 75269 76187</p>
      <p className="text-sm">Hir Chirania: +91 80124 69048</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
    <div>
        <p className="text-lg font-semibold">Event</p>
        <p className="text-sm">Horror Experience</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Passes</p>
        <p className="text-sm">1 Required</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Type</p>
        <p className="text-sm">Solo/Duo</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Date</p>
        <p className="text-sm">Day 1 & 2</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Time</p>
        <p className="text-sm">All Day</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Venue</p>
        <p className="text-sm">B Block, Second Floor,  B - 201 & B - 202</p>
    </div>
</div>
    </div>
    
      <p className="mt-4 text-white">
      Deep within Bahoo’s facility, a mysterious figure lies trapped—not just in stasis, but within their own mind. To free them, the team must navigate a fractured subconscious, uncovering buried memories and forgotten truths.

The deeper they go, the more unstable reality becomes. What was taken from them? Why were they locked away?

One thing is certain—escaping the mind is only the beginning.
      </p>
    </div>
  </div>
</div>
    )
}