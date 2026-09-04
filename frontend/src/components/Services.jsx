import Button from "../components/ui/Button";
import { ArrowRight, Check, Hammer, PanelsTopLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import metalGates from "../assets/metal-gates.jpg";
import metalGates2 from "../assets/gates-img/gate2.jpeg";
import metalGates3 from "../assets/gates-img/gate4.jpeg";

import roofingSheets from "../assets/roofing-sheets.jpg";
import roofingSheets2 from "../assets/roofs-img/roof-img17.jpeg";
import roofingSheets3 from "../assets/roofs-img/roof-img6.jpeg";

import railingsGrills from "../assets/railings-grills.jpg";
import railingsGrills2 from "../assets/stairs-grills-img/img2.jpeg";
import railingsGrills3 from "../assets/stairs-grills-img/img12.jpeg";

const Services = () => {
    const metalSurfaceBackground =
        "radial-gradient(circle at 14% 18%, rgba(184, 137, 69, 0.16), transparent 19rem), radial-gradient(circle at 90% 8%, rgba(14, 92, 112, 0.18), transparent 24rem), linear-gradient(145deg, #09101d 0%, #121826 48%, #0b1320 100%)";

    const process = [
        { step: "01", title: "Measure", text: "We inspect the site, note dimensions, and understand how the work will be used." },
        { step: "02", title: "Fabricate", text: "Material, pattern, welding, and finishing are handled with practical durability in mind." },
        { step: "03", title: "Install", text: "Final fitting is aligned on site with clean handover and responsive follow-up." },
    ];

    const services = [
        {
            title: "Metal Gates",
            route: "/gates",
            icon: ShieldCheck,
            description:
                "Custom designed metal gates with intricate patterns and robust security features. Built to last with premium materials and expert craftsmanship.",
            images: [metalGates, metalGates2, metalGates3],
            features: ["Custom designs", "Security features", "Durable materials", "Expert installation"],
        },
        {
            title: "Roofing Sheets",
            route: "/roofing",
            icon: PanelsTopLeft,
            description:
                "High-quality metal roofing solutions for residential and commercial properties. Weather-resistant and energy-efficient installations.",
            images: [roofingSheets, roofingSheets2, roofingSheets3],
            features: ["Weather resistant", "Energy efficient", "Long lasting", "Professional install"],
        },
        {
            title: "Railings & Grills",
            route: "/grills",
            icon: Hammer,
            description:
                "Elegant and functional railings and grills that combine safety with aesthetic appeal. Perfect for balconies, stairs, and windows.",
            images: [railingsGrills, railingsGrills2, railingsGrills3],
            features: ["Safety first", "Elegant design", "Custom patterns", "Multiple finishes"],
        },
    ];

    return (
        <section id="services" className="section-padding relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-fine-grid opacity-45" aria-hidden="true" />
            <div className="section-shell relative">
                <div className="reveal-on-scroll mx-auto mb-14 max-w-3xl text-center">
                    <span className="eyebrow">Services</span>
                    <h2 className="mt-5 text-balance text-[clamp(2.25rem,5vw,4rem)] font-black leading-tight text-slate-950">
                        Metalwork that looks refined and performs for years.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        From design to installation, we build practical, polished fabrication solutions tailored to homes, shops, and industrial spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={service.title}
                                className={`reveal-on-scroll stagger-${index + 1} premium-card group flex min-h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-900/12`}
                            >
                                <Link
                                    to={service.route}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    aria-label={`View ${service.title}`}
                                    className="block overflow-hidden"
                                >
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop
                                        autoplay={{ delay: 2400 + index * 350, disableOnInteraction: false }}
                                        pagination={{ clickable: true }}
                                        className="service-swiper h-72 w-full"
                                    >
                                        {service.images.map((img, idx) => (
                                            <SwiperSlide key={img}>
                                                <img
                                                    src={img}
                                                    alt={`${service.title} project ${idx + 1}`}
                                                    className="image-lift h-72 w-full object-cover"
                                                    loading={idx === 0 ? "eager" : "lazy"}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Link>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <div className="mb-5 flex items-center justify-between gap-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-white shadow-lg shadow-slate-900/20 transition-transform duration-300 group-hover:rotate-3">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-black uppercase text-orange-700">
                                            Custom made
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-950">{service.title}</h3>
                                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>

                                    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                                                    <Check className="h-3.5 w-3.5" />
                                                </span>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to={service.route}
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        className="mt-7"
                                    >
                                        <Button variant="outline" className="w-full">
                                            Explore Collection
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="reveal-on-scroll mt-10 grid gap-4 rounded-lg border border-slate-200 bg-slate-50/80 p-3 shadow-inner shadow-slate-900/5 md:grid-cols-3">
                    {process.map((item) => (
                        <div key={item.step} className="metric-tile p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200">
                            <span className="text-sm font-black text-orange-700">{item.step}</span>
                            <h3 className="mt-3 text-xl font-black text-slate-950">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="reveal-on-scroll mt-10 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-white shadow-2xl shadow-slate-900/20"
                    style={{ background: metalSurfaceBackground }}
                >
                    <div className="hairline-top grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <span className="text-sm font-black uppercase text-orange-300">Custom fabrication</span>
                            <h3 className="mt-3 text-2xl font-black sm:text-3xl">Have a unique requirement?</h3>
                            <p className="mt-3 max-w-2xl leading-7 text-white/72">
                                We also handle metal furniture, industrial components, decorative items, repair services, and specialized welding work.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/9352391913"
                            aria-label="Discuss your project on WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-black text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50"
                        >
                            Discuss Your Project
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
