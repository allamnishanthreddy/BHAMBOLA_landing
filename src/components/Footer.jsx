import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-bhambola-red rounded-full flex items-center justify-center border border-bhambola-gold">
                                <span className="text-bhambola-gold font-bold">B</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">BOMBOLA</h2>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            An Enterprise of <span className="text-white font-bold">Einstein Brains Group</span>.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Join the revolution of community gaming. Safe, Secure, and Fun.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button className="p-2 glass rounded-lg hover:bg-white/10">Download Android</button>
                            <button className="p-2 glass rounded-lg hover:bg-white/10">Download iOS</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bhambola-gold">Legal & Policy</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Legal Policy</a></li>
                            <li><a href="#" className="hover:text-white">User Agreement</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bhambola-gold">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li className="flex items-center gap-2 text-green-400">
                                <span>WhatsApp Support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Certifications / Trust */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">© 2024 Bhambola Gaming. All rights reserved.</p>
                    <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                        {/* Certificates Placeholders */}
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">SSL SECURE</div>
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">GLI CERTIFIED</div>
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">RNG VERIFIED</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
