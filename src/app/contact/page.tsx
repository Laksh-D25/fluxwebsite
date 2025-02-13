'use client';

import { useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline';

// Import your StarField component
const StarField = dynamic(() => import('../components/StarField'), { ssr: false });

    interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 4500);

            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const validateForm = (data: FormData): boolean => {
    const errors: FormErrors = {};
        if (!data.firstName.trim()) errors.firstName = 'First name is required';
        if (!data.lastName.trim()) errors.lastName = 'Last name is required';
        
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!data.message.trim()) errors.message = 'Message is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setFormErrors({});

        const form = e.currentTarget;
        const formData: FormData = {
            firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
            lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phoneNumber: (form.elements.namedItem('phoneNumber') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        if (!validateForm(formData)) {
        setIsSubmitting(false);
        return;
        }

        try {
            const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            setSubmitStatus('success');
            form.reset();
        } else {
            setSubmitStatus('error');
        }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const MemoizedStarField = useMemo(() => <StarField count={typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 700} />, []);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>

            <div className="relative">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                Contact Us
                            </h2>
                            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
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
                                        <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a
                                        href="mailto:flux.csbyc@christuniversity.in"
                                        className="hover:text-white"
                                        >
                                        flux.csbyc@christuniversity.in
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Instagram</span>
                                        <i className="text-xl text-gray-400 mt-1 ml-[1] pi pi-instagram" />
                                    </dt>
                                    <dd>
                                        <a
                                        href="https://www.instagram.com/fluxbyc/"
                                        className="hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        @fluxbyc
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                        />
                                        {formErrors.firstName && (
                                        <p className="mt-1 text-sm text-red-400">{formErrors.firstName}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                        />
                                        {formErrors.lastName && (
                                        <p className="mt-1 text-sm text-red-400">{formErrors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
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
                                        {formErrors.email && (
                                        <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm/6 font-semibold text-white"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md bg-white/5 backdrop-blur-md px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
                                        />
                                        {formErrors.message && (
                                        <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-full border-[1px] border-white text-white hover:text-black px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send message'}
                            </button>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-500/10 text-green-400 rounded-md aboslute top-10 right-10">
                                Message sent successfully! We&apos;ll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-md">
                            Failed to send message. Please try again later.
                            </div>
                        )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}