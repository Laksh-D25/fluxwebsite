'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/tech.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/5.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">New York City, Confederate States Of New England</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Arnav Wadwa: +91 79825 78004</p>
      <p className="text-sm">Nitsa Mehndiratta: +91 80537 71120</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
    <div>
        <p className="text-lg font-semibold">Event</p>
        <p className="text-sm">IT Manager</p>
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
        <p className="text-sm">Day 2</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Time</p>
        <p className="text-sm">10:30 - 14:30</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Venue</p>
        <p className="text-sm">Seminar Hall 1 & 2</p>
    </div>
</div>
    </div>
    
      <p className="mt-4 text-white">
      Enter the mysterious world of Bahoo, a cutting-edge tech conglomerate searching for their next visionary project manager. In this high-stakes competition, prove your leadership prowess as you navigate through challenges designed to test your ability to helm their most ambitious project yet. Do you have what it takes to earn this coveted position and lead Bahoo's next technological breakthrough?
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - Group Discussion </dt>
                <dd className="mt-2 text-sm text-white">Navigate through intense group discussions on cutting-edge tech topics and industry challenges. Demonstrate your ability to articulate ideas, lead conversations, and build on others' perspectives while maintaining professional composure under pressure.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - Roleplay</dt>
                <dd className="mt-2 text-sm text-white">Round Face real-world leadership scenarios that test your decision-making and problem-solving abilities. From handling team conflicts to managing critical project deadlines, prove your capability to think on your feet and implement effective solutions. Each situation will challenge your management style, communication skills, and strategic thinking.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 3 & 4 - Elimination</dt>
                <dd className="mt-2 text-sm text-white">Only champions from previous rounds will advance to face two secret challenges. The contents of these final tests remain confidential until you prove worthy to attempt them. Do you have what it takes to uncover and conquer the ultimate stages?                </dd>
        </div>
    </dl>
  </div>
</div>
    )
}