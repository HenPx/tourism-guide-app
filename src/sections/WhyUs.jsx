import React from "react";
import Koper from "../assets/svg/Koper";


export default function WhyUsCard (){
    return(
        <>
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-6 gap-6 ">
                <div className="sm:col-span-2 flex w-full sm:w-[225px] flex-col items-center px-6 py-8 space-y-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.10)] rounded-xl">
                    <Koper/>    
                    <h3 className="text-xl font-semibold">All You Needs</h3>
                    <p className="text-[#A8A8A8]">From flights, stays, to sights, just count on our complete products.</p>
                </div>
                <div className="sm:col-span-2 flex w-full sm:w-[225px] flex-col items-center px-6 py-8 space-y-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.10)] rounded-xl ">
                    <Koper/>
                    <h3 className="text-xl font-semibold">All You Needs</h3>
                    <p className="text-[#A8A8A8]">From flights, stays, to sights, just count on our complete products.</p>
                </div>
                <div className="sm:col-span-2 flex w-full sm:w-[225px] flex-col items-center px-6 py-8 space-y-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.10)] rounded-xl">
                    <Koper/>
                    <h3 className="text-xl font-semibold">All You Needs</h3>
                    <p className="text-[#A8A8A8]">From flights, stays, to sights, just count on our complete products.</p>
                </div>
                <div className="sm:col-start-2 sm:col-span-2 flex w-full sm:w-[225px] flex-col items-center px-6 py-8 space-y-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.10)] rounded-xl">
                    <Koper/>
                    <h3 className="text-xl font-semibold">All You Needs</h3>
                    <p className="text-[#A8A8A8]">From flights, stays, to sights, just count on our complete products.</p>
                </div>
                <div className="sm:col-span-2 flex w-full sm:w-[225px] flex-col items-center px-6 py-8 space-y-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.10)] rounded-xl">
                    <Koper/>
                    <h3 className="text-xl font-semibold">All You Needs</h3>
                    <p className="text-[#A8A8A8]">From flights, stays, to sights, just count on our complete products.</p>
                </div>
            </div>
        </>
    )
}