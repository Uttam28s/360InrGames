import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Installation from '../components/Installation';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Gallery />
            <Installation />

            {/* FAQ / Trust Strip */}
            <section className="py-20 bg-gaming-light border-y border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Trusted by Gamers</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {/* Trust badges placeholders */}
                        <div className="text-2xl font-bold flex items-center gap-2"><span className="text-gaming-accent">SSL</span> SECURED</div>
                        <div className="text-2xl font-bold flex items-center gap-2"><span className="text-green-500">100%</span> SAFE</div>
                        <div className="text-2xl font-bold flex items-center gap-2"><span className="text-gaming-accent2">24/7</span> SUPPORT</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
