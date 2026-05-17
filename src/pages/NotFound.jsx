import SEO from '../components/SEO'
import { notFoundSEO } from '../constants/seo'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'


const NotFound = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "404"
    const targetColor = "#c89a60"

    // Start letter animation after page loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartLetterAnimation(true)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    // Letter-by-letter color change animation
    useEffect(() => {
        if (!startLetterAnimation) return
        const letters = word.split('')
        letters.forEach((_, index) => {
            setTimeout(() => {
                setLetterColors(prev => ({
                    ...prev,
                    [index]: targetColor
                }))
            }, index * 150)
        })
    }, [startLetterAnimation])

    const getLetterColor = (index) => letterColors[index] || "#ffffff"

    // Floating animation for background elements
    const floatVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <>
         <SEO {...notFoundSEO} />
        <div className="relative min-h-screen bg-gradient-to-br from-[#15202a] to-[#1e2a35] overflow-hidden">
            
            {/* Background decorative elements */}
            <motion.div 
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#764f24]/5 blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#c89a60]/5 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#764f24]/5 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid pattern overlay */}
            <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative px-6 xl:px-16 py-20 min-h-screen flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center">
                    
                    {/* 404 Number with animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none tracking-tighter">
                            {word.split('').map((letter, idx) => (
                                <span
                                    key={idx}
                                    style={{ color: getLetterColor(idx) }}
                                    className="inline-block transition-colors duration-300"
                                >
                                    {letter}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Page Not Found text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#764f24]/60 bg-[#764f24]/10 backdrop-blur-sm rounded-full mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                Page Not Found
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Oops! Page Not Found
                        </h2>
                        
                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                            The page you're looking for doesn't exist or has been moved. 
                            Let's get you back to exploring our mining operations and projects.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                            >
                                <FaHome size={16} />
                                Back to Home
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                            >
                                Explore Services
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-12 mt-8 border-t border-white/10"
                    >
                        <p className="text-white/40 text-sm mb-4">Quick Navigation</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                Home
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link to="/about" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                About Us
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link to="/services" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                Services
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link to="/commodities" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                Commodities
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link to="/team" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                Our Team
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link to="/contact" className="text-white/50 text-sm hover:text-[#c89a60] transition-colors duration-200">
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="pt-8 mt-6 flex flex-wrap justify-center gap-6 text-white/30 text-xs"
                    >
                        <span>✉ info@gemad.co.za</span>
                        <span>🌍 www.gemad.co.za</span>
                        <span>📍 South Africa</span>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound