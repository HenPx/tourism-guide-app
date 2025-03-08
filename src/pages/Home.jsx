import React from "react";
import Navigation from "../components/NavBar"
import ExploreDestination from "../sections/ExploreDes";
import WhyUsCard from "../sections/WhyUs";
import FooterBox from "../components/Footer";
import LandCover from "../assets/png/LandingCover.png"


export default function Home(){
    return(
        <>
            <header>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E2F6FC] to-white h-60 z-0"></div>
                <Navigation/>
            </header>
            <main className="px-6 md:py-4  lg:px-16">
                <section className="relative md:mt-0   space-x-0 md:space-x-8 items-center flex flex-col md:flex-row justify-evenly  mb-6 md:justify-between z-20 min-h-screen max-h-screen mt-auto ">
                    <div className="space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="font-bold text-4xl md:text-7xl text-[#0C345D]">
                            Explore Freely, <br />
                            <span className="text-[#42A7C3]">Guided Safely.</span>
                        </h1>

                        <p className="text-[#A8A8A8] text-lg">
                        Embark on a journey to discover the world without limits, where every step
                        is guided with care and your safety is our top priority.
                        </p>

                        {/* Button */}
                        <button className="md:block bg-transparent border-2 border-[#42A7C3] text-sm text-[#42A7C3] hover:text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#42A7C3] transition">
                            <div className="flex justify-between space-x-2">
                                <p>Explore Us</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div >
                        <img src={LandCover} alt="ImageLanding" className="w-[300px] md:w-auto mx-auto"/>
                    </div>
                </section>
                <hr className="relative z-20"/>
                <section className="relative flex flex-col z-20 items-center justify-center">
                    <h2 className="font-bold text-2xl md:text-4xl text-center mb-6 text-black">Explore the <span className="text-[#42A7C3]">destination.</span></h2>
                    <ExploreDestination/>
                </section>
                <hr className="relative z-20"/>
                <section className="relative flex flex-col z-20 items-center justify-center">
                    <h2 className="font-bold text-2xl md:text-4xl text-center mb-6 text-black">Why <span className="text-[#42A7C3]">us?</span></h2>
                    <WhyUsCard/>
                </section>
                <hr className="relative z-20"/>

            </main>
            <footer className="px-6 md:py-4 lg:px-16">
                <FooterBox/>
            </footer>
        </>
    )
}