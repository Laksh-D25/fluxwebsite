'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/wort.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/2.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Berlin, German Democratic Republic</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Prakash R Suthar: +91 89718 33784</p>
      <p className="text-sm">Laksh D: +91 79759 48835</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
      <div>
          <p className="text-lg font-semibold">Event</p>
          <p className="text-sm">Website Building</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Passes</p>
          <p className="text-sm">3 Required</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Type</p>
          <p className="text-sm">Duo</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Date</p>
          <p className="text-sm">Day 1</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Time</p>
          <p className="text-sm">14:30 - 17:30</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Venue</p>
          <p className="text-sm">Lab 03, A Block Second Floor</p>
      </div>
    </div>
    </div>
    
      <p className="mt-4 text-white">
        Participants are transported to the GDR, tasked with infiltrating the Ministry of Propaganda through a high-stakes web-building contest. Prove your expertise in HTML, CSS, and JavaScript across challenging rounds that test your speed, debugging, and creativity.
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - HTML + CSS Relay </dt>
                <dd className="mt-2 text-sm text-white">Teams compete in an exciting relay format where developers alternate between HTML and CSS tasks. One member starts with HTML structure, then passes to their teammate for styling, continuing this pattern as they build components against the clock. Watch your code come to life with each handoff!</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - Ideation</dt>
                <dd className="mt-2 text-sm text-white">Put your problem-solving skills to work as you tackle increasingly challenging bugs across HTML, CSS, and JavaScript. Hunt down missing elements, fix broken layouts, and resolve tricky JavaScript logic errors. Each solved bug brings you closer to victory, but watch out - time penalties apply for incorrect solutions!</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 3 - Design</dt>
                <dd className="mt-2 text-sm text-white">The ultimate test of creativity and technical skill! Teams receive a detailed prompt and must build a complete, responsive website from scratch. You'll be judged on design aesthetic, code quality, and how well you meet the brief requirements. Bonus points for accessibility features and innovative solutions!</dd>
        </div>
    </dl>
  </div>
</div>
    )
}