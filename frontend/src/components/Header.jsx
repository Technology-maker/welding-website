import Button from "../components/ui/Button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
            <header className="fixed top-0 w-full bg-white  border-b border-border z-50 shadow-card">
                <div className="container mx-auto px-4 py-4 bg-white">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-3  ">
                            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center bg-purple-800 text-white">
                                <span className="text-primary-foreground font-bold text-lg">SV</span>
                            </div>
                            <div>
                                <h1 className="font-display font-bold text-xl text-foreground">Shree Vinayak</h1>
                                <p className="text-muted-foreground text-sm">Metal Works</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8 ">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="tel:+919352391913">
                                <Button size="lg" className="bg-gradient-accent shadow-accent flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Button
                                variant="outline"
                                size="icon"
                                aria-expanded={isOpen}
                                onClick={() => setIsOpen((s) => !s)}
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-card border-t border-border shadow p-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a href="tel:+919352391913">
                                <Button size="lg" className="bg-gradient-accent shadow-accent flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now
                                </Button>
                            </a>
                        </nav>
                    </div>
                )}
            </header>
       
    );
};

export default Header;