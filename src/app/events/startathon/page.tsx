'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/start.png"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/1.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Bangalore, South Asian Union</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Cris Grace: +91 90350 10120</p>
      <p className="text-sm">Laksh D: +91 79759 48835</p>
    </div>
    <div className="mt-4 text-white">
        <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
      <div>
          <p className="text-lg font-semibold">Event</p>
          <p className="text-sm">Hackathon</p>
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
          <p className="text-sm">08:00 - 17:30/15:00</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Venue</p>
          <p className="text-sm">B Block, 2nd Floor</p>
      </div>
    </div>
    </div>
    
      <p className="mt-4 text-white">
        Startathon is a high-energy event where creativity, innovation, and business acumen collide. Participants form teams to ideate, design, and develop a startup solution. The event simulates the journey of building a startup, from brainstorming ideas to pitching to investors, all while competing against rival teams for the coveted title of the "Most Successful Startup."
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - Team Formation </dt>
                <dd className="mt-2 text-sm text-white">This is a solo event to begin with, project managers will be chosen based on a set of interviews prior to the event. Project managers will network with the rest of the participants to form a team.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - Ideation</dt>
                <dd className="mt-2 text-sm text-white">Prior to the event, the team will ideate on the problem statement and come up with an SRS document.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 3 - Design</dt>
                <dd className="mt-2 text-sm text-white">Teams will use event currency to purchase design materials and create product mockups. They'll then pitch to secure investment for team salaries and tech resources.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 4 - Development</dt>
                <dd className="mt-2 text-sm text-white">Teams will bring their designs to life by building a working prototype. With a mix of developers and non-developers, collaborate to transform mockups into functional solutions while tracking project expenses.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 5 - Testing</dt>
                <dd className="mt-2 text-sm text-white">Put your prototype through rigorous testing to ensure quality and reliability. Meanwhile, your team will prepare compelling marketing materials and financial reports for the final pitch.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 6 - Pitch & Presentation</dt>
                <dd className="mt-2 text-sm text-white">Present your complete startup package to our judges, showcasing your working prototype, marketing strategy, and overall execution.</dd>
        </div>
    </dl>
  </div>
</div>
    )
}