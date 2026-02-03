import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="container mx-auto px-4 py-12 text-gray-300">
            <div className="max-w-4xl mx-auto bg-gaming-light/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                    <Shield className="text-gaming-accent" size={48} />
                    <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-gaming-accent to-gaming-accent2 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                </div>

                <div className="space-y-8">
                    <section>
                        <p className="mb-4">
                            At 360INR, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We do not collect any sensitive personal information such as passwords, bank details, or payment data.
                            We may collect limited non-personal information, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Pages visited on our website</li>
                            <li>Time spent on pages</li>
                        </ul>
                        <p className="mt-4">
                            This data is collected only to improve website performance and user experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">The information collected is used to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400">
                            <li>Improve website content and usability</li>
                            <li>Analyze traffic and user behavior</li>
                            <li>Maintain website security</li>
                            <li>Provide better informational content</li>
                        </ul>
                        <p className="mt-4">
                            We do not sell, trade, or share user data with third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Children’s Information</h2>
                        <p>
                            360INR does not knowingly collect any information from children under the age of 18. Users must be 18+ to access gaming-related content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Consent</h2>
                        <p>
                            By using our website, you agree to this Privacy Policy and its terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
