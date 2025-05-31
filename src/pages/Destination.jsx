import React from "react";
import Navigation from "../components/NavBar";
import destination from "../assets/json/destination.json";

export default function Destination(){
    return(
        <>
            <header>
                <div
                id="header-gradient"
                className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#E2F6FC] to-white h-60 z-0 transition-opacity duration-500 ease-in-out"
                > </div>
                <Navigation/>
            </header>
            <main className="px-6 md:py-4 lg:px-16 space-y-8 z-10">
                
                    <section className="mt-24 pt-10">
                        <h1 className="text-3xl font-bold text-center text-[#0C345D] mb-6">Explore Our Destinations</h1>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {destination.map((item, index) => (
                                <div key={index} className="rounded-lg w-full sm:w-[225px] shadow-md overflow-hidden flex flex-col">
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="w-full sm:h-40"
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
                    </section>
                <hr className="my-8" />
            </main>
        </>
    )
}