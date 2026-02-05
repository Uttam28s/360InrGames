import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Disclaimer', path: '/disclaimer' },
        { name: 'Privacy', path: '/privacy' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#120202]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform">
                    <img src="/logo.png" alt="360INR Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-300 hover:text-white hover:text-[#FFD700] transition-colors font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="https://invite.360inr.games/?code=G80J3VS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#FFD700] to-[#FF0000] text-white px-6 py-2 rounded-full font-bold hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] transition-shadow flex items-center gap-2"
                    >
                        <Download size={18} /> Download App
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gaming-light border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-gray-300 hover:text-white py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://invite.360inr.games/?code=G80J3VS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFD700] text-[#120202] text-center py-3 rounded-lg font-bold mt-2"
                            >
                                Download Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
