import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
    "/screen1.png",
    "/screen2.png",
    "/screen3.png",
    "/screen4.png",
    "/screen5.png",
];

const Gallery = () => {
    return (
        <section className="py-20 bg-gaming-dark relative overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    App <span className="text-gaming-accent2">Screenshots</span>
                </h2>
                <p className="text-gray-400">Sneak peek into the ultimate gaming experience.</p>
            </div>

            {/* Marquee Effect */}
            <div className="flex gap-6 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gaming-dark to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gaming-dark to-transparent z-10"></div>

                <motion.div
                    className="flex gap-6 min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...screenshots, ...screenshots].map((src, index) => (
                        <div key={index} className="w-64 md:w-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shrink-0">
                            <img
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
