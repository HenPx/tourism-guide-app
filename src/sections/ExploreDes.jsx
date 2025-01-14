import React from "react";
import { Link } from "react-router-dom";
import destination from "../assets/json/destination.json";

export default function ExploreDestination() {
    // Shuffle the destinations array
    const shuffledDestinations = [...destination].sort(() => Math.random() - 0.7);

    return (
        <>
            <div className="grid md:grid-cols-3 gap-4 items-center w-full">
                {/* Loop through the first 3 shuffled destinations */}
                {shuffledDestinations.slice(0, 3).map((item, index) => (
                    <div key={index} className="border rounded-lg shadow-md overflow-hidden">
                        <img
                            src={item.src}
                            alt={item.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-500">{item.tagLoc}</p>
                            <a
                                href={item.gmaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Button */}
            <div className="mt-6 text-center">
                <Link
                    to="/destination"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    See All
                </Link>
            </div>
        </>
    );
}
