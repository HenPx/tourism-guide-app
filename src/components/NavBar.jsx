import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const routes = [
    { label: "Home", path: "/" },
    { label: "Destination", path: "/Destination" },
    { label: "FaQ", path: "/FaQ" },
];

export default function Navigation() {
    return (
        <Disclosure as="nav" className="w-full fixed top-0 z-50 bg-transparent">
            {({ open }) => (
                <>
                    <div className="max-w-full mx-auto px-6 py-2 lg:px-16">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div>
                                <Link key={"/FaQ"} to={"/FaQ"} className="text-2xl font-bold text-[#154871]">
                                    Travelwdra
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex space-x-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        to={route.path}
                                        className="text-sm text-gray-400 hover:text-black"
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Button */}
                            <button className="hidden md:block bg-[#154871] text-sm text-white px-5 py-2 rounded-lg shadow-lg hover:bg-[#42A7C3] transition">
                                Book Us
                            </button>

                            {/* Burger Menu */}
                            <div className="flex md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center  rounded-md text-gray-600 hover:text-black  focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                                </svg>


                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Overlay */}
                    {/* {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>} */}

                    {/* Sidebar */}
                    <Disclosure.Panel
                        className={`fixed top-0 right-0 w-full rounded-b-3xl bg-gradient-to-b from-[#E2F6FC] to-white z-50 drop-shadow-lg transform ${
                            open ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300`}
                    >
                        
                        <div className="px-4 py-6">
                            <div className="flex justify-between">
                                {/* Logo */}
                                <div>
                                    <Link key={"/FaQ"} to={"/FaQ"} className="text-2xl font-bold text-[#154871]">
                                        Travelwdra
                                    </Link>
                                </div>
                                {/* Button */}
                                <button className=" bg-[#154871] w-max text-sm text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#42A7C3] transition w-full">
                                    Book Us
                                </button>
                            </div>
                            
                            

                            {/* Menu Links */}
                            <div className="mt-8 space-y-4 text-center">
                                {routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        to={route.path}
                                        className="block text-sm text-gray-400 hover:text-black"
                                    >
                                        {route.label}
                                    </Link>
                                ))}

                                {/* Close Button */}
                                <div className="flex justify-end">
                                    <Disclosure.Button className="text-gray-600 p-1 mr-1 hover:text-gray-800 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                                        </svg>
                                    </Disclosure.Button>
                                </div>

            
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
