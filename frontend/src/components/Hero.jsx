import Button from "../components/ui/Button";
import { ArrowRight, Award, CheckCircle, Clock, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";
import metalGates from "../assets/metal-gates.jpg";
import roofingSheets from "../assets/roofing-sheets.jpg";
import railingsGrills from "../assets/railings-grills.jpg";

const Hero = () => {
    const highlights = [
        { icon: Award, title: "25+ years", text: "Hands-on fabrication experience" },
        { icon: Clock, title: "24/7 help", text: "Emergency repairs and site visits" },
        { icon: ShieldCheck, title: "Built strong", text: "Durable materials and clean finishing" },
    ];

    return (
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,12,22,0.95)_0%,rgba(9,16,30,0.8)_46%,rgba(9,16,30,0.46)_100%)]" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 bg-fine-grid opacity-20" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

            <div className="section-shell grid min-w-0 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                <div className="mobile-viewport-box min-w-0 text-white sm:max-w-3xl">
                    <div className="eyebrow animate-fade-up border-white/20 bg-white/10 text-orange-100 backdrop-blur">
                        <Sparkles className="h-4 w-4" />
                        Trusted local metal fabrication
                    </div>

                    <h1 className="animate-fade-up animate-delay-1 mt-6 text-balance text-[clamp(2.9rem,8vw,6.45rem)] font-black leading-[0.96] tracking-normal">
                        Shree Vinayak Metal Works
                    </h1>

                    <p className="animate-fade-up animate-delay-2 mobile-viewport-box mt-6 break-words text-[clamp(1.05rem,2.4vw,1.35rem)] leading-8 text-white/84 sm:max-w-2xl">
                        Premium gates, roofing sheets, railings, grills, welding, and custom metalwork made with precise craftsmanship and reliable installation.
                    </p>

                    <div className="animate-fade-up animate-delay-3 mobile-viewport-box mt-9 flex flex-col gap-3 sm:max-w-none sm:flex-row">
                        <a href="tel:+919352391913" className="block w-full sm:inline-flex sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto">
                                <Phone className="h-4 w-4" />
                                Call for Consultation
                            </Button>
                        </a>
                        <a href="#services" className="block w-full sm:inline-flex sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-slate-950 sm:w-auto">
                                View Services
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>

                    <div className="animate-fade-up animate-delay-3 mobile-viewport-box mt-10 grid gap-3 text-sm font-bold text-white/76 sm:flex sm:max-w-none sm:flex-wrap">
                        <span className="inline-flex min-w-0 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 backdrop-blur">
                            <MapPin className="h-4 w-4 text-orange-300" />
                            Bhiwadi, Alwar
                        </span>
                        <span className="inline-flex min-w-0 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 backdrop-blur">
                            <CheckCircle className="h-4 w-4 text-orange-300" />
                            Site measurement available
                        </span>
                    </div>

                    <div className="animate-fade-up animate-delay-3 mobile-viewport-box mt-7 grid gap-4 sm:w-auto sm:grid-cols-3">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/14">
                                    <Icon className="mb-3 h-5 w-5 text-orange-300" />
                                    <h3 className="text-lg font-black">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-white/72">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="animate-fade-up animate-delay-2 hidden lg:block">
                    <div className="relative min-h-[36rem]">
                        <div className="absolute right-6 top-0 w-[72%] overflow-hidden rounded-lg border border-white/20 bg-white/12 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                            <img
                                src={metalGates}
                                alt="Custom metal gate crafted by Shree Vinayak Metal Works"
                                className="aspect-[4/5] w-full rounded-md object-cover"
                            />
                            <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-white/20 bg-slate-950/72 p-5 text-white shadow-2xl backdrop-blur-md">
                                <div className="flex items-start gap-3">
                                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-orange-500">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-black">Made to fit your site</p>
                                        <p className="mt-1 text-sm leading-6 text-white/72">Custom dimensions, materials, patterns, and finishes for each project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={roofingSheets}
                            alt="Metal roofing sheet installation by Shree Vinayak Metal Works"
                            className="absolute left-0 top-20 aspect-[4/3] w-[44%] rounded-lg border border-white/20 object-cover shadow-2xl shadow-black/25"
                            loading="lazy"
                        />
                        <img
                            src={railingsGrills}
                            alt="Custom railing and grill metalwork"
                            className="absolute bottom-8 left-14 aspect-[5/4] w-[38%] rounded-lg border border-white/20 object-cover shadow-2xl shadow-black/25"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
