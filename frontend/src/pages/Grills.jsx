import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Grills1 from "../assets/stairs-grills-img/img1.jpeg";
import Grills2 from "../assets/stairs-grills-img/img2.jpeg";
import Grills3 from "../assets/stairs-grills-img/img3.jpeg";
import Grills4 from "../assets/stairs-grills-img/img4.jpeg";
import Grills5 from "../assets/stairs-grills-img/img5.jpeg";
import Grills6 from "../assets/stairs-grills-img/img6.jpeg";
import Grills7 from "../assets/stairs-grills-img/img7.jpeg";
import Grills8 from "../assets/stairs-grills-img/img8.jpeg";
import Grills9 from "../assets/stairs-grills-img/img9.jpeg";
import Grills10 from "../assets/stairs-grills-img/img10.jpeg";
import Grills11 from "../assets/stairs-grills-img/img11.jpeg";
import Grills12 from "../assets/stairs-grills-img/img12.jpeg";

const grillsData = [
    {
        src: Grills1,
        alt: "White window grill with spear tops and small scroll accents",
        title: "Spear-Top Security Grill",
        description: "A classic and elegant window grill featuring spear-top finials and simple scroll accents for a timeless security solution.",
        dimensions: "Customizable to fit your space",
        material: "Wrought Iron",
        features: ["Powder-coated white finish", "Rust-resistant treatment", "Enhanced security", "Classic design"],
    },
    {
        src: Grills2,
        alt: "Black window grill with a large, ornate central scroll design",
        title: "Ornate Scroll Window Grill",
        description: "This grill adds an artistic touch to your home's exterior with a prominent, handcrafted scroll design at its center, finished in a sleek black.",
        dimensions: "Customizable to fit your space",
        material: "Heavy Gauge Iron",
        features: ["Intricate central scrollwork", "Durable construction", "Weatherproof coating", "Customizable size"],
    },
    {
        src: Grills3,
        alt: "Modern grey grill with a mesh screen and gold accents",
        title: "Modern Wave Design Grill",
        description: "A unique, contemporary window grill combining a fine mesh for privacy with a stylish wave accent and decorative gold-finished elements.",
        dimensions: "Customizable to fit your space",
        material: "Mild Steel with Mesh",
        features: ["Integrated privacy mesh", "Decorative wave pattern", "Gold-leaf accents", "Modern aesthetic"],
    },
    {
        src: Grills4,
        alt: "Rustic unpainted grill with wavy bars and flower details",
        title: "Floral Vine Window Grill",
        description: "A charming window grill with a rustic feel, featuring gentle wave patterns adorned with delicate floral details. Ideal for a subtle, decorative touch.",
        dimensions: "Customizable to fit your space",
        material: "Galvanized Steel",
        features: ["Rustic floral accents", "Heavy-duty construction", "Ready for custom painting", "Simple and elegant"],
    },
    {
        src: Grills5,
        alt: "Black belly bar window grill with spherical details",
        title: "Belly Bar Window Grill",
        description: "A robust security grill with a 'belly' design, providing extra dimension. The studded details on the bars add a touch of industrial style.",
        dimensions: "Customizable to fit your space",
        material: "Solid Steel",
        features: ["3D 'belly' profile", "Industrial studded design", "Maximum security", "Matte black finish"],
    },
    {
        src: Grills6,
        alt: "White window grill with a rounded arch top",
        title: "Arched Window Grill",
        description: "Perfectly complements arched windows, this grill follows the window's curvature, providing security without compromising on architectural beauty.",
        dimensions: "Customizable to fit your space",
        material: "Powder-Coated Steel",
        features: ["Custom arched design", "Clean white finish", "Seamless fit for arched windows", "Durable and secure"],
    },
    {
        src: Grills7,
        alt: "Modern brown window grill integrated into the window frame",
        title: "Integrated Frame Grill",
        description: "A modern design that integrates smoothly with the window frame. The simple vertical bars are enhanced by a small, elegant central scroll.",
        dimensions: "Customizable to fit your space",
        material: "Aluminum",
        features: ["Sleek, integrated look", "Lightweight yet strong", "Corrosion-resistant bronze finish", "Minimalist design"],
    },
    {
        src: Grills8,
        alt: "Ornate Victorian style window grill with arches and fleur-de-lis",
        title: "Victorian Style Window Grill",
        description: "An intricate and ornamental grill inspired by Victorian design, featuring arches, fleur-de-lis, and diamond motifs for a truly historic look.",
        dimensions: "Customizable to fit your space",
        material: "Wrought Iron",
        features: ["Detailed Victorian patterns", "Handcrafted quality", "Unfinished for custom coloring", "Statement security piece"],
    },
    {
        src: Grills9,
        alt: "Modern stair railing with geometric patterns",
        title: "Simple Horizontal Bar Grill",
        description: "A minimalist and functional window grill with clean horizontal lines, offering security with a modern, unobtrusive look.",
        dimensions: "Customizable to fit your space",
        material: "Powder-Coated Steel",
        features: ["Minimalist modern design", "Low maintenance", "Durable finish", "Customizable spacing"],
    },
    {
        src: Grills10,
        alt: "Modern black stair railing with a pattern of vertical bars and rectangles",
        title: "Geometric Stair Railing",
        description: "A stunningly modern stair railing that makes a design statement with its unique geometric pattern of interlocking rectangles and clean lines.",
        dimensions: "Customizable to fit your space",
        material: "Matte Black Steel",
        features: ["Contemporary geometric pattern", "Sturdy steel construction", "Sleek matte finish", "Perfect for modern interiors"],
    },
    {
        src: Grills11,
        alt: "Art Deco inspired stair railing with bold vertical lines",
        title: "Art Deco Inspired Railing",
        description: "Drawing inspiration from Art Deco design, this railing features bold vertical lines and rectangular motifs, adding a sophisticated flair to any staircase.",
        dimensions: "Customizable to fit your space",
        material: "Wrought Iron",
        features: ["Art Deco styling", "Hand-welded for precision", "Durable and elegant", "Custom fit for any staircase"],
    },
    {
        src: Grills12,
        alt: "Minimalist stair railing with horizontal bars",
        title: "Horizontal Bar Stair Railing",
        description: "A clean and minimalist stair railing choice, featuring sleek horizontal bars that enhance the sense of space and light. Ideal for open-plan homes.",
        dimensions: "Customizable to fit your space",
        material: "Stainless Steel",
        features: ["Modern horizontal lines", "Enhances open-plan spaces", "Brushed steel finish", "Low maintenance and durable"],
    },
];

const GrillsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-1 py-10">
                <section>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold mb-4 pt-16 text-gray-800">
                            Grills & Railings Collection
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
                        {grillsData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-700 text-sm mb-4 flex-grow leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-semibold w-24">Dimensions:</span>
                                            <span>{item.dimensions}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="font-semibold w-24">Material:</span>
                                            <span>{item.material}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                                            Key Features:
                                        </h4>
                                        <ul className="space-y-1">
                                            {item.features.map((feature, featureIndex) => (
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

export default GrillsPage;