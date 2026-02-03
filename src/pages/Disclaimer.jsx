import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-gray-300">
            <div className="max-w-4xl mx-auto bg-gaming-light/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                    <AlertTriangle className="text-gaming-accent2" size={48} />
                    <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-gaming-accent2 to-gaming-accent bg-clip-text text-transparent">
                        Disclaimer
                    </h1>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">General Disclaimer</h2>
                        <p className="mb-4">
                            360 INR game is an independent informational and referral website. We are not the official website of any game or gaming application.
                            The content available on this website is published only for general information and promotional purposes. We do not own, operate, or control any game, app, or platform mentioned on this site.
                        </p>
                    </section>

                    <section className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h2 className="text-2xl font-bold text-white mb-4 text-red-400">Game & Financial Risk Disclaimer</h2>
                        <p className="mb-4 text-gray-200">
                            Online games may involve financial risk and addiction. Please play responsibly and at your own risk. 360 INR games is not responsible for any loss, damage, or issues arising from the use of third-party apps or websites.
                        </p>
                        <p className="text-sm text-gray-400">
                            Users must be aware of the financial risks involved in skill-based gaming apps containing real money elements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Age Restriction</h2>
                        <p>
                            This website is intended for users 18 years or older. If you are under 18, please do not use this site or download any gaming applications.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
