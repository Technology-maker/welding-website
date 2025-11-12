import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Roof1 from "../assets/roofs-img/roof-img1.jpeg";
import Roof2 from "../assets/roofs-img/roof-img2.jpeg";
import Roof3 from "../assets/roofs-img/roof-img3.jpeg";
import Roof4 from "../assets/roofs-img/roof-img4.jpeg";
import Roof5 from "../assets/roofs-img/roof-img5.jpeg";
import Roof6 from "../assets/roofs-img/roof-img6.jpeg";
import Roof7 from "../assets/roofs-img/roof-img7.jpeg";
import Roof8 from "../assets/roofs-img/roof-img8.jpeg";
import Roof9 from "../assets/roofs-img/roof-img9.jpeg";
import Roof10 from "../assets/roofs-img/roof-img1.jpeg";

const roofing = [
    {
        src: Roof1,
        alt: "A minimalist carport roof attached to a building, with a flat metal sheet design.",
        title: "Carport Roof",
        description:
            "A sleek and modern carport roof offering shelter and protection for vehicles. Its minimalist design complements any contemporary home.",
        dimensions: "Width: 15ft, Length: 20ft",
        material: "Galvanized Steel Sheets",
        features: [
            "Rust-resistant finish",
            "Minimalist design",
            "Easy installation",
            "Durable against harsh weather",
        ],
    },
    {
        src: Roof2,
        alt: "A large, freestanding metal roof structure with a high-pitched roof and open sides.",
        title: "Industrial-Style Shed Roof",
        description:
            "A robust and spacious shed roof with a high-pitched design, ideal for agricultural or industrial use. Provides ample shelter for machinery and equipment.",
        dimensions: "Width: 40ft, Length: 60ft",
        material: "Reinforced Steel Frames",
        features: [
            "High-strength steel",
            "Weatherproof coating",
            "Open-air design for ventilation",
            "Customizable size options",
        ],
    },
    {
        src: Roof3,
        alt: "A residential portico roof with a slanted metal sheet design, supported by painted steel poles.",
        title: "Residential Portico Roof",
        description:
            "A stylish and practical portico roof that adds a modern touch to your home's entrance. The slanted design ensures efficient water runoff.",
        dimensions: "Width: 10ft, Length: 12ft",
        material: "Coated Metal Sheets",
        features: [
            "Slanted design",
            "Custom color options",
            "Durable support poles",
            "Aesthetic appeal",
        ],
    },
    {
        src: Roof4,
        alt: "A silver-colored, freestanding metal roof structure providing a covered parking area.",
        title: "Commercial Parking Roof",
        description:
            "A functional and durable commercial roof structure designed to cover multiple parking spaces. The silver finish reflects sunlight, keeping the area cooler.",
        dimensions: "Width: 24ft, Length: 40ft",
        material: "Aluminum and Steel",
        features: [
            "UV-resistant material",
            "Sleek silver finish",
            "Low maintenance",
            "Robust frame construction",
        ],
    },
    {
        src: Roof5,
        alt: "A bright blue metal roof covering an elevated terrace, with a drainage gutter.",
        title: "Terrace Roof",
        description:
            "A vibrant blue terrace roof that provides shade and rain protection for outdoor living spaces. Includes an integrated gutter system for water management.",
        dimensions: "Width: 25ft, Length: 30ft",
        material: "Colored Metal Sheets",
        features: [
            "Integrated gutter system",
            "Available in multiple colors",
            "Excellent corrosion resistance",
            "Provides sun and rain protection",
        ],
    },
    {
        src: Roof6,
        alt: "A covered walkway or carport roof attached to a house, with a dark metal frame.",
        title: "Walkway Roof",
        description:
            "A practical covered walkway roof that connects your house to the garage or provides a sheltered path. Its sturdy frame ensures long-lasting durability.",
        dimensions: "Width: 8ft, Length: 30ft",
        material: "Powder-coated Steel",
        features: [
            "Durable and strong",
            "Weather-resistant",
            "Custom length options",
            "Provides a shaded path",
        ],
    },
    {
        src: Roof7,
        alt: "A white carport roof attached to a residential building, with two support poles.",
        title: "Residential Carport Roof",
        description:
            "A clean, white carport roof designed to match modern residential exteriors. The simple design provides reliable protection without obstructing the view.",
        dimensions: "Width: 18ft, Length: 22ft",
        material: "Lightweight Aluminum",
        features: [
            "Clean white finish",
            "Lightweight and strong",
            "Minimalist support structure",
            "Weatherproof coating",
        ],
    },
    {
        src: Roof8,
        alt: "A freestanding roof structure with a pitched, maroon-colored metal roof and reddish support poles.",
        title: "Pitched Garden Roof",
        description:
            "A classic pitched roof structure perfect for covering a garden seating area, outdoor workshop, or storage space. The maroon color adds a touch of traditional style.",
        dimensions: "Width: 10ft, Length: 15ft",
        material: "Maroon-colored Metal",
        features: [
            "Pitched roof for water drainage",
            "Rust-resistant poles",
            "Ideal for outdoor living areas",
            "Sturdy construction",
        ],
    },
    {
        src: Roof9,
        alt: "A modern, pitched roof structure with a concrete base and multiple black support poles.",
        title: "Modern Outdoor Structure",
        description:
            "A contemporary outdoor structure with a pitched roof and a solid concrete base. It is perfect for a pavilion, outdoor kitchen, or gathering space.",
        dimensions: "Width: 20ft, Length: 30ft",
        material: "Steel Frame, Concrete Base",
        features: [
            "Integrated concrete base",
            "Modern, angular design",
            "Exceptional durability",
            "Versatile use for any outdoor area",
        ],
    },
    {
        src: Roof10,
        alt: "A large, high-ceilinged metal roof structure with exposed truss work and wooden support beams.",
        title: "Large Span Workshop Roof",
        description:
            "A large, open-span roof structure with a high ceiling and exposed trusses, designed for workshops, warehouses, or large vehicle storage. The wooden beams add a unique, rustic touch.",
        dimensions: "Width: 50ft, Length: 80ft",
        material: "Wood and Steel Truss",
        features: [
            "High-span design",
            "Robust truss system",
            "Maximum vertical space",
            "Suitable for industrial or large-scale projects",
        ],
    },
];

const Roofing = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-1 py-10">
                <section>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold mb-4 pt-16 text-gray-800">
                            Premium Roofing Collection
                        </h1>
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <p className="text-gray-700 mb-2">
                                We craft beautiful and secure metal grills and railings for windows and stairs, available for installation, repair, or custom design.
                            </p>

                            <ul className="text-gray-600 text-sm mb-2 list-none space-y-1">
                                <li>✨ Explore our designs or bring your own vision</li>
                                <li>💵 Pricing is based on design, materials, and complexity</li>
                                <li>📞 <b>Contact us today for a free consultation!</b></li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {roofing.map((roof, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={roof.src}
                                        alt={roof.alt}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {roof.title}
                                    </h2>

                                    <p className="text-gray-700 text-sm mb-4 flex-grow leading-relaxed">
                                        {roof.description}
                                    </p>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-semibold w-24">Dimensions:</span>
                                            <span>{roof.dimensions}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-semibold w-24">Material:</span>
                                            <span>{roof.material}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {roof.features.map((feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="text-xs text-gray-600 flex items-center"
                                                >
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => {
                                            const contactSection = document.getElementById("contact");
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto"
                                    >
                                        Request To Order 🚀
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-16">
                    <Contact contactNow="Order Now !" prompt="Order Here 🚚" />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Roofing;