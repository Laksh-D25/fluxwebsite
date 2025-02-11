'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/race.jpg"
      className="h-96 w-full object-cover object-[center_70%]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/12.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Kelowna, Empire Of Okanagan</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Cris Grace: +91 90350 10120</p>
      <p className="text-sm">Laksh D: +91 79759 48835</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
    <div>
        <p className="text-lg font-semibold">Event</p>
        <p className="text-sm">Quest</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Passes</p>
        <p className="text-sm">Open to All with Registration in One Other Event</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Type</p>
        <p className="text-sm">Any</p>
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
      Inside, fragmented landscapes of Soviet bunkers, bustling cities, and cryptic ruins hold secrets buried in time. Hidden clues, enigmatic puzzles, and locked pathways stand between you and your goal. Each discovery tests your courage, intellect, and ability to navigate the conundrums within this chaotic realm.

How will you uncover the hidden truths, decipher the riddles, and make sense of the chaos? Will you bring ECHO back before it’s too late, or will the secrets of the rift remain forever unsolved? The challenge awaits—step forward and decide your fate.
      </p>
    </div>
  </div>
</div>
    )
}