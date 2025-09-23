import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from '../components/About'

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <Hero />
                <Services />
                <About />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Index;

