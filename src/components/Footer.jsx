import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Info, FileText } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gaming-light border-t border-white/5 py-10 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF0000] bg-clip-text text-transparent">
                            360INR GAME
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">
                            India's No.1 Skill-Based Gaming Platform.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <Link to="/privacy" className="hover:text-[#FFD700] transition-colors flex items-center gap-2">
                            <Shield size={16} /> Privacy Policy
                        </Link>
                        <Link to="/disclaimer" className="hover:text-[#FFD700] transition-colors flex items-center gap-2">
                            <FileText size={16} /> Disclaimer
                        </Link>
                        <Link to="/about" className="hover:text-[#FFD700] transition-colors flex items-center gap-2">
                            <Info size={16} /> About Us
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-gray-500">
                    <p>© {currentYear} 360INR GAME. All rights reserved.</p>
                    <p className="mt-1">This website is for informational purposes only. Play responsibly.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
