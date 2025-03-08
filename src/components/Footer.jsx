import React from "react";

export default function FooterBox(){
    return(
        <>
            <div className="grid grid-cols-5 space-x-6">
                <div className="col-span-2">
                    <h5 className="text-xl font-bold">Travelwdra</h5>
                    <p className="text-[#A8A8A8]">Travwdra is Southeast Asia’s travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.</p>
                    <p className="text-[#A8A8A8] mt-3">Est.2025</p>
                    <p className="text-[#A8A8A8]">All rights reserved.</p>
                </div>
                <div>
            
                </div>
                <div className="col-span-2">
                    <h5 className="text-xl font-bold">Products</h5>
                    <p className="text-[#A8A8A8] mt-3">Travel</p>
                    <p className="text-[#A8A8A8]">Hotel</p>
                    <p className="text-[#A8A8A8]">Flights</p>
                </div>
            </div>
        </>
    )
}