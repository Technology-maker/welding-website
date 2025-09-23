import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-md bg-slate-600">
                <span className="font-bold text-lg">SV</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl">Shree Vinayak</h3>
                <p className="text-sm text-gray-400">Metal Works</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              With 25+ years of experience, Shree Vinayak Metal Works provides
              top-quality fabrication & welding solutions. From gates to roofing,
              we ensure durability, safety, and precision.
            </p>
            <div className="flex items-center text-sm text-gray-300 space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+919876543210" className="hover:text-accent transition">
                +91 9352391913
              </a>
            </div>
          </div>




          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <a
                  href="mailto:info@shreevinayak.shop"
                  className="hover:text-accent transition"
                >
                  info@shreevinayak.shop
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-accent mt-0.5" />
                <span>Industrial Area, <br />Bhiwadi, Alwar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shree Vinayak Metal Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
