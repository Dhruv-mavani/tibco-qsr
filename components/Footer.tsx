"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className="bg-[#111111] text-white pt-24 pb-12 relative overflow-hidden">
            {/* Massive Background Text - Aesthetic Anchor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter z-0">
                TIBCO QSR
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 block">
                {/* Top Section - Ultimate Conversion Driver */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left: Instant Order & App */}
                    <div className="flex flex-col items-start gap-8">
                        <div>
                            <span className="text-[#C9A063] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                                Fast. Fresh. Ready.
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
                                Skip the<br />Line.
                            </h2>
                            <p className="text-white/60 text-lg max-w-sm mb-8">
                                Order ahead on the Tibco App and your signature favorites will be waiting for you.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#C9A063] text-[#111] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <span>Order Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                <span>Get the App</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Right: Newsletter / Club Membership */}
                    <div className="lg:pl-16 lg:border-l border-white/10 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-4">Join the Inner Circle</h3>
                        <p className="text-white/50 mb-8 max-w-md">
                            Get exclusive offers, early access to new seasonal menus, and a complimentary coffee on your birthday.
                        </p>

                        <div className="relative group max-w-md w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-16 text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9A063] focus:bg-white/10 transition-all font-light"
                            />
                            <motion.button
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-2 top-2 bottom-2 w-12 bg-[#111] rounded-full flex items-center justify-center border border-white/20 hover:border-[#C9A063] hover:bg-[#C9A063] text-white hover:text-[#111] transition-all"
                            >
                                <motion.svg
                                    animate={{ x: isHovered ? 3 : 0 }}
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </motion.svg>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Smooth Infinite Marquee */}
                <div className="w-full overflow-hidden border-y border-white/10 py-6 mb-16 relative flex bg-[#111]">
                    {/* Left/Right Overlays for gradient fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111] to-transparent z-10" />

                    <motion.div
                        className="flex whitespace-nowrap gap-8 mix-blend-screen opacity-50 text-[#C9A063]"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, j) => (
                            <div key={j} className="flex gap-8 items-center">
                                {["FAST OR FREE", "SIGNATURE QUALITY", "BAKED DAILY", "EARN REWARDS", "DRIVE-THRU READY"].map((text, i) => (
                                    <div key={`${j}-${i}`} className="flex items-center gap-8">
                                        <span className="text-sm font-bold tracking-[0.2em]">{text}</span>
                                        <span className="text-xs">✦</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-2xl font-black tracking-tighter mb-1 relative inline-block group cursor-pointer">
                            TIBCO.
                        </h4>
                        <p className="text-white/40 text-xs mt-2">The standard for Quick Service.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold tracking-widest text-[#C9A063] mb-2">MENU</span>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Coffee</a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Signature Bagels</a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pastries</a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Catering</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold tracking-widest text-[#C9A063] mb-2">COMPANY</span>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Our Story</a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Locations</a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers &nbsp;<span className="text-[#C9A063] text-[10px] uppercase font-bold bg-[#C9A063]/10 px-2 py-0.5 rounded-full">Hiring</span></a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Franchise</a>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-bold tracking-widest text-[#C9A063] mb-2">SOCIAL</span>
                        <a href="https://www.instagram.com/tibco.home/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                            Instagram <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                        </a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                            TikTok <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                        </a>
                        <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                            Twitter <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                        </a>
                    </div>
                </div>

                {/* Very Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-widest pt-8 border-t border-white/10">
                    <p>&copy; {new Date().getFullYear()} TIBCO QSR. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#C9A063] transition-colors flex items-center gap-1 group">
                            Back To Top
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
