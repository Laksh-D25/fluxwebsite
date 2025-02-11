'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/pravda.jpg"
      className="h-96 w-full object-cover object-[center_40%]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/13.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">World</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">A Abhinav: +91 73866 03417</p>
      <p className="text-sm">Devdatt Rajesh: +91 96455 17578</p>
    </div>
    <div className="mt-4 text-white">
        <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
      <div>
          <p className="text-lg font-semibold">Event</p>
          <p className="text-sm">Reel Making/Photography</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Passes</p>
          <p className="text-sm">1 Required</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Type</p>
          <p className="text-sm">Solo</p>
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
          <p className="text-sm">Event Venues</p>
      </div>
    </div>
    </div>
    
      <p className="mt-4 text-white">
      Pravda invites creative minds to capture the essence of Flux through the lens of videography, reels, and photography, with an added twist! Participants will be given an unrelated object or topic on the day of the event, which they must skillfully integrate into their work. Showcase your creativity, storytelling, and technical prowess in this unique challenge!
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Reel Making (Day 1)</dt>
                <dd className="mt-2 text-sm text-white">Create a compelling 30-45 second reel based on a surprise topic revealed at the event. Transform the unexpected into something extraordinary!</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Photography - Qualifiers (Day 1)</dt>
                <dd className="mt-2 text-sm text-white">Capture stunning images around a theme unveiled at the start. Time limit will be announced on event day.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Photography - Finals (Day 2)</dt>
                <dd className="mt-2 text-sm text-white">Top photographers advance to face a new creative challenge. Details remain under wraps until the moment of truth.</dd>
        </div>
    </dl>
  </div>
</div>
    )
}