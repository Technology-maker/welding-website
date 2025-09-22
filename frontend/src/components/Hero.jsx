import Button from "../components/ui/Button";
import { Phone, Award, Clock, CheckCircle } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className="absolute inset-0 bg-gradient-hero/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24">
                <div className="max-w-4xl">
                    {/* Main Heading */}
                    <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight text-white ">
                        TRUSTED

                    </h1>

                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl text-white">
                        25+ years of excellence in metal fabrication, welding, and custom metalwork solutions
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">


                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">


                        <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                            <div className="flex items-center mb-3 ">
                                <Award className="w-6 h-6 text-accent mr-3 text-orange-500" />
                                <h3 className="font-display font-semibold text-primary-foreground">25+ YEARS EXPERIENCE</h3>
                            </div>
                            <p className="text-primary-foreground/80 text-white">We have over 25 years of experience in welding and fabrication.</p>
                        </div>


                        <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                            <div className="flex items-center mb-3">
                                <Clock className="w-6 h-6 text-accent mr-3 text-orange-500" />
                                <h3 className="font-display font-semibold text-primary-foreground">24/7 SERVICES</h3>
                            </div>
                            <p className="text-primary-foreground/80 text-white">We are 24/7 available to serve you with emergency services.</p>
                        </div>


                        <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                            <div className="flex items-center mb-3">
                                <CheckCircle className="w-6 h-6 text-accent mr-3 text-orange-500" />
                                <h3 className="font-display font-semibold text-primary-foreground  ">HIGH QUALITY WORK</h3>
                            </div>
                            <p className="text-primary-foreground/80 text-white">High quality services and products with guaranteed satisfaction.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
