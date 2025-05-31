import React, { useState } from "react";
const TravelForm = () => {
    const [kabupaten, setKabupaten] = useState("");
    const [wisata, setWisata] = useState("");
    const [date, setDate] = useState("");

    const handleOrder = () => {
        if (!kabupaten || !wisata || !date) {
        alert("Please complete the form.");
        return;
        }

        const formattedDate = new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        });

        const message = `Hi, I want to travel to:\nKabupaten: ${kabupaten}\nObjek Wisata: ${wisata}\nOn ${formattedDate}\n\nCan you give me the price?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "6287753185840"; // Ganti dengan nomor WA tujuan

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-6">
        <h2 className="text-xl font-semibold mb-4 text-[#154871]">Book Your Trip</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Choose Kabupaten</label>
        <select
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            value={kabupaten}
            onChange={(e) => setKabupaten(e.target.value)}
        >
            <option value="">-- Select Kabupaten --</option>
            <option value="Badung">Badung</option>
            <option value="Gianyar">Gianyar</option>
            <option value="Karangasem">Karangasem</option>
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-700">Choose Objek Wisata</label>
        <select
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            value={wisata}
            onChange={(e) => setWisata(e.target.value)}
        >
            <option value="">-- Select Wisata --</option>
            <option value="Pantai Kuta">Pantai Kuta</option>
            <option value="Ubud Monkey Forest">Ubud Monkey Forest</option>
            <option value="Pura Besakih">Pura Besakih</option>
        </select>

        <label className="block mb-2 text-sm font-medium text-gray-700">Choose Date</label>
        <input
            type="date"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />

        <button
            onClick={handleOrder}
            className="bg-[#42A7C3] text-white px-5 py-2 rounded-lg shadow hover:bg-[#154871] transition w-full"
        >
            Order to see the price
        </button>
        </div>
    );
};

export default TravelForm;
