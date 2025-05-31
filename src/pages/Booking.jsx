import TravelForm from "../components/FormBook";
import Navigation from "../components/NavBar";
const BookPage = () => {
    return (
        <>
        <header>
            <div className="top-0 left-0 w-full bg-gradient-to-b from-[#E2F6FC] to-white h-60 z-0"></div>
            <Navigation/>
        </header>
        {/* <h1 className="pt-8">
            Book Your Trip
        </h1> */}
        <main className="px-6 md:py-4  lg:px-16 space-y-8 pt-10">

            <TravelForm />  
        </main>
        </>
    );
};

export default BookPage;
