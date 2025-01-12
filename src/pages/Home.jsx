import React from "react";
import Navigation from "../components/NavBar"
import ExploreDestination from "../sections/ExploreDes";
import FooterBox from "../components/Footer";


export default function Home(){
    return(
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <section>
                    
                </section>
                <section>
                    <ExploreDestination/>
                </section>
            </main>
            <footer>
                <FooterBox/>
            </footer>
        </>
    )
}