import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Gift, Smartphone, Users, Trophy } from 'lucide-react';

const features = [
    {
        icon: <Zap className="text-yellow-400" size={32} />,
        title: "Smooth Performance",
        desc: "Optimized for all Android devices. Lag-free gaming experience even on 2GB RAM phones."
    },
    {
        icon: <Shield className="text-gaming-accent" size={32} />, // Gold
        title: "100% Safe & Secure",
        desc: "Advanced encryption protects your data and transactions. Verified fair play algorithms."
    },
    {
        icon: <Gift className="text-gaming-accent2" size={32} />, // Red
        title: "Daily Rewards",
        desc: "Login daily to claim free bonuses, coins, and gift vouchers to boost your earnings.",
        image: "/screen4.png"
    },
    {
        icon: <Users className="text-orange-500" size={32} />, // Orange
        title: "Multiplayer Modes",
        desc: "Compete with real players across India in various skill-based game modes."
    },
    {
        icon: <Trophy className="text-yellow-500" size={32} />, // Yellow
        title: "Instant Withdrawal",
        desc: "Withdraw your winnings instantly to your bank account with our super-fast system."
    },
    {
        icon: <Smartphone className="text-gaming-accent2" size={32} />, // Red
        title: "User Friendly",
        desc: "Clean, intuitive interface designed for both beginners and pro gamers."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Why Choose <span className="text-gaming-accent">360INR?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the next level of mobile gaming with features designed for winners.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gaming-accent/50 transition-all cursor-pointer group"
                        >
                            <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden relative">
                                {feature.image ? (
                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                                ) : (
                                    feature.icon
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gaming-accent transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
