import React, { useState } from "react";
import ArrowLeft from "../assets/svg/ArrowLeft";
import ArrowRight from "../assets/svg/ArrowRight";
import review from "../assets/json/reviews.json"


const [currentIndex, setCurrentIndex] = useState(0)

const handlePrevReview = () =>{
    if (currentIndex>0){
        setCurrentIndex(currentIndex -1);
    }
};

const handleNextReview = ()=> {
    if (currentIndex< review.length-1){
        setCurrentIndex(currentIndex +1);
    }
};

export default function ClientReview(){
    return(
        <>
        <div className="relative flex justify-center items-center">

            <button onClick={handlePrevReview} className="absolute -left-6  top-1/2 -translate-y-1/2 border border-[#3085A7] w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-md cursor-pointer text-[#3085A7] disable={currentIndex === 0}">
                <ArrowLeft/>
            </button>
            { review.length > 0 (
                <div className="flex flex-col items-center rounded-xl shadow-[0_2px_100px_rgba(0,0,0,0.15)] px-6 py-8 w-[300px] sm:w-[474px] text-center bg-white">
                    <img src={review[currentIndex].photo} alt="default" className="w-[70px] rounded-full p-2 bg-gray-200" />
                    <h4 className="font-bold text-lg">{review[currentIndex].usernme}</h4>
                    <p className="text-[#A8A8A8] text-sm">{review[currentIndex]
                        .Job}</p>
                    <p>{review[currentIndex].star}</p>
                    <p className="text-[#A8A8A8]">{review[currentIndex].comment}</p>
                </div>
            )}

            <button onClick={handleNextReview} className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#3085A7] w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-md cursor-pointe text-white disable={currentIndex === review.length-1}">
                <ArrowRight/>
            </button>
        </div>

        </> 
    )
}