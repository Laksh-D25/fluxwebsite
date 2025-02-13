'use client';

export default function OtherButtons() {
    return (
        <div className="flex flex-wrap justify-center items-center mt-4 w-full gap-5">
            <a className="
                    relative flex items-center space-x-6 px-8 py-1 md:py-3 text-lg font-bold 
                    text-white bg-black/30 backdrop-blur-md  border border-white rounded-full 
                    transition-all duration-300 transform 
                    active:translate-y-[4px] 
                    before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-full 
                    before:transition-all before:duration-300 
                    before:transform before:translate-y-[6px] before:shadow-[0px_0px_0px_1px_rgb(90,90,90),0px_4px_0px_0px_rgb(40,40,40)] 
                    hover:bg-white hover:text-black 
                    hover:before:opacity-100 
                    hover:cursor-pointer
                    active:before:translate-y-[2px] active:before:shadow-[0px_0px_0px_1px_rgb(90,90,90),0px_2px_0px_0px_rgb(90,90,90)]
                "
                href="../../public/Flux_Brochure.pdf"
                download={true}
            >
                Download Brochure <i className="w-4 h-4 inline-block ml-2 pi pi-download"></i>
            </a>

            <a className="
                    relative flex items-center space-x-6 px-8 py-1 md:py-3 text-lg font-bold 
                    text-white bg-black/30 backdrop-blur-md  border border-white rounded-full 
                    transition-all duration-300 transform 
                    active:translate-y-[4px] 
                    before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-full 
                    before:transition-all before:duration-300 
                    before:transform before:translate-y-[6px] before:shadow-[0px_0px_0px_1px_rgb(90,90,90),0px_4px_0px_0px_rgb(40,40,40)] 
                    hover:bg-white hover:text-black 
                    hover:before:opacity-100 
                    active:before:translate-y-[2px] active:before:shadow-[0px_0px_0px_1px_rgb(90,90,90),0px_2px_0px_0px_rgb(90,90,90)]
                "
                href="https://www.instagram.com/fluxbyc/"
            >
                Follow Us on Instagram <i className="w-4 h-4 inline-block ml-2 pi pi-instagram"></i>
            </a>
        </div>
    );
}
