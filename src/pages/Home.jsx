import React from "react";
import Navigation from "../components/NavBar"
import ExploreDestination from "../sections/ExploreDes";
import FooterBox from "../components/Footer";


export default function Home(){
    return(
        <>
            <header>
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E2F6FC] to-white h-80 z-0"></div>

                <Navigation/>
            </header>
            <main className="mt-[80px]">
                <section className="relative z-20 min-h-screen">
                    <div >
                        hai nama saya
                    </div>
                </section>
                <section className="relative z-20">
                    <ExploreDestination/>
                </section>
            </main>
            <footer>
                <FooterBox/>
            </footer>
        </>
    )
}