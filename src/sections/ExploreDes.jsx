import React from "react";
import { Link } from "react-router-dom";
import destination from "../assets/json/destination.json";

export default function ExploreDestination() {

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto items-stretch ">
                {destination.slice(0, 3).map((item, index) => (
                    <div key={index} className=" rounded-lg w-[225px] shadow-md overflow-hidden flex flex-col">
                        <img
                            src={item.src}
                            alt={item.name}
                            className="w-full h-40  "
                        />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <h3 className="text-xl font-semibold text-start break-words">
                                {item.name}
                            </h3>
                            <div className="text-end">
                            
                                <p className="text-[#42A7C3] text-sm font-medium">{item.tagLoc} Tour</p>
                                <a
                                    href={item.gmaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#42A7C3] text-gray-400 flex text-sm justify-end"
                                >
                                    View on Map
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                    </svg>

                                </a>
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Button */}
            <div className="mt-6 text-center">
                <Link
                    to="/destination"
                    className="text-sm text-gray-400 hover:text-[#42A7C3] px-1 flex justify-center mx-auto w-fit"
                >
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>

        </>
    );
}
