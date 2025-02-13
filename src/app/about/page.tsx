import StarField from "../components/StarField";
import { useMemo } from "react";

export default function AboutPage(){
    const MemoizedStarField = useMemo(() => (
        <StarField count={typeof window !== "undefined" && window.innerWidth < 768 ? 500 : 700} />
    ), []);
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden text-white">
            <div className="fixed inset-0 z-0">
                {MemoizedStarField}
            </div>
            <div className="relative z-10 pt-24 pb-32">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
                    <h1 className="ml-2 lg:-mt-7 mb-6 font-quad text-[50px] backdrop-blur-sm w-fit">
                        About Us
                    </h1>
                </div>
            </div>
        </div>
    )
}