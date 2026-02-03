import React from 'react';
import { Info, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-gray-300">
            <div className="max-w-4xl mx-auto bg-gaming-light/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                    <Info className="text-purple-400" size={48} />
                    <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-gaming-accent bg-clip-text text-transparent">
                        About 360INR Game
                    </h1>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">What is 360INR Game?</h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            360INR Game (also known as 360 IND Game) is a premier online gaming application created for enthusiasts who enjoy skill-based gaming. The platform offers a variety of engaging game modes, simple functionality, and a user-friendly interface designed specifically for Android mobile devices.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                                <div className="text-gaming-accent font-bold text-xl mb-1">Version</div>
                                <div className="text-white">1.2.5</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                                <div className="text-gaming-accent2 font-bold text-xl mb-1">Bonus</div>
                                <div className="text-white">₹17,777+</div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                                <div className="text-purple-400 font-bold text-xl mb-1">Downloads</div>
                                <div className="text-white">1M+</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
                        <div className="grid gap-4">
                            {[
                                "Smoother and faster gaming performance",
                                "Easy registration and login system",
                                "Verified security and fair play",
                                "Friendly interface for beginners",
                                "Skill-based gameplay (No luck needed)",
                                "24/7 Customer Support integration"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-gaming-accent shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-gaming-light to-transparent p-6 rounded-lg border border-white/5 mt-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
                        <p>
                            To provide a safe, secure, and entertaining platform for skill-based gaming in India, prioritizing user experience and performance above all else.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
