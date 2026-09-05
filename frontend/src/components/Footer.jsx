import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const metalSurfaceBackground =
    "radial-gradient(circle at 14% 18%, rgba(184, 137, 69, 0.16), transparent 19rem), radial-gradient(circle at 90% 8%, rgba(14, 92, 112, 0.18), transparent 24rem), linear-gradient(145deg, #09101d 0%, #121826 48%, #0b1320 100%)";

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white" style={{ background: metalSurfaceBackground }}>
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-white text-slate-950 shadow-lg shadow-black/20">
                <span className="font-black">SV</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Shree Vinayak</h3>
                <p className="text-sm font-bold uppercase text-white/45">Metal Works</p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-white/62">
              With 25+ years of experience, Shree Vinayak Metal Works provides top-quality fabrication and welding solutions for gates, roofing, railings, grills, repairs, and custom work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919352391913"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919352391913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 px-4 py-2.5 font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white/45">Explore</h4>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="group inline-flex items-center gap-2 font-bold text-white/72 transition-colors hover:text-white">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white/45">Contact</h4>
            <div className="mt-5 grid gap-4 text-white/70">
              <a href="mailto:ajaywelder9352@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-orange-300" />
                <span className="break-all">ajaywelder9352@gmail.com</span>
              </a>
              <a href="tel:+919352391913" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-orange-300" />
                +91 9352391913
              </a>
              <a
                href="https://maps.app.goo.gl/sghziVA8zU6W5T5q8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                Raja Rao Tularam Chauk, Bhiwadi, Alwar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>&copy; {year} Shree Vinayak Metal Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
