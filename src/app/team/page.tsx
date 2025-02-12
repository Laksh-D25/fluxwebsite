'use client';

import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function TeamPage(){
    const faculty = [
        {
            name: "Dr. Deepa S",
            role: 'Faculty Coordinator',
            img: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6190.jpg'
        },
        {
            name: "Dr. Gayathry S Warrier",
            role: 'Faculty Coordinator',
            img: 'https://media.licdn.com/dms/image/v2/C4E03AQF46Ch69tSrFQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634578009919?e=1744848000&v=beta&t=nirBcvlD-clm4YtRGX3D55uZcudoxAv79vaiHYIVl5s'
        }
    ]
    
    const oc = [
        {
            name: 'Cris Grace',
            class: '2nd Year BCA',
            img: 'https://media.licdn.com/dms/image/v2/D5603AQH0_U8w7ztHoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707070346364?e=1744848000&v=beta&t=-3HRGeUWJy0fqyEfA5n0UoShy1_FcZ1S7OtjZjSSlow',
            linkdin: 'https://www.linkedin.com/in/cris-grace-8a0b44214/',
            pn: "+91 90350 10120"
        },
        {
            name: 'Laksh D',
            class: '2nd Year BCA',
            img: 'https://media.licdn.com/dms/image/v2/D5603AQG5A7HgTFu8CQ/profile-displayphoto-shrink_400_400/B56ZSPebHvGsAg-/0/1737573906215?e=1744848000&v=beta&t=9EumEue8YQgsp3KQWRgiNrVOlKtPhcuIr5A89esiMB4',
            linkdin: 'https://www.linkedin.com/in/lakshhd/',
            pn: "+91 79759 48835"
        },
        {
            name: 'Prakash R Suthar',
            class: '2nd Year BCA',
            img: 'https://media.licdn.com/dms/image/v2/D5603AQG4pe3qp_xW7w/profile-displayphoto-shrink_400_400/B56ZSIJu7JHsAg-/0/1737451041326?e=1744848000&v=beta&t=D5-eNyNsLF3dS3zG0WkebDV1r1wEsYFhAOzuONut674',
            linkdin: 'https://www.linkedin.com/in/prakash-r-suthar-91b974272/',
            pn: "+91 89718 33784"
        },
        {
            name: 'Anisha Kumari',
            class: '2nd Year BCA',
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQHsubw7hYkWHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729093546329?e=1744848000&v=beta&t=Mmp_pLztyrHw3-GlGH6jeFv6aMMionRbyzuDXRUFNAw',
            linkdin: 'https://www.linkedin.com/in/yesanisha/',
            pn: "+91 75269 76187"
        },
    ]

    const event_management = [
        { name: "Arjun Soni", class:'2nd Year BCA', pn: "+91 97842 16732", img: "https://media.licdn.com/dms/image/v2/D4D35AQGG6LMClBmUZg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1718626570242?e=1739912400&v=beta&t=5L3Gji_rwmLqnCumxvAxjqKZi_wRh7QWTYsOsI7GSOM", linkdin: "https://www.linkedin.com/in/arjun-soni-924b782b5/" },
        { name: "Anika J D'Souza", class:'2nd Year BCA', pn: "+91 91491 82435", img: "https://media.licdn.com/dms/image/v2/D5603AQGVQSRpYJiwWw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727450896615?e=1744848000&v=beta&t=VEhj4pRzBlH3eMlLRQMPplrfsmW5eT5wEFLeAeBEqEM", linkdin: "https://www.linkedin.com/in/anika-dsouza-0759542ba/" },
        { name: "Nidal M", class:'1st Year BCA', pn: "+91 80896 23925", img: "https://media.licdn.com/dms/image/v2/D4E03AQFkFpiTLlEgUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730972908824?e=1744848000&v=beta&t=xjZrAY2sngHgbDDJRWXJ9IVcS7ehM0MCyaLfxV3XBLo", linkdin: "https://www.linkedin.com/in/nidalmohammad/" },
        { name: "Shruthi Chhabhaiya", class:'2nd Year BCA', pn: "+91 80886 48895", img: "https://media.licdn.com/dms/image/v2/D4E35AQGY-5UwqjmtEw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726566860191?e=1739916000&v=beta&t=Kw8BM0KG4fvo4FYBnAZnPAqNY2HfpNU0AL0CFsyZwL0", linkdin: "https://www.linkedin.com/in/shruthi-s-patel-a89305318/" },
    ]

    const event_head = [
        { name: "Rishita J", class:'2nd Year BCA', pn: "+91 91230 13403", img: "https://media.licdn.com/dms/image/v2/D5635AQHDJ9fNZm9dPQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1736679515521?e=1739912400&v=beta&t=qWo2f1IJNhjg2zIZMS7r6P1NJJuDJOSB9ntR7lGOWZ8", linkdin: "https://www.linkedin.com/in/rishita-jaiswal-7190642bb/" },
        { name: "Sarthak Jaiswal",class:'2nd Year BCA', pn: "+91 93058 97506", img: "https://media.licdn.com/dms/image/v2/D5635AQFu9V-Z4Rqqjw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1708018534204?e=1739912400&v=beta&t=QOJL0Z-DoM1f3APSJboomKiQ-ykh0ueyBsi47Uuyj0s", linkdin: "https://www.linkedin.com/in/sarthak-jaiswal22/" },
        { name: "Md Sohail", class:'2nd Year BCA', pn: "+91 91230 13403", img: "https://media.licdn.com/dms/image/v2/D4D03AQHQ0tBHZU4yDA/profile-displayphoto-shrink_400_400/B4DZSEyXm7HkAg-/0/1737394585048?e=1744848000&v=beta&t=TRWt07xeCUg9EKXoeQeBdazvzOTCwD00LGrB18qUCKI", linkdin: "https://www.linkedin.com/in/md-sohail-49581630b/" },
        { name: "Chiranjeevi P", class:'2nd Year BCA', pn: "+91 78923 04079", img: "https://media.licdn.com/dms/image/v2/D4E03AQFXL04Hia87VA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726147041182?e=1744848000&v=beta&t=01hhdXaBnDpFG_lHhb7qgw3ZABM-vHC6VUvNfvc_LCA", linkdin: "https://www.linkedin.com/in/chiranjeevi-p-1baa85310/" },
        { name: "Arnav Wadhwa", class:'2nd Year BCA', pn: "+91 +91 79825 78004", img: "https://media.licdn.com/dms/image/v2/D5603AQFLbskBGKtixw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713354878182?e=1744848000&v=beta&t=-uZc2En0LFg3FewnGto1mjhb_vGqeEZVzhBmyMB7cFk", linkdin: "https://www.linkedin.com/in/arnav-wadhwa-347389294/" },
        { name: "Nitsa M", class:'1st Year BCA', pn: "+91 80537 71120", img: "https://media.licdn.com/dms/image/v2/D4D03AQEmnQ7FIQilGA/profile-displayphoto-shrink_800_800/B4DZSrHgg5HAAc-/0/1738037660171?e=1744848000&v=beta&t=RaZ90iE7sOkEDHVm5LvXdJK6oHrBLkFnfyyuukVxQbQ", linkdin: "https://www.linkedin.com/in/nitsamehndiratta/" },
        { name: "Hir Chirania", class:'2nd Year BCA', pn: "+91 80124 69048", img: "https://media.licdn.com/dms/image/v2/D5635AQHZMcF0MWCKLw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1716123683602?e=1739912400&v=beta&t=zsoUUMglpq5ymdz4PStiWMR_0MipbqqmPvQffb6B-9A", linkdin: "https://www.linkedin.com/in/hir-chirania/" },
        { name: "Nitija Anil",class:'2nd Year BCA',  pn: "+91 90317 33605", img: "https://media.licdn.com/dms/image/v2/D4D03AQHc9mDORE9JiA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727887503403?e=1744848000&v=beta&t=W0jRUe27MHdiw1Ggu7vBrk1Pp-J3xL2gEhzWfvnvJKE", linkdin: "https://www.linkedin.com/in/nitija-anil-2123a6301/" }
    ];
    

    const MemoizedStarField = useMemo(() => (
            <Suspense fallback={null}>
                <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
            </Suspense>
    ), []);

    return (
        <div className="relative bg-black">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>
            <div className="relative z-10 pt-24 pb-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Meet The Team Behind FLUX</h2>
                <p className="mt-6 text-lg/2 text-gray-400">
                We are a passionate and driven team, committed to pushing boundaries and creating an unforgettable experience. With innovation at our core, we work tirelessly to bring FLUX: Into The Quantum Verse to life, ensuring every participant gets the best possible event. From meticulously crafted challenges to seamless execution, our team is dedicated to making FLUX an electrifying journey into the future of technology and creativity. 
                </p>
                </div>
                <h1 className="text-3xl my-10">Faculty Coordinators</h1>
                <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
                >
                {faculty.map((person) => (
                    <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                    <img alt="" src={person.img} className="mx-auto size-48 rounded-full md:size-56" />
                    <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 text-gray-400">{person.role}</p>
                    </li>
                ))}
                </ul>
                 <h1 className="text-3xl my-10">The Organizing Committee</h1>
                <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                >
                {oc.map((person) => (
                    <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                    <img alt="" src={person.img} className="mx-auto size-48 rounded-full md:size-56" />
                    <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 text-gray-400">{person.class}</p>
                    <p className="text-sm/6 text-gray-400">{person.pn}</p>
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                        <li>
                            <a href={person.linkdin} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                <path
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </li>
                ))}
                </ul>
                <h1 className="text-3xl my-10">Event Management</h1>
                <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                >
                {event_management.map((person) => (
                    <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                    <img alt="" src={person.img} className="mx-auto size-48 rounded-full md:size-56" />
                    <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 text-gray-400">{person.class}</p>
                    <p className="text-sm/6 text-gray-400">{person.pn}</p>
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                        <li>
                            <a href={person.linkdin} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                <path
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </li>
                ))}
                </ul>
                <h1 className="text-3xl my-10">Event Heads</h1>
                <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
                >
                {event_head.map((person) => (
                    <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                    <img alt="" src={person.img} className="mx-auto size-48 rounded-full md:size-56" />
                    <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                    <p className="text-sm/6 text-gray-400">{person.class}</p>
                    <p className="text-sm/6 text-gray-400">{person.pn}</p>
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                        <li>
                            <a href={person.linkdin} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                <path
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        <div/>
    </div>

    )
}