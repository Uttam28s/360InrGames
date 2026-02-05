import React from 'react';
import { motion } from 'framer-motion';
import { Download, Check } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: "Download APK",
        desc: "Click the 'Download' button to save the 360INR APK file to your device."
    },
    {
        num: "02",
        title: "Allow Permissions",
        desc: "Go to Settings > Security and enable 'Install from Unknown Sources' if prompted."
    },
    {
        num: "03",
        title: "Install & Open",
        desc: "Tap the downloaded file to install. Open the app and register with your mobile number."
    }
];

const Installation = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">
                            How to Install <br />
                            <span className="text-gaming-accent2">360INR Game</span>
                        </h2>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex gap-6 relative"
                                >
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-gaming-light border border-gaming-accent2 flex items-center justify-center font-bold text-gaming-accent2 z-10">
                                            {step.num}
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-white/10 absolute top-12 bottom-0 left-[23px] -z-0"></div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-400">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Check className="text-[#FFD700]" size={20} /> System Requirements
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10">Android 6.0+</span>
                                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10">2GB RAM</span>
                                <span className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/10">100MB Space</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF0000] rounded-3xl blur-[50px] opacity-20"></div>
                        <div className="bg-[#120202] border border-white/10 rounded-3xl p-8 relative z-10 overflow-hidden group">
                            {/* Background Image decoration */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <img src="/screen5.png" alt="App Background" className="w-full h-full object-cover" />
                            </div>

                            <div className="relative z-10">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-bounce">
                                        <Download className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Join 1 Million+ Players</h3>
                                    <p className="text-gray-400">Start winning today!</p>
                                </div>

                                <a
                                    href="https://invite.360inr.games/?code=G80J3VS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#FFD700] text-[#120202] font-bold text-center py-4 rounded-xl hover:bg-white transition-colors"
                                >
                                    Download App Now
                                </a>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    100% Safe & Secure Download
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Installation;
