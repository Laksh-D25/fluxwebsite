'use client'
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'
const StarField = dynamic(() => import("../components/StarField"), { ssr: false });

export default function ContactPage() {
    const MemoizedStarField = useMemo(() => (
        <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
    ), []);

    


    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>
            
            <div className="relative">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-black/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Contact Us</h2>
                            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        Christ [Deemed to be University], Yeshwanthpur Campus,
                                        <br />
                                        Nagasandra, near Tumkur Road,
                                        <br />
                                        Bengaluru - 560073.
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        <a href="mailto:flux.csbyc@christuniversity.in" className="hover:text-white">
                                            flux.csbyc@christuniversity.in
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <i className="text-xl text-gray-400 mt-1 ml-[1] pi pi-instagram"></i>
                                    </dt>
                                    <dd>
                                        <a href="https://www.instagram.com/fluxbyc/" className="hover:text-white">
                                            @fluxbyc
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48 ">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                                First name
                                </label>
                                <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                                Last name
                                </label>
                                <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white/5 backdrop-blur-md backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                                Email
                                </label>
                                <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                                Phone number
                                </label>
                                <div className="mt-2.5">
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                                Message
                                </label>
                                <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                    defaultValue={''}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-full border-[1px] border-white text-white hover:text-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Send message
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}