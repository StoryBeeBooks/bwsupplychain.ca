import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="font-serif text-2xl font-bold text-white tracking-tight block mb-6">
                            BW Supply<span className="text-secondary">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Strategic supply chain levers for the modern economy. Connecting production, demand, and trade flows across continents.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Showcase', 'FAQ', 'Policy'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200 flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                                <div className="text-sm text-gray-400">
                                    <p className="mb-1"><span className="text-white">Mario Xu:</span> Sales@bwsupplychain.ca</p>
                                    <p><span className="text-white">Richard:</span> Richard.Jiang@bwsupplychain.ca</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Clock size={18} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-400">
                                    9:00 AM - 9:00 PM EST
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg text-white mb-6">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/policy?tab=terms" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link to="/policy?tab=privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} BW Supply Chain. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
