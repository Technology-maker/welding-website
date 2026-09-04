import GalleryCollection from "../components/GalleryCollection";
import Gate1 from "../assets/gates-img/gate1.jpeg";
import Gate2 from "../assets/gates-img/gate2.jpeg";
import Gate3 from "../assets/gates-img/gate3.jpeg";
import Gate4 from "../assets/gates-img/gate4.jpeg";
import Gate5 from "../assets/gates-img/gate5.jpeg";
import Gate6 from "../assets/gates-img/gate6.jpeg";
import Gate7 from "../assets/gates-img/gate7.jpeg";
import Gate8 from "../assets/gates-img/gate8.jpeg";
import Gate9 from "../assets/gates-img/gate9.jpeg";
import Gate10 from "../assets/gates-img/gate10.jpeg";
import Gate12 from "../assets/gates-img/gate12.jpeg";

const gates = [
    {
        src: Gate1,
        alt: "Classic wrought iron gate with ornate scrollwork and decorative finials in black finish",
        title: "Classic Wrought Iron Gate",
        description:
            "Elegant wrought iron gate with intricate scrollwork and decorative finials, perfect for traditional homes and estates. Features anti-rust coating and custom welding.",
        dimensions: "Width: 12ft, Height: 6ft",
        material: "Heavy Gauge Iron",
        features: ["Weather-resistant finish", "Custom scrollwork", "Double swing design", "Security lock system"],
    },
    {
        src: Gate2,
        alt: "Contemporary Iron Gate with Vertical slats and minimalist industrial design",
        title: "Modern Iron Gate",
        description:
            "Sleek and minimalistic iron gate with vertical slats for a contemporary look. Perfect for modern architecture with clean lines and industrial aesthetic.",
        dimensions: "Width: 14ft, Height: 7ft",
        material: "Powder Gauge Iron",
        features: ["Vertical slat design", "Smooth sliding mechanism", "Weatherproof coating", "Low maintenance"],
    },
    {
        src: Gate3,
        alt: "Premium teak iron metal gate with traditional craftsmanship",
        title: "Premium Iron Metal Gate",
        description:
            "Solid iron gate providing maximum privacy. Handcrafted with traditional joinery and natural paint finishing for durability.",
        dimensions: "Width: 10ft, Height: 6.5ft",
        material: "Heavy Gauge Iron",
        features: ["Natural wood-like paint finish", "Weather-resistant", "Handcrafted details", "Eco-friendly finish"],
    },
    {
        src: Gate4,
        alt: "Rustic farm style gate with weathered finish and traditional hardware",
        title: "Rustic Farm Style Gate",
        description:
            "Durable farm gate with authentic rustic finish, ideal for country homes, ranches, and agricultural properties. Built to withstand harsh weather conditions.",
        dimensions: "Width: 16ft, Height: 5ft",
        material: "Galvanized Steel",
        features: ["Heavy-duty construction", "Rust-resistant coating", "Easy swing operation", "Farm-style aesthetic"],
    },
    {
        src: Gate5,
        alt: "Decorative iron gate with intricate patterns and lightweight construction",
        title: "Decorative Iron Gate",
        description:
            "Lightweight iron gate with elegant decorative patterns and excellent corrosion resistance. Ideal for coastal areas and modern residential properties.",
        dimensions: "Width: 12ft, Height: 6ft",
        material: "Marine-grade Aluminum",
        features: ["Corrosion-resistant", "Lightweight design", "Decorative patterns", "Low maintenance"],
    },
    {
        src: Gate6,
        alt: "Security steel gate with reinforced panels and anti-climb features",
        title: "Security Steel Gate",
        description:
            "Heavy-duty security gate with reinforced panels and anti-climb design. Provides maximum security while maintaining aesthetic appeal for residential and commercial use.",
        dimensions: "Width: 15ft, Height: 8ft",
        material: "Reinforced Steel",
        features: ["Anti-climb design", "Reinforced panels", "Multiple locking points", "Security certified"],
    },
    {
        src: Gate7,
        alt: "Ornamental iron gate with elaborate floral patterns and luxury gold accents",
        title: "Ornamental Iron Gate",
        description:
            "Beautiful ornamental iron gate with elaborate floral patterns and gold leaf accents. A statement piece for luxury homes and historic properties.",
        dimensions: "Width: 10ft, Height: 7ft",
        material: "Ornamental Wrought Iron",
        features: ["Gold leaf accents", "Floral patterns", "Custom design", "Luxury finish"],
    },
    {
        src: Gate8,
        alt: "Automatic sliding gate with remote control operation and safety features",
        title: "Automatic Sliding Gate",
        description:
            "Modern automatic sliding gate with remote control operation and safety sensors. Perfect for convenience and security in residential and commercial properties.",
        dimensions: "Width: 20ft, Height: 6ft",
        material: "Powder-coated Steel",
        features: ["Remote control", "Safety sensors", "Quiet operation", "Weatherproof motor"],
    },
    {
        src: Gate9,
        alt: "Elegant curved-top iron gate with smooth black finish",
        title: "Curved Elegance Iron Gate",
        description:
            "Stylish iron gate with a smooth curved top design for a luxurious entrance. Perfect balance of elegance and strength for residential properties.",
        dimensions: "Width: 14ft, Height: 7ft",
        material: "Forged Iron",
        features: ["Curved top design", "Durable forged iron", "Anti-rust coating", "Classic style"],
    },
    {
        src: Gate10,
        alt: "Minimalist horizontal slat steel gate in matte black finish",
        title: "Minimalist Horizontal Gate",
        description:
            "Contemporary steel gate with horizontal slat design. Offers a modern, minimalistic look with privacy and durability.",
        dimensions: "Width: 12ft, Height: 6ft",
        material: "Powder-coated Steel",
        features: ["Horizontal slat design", "Matte black finish", "Privacy-focused", "Weather-resistant"],
    },
    {
        src: Gate12,
        alt: "Grand double-arch iron gate with luxury design",
        title: "Grand Arch Iron Gate",
        description:
            "Luxurious double-arch iron gate designed to make a grand statement for estates and villas. Combines durability with artistic design.",
        dimensions: "Width: 18ft, Height: 9ft",
        material: "Premium Wrought Iron",
        features: ["Double-arch design", "Premium iron build", "Custom engraving option", "Long-lasting finish"],
    },
];

const Gates = () => (
    <GalleryCollection
        title="Premium Gate Collection"
        intro="We create strong and stylish metal gates for installation, repair, and custom design needs."
        bullets={[
            "Choose from many designs or share your own idea",
            "Pricing depends on design, materials, and weight",
            "Contact us today for a free consultation",
        ]}
        items={gates}
        contactNow="Order Now"
        prompt="Order Here"
    />
);

export default Gates;
