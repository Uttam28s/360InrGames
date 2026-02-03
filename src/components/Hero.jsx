import React from 'react';
import { motion } from 'framer-motion';
import { Download, PlayCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD700]/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF0000]/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFD700] text-sm font-bold mb-6">
                        New Version 2026 Live
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Play, Compete, <br />
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#FF0000] bg-clip-text text-transparent">
                            Win Big Rewards
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                        India's #1 Skill-Based Gaming Platform. Experience smooth gameplay, instant withdrawals, and daily bonuses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="https://invite.360inr.games/?code=RFKJ1ZS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-r from-[#FFD700] to-[#FF0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <Download className="relative z-10" />
                            <span className="relative z-10">Download App</span>
                        </a>
                        <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold text-white flex items-center justify-center gap-2">
                            <PlayCircle /> Watch Gameplay
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Mockup / Visual */}
                    <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-4 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        {/* Placeholder for App Image - Using CSS Art or Text */}
                        <div className="bg-[#120202] rounded-2xl h-[500px] flex items-center justify-center border border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#120202]/90 z-10"></div>
                            <div className="absolute bottom-10 left-0 right-0 text-center z-20">
                                <h3 className="text-2xl font-bold text-white">360INR Game</h3>
                                <p className="text-[#FFD700]">Win Real Rewards</p>
                            </div>
                            {/* Abstract game UI elements */}
                            <div className="grid grid-cols-2 gap-4 p-4 w-full h-full">
                                <div className="bg-[#FFD700]/20 rounded-xl">
                                    <img src="/screen1.png" alt="screen1" />
                                </div>
                                <div className="bg-[#FF0000]/20 rounded-xl">
                                    <img src="/screen2.png" alt="screen2" />
                                </div>
                                <div className="bg-[#FFD700]/10 rounded-xl col-span-2 animate-pulse delay-500">
                                    <img src="/screen3.png" alt="screen3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -top-10 -right-10 bg-[#2a0505] border border-[#FFD700] p-4 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.3)] z-20"
                    >
                        <div className="text-xs text-gray-400">Daily Bonus</div>
                        <div className="text-xl font-bold text-[#FFD700]">₹500+</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                        className="absolute -bottom-10 -left-10 bg-[#2a0505] border border-[#FF0000] p-4 rounded-xl shadow-[0_0_15px_rgba(255,0,0,0.3)] z-20"
                    >
                        <div className="text-xs text-gray-400">Active Players</div>
                        <div className="text-xl font-bold text-[#FF0000]">2M+</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
