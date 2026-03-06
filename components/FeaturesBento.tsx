"use client";

import { motion } from 'framer-motion';

export default function FeaturesBento() {
    return (
        <section id="story" className="py-32 px-6 md:px-20 bg-white relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A063] mb-4 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111]">
                        The QSR Standard.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Bento Box 1 - Fast & Fresh - Span 2 cols on MD */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-[#FAFAFA] overflow-hidden p-10 flex flex-col justify-end border border-black/[0.03] hover:border-black/10 transition-colors shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                    >
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FAF9F6] to-[#C9A063]/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 ease-out" />

                        <div className="relative z-10 w-full md:w-1/2 mt-16 md:mt-0">
                            <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center mb-6 text-white font-bold opacity-10">01</div>
                            <h3 className="text-3xl font-bold mb-4 text-[#111]">Fast & Fresh</h3>
                            <p className="text-[#555] text-lg leading-relaxed">
                                We believe quick service shouldn't mean compromising on quality. Every meal and beverage is prepared rapidly with premium ingredients to fuel your day instantly.
                            </p>
                        </div>

                        {/* Visual element - Refined Coffee Pour & Steam */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center gap-2 z-10 pointer-events-none scale-90 lg:scale-100">
                            {/* Realistic Steam */}
                            <div className="flex gap-3 mb-1 relative h-16 w-24 justify-center">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={`steam-premium-${i}`}
                                        className="absolute bottom-0 w-2 h-12 bg-gradient-to-t from-white/0 via-white/80 to-white/0 rounded-full blur-[4px] mix-blend-overlay"
                                        animate={{
                                            y: [0, -40, -60],
                                            opacity: [0, 0.6, 0],
                                            x: [0, i % 2 === 0 ? 15 : -15, i % 2 === 0 ? -10 : 10],
                                            scale: [1, 1.5, 2]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.9,
                                            ease: "easeOut"
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="relative flex items-center group-hover:scale-105 transition-transform duration-700 ease-out">
                                {/* Premium Cup Body */}
                                <div className="relative w-36 h-32 rounded-b-[3rem] rounded-t-sm overflow-hidden bg-gradient-to-br from-white to-[#F0F0F0] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),inset_0_-10px_20px_rgba(0,0,0,0.05)] border border-white/50 flex items-end z-20">
                                    {/* Cup Inner Shadow / Depth */}
                                    <div className="absolute inset-0 rounded-inherit shadow-[inset_0_10px_10px_rgba(0,0,0,0.05)] pointer-events-none z-30" />

                                    {/* Pouring Stream - Smooth and refined */}
                                    <motion.div
                                        className="absolute top-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-b from-[#3D2314] to-[#5A3A22] z-20 rounded-b-full shadow-[0_0_10px_rgba(90,58,34,0.3)] origin-top"
                                        initial={{ scaleY: 0, opacity: 0 }}
                                        animate={{
                                            scaleY: [0, 1, 1, 0],
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            times: [0, 0.15, 0.85, 1],
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                            ease: "easeInOut"
                                        }}
                                        style={{ height: "120%" }}
                                    >
                                        {/* Golden highlight on the stream */}
                                        <div className="absolute right-[2px] top-0 bottom-0 w-[1px] bg-[#C9A063]/30 mix-blend-screen" />
                                    </motion.div>

                                    {/* Coffee Body / Liquid */}
                                    <div className="w-full relative z-10 bottom-0 left-0 right-0 overflow-hidden rounded-b-[2.5rem]" style={{ height: "100%" }}>
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2A1810] to-[#5A3A22] origin-bottom rounded-b-[2.5rem]"
                                            initial={{ height: "10%" }}
                                            animate={{
                                                height: ["10%", "85%", "85%", "10%"],
                                            }}
                                            transition={{
                                                duration: 3,
                                                times: [0, 0.4, 0.8, 1],
                                                repeat: Infinity,
                                                repeatDelay: 1,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            {/* Coffee Surface Depth and Swirls */}
                                            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#8C5D3B]/40 to-transparent flex items-center justify-center overflow-hidden">
                                                {/* Gentle Surface Splashes / Ripples matching the pour */}
                                                <motion.div
                                                    className="w-4 h-1 bg-[#C9A063]/20 rounded-full blur-[1px]"
                                                    animate={{ width: [4, 16, 4], opacity: [0, 0.8, 0] }}
                                                    transition={{ duration: 3, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                {/* Elegant Cup Handle */}
                                <div className="absolute -right-8 top-6 w-12 h-16 border-[8px] border-white bg-transparent rounded-r-[2rem] border-l-0 shadow-[10px_10px_20px_rgba(0,0,0,0.05)] z-10" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Box 2 - Signature Quality */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group rounded-[2rem] bg-[#111] overflow-hidden p-10 flex flex-col justify-end text-white border border-white/10 shadow-xl"
                    >
                        {/* Grid Pattern Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 transition-opacity group-hover:opacity-40" />

                        {/* Floating elements animation */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <motion.div
                                className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#C9A063]"
                                animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-white/20"
                                animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </div>

                        <div className="relative z-10 mt-20">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white font-bold backdrop-blur-sm">02</div>
                            <h3 className="text-2xl font-bold mb-4">Signature Quality</h3>
                            <p className="text-white/70 leading-relaxed text-sm">
                                Consistent, high-quality flavor in every bite and sip. We maintain rigorous standards across all our locations so you always get exactly what you crave.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 3 - Baked Daily - Vertical Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-1 relative group rounded-[2rem] bg-white overflow-hidden p-10 flex flex-col border border-[#C9A063]/20 hover:border-[#C9A063]/50 transition-colors shadow-sm hover:shadow-lg"
                    >
                        {/* Aesthetic element - Refined Bagel */}
                        <div className="flex-1 w-full flex items-center justify-center mb-12 mt-8 relative pointer-events-none">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A063]/5 to-transparent rounded-full blur-2xl" />

                            <motion.div
                                className="relative flex items-center justify-center w-36 h-36 rounded-full group-hover:scale-105 transition-transform duration-700 ease-out shadow-[0_20px_40px_-10px_rgba(201,160,99,0.3)] z-10"
                                style={{
                                    background: 'radial-gradient(circle at 30% 30%, #F5DCA8 0%, #D49B45 60%, #B87B2E 100%)',
                                    boxShadow: 'inset -8px -8px 20px rgba(138,82,18,0.4), inset 5px 5px 15px rgba(255,255,255,0.4), 0 15px 25px rgba(0,0,0,0.1)'
                                }}
                            >
                                {/* Bagel Hole */}
                                <motion.div
                                    className="w-12 h-12 bg-white rounded-full relative overflow-hidden"
                                    style={{
                                        boxShadow: 'inset 4px 4px 10px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,1), 0 0 0 4px rgba(212,155,69,0.5)'
                                    }}
                                >
                                    {/* Inner shadow mapping for depth */}
                                    <div className="absolute inset-0 shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.05)] rounded-full" />
                                </motion.div>

                                {/* Realistic Everything Bagel Seeds (Deterministic for Hydration) */}
                                {[...Array(16)].map((_, i) => {
                                    // Pseudo-random deterministic values based on index to fix hydration error
                                    const pseudoRandom1 = (Math.sin(i * 123.45) * 0.5) + 0.5; // 0 to 1
                                    const pseudoRandom2 = (Math.cos(i * 678.90) * 0.5) + 0.5; // 0 to 1

                                    const angle = (i * 22.5) * (Math.PI / 180);
                                    const radius = 28 + (pseudoRandom1 * 10);
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;
                                    const rotation = pseudoRandom2 * 360;
                                    const isPoppy = (i % 3 === 0) || (i % 5 === 0);

                                    return (
                                        <div
                                            key={`seed-${i}`}
                                            className="absolute rounded-full"
                                            style={{
                                                left: `calc(50% + ${x}px)`,
                                                top: `calc(50% + ${y}px)`,
                                                width: isPoppy ? '3px' : '4px',
                                                height: isPoppy ? '3px' : '5px',
                                                backgroundColor: isPoppy ? '#111' : '#F5E6CC',
                                                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                                                boxShadow: isPoppy ? 'none' : 'inset 1px 1px 2px rgba(0,0,0,0.2)'
                                            }}
                                        />
                                    );
                                })}

                                {/* Steam sweeping across */}
                                <motion.div
                                    className="absolute -top-4 right-0 w-16 h-8 bg-white/40 blur-[8px] rounded-full mix-blend-overlay"
                                    animate={{
                                        x: [-20, 20],
                                        y: [0, -10],
                                        opacity: [0, 0.8, 0],
                                        scale: [1, 1.2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>

                            {/* Plate / Shadow Base */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black/5 rounded-full blur-[4px]" />
                        </div>

                        <div className="relative z-10 mt-auto">
                            <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center mb-4 text-white font-bold opacity-10">03</div>
                            <h3 className="text-2xl font-bold mb-2 text-[#111]">Baked Daily</h3>
                            <p className="text-[#555] leading-relaxed text-sm">
                                Our signature bagels and pastries are baked fresh every single morning, ensuring the perfect texture and taste for a quick breakfast or meal.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 4 - Seamless Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-gradient-to-r from-[#FAF9F6] to-white overflow-hidden p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-black/[0.03] hover:border-black/[0.08] transition-colors shadow-sm"
                    >
                        <div className="mb-6 sm:mb-0 pr-0 sm:pr-8">
                            <h3 className="text-2xl font-bold mb-2 text-[#111]">Seamless Experience</h3>
                            <p className="text-[#555] max-w-md text-sm leading-relaxed">
                                From rapid ordering to instant pickup, every touchpoint is designed for ultimate convenience without sacrificing the welcoming atmosphere you love.
                            </p>
                        </div>

                        {/* Interactive Button */}
                        <motion.div
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-16 h-16 shrink-0 rounded-full bg-[#111] text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#C9A063] transition-colors relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
