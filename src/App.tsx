import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import EmailSubscription from "@/components/EmailSubscription";
import WhyStackMaster from "@/components/WhyStackMaster";
import OurTeam from "@/components/OurTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { AOSInit } from "@/hooks/animate";

function App() {
    AOSInit();

    return (
        <main className="relative w-full flex">
            <div className="relative flex-grow flex-1">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Testimonial />
                    <EmailSubscription />
                    <WhyStackMaster />
                    <OurTeam />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </main>
    );
}

export default App;
