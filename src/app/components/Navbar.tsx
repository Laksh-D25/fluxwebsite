"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'Registration', href: '/registration', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Schedule', href: '/schedule', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [navOpen, setNavOpen] = useState(false);

    function handleNavOpen() {
        setNavOpen((prev) => !prev);
    }

    return (
        <Disclosure as="nav" className="top-0 left-0 w-full flex gap-6 text-white z-50 sticky">
            <div className="w-[100%]">
                <div className="relative flex h-16 items-center justify-between w-[100%]">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden w-[100%] flex justify-between px-2">
                        {/* Mobile menu button */}
                        <DisclosureButton 
                            className="z-20 group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black/30 hover:text-white" 
                            onClick={handleNavOpen}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {navOpen ? (
                                <XMarkIcon aria-hidden="true" className="block size-6 font-bold" />
                            ) : (
                                <Bars3Icon aria-hidden="true" className="block size-6 font-bold" />
                            )}
                        </DisclosureButton>
                        <Link href="/">
                            <img src="/img/fluxLogo1.png" alt="" className='w-auto h-14 px-2 pt-1' />
                        </Link>
                        <Link href="https://christuniversity.in/departments/yeshwanthpur%20campus/school%20of%20sciences/computer%20science">
                            <img src="/img/icon.webp" alt="" className='w-auto h-10 px-2' />
                        </Link>
                    </div>

                    <div className="hidden mx-2 sm:flex justify-between w-[100%]">
                        <div className="flex space-x-4 items-center">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-2 py-2 text-sm font-medium',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className='flex space-x-4 items-center'>
                        <Link href="/">
                            <img src="/img/fluxLogo1.png" alt="" className='w-auto h-14' />
                        </Link>
                        <Link href="https://samagrabyc.vercel.app/">
                            <img src="/img/samagra.png" alt="" className='w-auto h-14 pr-2' />
                        </Link>
                        <Link href="https://christuniversity.in/departments/yeshwanthpur%20campus/school%20of%20sciences/computer%20science">
                            <img src="/img/icon.webp" alt="" className='w-auto h-10' />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                enter="transition-transform duration-300 ease-out"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-transform duration-300 ease-in-out"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
            >
                <DisclosurePanel className="sm:hidden w-[100%] backdrop-blur-md rounded-bl-lg absolute right-0 bg-black/30">
                    <div className="space-y-1 grid w-[100%]">
                        <div className='grid justify-center items-center grid-cols-2 w-full py-2 bg-black/30'>
                            <div className="w-full flex justify-end items-center">
                            <Link href="https://samagrabyc.vercel.app/">
                                <img src="/img/samagra.png" alt="" className='w-auto h-14 ' />
                            </Link>
                        
                            </div>
                            <div className="w-full flex justify-center items-center">
                            <Link href="https://christuniversity.in/departments/yeshwanthpur%20campus/school%20of%20sciences/computer%20science">
                                <img src="/img/icon.webp" alt="" className='w-auto h-10 px-2' />
                            </Link>
                            </div>
                        </div>
                        <div>
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'text-white' : 'text-white hover:bg-gray-700 hover:bg-opacity-75',
                                        'block rounded-md px-3 py-2 text-base font-medium font-bold',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </div>
                </DisclosurePanel>
            </Transition>
        </Disclosure>
    )
}
