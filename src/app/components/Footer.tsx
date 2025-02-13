import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
const navigation = {
    social: [
        {
            name: 'Flux BYC Instagram',
            href: 'https://www.instagram.com/fluxbyc/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
                </svg>
            ),
        },
        {
            name: 'Samagra Instagram',
            href: 'https://www.instagram.com/samagra_cs/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
                </svg>
            ),
        },
        {
            name: 'flux.csbyc@christuniversity.in',
            href: 'mailto:flux.csbyc@christuniversity.in',
            icon: (props) => (
                <EnvelopeIcon className="size-6" {...props} />
            ),
        },
    ],
}

export default function Example() {
return (
    <footer className="bg-black text-white border-t border-white/30 backdrop-blur-md w-full z-10">
        <div className="mx-10 w-90 py-5">
            <div className="flex lg:flex-row flex-col w-full space-y-6">
                <div className="space-y-8 lg:w-[50%]">
                    <div className="flex flex-row items-center space-x-10 pr-5">
                        <Link href="/" className="flex items-center flex-row">
                            <h1 className="font-quad text-white font-medium lg:text-[35px] text-[25px]" style={{ fontFamily: 'var(--font-quad)' }}>Flux</h1>
                        </Link>
                        <Link href="https://samagrabyc.vercel.app/" className="flex items-center flex-row">
                            <img src="/img/samagra.png" alt="" className='w-auto lg:h-14 h-10 pr-2' />
                        </Link>
                        <Link className="flex items-center flex-row" href="https://christuniversity.in/departments/yeshwanthpur%20campus/school%20of%20sciences/computer%20science">
                            <img src="/img/icon.webp" alt="" className='w-auto lg:h-10 h-8' />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-6 pr-5">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="justify-start hover:cursor-pointer text-gray-400 hover:text-gray-300 flex flex-row space-x-2">
                                <item.icon aria-hidden="true" className="size-6" />
                                <p className="text-center">{item.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end px-6 lg:w-[50%]">
                    <div
                    className="overflow-hidden max-w-full lg:w-[600px] w-[500px] h-[200px] no-underline rounded-lg"
                    >
                        <div id="g-mapdisplay" className="h-full w-full max-w-full">
                            <iframe
                                className="h-full w-full border-0"
                                loading="lazy"
                                src={`https://www.google.com/maps/embed/v1/place?q=Christ+University+Yeshwa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-5">
                <p className="text-sm/6 text-gray-400 text-center">2025 Flux, Department of Computer Science  |  Made with ❤️ by Cris Grace & Laksh D</p>
            </div>
        </div>
    </footer>
)
}
