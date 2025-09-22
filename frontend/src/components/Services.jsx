import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// scroll images gates
import metalGates from "../assets/metal-gates.jpg";
import metalGates2 from "../assets/gates-img/gate2.jpeg";
import metalGates3 from "../assets/gates-img/gate4.jpeg";

// scrollimage roofing
import roofingSheets from "../assets/roofing-sheets.jpg";
import roofingSheets2 from "../assets/roofs-img/roof-img17.jpeg";
import roofingSheets3 from "../assets/roofs-img/roof-img6.jpeg";

// scroll image railings or grills
import railingsGrills from "../assets/railings-grills.jpg";
import railingsGrills2 from "../assets/stairs-grills-img/img2.jpeg";
import railingsGrills3 from "../assets/stairs-grills-img/img12.jpeg";

const Services = () => {
    const services = [
        {
            title: "Metal Gates",
            route: "/gates",
            description:
                "Custom designed metal gates with intricate patterns and robust security features. Built to last with premium materials and expert craftsmanship.",
            images: [metalGates, metalGates2, metalGates3],
            features: [
                "Custom Designs",
                "Security Features",
                "Durable Materials",
                "Expert Installation",
            ],
        },
        {
            title: "Roofing Sheets",
            route: "/roofing",
            description:
                "High-quality metal roofing solutions for residential and commercial properties. Weather-resistant and energy-efficient installations.",
            images: [roofingSheets, roofingSheets2, roofingSheets3],
            features: [
                "Weather Resistant",
                "Energy Efficient",
                "Long Lasting",
                "Professional Install",
            ],
        },
        {
            title: "Railings & Grills",
            route: "/grills",
            description:
                "Elegant and functional railings and grills that combine safety with aesthetic appeal. Perfect for balconies, stairs, and windows.",
            images: [railingsGrills, railingsGrills2, railingsGrills3],
            features: [
                "Safety First",
                "Elegant Design",
                "Custom Patterns",
                "Multiple Finishes",
            ],
        },
    ];

    return (
        <section id="services" className="py-20 pb-9 bg-muted/30">
            <div className="container mx-auto px-4 ">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
                        Our Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Professional metal fabrication services tailored to your specific
                        needs. From design to installation, we deliver excellence in every
                        project.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden shadow-card hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-slate-200 rounded-md"
                        >
                            {/* Swiper for images */}
                            <div className="relative overflow-hidden rounded-t-md">
                                <Link to={service.route}>
                                    <Swiper modules={[Autoplay, Pagination,]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} pagination={{ clickable: true }} className="w-full h-64"  >
                                        {service.images.map((img, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img
                                                    src={img}
                                                    alt={`${service.title} ${idx + 1}`}
                                                    className="w-full h-64 object-cover"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Link>
                            </div>

                            <div className="p-6">
                                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center text-sm text-muted-foreground"
                                        >
                                            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link to={service.route}>
                                    <Button variant="outline" className="w-full group/btn hover:bg-orange-400 " >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Services */}
                <div className="mt-16 text-center rounded-lg bg-slate-200 ">
                    <div className="bg-gradient-metallic shadow-professional overflow-hidden">
                        <div className="p-8 rounded-md ">
                            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                                Custom Fabrication Services
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Need something unique? We offer custom metal fabrication for
                                furniture, decorative items, industrial components, and
                                specialized metalwork projects.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
                                <span>• Metal Furniture</span>
                                <span>• Industrial Components</span>
                                <span>• Decorative Items</span>
                                <span>• Repair Services</span>
                                <span>• Welding Services</span>
                            </div>
                            <a
                                href="https://wa.me/9352391913"
                                aria-label="Chat on WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 text-white bg-orange-500 hover:bg-orange-400 rounded-lg shadow-accent"
                            >
                                Discuss Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
