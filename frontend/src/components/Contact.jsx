import Button from "../components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import React, { useRef } from "react";
import toast from 'react-hot-toast';
import MessageToaster from "../components/ui/Toaster"


const Contact = ({ prompt, contactNow }) => {

    const form = useRef();
    const [result, setResult] = React.useState("");
    const [toastType, setToastType] = React.useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        const sendingToastId = toast.loading("Sending...");

        const formData = {
            name: form.current.name.value,
            phone: form.current.phone.value,
            address: form.current.address.value,
            email: form.current.email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        };

        try {
            const res = await fetch("http://localhost:3000/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            toast.dismiss(sendingToastId);

            if (data.success) {
                toast.success("Message sent successfully! 🚀");
                form.current.reset();
            } else {
                toast.error("Something went wrong.");
            }
        } catch (error) {
            toast.dismiss(sendingToastId);
            toast.error("Server error. Please try again.");
            console.error(error);
        }
    };



    return (
        <section id="contact" className="pb-20 py-10 bg-gradient-to-b">
            <MessageToaster message={result} type={toastType} />
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-slate-800 via-blue-950 to-indigo-900 p-4 rounded-2xl shadow-2xl ring-1 ring-white/5 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {/* Contact Info */}

                        <div className="p-6 rounded-xl text-white ">
                            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
                                {contactNow || "Get In Touch"}
                            </h2>
                            <p className="text-lg text-primary-foreground/85 mb-8 max-w-xl">
                                Ready to start your metal fabrication project? Contact us today for a free consultation.
                            </p>

                            <div className="space-y-5">

                                {/* phone section   */}
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-orange-500  rounded-lg">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <a href="tel:+919352391913" className=" hover:underline">
                                            +91 9352391913
                                        </a>
                                    </div>
                                </div>


                                {/* Email section */}
                                <div className="flex items-center space-x-4 ">
                                    <div className="w-12 h-12 bg-accent/90 rounded-lg flex items-center justify-center shadow-md ring-1 ring-black/20  bg-orange-500">
                                        <div className="p-3 bg-orange-500 rounded-lg">
                                            <Mail size={24} />
                                        </div>
                                    </div>
                                    <div >
                                        <h3 className="font-semibold text-primary-foreground">Email</h3>
                                        <a href="mailto:ajaywelder9352@gmail.com" className="hover:underline">
                                            ajaywelder9352@gmail.com
                                        </a>
                                    </div>
                                </div>



                                {/* location  */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/90 rounded-lg flex items-center justify-center shadow-md ring-1 ring-black/20  bg-orange-500">
                                        <div className="p-3 bg-orange-500 rounded-lg">
                                            <MapPin size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold ">Location</h4>
                                        <a
                                            href="https://maps.app.goo.gl/wDPNd8vmBghreMAW9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            Raja Rao Tularam Chauk, Bhiwadi, Alwar
                                        </a>

                                    </div>
                                </div>




                                {/* detail section   */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/90 rounded-lg flex items-center justify-center shadow-md ring-1 ring-black/20  bg-orange-500">
                                        <Clock className="w-6 h-6 text-accent-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-foreground">Hours</h3>
                                        <p className="text-primary-foreground/80">24/7 Emergency Services</p>
                                        <p className="text-primary-foreground/60 text-sm">Mon-Sun: 8AM-8PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="mt-8 p-6  rounded-lg  border-accent/25 shadow-sm">
                                <h3 className="font-display font-bold text-primary-foreground mb-2">
                                    Emergency Services Available
                                </h3>
                                <p className="text-primary-foreground/80 mb-4">
                                    Need urgent repairs or installations? We're available 24/7 for emergency metal fabrication services.
                                </p>
                                <Button size="lg" className="bg-accent shadow-accent text-white hover:brightness-105 transition">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href="tel:+919352391913" >
                                        Emergency Hotline
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form (styled native elements) */}
                        <div className="bg-card/95 backdrop-blur-sm shadow-professional rounded-xl border border-white/6  bg-white">
                            <div className="p-8">
                                <h3 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                                    {prompt || "Book Now 🚀"}
                                </h3>


                                {/* my form  */}
                                <form className="space-y-6" ref={form} onSubmit={sendEmail} >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        {/* name  */}
                                        <div>
                                            <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                                Full Name
                                            </label>
                                            <input name="name" className="w-full p-3 border border-input bg-background rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {/* Phone number  */}
                                        <div>
                                            <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                                Phone Number
                                            </label>
                                            <input name="phone" className="w-full p-3 border border-input bg-background rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                                                placeholder="Your phone"
                                            />
                                        </div>
                                    </div>




                                    {/* address  */}
                                    <div>
                                        <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                            Full Address
                                        </label>
                                        <input name="address" type="text" className="w-full p-3 border border-input bg-background rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" placeholder="House No,Village,City,State" />
                                    </div>



                                    {/* Email address  */}
                                    <div>
                                        <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                            Email Address
                                        </label>
                                        <input name="email" type="email" className="w-full p-3 border border-input bg-background rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition" placeholder="your.email@example.com" />
                                    </div>




                                    {/* subject  */}
                                    <div>
                                        <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                            Service Required
                                        </label>
                                        <select name="subject" className="w-full p-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 transition">
                                            <option>Select a service</option>
                                            <option>Metal Gates</option>
                                            <option>Roofing Sheets</option>
                                            <option>Railings & Grills</option>
                                            <option>Custom Fabrication</option>
                                            <option>Repair Services</option>
                                            <option>Industy Work</option>
                                            <option>Others</option>
                                        </select>
                                    </div>



                                    {/* message  */}
                                    <div>
                                        <label className="text-xs font-medium text-foreground mb-2 block uppercase tracking-wide">
                                            Project Details
                                        </label>
                                        <textarea name="message" placeholder="Tell us about your project requirements..."
                                            className="w-full p-3 border border-input bg-background rounded-lg min-h-[140px] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full bg-gradient-to-r from-accent to-accent-600 shadow-accent text-white hover:scale-[1.01] transition-transform">
                                        Send 🚀
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

