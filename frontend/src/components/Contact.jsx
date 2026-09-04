import Button from "../components/ui/Button";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import MessageToaster from "../components/ui/Toaster";

const Contact = ({ prompt, contactNow }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const contactCards = [
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9352391913",
            href: "tel:+919352391913",
        },
        {
            icon: Mail,
            label: "Email",
            value: "ajaywelder9352@gmail.com",
            href: "mailto:ajaywelder9352@gmail.com",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Raja Rao Tularam Chauk, Bhiwadi, Alwar",
            href: "https://maps.app.goo.gl/sghziVA8zU6W5T5q8",
        },
        {
            icon: Clock,
            label: "Hours",
            value: "24/7 Emergency Services",
            helper: "Mon-Sun: 8AM-8PM",
        },
    ];

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        const sendingToastId = toast.loading("Sending message...");

        const formData = {
            name: form.current.name.value,
            phone: form.current.phone.value,
            address: form.current.address.value,
            email: form.current.email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        };

        try {
            const res = await fetch("https://welding-website-bhnp.vercel.app/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            toast.dismiss(sendingToastId);

            if (data.success) {
                toast.success("Message sent successfully.");
                form.current.reset();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.dismiss(sendingToastId);
            toast.error("Server error. Please try again.");
            console.error(error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-slate-950 text-white">
            <MessageToaster />
            <div className="section-shell">
                <div className="reveal-on-scroll overflow-hidden rounded-lg border border-white/10 bg-metal-radial shadow-2xl shadow-slate-950/30">
                    <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <span className="eyebrow border-white/15 bg-white/10 text-orange-100">Contact</span>
                            <h2 className="mt-5 text-balance text-[clamp(2.2rem,5vw,4rem)] font-black leading-tight">
                                {contactNow || "Get In Touch"}
                            </h2>
                            <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
                                Ready to start your metal fabrication project? Contact us today for a free consultation, site measurement, or urgent repair.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                {contactCards.map((item) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/8 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/12">
                                            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-orange-500 text-white">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black uppercase text-white/48">{item.label}</p>
                                                <p className="mt-1 font-bold leading-6 text-white">{item.value}</p>
                                                {item.helper && <p className="mt-1 text-sm text-white/55">{item.helper}</p>}
                                            </div>
                                        </div>
                                    );

                                    return item.href ? (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={item.label}>{content}</div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 rounded-lg border border-orange-300/20 bg-orange-500/10 p-5">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                                    <div>
                                        <h3 className="font-black">Emergency Services Available</h3>
                                        <p className="mt-2 leading-7 text-white/68">
                                            Need urgent repairs or installations? We are available for emergency metal fabrication support.
                                        </p>
                                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href="tel:+919352391913"
                                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-black text-white shadow-lg shadow-orange-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
                                            >
                                                <Phone className="h-4 w-4" />
                                                Emergency Hotline
                                            </a>
                                            <a
                                                href="https://wa.me/9352391913"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 font-black text-white transition-all duration-300 hover:bg-white hover:text-slate-950"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 text-slate-950 sm:p-7 lg:p-10">
                            <div className="mx-auto max-w-2xl">
                                <span className="section-kicker">Project enquiry</span>
                                <h3 className="mt-3 text-2xl font-black sm:text-3xl">{prompt || "Book a Free Consultation"}</h3>
                                <p className="mt-2 leading-7 text-slate-600">
                                    Share the basics and we will contact you with the next steps.
                                </p>

                                <form className="mt-7 space-y-5" ref={form} onSubmit={sendEmail} aria-busy={isSending}>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                                Full Name
                                            </label>
                                            <input id="name" name="name" className="field-control" required placeholder="Your name" autoComplete="name" />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                                Phone Number
                                            </label>
                                            <input id="phone" name="phone" className="field-control" required placeholder="Your phone" autoComplete="tel" inputMode="tel" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                            Full Address
                                        </label>
                                        <input id="address" name="address" type="text" className="field-control" placeholder="House no, village, city, state" required autoComplete="street-address" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                            Email Address
                                        </label>
                                        <input id="email" name="email" type="email" className="field-control" placeholder="your.email@example.com" autoComplete="email" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                            Service Required
                                        </label>
                                        <select id="subject" name="subject" className="field-control" required defaultValue="">
                                            <option value="" disabled>Select a service</option>
                                            <option>Metal Gates</option>
                                            <option>Roofing Sheets</option>
                                            <option>Railings & Grills</option>
                                            <option>Custom Fabrication</option>
                                            <option>Repair Services</option>
                                            <option>Industry Work</option>
                                            <option>Others</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mb-2 block text-xs font-black uppercase text-slate-600">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project requirements..."
                                            required
                                            className="field-control min-h-36 resize-y"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" disabled={isSending}>
                                        {isSending ? "Sending..." : "Send Message"}
                                        {!isSending && <ArrowRight className="h-4 w-4" />}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
