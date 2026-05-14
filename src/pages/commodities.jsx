import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import {
    GiCoalWagon,
    GiCrystalBall,
    GiMineWagon,
    GiMinerals,
} from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import HeroImage from '/images/commodities/commodities-hero.jpg'
import RareEarthImg from '/images/commodities/rare-earth.jpg'
import CoalImg from '/images/commodities/coal.jpg'
import BaseMetalsImg from '/images/commodities/base-metals.jpg'

// Scroll animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

// ScrollReveal component
const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

const Commodities = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "Commodities"
    const targetColor = "#c89a60"

    // Start letter animation after heading fade from left is complete
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartLetterAnimation(true)
        }, 1200)

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
            }, index * 200)
        })
    }, [startLetterAnimation])

    const getLetterColor = (index) => {
        return letterColors[index] || "#ffffff"
    }

    const subCommodities = [
        {
            icon: GiCrystalBall,
            title: 'Rare Earth Elements',
            tag: 'Future Technologies',
            image: RareEarthImg,
            description: 'The company is positioning itself within the growing rare earth sector by targeting strategic projects essential for future technologies and the global energy transition.',
        },
        {
            icon: GiCoalWagon,
            title: 'Coal',
            tag: 'Energy Resource',
            image: CoalImg,
            description: 'GEMAD is actively involved in the evaluation and development of coal assets with strong geological and economic potential.',
        },
        {
            icon: GiMinerals,
            title: 'Base Metals',
            tag: 'Industrial & Infrastructure',
            image: BaseMetalsImg,
            description: 'GEMAD is engaged in the exploration and evaluation of base metal deposits that are fundamental to industrial and infrastructure development. The company focuses on commodities such as copper, zinc, lead, nickel, and manganese, supporting projects that contribute to manufacturing, energy, transportation, and construction industries.',
        },
    ]

    const baseMetalsList = ['Copper', 'Zinc', 'Lead', 'Nickel', 'Manganese']

    return (
        <>
            {/* ══════════════════════════════════════
                HERO SECTION — fade from left then letter animation
            ══════════════════════════════════════ */}
            <div className="relative w-full h-[45vh] min-h-[380px] lg:h-[55vh]">
                <img
                    src={HeroImage}
                    alt="GEMAD Commodities"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/80 to-[#15202a]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/70 via-[#15202a]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />

                <div className="relative h-full flex items-center px-6 xl:px-16">
                    <div className="max-w-3xl space-y-5">
                        {/* Breadcrumb - fade from left */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2 text-white/50 text-sm"
                        >
                            <Link to="/" className="hover:text-[#c89a60] transition-colors duration-200">Home</Link>
                            <span>/</span>
                            <span className="text-[#c89a60]">Commodities</span>
                        </motion.div>

                        {/* Badge - fade from left */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 border-l-4 border-[#764f24] bg-[#764f24]/10 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                Our Mineral Portfolio
                            </span>
                        </motion.div>

                        {/* Main headline - fade from left */}
                        <motion.h1 
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl"
                        >
                            Our{' '}
                            <span className="inline-block">
                                {word.split('').map((letter, idx) => (
                                    <span
                                        key={idx}
                                        style={{ color: getLetterColor(idx) }}
                                        className="inline-block transition-colors duration-300"
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        </motion.h1>

                        {/* Description - fade from left */}
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
                        >
                            GEMAD is focused on building a diversified portfolio of high-quality mineral assets,
                            spanning critical minerals, rare earth elements, coal, and base metals.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                STATS BAR — with scroll animation
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-[#15202a] border-y border-[#764f24]/20">
                    <div className="px-6 xl:px-16 py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                                <div className="text-center group cursor-default">
                                    <div className="text-3xl font-bold text-[#c89a60] mb-1 group-hover:scale-110 transition-transform duration-300">4</div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">Commodity Categories</div>
                                    <div className="w-8 h-[2px] bg-[#764f24]/30 mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
                                </div>
                                <div className="text-center group cursor-default">
                                    <div className="text-3xl font-bold text-[#c89a60] mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">Mineral Types</div>
                                    <div className="w-8 h-[2px] bg-[#764f24]/30 mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
                                </div>
                                <div className="text-center group cursor-default">
                                    <div className="text-3xl font-bold text-[#c89a60] mb-1 group-hover:scale-110 transition-transform duration-300">5</div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">Base Metals Focus</div>
                                    <div className="w-8 h-[2px] bg-[#764f24]/30 mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                COMMODITIES SECTION — Umbrella design with animated cards
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Commodity Focus
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Our Commodity Portfolio
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                GEMAD is focused on building a diversified portfolio of high-quality mineral assets,
                                spanning critical minerals, rare earth elements, coal, and base metals.
                            </p>
                        </div>

                        {/* Umbrella layout */}
                        <div className="flex flex-col items-center">

                            {/* Critical Minerals - Animated Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="max-w-2xl mx-auto w-full mb-8"
                            >
                                <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#764f24]/5 to-transparent rounded-bl-full" />
                                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                        <div className="w-20 h-20 rounded-xl bg-[#764f24] flex items-center justify-center shrink-0 shadow-lg">
                                            <GiMineWagon size={40} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-block mb-2">
                                                <span className="text-[10px] font-bold tracking-wider uppercase text-[#764f24] bg-[#764f24]/10 px-3 py-1 rounded-full">
                                                    Strategic Priority
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-300">
                                                Critical Minerals
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                All commodities within GEMAD's portfolio fall under the broader critical minerals category —
                                                materials essential to modern technology, energy transition, and national strategic interests.
                                                GEMAD focuses on critical minerals required for industrial growth, renewable energy technologies,
                                                and future global supply chains.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 w-12 h-[2px] bg-[#764f24]/20 group-hover:w-20 transition-all duration-300" />
                                </div>
                            </motion.div>

                            {/* Connector lines */}
                            <div className="w-full max-w-4xl mx-auto relative flex justify-center">
                                <svg viewBox="0 0 800 60" className="w-full h-[60px]" preserveAspectRatio="none">
                                    <line x1="400" y1="0" x2="400" y2="20" stroke="#c89a60" strokeWidth="2" strokeOpacity="0.5" />
                                    <line x1="133" y1="20" x2="667" y2="20" stroke="#c89a60" strokeWidth="2" strokeOpacity="0.5" />
                                    <line x1="133" y1="20" x2="133" y2="45" stroke="#c89a60" strokeWidth="2" strokeOpacity="0.5" />
                                    <line x1="400" y1="20" x2="400" y2="45" stroke="#c89a60" strokeWidth="2" strokeOpacity="0.5" />
                                    <line x1="667" y1="20" x2="667" y2="45" stroke="#c89a60" strokeWidth="2" strokeOpacity="0.5" />
                                    <circle cx="133" cy="48" r="4" fill="#c89a60" fillOpacity="0.3" stroke="#c89a60" strokeWidth="1.5" />
                                    <circle cx="400" cy="48" r="4" fill="#c89a60" fillOpacity="0.3" stroke="#c89a60" strokeWidth="1.5" />
                                    <circle cx="667" cy="48" r="4" fill="#c89a60" fillOpacity="0.3" stroke="#c89a60" strokeWidth="1.5" />
                                </svg>
                            </div>

                            {/* Sub-commodities cards below - Animated */}
                            <div className="w-full mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {subCommodities.map((commodity, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col items-center h-full"
                                        >
                                            <div className="group relative bg-white border border-[#764f24] rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full flex flex-col h-full">
                                                {/* Image Section */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <img
                                                        src={commodity.image}
                                                        alt={commodity.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                                    <div className="absolute top-3 right-3">
                                                        <span className="inline-block text-[9px] font-bold tracking-wider uppercase text-white bg-[#15202a]/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                                            {commodity.tag}
                                                        </span>
                                                    </div>
                                                    <div className="absolute bottom-3 left-3">
                                                        <div className="w-10 h-10 rounded-xl bg-[#764f24] flex items-center justify-center shadow-md">
                                                            <commodity.icon size={20} className="text-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-5 flex-1">
                                                    <h3 className="text-lg font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-200">
                                                        {commodity.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                                        {commodity.description}
                                                    </p>

                                                    {/* Base Metals Tags */}
                                                    {commodity.title === 'Base Metals' && (
                                                        <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-gray-100">
                                                            {baseMetalsList.map((metal, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-[10px] font-medium text-[#764f24] bg-[#764f24]/8 px-2 py-0.5 rounded-full"
                                                                >
                                                                    {metal}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-12 text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                            >
                                Discuss Our Commodities
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                STRATEGIC VALUE SECTION — with animated cards
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gradient-to-b from-gray-50 to-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Why It Matters
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Strategic Value
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                The commodities in our portfolio are essential drivers of modern industry,
                                energy transition, and sustainable development.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#764f24]/5 to-transparent rounded-bl-full" />
                                <div className="w-14 h-14 rounded-xl bg-[#764f24]/10 flex items-center justify-center mb-5 group-hover:bg-[#764f24] transition-all duration-300">
                                    <span className="text-2xl group-hover:text-white">⚡</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-300">
                                    Energy Transition
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Critical for renewable energy, electric vehicles, and battery storage technologies.
                                </p>
                                <div className="mt-4 w-12 h-[2px] bg-[#764f24]/20 group-hover:w-20 transition-all duration-300" />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#764f24]/5 to-transparent rounded-bl-full" />
                                <div className="w-14 h-14 rounded-xl bg-[#764f24]/10 flex items-center justify-center mb-5 group-hover:bg-[#764f24] transition-all duration-300">
                                    <span className="text-2xl group-hover:text-white">🏭</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-300">
                                    Industrial Growth
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Essential for manufacturing, construction, infrastructure, and heavy industry.
                                </p>
                                <div className="mt-4 w-12 h-[2px] bg-[#764f24]/20 group-hover:w-20 transition-all duration-300" />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#764f24]/5 to-transparent rounded-bl-full" />
                                <div className="w-14 h-14 rounded-xl bg-[#764f24]/10 flex items-center justify-center mb-5 group-hover:bg-[#764f24] transition-all duration-300">
                                    <span className="text-2xl group-hover:text-white">🔗</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-300">
                                    Supply Chain Security
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Strategic minerals essential for national and global supply chain resilience.
                                </p>
                                <div className="mt-4 w-12 h-[2px] bg-[#764f24]/20 group-hover:w-20 transition-all duration-300" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                CTA SECTION — with scroll animation
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="relative bg-[#15202a] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />
                    <div
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 2px, transparent 0, transparent 50%)`,
                            backgroundSize: '24px 24px',
                        }}
                    />

                    <div className="px-6 xl:px-16 py-20 lg:py-28 relative">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Interested in Our{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c89a60] to-[#764f24]">
                                    Commodity Portfolio?
                                </span>
                            </h2>
                            <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto">
                                Whether you're interested in coal supply, critical minerals investment, 
                                or exploration partnerships — our team is ready to discuss opportunities.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#764f24] to-[#a06a32] hover:from-[#8a5b2e] hover:to-[#764f24] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                                >
                                    Contact Our Team
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                                >
                                    Explore Our Services
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>

                            <div className="pt-6 flex flex-wrap justify-center gap-6 text-white/45 text-sm">
                                <a
                                    href="mailto:info@gemad.co.za"
                                    className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-2"
                                >
                                    <HiOutlineMail size={16} />
                                    info@gemad.co.za
                                </a>
                                <span className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-2">
                                    🌍 www.gemad.co.za
                                </span>
                                <span className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-2">
                                    📍 South Africa
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </>
    )
}

export default Commodities