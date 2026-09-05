import Button from "../components/ui/Button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Reviews", href: "/#reviews" },
        { name: "Contact", href: "/#contact" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname, location.hash]);

    const getIsActive = (href) => {
        if (href === "/") return location.pathname === "/" && !location.hash;
        return location.pathname === "/" && location.hash === href.replace("/", "");
    };
    const elevated = scrolled || isOpen;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${elevated
                ? "border-b border-slate-200/80 bg-white/92 shadow-lg shadow-slate-900/8 backdrop-blur-xl"
                : "border-b border-white/10 bg-white/8 backdrop-blur-sm"
                }`}
        >
            <div className="section-shell">
                <div className="flex min-h-18 items-center justify-between gap-4 py-2 sm:min-h-20 sm:py-0">
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="group flex items-center gap-3"
                        aria-label="Shree Vinayak Metal Works home"
                    >
                        <div className={`grid h-11 w-11 place-items-center rounded-lg shadow-premium ring-1 ring-white/20 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-12 sm:w-12 ${elevated ? "bg-slate-950 text-white" : "bg-white text-slate-950"}`}>
                            <span className="text-base font-black">SV</span>
                        </div>
                        <div className="leading-tight">
                            <p className={`text-base font-black sm:text-lg ${elevated ? "text-slate-950" : "text-white"}`}>Shree Vinayak</p>
                            <p className={`text-xs font-extrabold uppercase ${elevated ? "text-slate-500" : "text-white/75"}`}>Metal Works</p>
                        </div>
                    </Link>

                    <nav className={`hidden items-center gap-1 rounded-full p-1 shadow-sm backdrop-blur lg:flex ${elevated ? "border border-white/75 bg-white/68" : "border border-white/35 bg-white/10"}`} aria-label="Primary navigation">
                        {navItems.map((item) => {
                            const active = getIsActive(item.href);
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-300 ${active
                                        ? "bg-slate-950 text-white shadow-sm"
                                        : elevated
                                            ? "text-slate-700 hover:bg-slate-950 hover:text-white"
                                            : "text-white hover:bg-white/15"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        <a
                            href="https://wa.me/919352391913"
                            aria-label="Chat on WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700 hover:shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </a>
                        <a
                            href="tel:+919352391913"
                            className="sheen-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[rgb(198,83,36)] px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(174,68,26)] hover:shadow-xl"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            onClick={() => setIsOpen((s) => !s)}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            <div
                id="mobile-navigation"
                inert={!isOpen}
                className={`lg:hidden overscroll-contain border-t border-slate-200/80 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 ${isOpen ? "max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
                    }`}
            >
                <nav className="section-shell flex flex-col gap-2 py-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`rounded-lg px-4 py-3 text-base font-extrabold transition-colors ${getIsActive(item.href)
                                ? "bg-slate-950 text-white"
                                : "text-slate-800 hover:bg-slate-100"
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                        <a
                            href="https://wa.me/919352391913"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800"
                        >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                        </a>
                        <a
                            href="tel:+919352391913"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[rgb(198,83,36)] px-4 py-3 font-bold text-white"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
