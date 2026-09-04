import { Award, CheckCircle, Hammer, Ruler, ShieldCheck, Users } from "lucide-react";
import OwnerImg from "../assets/owner-removebg-preview.png";

const About = () => {
    const points = [
        "25+ years of welding and fabrication experience",
        "Custom work for homes, shops, and industrial spaces",
        "Clear communication from measurement to installation",
    ];

    const stats = [
        { icon: Award, label: "Experience", value: "25+ Years" },
        { icon: Hammer, label: "Specialty", value: "Custom Metalwork" },
        { icon: Users, label: "Focus", value: "Customer Trust" },
    ];

    const capabilities = [
        { icon: Ruler, label: "On-site measurement" },
        { icon: ShieldCheck, label: "Durable finishing" },
        { icon: Hammer, label: "Repair and installation" },
    ];

    return (
        <section id="about" className="section-padding overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]">
            <div className="section-shell">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="reveal-on-scroll">
                        <div className="relative mx-auto max-w-md">
                            <div className="premium-card overflow-hidden bg-white shadow-2xl shadow-slate-900/10">
                                <div className="bg-metal-radial p-8 pb-0">
                                    <img
                                        src={OwnerImg}
                                        alt="Mr. Ajay Pal, owner and founder of Shree Vinayak Metal Works"
                                        className="mx-auto h-80 w-full max-w-sm object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h2 className="text-2xl font-black text-slate-950">Mr. Ajay Pal</h2>
                                    <p className="mt-1 font-bold text-orange-700">Owner & Founder</p>
                                </div>
                            </div>
                            <div className="relative -mt-5 mx-6 grid gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">
                                {capabilities.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} className="flex items-center gap-3 text-sm font-extrabold text-slate-700">
                                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950 text-white">
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            {item.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="reveal-on-scroll stagger-1">
                        <span className="eyebrow">About the founder</span>
                        <h2 className="mt-5 text-balance text-[clamp(2.15rem,5vw,4rem)] font-black leading-tight text-slate-950">
                            Craftsmanship built on trust, precision, and long-term quality.
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Mr. Ajay Pal, founder and owner of Shree Vinayak Fabrication, brings over 25 years of hands-on experience in welding and metal fabrication. His commitment to skilled craftsmanship, durable work, and customer satisfaction has shaped the reputation of the business.
                        </p>

                        <div className="mt-7 grid gap-3">
                            {points.map((point) => (
                                <div key={point} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white">
                                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                                    <p className="font-semibold leading-6 text-slate-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-7 rounded-lg border border-orange-200 bg-orange-50/75 p-5 text-slate-800 shadow-sm">
                            <p className="leading-7">
                                "Every project shows our hard work and our promise to give the best to our customers. We believe in quality, trust, and making sure our customers are happy with our work."
                            </p>
                            <cite className="mt-3 block text-sm font-black not-italic text-orange-800">Mr. Ajay Pal</cite>
                        </blockquote>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.label} className="metric-tile p-5">
                                        <Icon className="h-5 w-5 text-orange-700" />
                                        <p className="mt-4 text-xs font-black uppercase text-slate-500">{stat.label}</p>
                                        <p className="mt-1 font-black text-slate-950">{stat.value}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
