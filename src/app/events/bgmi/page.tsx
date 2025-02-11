'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/bgmi.png"
      className="h-96 w-full object-cover object-[center_30%]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/11.svg" className="transform -translate-y-[30%]" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Shenzen, Republic Of China</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Kundan Rijal: +91 79759 48835</p>
      <p className="text-sm">Parth Khandelwal: +91 77373 13101</p>
    </div>
    <div className="mt-4 text-white">
        <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
      <div>
          <p className="text-lg font-semibold">Event</p>
          <p className="text-sm">Gaming</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Passes</p>
          <p className="text-sm">1 BGMI PASS Required</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Type</p>
          <p className="text-sm">Quads</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Date</p>
          <p className="text-sm">Day 1 & 2</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Time</p>
          <p className="text-sm">11 - 17:30/15:30</p>
      </div>
      <div>
          <p className="text-lg font-semibold">Venue</p>
          <p className="text-sm">Nexus Commons</p>
      </div>
    </div>
    </div>
    
      <p className="mt-4 text-white">
      Join us for an action-packed event where strategy, skill, and teamwork are your only weapons against the forces of Bahoo’s mind control. Navigate through multiple rounds of intense bracket-style play as you fight to break free from Bahoo’s grip and regain your autonomy. Any form of cheating, including the use of third-party apps or exploits, will result in immediate disqualification.
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Day 1 - Group Stages / Knockout Matches </dt>
                <dd className="mt-2 text-sm text-white">Teams compete in group stages to qualify, followed by intense knockout rounds to determine the semifinalists.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Day 2 - Semi-Finals, Playoffs & Finals</dt>
                <dd className="mt-2 text-sm text-white">The best teams battle through semifinals and playoffs, culminating in an epic final showdown to crown the champion.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Match Setup</dt>
                <dd className="mt-2 text-sm text-white">Server: Matches will be hosted on official BGMI servers in the specified region <br></br> Mode: The matches will be played in classic battle royale mode. <br></br> Map: The map will be selected by the organizers before each round. </dd>
        </div>
    </dl>
  </div>
</div>
    )
}