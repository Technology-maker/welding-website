import GalleryCollection from "../components/GalleryCollection";
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
        description: "A robust security grill with a belly design, providing extra dimension. The studded details on the bars add a touch of industrial style.",
        dimensions: "Customizable to fit your space",
        material: "Solid Steel",
        features: ["3D belly profile", "Industrial studded design", "Maximum security", "Matte black finish"],
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

const GrillsPage = () => (
    <GalleryCollection
        title="Grills & Railings Collection"
        intro="We craft beautiful and secure metal grills and railings for windows, balconies, and stairs, available for installation, repair, or custom design."
        bullets={[
            "Explore our designs or bring your own vision",
            "Pricing is based on design, materials, and complexity",
            "Contact us today for a free consultation",
        ]}
        items={grillsData}
        contactNow="Order Now"
        prompt="Order Here"
    />
);

export default GrillsPage;
