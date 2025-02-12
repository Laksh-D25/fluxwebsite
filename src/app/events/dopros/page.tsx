'use client';

export default function EventPage(){
    return (
        <div className="bg-black">
  <div aria-hidden="true" className="relative">
    <img
      alt=""
      src="/dopros.webp"
      className="h-96 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
  </div>

  <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
    <div className="flex justify-center">
       <div className="h-[160px] overflow-hidden">
            <img src="/6.svg" className="transform -translate-y-[30%] ml-5" />
        </div> 
    </div>
    <p className="mb-5 text-2xl">Vorkuta, Union Of Soviet Socialist Republics</p>
    <div className = "grid sm:grid-cols-2 gap-2">
      <p className="text-sm">Chiranjeevi P: +91 78923 04079</p>
      <p className="text-sm">MD. Sohail: +91 91230 13403</p>
    </div>
    <div className="mt-4 text-white">
    <div className="grid sm:grid-cols-6 grid-cols-3 gap-2">
    <div>
        <p className="text-lg font-semibold">Event</p>
        <p className="text-sm">IT Quiz</p>
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
        <p className="text-sm">Day 1</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Time</p>
        <p className="text-sm">11:30 - 14:30</p>
    </div>
    <div>
        <p className="text-lg font-semibold">Venue</p>
        <p className="text-sm">6th Floor, Seminar Hall</p>
    </div>
</div>
    </div>
    
      <p className="mt-4 text-white">
      The cold was suffocating. Vorkuta was never meant to be escaped. Dragged into a Soviet gulag, you and your partner stand before Marshal Sokolov—a man who has crushed rebellions, broken minds, and rewritten history. He offers no mercy, only a twisted challenge: answer correctly, or face the consequences.
      </p>
    </div>

    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 1 - Test of Loyalty </dt>
                <dd className="mt-2 text-sm text-white">Prove your value to the Soviets in a Kahoot-style aptitude test. Collaboration and quick thinking will set the tone for your escape.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white">Round 2 - Roleplay</dt>
                <dd className="mt-2 text-sm text-white">You and your partner must match answers to scrambled questions while under the unyielding gaze of the guards. Communication is forbidden, but in the rare moments when the guards look away, will you risk cheating to survive? Synchronize your minds or face the consequences of failure in this high-stakes challenge.</dd>
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