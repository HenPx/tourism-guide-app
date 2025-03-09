import React from "react";
import ArrowLeft from "../assets/svg/ArrowLeft";
import ArrowRight from "../assets/svg/ArrowRight";

export default function ClientReview(){
    return(
        <>
        <div className="relative flex justify-center items-center">
            <div className="absolute -left-6  top-1/2 -translate-y-1/2 border border-[#3085A7] w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-md cursor-pointer text-[#3085A7]">
                <ArrowLeft/>
            </div>

            <div className="flex flex-col items-center rounded-xl shadow-[0_2px_100px_rgba(0,0,0,0.15)] px-6 py-8 w-[300px] sm:w-[474px] text-center bg-white">
                <img src="src/assets/profileReviews/default.png" alt="default" className="w-[70px] rounded-full p-2 bg-gray-200" />
                <h4 className="font-bold text-lg">Irfan Rahmat</h4>
                <p className="text-[#A8A8A8] text-sm">Traveller</p>
                <p>⭐⭐⭐⭐⭐</p>
                <p className="text-[#A8A8A8]">I love Travelo, this is the best place to buy ticket and help you find your dream holiday.</p>
            </div>

            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#3085A7] w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-md cursor-pointe text-white">
                <ArrowRight/>
            </div>
        </div>

        </> 
    )
}