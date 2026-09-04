import Button from "../components/ui/Button";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArrowRight, Check, Eye, IndianRupee, Phone, Ruler, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const GalleryCollection = ({ title, intro, bullets, items, contactNow, prompt }) => {
    const heroImage = items[0]?.src;
    const [selectedItem, setSelectedItem] = useState(null);

    const scrollToContact = () => {
        setSelectedItem(null);
        window.setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 80);
    };

    useEffect(() => {
        if (!selectedItem) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setSelectedItem(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedItem]);

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f4f7fb_100%)]">
            <Header />
            <main>
                <section className="relative isolate overflow-hidden pt-32 text-white">
                    {heroImage && (
                        <div
                            className="absolute inset-0 -z-20 bg-cover bg-center"
                            style={{ backgroundImage: `url(${heroImage})` }}
                            aria-hidden="true"
                        />
                    )}
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,16,30,0.93),rgba(9,16,30,0.78)_48%,rgba(9,16,30,0.42))]" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-slate-50 to-transparent" aria-hidden="true" />

                    <div className="section-shell pb-20 pt-8">
                        <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_22rem] lg:items-end">
                            <div className="mobile-viewport-box min-w-0 sm:max-w-3xl">
                                <span className="eyebrow animate-fade-up border-white/15 bg-white/10 text-orange-100">
                                    <Sparkles className="h-4 w-4" />
                                    Premium collection
                                </span>
                                <h1 className="animate-fade-up animate-delay-1 mt-6 text-balance text-[clamp(2.7rem,7vw,5.8rem)] font-black leading-none">
                                    {title}
                                </h1>
                                <p className="animate-fade-up animate-delay-2 mobile-viewport-box mt-6 break-words text-lg leading-8 text-white/76 sm:max-w-2xl">
                                    {intro}
                                </p>
                                <div className="animate-fade-up animate-delay-3 mobile-viewport-box mt-8 grid min-w-0 gap-3 sm:max-w-none sm:grid-cols-3">
                                    {bullets.map((bullet, index) => {
                                        const icons = [Sparkles, IndianRupee, Phone];
                                        const Icon = icons[index] || Check;
                                        return (
                                            <div key={bullet} className="min-w-0 rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/14">
                                                <Icon className="mb-3 h-5 w-5 text-orange-300" />
                                                <p className="break-words text-sm font-bold leading-6 text-white/82">{bullet}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="animate-fade-up animate-delay-3 mobile-viewport-box min-w-0 rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur-md sm:w-auto">
                                <p className="section-kicker text-orange-200">Collection snapshot</p>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-3xl font-black">{items.length}</p>
                                        <p className="mt-1 text-sm font-semibold text-white/62">Design examples</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black">Custom</p>
                                        <p className="mt-1 text-sm font-semibold text-white/62">Sizing and finish</p>
                                    </div>
                                </div>
                                <Button type="button" size="lg" onClick={scrollToContact} className="mt-6 w-full">
                                    Start Order
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding pt-10">
                    <div className="section-shell">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {items.map((item, index) => (
                                <article
                                    key={`${item.title}-${index}`}
                                    className={`reveal-on-scroll stagger-${(index % 3) + 1} premium-card group flex min-h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/12`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(item)}
                                        className="group/image relative block w-full overflow-hidden text-left"
                                        aria-label={`Preview ${item.title}`}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="image-lift aspect-[4/3] w-full object-cover"
                                            loading={index < 4 ? "eager" : "lazy"}
                                        />
                                        <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-between rounded-lg border border-white/20 bg-slate-950/72 px-3 py-2 text-sm font-black text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100 group-focus-visible/image:translate-y-0 group-focus-visible/image:opacity-100">
                                            View project
                                            <Eye className="h-4 w-4" />
                                        </span>
                                    </button>

                                    <div className="flex flex-1 flex-col p-5">
                                        <h2 className="text-xl font-black leading-tight text-slate-950 transition-colors duration-300 group-hover:text-orange-800">
                                            {item.title}
                                        </h2>
                                        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>

                                        <div className="mt-5 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                                <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                                                <div>
                                                    <span className="font-black text-slate-950">Dimensions</span>
                                                    <p>{item.dimensions}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 text-sm text-slate-700">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                                                <div>
                                                    <span className="font-black text-slate-950">Material</span>
                                                    <p>{item.material}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h3 className="text-xs font-black uppercase text-slate-500">Key Features</h3>
                                            <ul className="mt-3 grid gap-2">
                                                {item.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-700">
                                                            <Check className="h-3.5 w-3.5" />
                                                        </span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button type="button" onClick={scrollToContact} className="mt-6 w-full">
                                            Request To Order
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <Contact contactNow={contactNow} prompt={prompt} />
            </main>
            <Footer />

            {selectedItem && (
                <div
                    className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/84 p-4 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedItem.title} preview`}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setSelectedItem(null);
                    }}
                >
                    <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/12 bg-white shadow-2xl">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-4">
                            <div>
                                <p className="section-kicker">Project preview</p>
                                <h2 className="mt-1 text-xl font-black text-slate-950">{selectedItem.title}</h2>
                            </div>
                            <Button type="button" variant="outline" size="icon" onClick={() => setSelectedItem(null)} aria-label="Close project preview">
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="grid max-h-[78vh] overflow-auto lg:grid-cols-[1fr_22rem]">
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="h-full min-h-[18rem] w-full bg-slate-100 object-contain lg:max-h-[78vh]"
                            />
                            <div className="border-t border-slate-200 p-5 lg:border-l lg:border-t-0">
                                <p className="leading-7 text-slate-600">{selectedItem.description}</p>
                                <div className="mt-5 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                                    <p><span className="font-black text-slate-950">Dimensions:</span> {selectedItem.dimensions}</p>
                                    <p><span className="font-black text-slate-950">Material:</span> {selectedItem.material}</p>
                                </div>
                                <ul className="mt-5 grid gap-2">
                                    {selectedItem.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-700">
                                                <Check className="h-3.5 w-3.5" />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button type="button" onClick={scrollToContact} className="mt-6 w-full">
                                    Request This Style
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryCollection;
