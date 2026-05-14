import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
    GiCoalWagon,
    GiCrystalBall,
    GiMineWagon,
    GiMinerals,
} from 'react-icons/gi'
import {
    TbMicroscope,
    TbChartLine,
    TbBuildingFactory2,
    TbReportAnalytics,
} from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import HeroImage from '/images/home/geological.jpg'
import HeroImage2 from '/images/home/geological1.jpg'
import AboutImage from '/images/home/geological3.jpg'
import Clients from '../components/Clients'

// Scroll animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

/* ─── DATA ─── */

const services = [
    {
        Icon: TbMicroscope,
        title: 'Geological Evaluation & Exploration',
        description:
            'GEMAD provides comprehensive exploration and geological evaluation services aimed at identifying, defining, and advancing mineral resources through scientifically driven exploration methodologies and technical analysis.',
        link: '/services#geological',
    },
    {
        Icon: TbChartLine,
        title: 'Resource Modelling & Estimation',
        description:
            'GEMAD utilizes advanced geological and mining methodologies to develop accurate resource models and reliable mineral resource estimates that support project evaluation, mine planning, and investment decision-making.',
        link: '/services#resource',
    },
    {
        Icon: TbBuildingFactory2,
        title: 'Mineral Asset Development',
        description:
            'GEMAD advances mineral projects from early-stage opportunities into technically and economically viable mining assets through integrated technical evaluation, strategic mine planning, and financial assessment.',
        link: '/services#asset',
    },
    {
        Icon: TbReportAnalytics,
        title: 'Project Evaluation & Advisory',
        description:
            'GEMAD provides strategic technical support and advisory services to investors, mining companies, financial institutions, and mineral project owners seeking informed decision-making and project development support.',
        link: '/services#advisory',
    },
]

const coreValues = [
    {
        num: '01',
        title: 'Technical Excellence',
        description:
            'We apply rigorous scientific and technical methodologies to deliver reliable, accurate, and high-quality geological evaluations, mineral resource assessments, and project development solutions.',
    },
    {
        num: '02',
        title: 'Integrity',
        description:
            'We operate with transparency, professionalism, accountability, and ethical business practices in all our operations, partnerships, and stakeholder engagements.',
    },
    {
        num: '03',
        title: 'Sustainability',
        description:
            'We are committed to responsible mineral development that balances economic growth with environmental stewardship, social responsibility, and long-term resource sustainability.',
    },
    {
        num: '04',
        title: 'Innovation',
        description:
            'We embrace advanced technologies, modern geological tools, and innovative solutions to improve exploration efficiency, resource modelling, and mineral asset development.',
    },
    {
        num: '05',
        title: 'Profitability',
        description:
            'We focus on developing economically viable mineral projects that create sustainable long-term value through strategic planning, operational efficiency, and disciplined project evaluation.',
    },
    {
        num: '06',
        title: 'Community Development',
        description:
            'We believe mineral development should contribute positively to local communities through skills development, local employment, economic empowerment, and meaningful social investment initiatives.',
    },
]

const whyUs = [
    {
        label: 'Integrated Geology-Mining Solutions',
        desc: 'GEMAD provides integrated geology and mining solutions that combine exploration, geological modelling, mine planning, and project development into a seamless and efficient workflow.',
    },
    {
        label: 'SAMREC-Compliant Reporting',
        desc: 'We adhere to industry-recognized standards and best practices to ensure transparent, accurate, and SAMREC-compliant mineral resource reporting and technical evaluations.',
    },
    {
        label: 'Experienced Technical Team',
        desc: 'Our multidisciplinary team includes experienced geologists, mining engineers, exploration specialists, and field professionals with practical expertise across the mining value chain.',
    },
    {
        label: 'Advanced Technical Software',
        desc: 'GEMAD utilizes advanced industry software including Leapfrog Geo and Leapfrog Edge, Deswik, and ArcGIS for accurate geological interpretation, resource modelling, and mine planning.',
    },
    {
        label: 'Converting Resources into Bankable Mineral Assets',
        desc: 'We specialize in transforming mineral opportunities from early-stage exploration projects into technically sound, investment-ready, and economically viable mineral assets.',
    },
    {
        label: 'ISO-Certified Operational Standards',
        desc: 'GEMAD is committed to maintaining internationally recognized operational, quality, environmental, and occupational safety standards — ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.',
    },
]

/* ─── HOME PAGE WITH FRAMER MOTION ─── */

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const heroImages = [HeroImage, HeroImage2]
    const word = "Bankable"
    const targetColor = "#c89a60"

    // Hero image slideshow with smooth crossfade
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [heroImages.length])

    // Start letter animation after heading fade is complete
    useEffect(() => {
        const timer = setTimeout(() => {
            setStartLetterAnimation(true)
        }, 1000)

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

    return (
        <>

            {/* ══════════════════════════════════════
                1. HERO with Slideshow - Text LEFT ALIGNED
            ══════════════════════════════════════ */}
            <div className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[700px]">

                {/* Animated Background Images with smooth crossfade */}
                {heroImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <img
                            src={img}
                            alt="Geological exploration"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                ))}

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/96 via-[#15202a]/80 to-[#15202a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/80 via-[#15202a]/10 to-transparent" />

                {/* Bronze bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />

                {/* Content wrapper - TEXT LEFT ALIGNED */}
                <div className="relative px-6 xl:px-16 py-16 sm:py-32 lg:py-20 min-h-[600px] lg:min-h-[700px] flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="max-w-3xl space-y-6 sm:space-y-8">
                            
                            {/* Eyebrow badge - fade in */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#764f24]/50 bg-[#764f24]/10 backdrop-blur-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#764f24] shrink-0" />
                                <span className="text-[#c89a60] text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase leading-none">
                                    South African Mineral Asset Development Entity
                                </span>
                            </motion.div>

                            {/* Main headline - fade from left */}
                            <motion.h1 
                                initial={{ opacity: 0, x: -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                            >
                                From Discovery to{' '}
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
                                <br />
                                Mineral Assets
                            </motion.h1>

                            {/* Body text - fade in */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="space-y-3 max-w-2xl"
                            >
                                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                                    GEMAD is a South African mineral asset development entity focused on identifying,
                                    evaluating, and advancing high-potential mineral projects into economically viable
                                    mining operations.
                                </p>
                                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                                    From geological evaluation and exploration to resource definition and development
                                    planning, we transform mineral opportunities into investment-ready assets.
                                </p>
                            </motion.div>

                            {/* CTA buttons - fade in */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex flex-wrap gap-3 sm:gap-4"
                            >
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 shadow-lg group text-sm sm:text-base"
                                >
                                    Explore Our Services
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 hover:border-[#764f24] bg-white/8 backdrop-blur-sm hover:bg-[#764f24] text-white font-semibold rounded-full transition-all duration-300 group text-sm sm:text-base"
                                >
                                    Contact Us
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </motion.div>

                            {/* Trust indicators - fade in */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="flex flex-wrap gap-4 sm:gap-6"
                            >
                                <span className="flex items-center gap-2 text-sm text-white/60">
                                    <FaCheckCircle size={13} className="text-[#c89a60] shrink-0" />
                                    ISO 9001 · 14001 · 45001 Certified
                                </span>
                                <span className="flex items-center gap-2 text-sm text-white/60">
                                    <FaCheckCircle size={13} className="text-[#c89a60] shrink-0" />
                                    SAMREC Compliant
                                </span>
                                <span className="flex items-center gap-2 text-sm text-white/60">
                                    <FaCheckCircle size={13} className="text-[#c89a60] shrink-0" />
                                    South African Based
                                </span>
                            </motion.div>

                            {/* Quick stats row - fade in */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="pt-2 flex flex-wrap gap-6 sm:gap-10"
                            >
                                {[
                                    { num: '4', label: 'Service Lines' },
                                    { num: '4', label: 'Commodities' },
                                    { num: '3', label: 'ISO Certs' },
                                ].map((s) => (
                                    <div key={s.label} className="border-l-2 border-[#764f24] pl-4">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#c89a60] leading-none mb-1">
                                            {s.num}
                                        </div>
                                        <div className="text-white/45 text-xs sm:text-sm leading-snug">{s.label}</div>
                                    </div>
                                ))}
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                2. ABOUT STRIP
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-[#15202a]">
                    <div className="px-6 xl:px-16 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-5 order-2 lg:order-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">About GEMAD</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                                    Geological Evaluation &amp;{' '}
                                    <span className="text-[#c89a60]">Mineral Assets Development</span>
                                </h2>
                                <p className="text-white/70 leading-relaxed">
                                    GEMAD — an abbreviation for Geological Evaluation and Mineral Assets Development —
                                    represents the full spectrum of technical and project development services required
                                    to unlock mineral value responsibly and sustainably.
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    Based in South Africa, GEMAD operates as both a technical authority and a mineral
                                    asset developer, specializing in the acquisition, evaluation, advancement, and
                                    development of strategic mineral assets.
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    Our mission is to identify underdeveloped or early-stage mineral opportunities and
                                    systematically progress them through exploration, resource modelling, technical
                                    evaluation, and development planning to create bankable and economically sustainable
                                    mining projects.
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {[
                                        { num: '3', label: 'Core Commodity Areas' },
                                        { num: '4', label: 'Specialist Service Lines' },
                                        { num: '3', label: 'ISO Certifications' },
                                    ].map((s) => (
                                        <div key={s.label} className="border border-[#764f24]/30 bg-white/5 p-4 hover:bg-[#764f24]/10 hover:border-[#764f24]/60 transition-all duration-300 rounded-lg">
                                            <div className="text-2xl font-bold text-[#c89a60] mb-1">{s.num}</div>
                                            <div className="text-white/50 text-xs">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/about" className="inline-flex items-center gap-2 text-[#c89a60] font-semibold hover:gap-3 transition-all duration-200 group pt-2">
                                    Learn More About Us
                                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={AboutImage}
                                        alt="GEMAD geological fieldwork"
                                        className="w-full h-[350px] lg:h-[450px] object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/50 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                3. SERVICES SECTION
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gray-50">
                    <div className="px-6 xl:px-16 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">What We Do</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Services</h2>
                                <p className="text-gray-600 max-w-2xl leading-relaxed">
                                    GEMAD provides the full spectrum of technical and project development services
                                    required to unlock mineral value responsibly and sustainably.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {services.map((s, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            to={s.link}
                                            className="group bg-white border-l-4 border-[#764f24] p-6 hover:shadow-xl transition-all duration-300 rounded-r-lg block"
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-[#15202a] flex items-center justify-center shrink-0 group-hover:bg-[#764f24] transition-all duration-300 rounded-lg">
                                                        <s.Icon size={22} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-[#15202a] group-hover:text-[#764f24] transition-colors duration-200">
                                                        {s.title}
                                                    </h3>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#764f24] group-hover:gap-2 transition-all duration-200">
                                                    Learn more <FaArrowRight size={11} />
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-semibold rounded-full transition-all duration-300 shadow-md group"
                                >
                                    View All Services
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                4. COMMODITIES SECTION - Updated Critical Minerals card design
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-white">
                    <div className="px-6 xl:px-16 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12 text-center">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Commodity Focus</p>
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Commodity Portfolio</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    GEMAD is focused on building a diversified portfolio of high-quality mineral assets,
                                    spanning critical minerals, rare earth elements, coal, and base metals.
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                {/* Critical Minerals Card - New white design like Commodities page */}
                                <div className="max-w-2xl mx-auto w-full mb-8">
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
                                </div>

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

                                {/* Other commodities cards */}
                                <div className="w-full mt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { Icon: GiCoalWagon, title: 'Coal', tag: 'Energy Resource', desc: 'GEMAD is actively involved in the evaluation and development of coal assets with strong geological and economic potential.' },
                                            { Icon: GiCrystalBall, title: 'Rare Earth Elements', tag: 'Future Technologies', desc: 'The company is positioning itself within the growing rare earth sector by targeting strategic projects essential for future technologies and the global energy transition.' },
                                            { Icon: GiMinerals, title: 'Base Metals', tag: 'Industrial Growth', desc: 'GEMAD is engaged in the exploration and evaluation of base metal deposits fundamental to industrial and infrastructure development.' },
                                        ].map((c, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex flex-col items-center h-full"
                                            >
                                                <Link to="/commodities" className="group relative bg-white border border-[#764f24] rounded-xl p-6 hover:shadow-xl transition-all duration-300 w-full flex flex-col h-full">
                                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#764f24] to-[#c89a60] rounded-t-xl" />
                                                    <div className="flex-1">
                                                        <div className="w-14 h-14 rounded-full bg-[#764f24] flex items-center justify-center mb-4">
                                                            <c.Icon size={26} className="text-white" />
                                                        </div>
                                                        <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#764f24] bg-[#764f24]/10 px-3 py-1 rounded-full mb-3">
                                                            {c.tag}
                                                        </span>
                                                        <h3 className="text-lg font-bold text-[#15202a] mb-2">{c.title}</h3>
                                                        <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                                                    </div>
                                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#764f24]">
                                                        View Details <FaArrowRight size={11} />
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <Link to="/commodities" className="inline-flex items-center gap-2 px-8 py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-semibold rounded-full transition-all duration-300 shadow-md group">
                                    View All Commodities
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                5. VISION & MISSION - WITH SCROLL ANIMATION
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-[#15202a]">
                    <div className="px-6 xl:px-16 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Who We Are</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white">Vision &amp; Mission</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="border border-[#764f24]/30 bg-white/5 p-8 hover:border-[#764f24]/60 transition-all duration-300 rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-1 h-12 bg-gradient-to-b from-[#764f24] to-[#c89a60]" />
                                        <h3 className="text-xl font-bold text-white">Our Vision</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed">
                                        To become a leading African mineral assets development entity recognized for
                                        technical excellence, responsible resource development, and sustainable value creation.
                                    </p>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="border border-[#764f24]/30 bg-white/5 p-8 hover:border-[#764f24]/60 transition-all duration-300 rounded-xl"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-1 h-12 bg-gradient-to-b from-[#764f24] to-[#c89a60]" />
                                        <h3 className="text-xl font-bold text-white">Our Mission</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed">
                                        To identify and develop high-potential mineral assets through innovative geological
                                        evaluation, disciplined project development, and responsible mining practices that
                                        create long-term value for stakeholders, investors, and communities.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                6. CORE VALUES
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gray-50">
                    <div className="px-6 xl:px-16 py-16 lg:py-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">What Drives Us</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Core Values</h2>
                                <p className="text-gray-600 max-w-2xl leading-relaxed">
                                    Every decision, evaluation, and project is guided by principles that ensure
                                    technical integrity and long-term value creation.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {coreValues.map((v, idx) => (
                                    <motion.div
                                        key={v.num}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white border-l-4 border-[#764f24] p-6 hover:shadow-xl transition-all duration-300 rounded-r-lg"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#15202a] to-[#1e2a35] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                                {v.num}
                                            </div>
                                            <h3 className="font-bold text-[#15202a]">{v.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                7. CLIENTS SECTION
            ══════════════════════════════════════ */}
            <Clients />


            {/* ══════════════════════════════════════
                8. WHY CHOOSE GEMAD
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-[#15202a] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 border border-[#764f24]/8 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#764f24]/8 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="px-6 xl:px-16 py-16 lg:py-24 relative">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-12 lg:flex lg:items-end lg:justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-10 h-[2px] bg-[#764f24]" />
                                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Why Partner With Us</p>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Why Choose GEMAD</h2>
                                </div>
                                <Link to="/about" className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 border border-[#764f24] text-[#c89a60] hover:bg-[#764f24] hover:text-white font-semibold rounded-full transition-all duration-300 group">
                                    About Us <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {whyUs.map((w, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group border border-white/10 bg-white/5 p-6 hover:bg-[#764f24]/10 hover:border-[#764f24]/40 transition-all duration-300 rounded-lg"
                                    >
                                        <div className="flex items-start gap-3">
                                            <MdVerified size={18} className="text-[#764f24] mt-0.5 shrink-0 group-hover:text-[#c89a60] transition-colors duration-200" />
                                            <div>
                                                <h4 className="font-bold text-white mb-2">{w.label}</h4>
                                                <p className="text-white/55 text-sm leading-relaxed">{w.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                9. ESG STRIP
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gradient-to-r from-[#764f24]/10 to-transparent border-y border-[#764f24]/20">
                    <div className="px-6 xl:px-16 py-12">
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">ESG Commitment</p>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#15202a] mb-3">
                                    Environmental, Social &amp; Governance
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    At GEMAD, Environmental, Social, and Governance (ESG) principles form an integral
                                    part of our mineral asset development strategy. We are committed to conducting our
                                    operations responsibly, ethically, and sustainably while creating long-term value
                                    for stakeholders, communities, and the environment.
                                </p>
                            </div>
                            <Link to="/social-responsibility" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-semibold rounded-full transition-all duration-300 shadow-md group">
                                Our ESG Approach
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* ══════════════════════════════════════
                10. CONTACT CTA - WITH SCROLL ANIMATION
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="relative bg-[#15202a] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 2px, transparent 0, transparent 50%)`,
                        backgroundSize: '24px 24px',
                    }} />

                    <div className="px-6 xl:px-16 py-20 lg:py-28 relative">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Ready to Advance Your{' '}
                                <span className="text-[#c89a60]">Mineral Project?</span>
                            </h2>
                            <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto">
                                Let's discuss how GEMAD can help you transform your mineral opportunity into a
                                bankable, investment-ready asset. Our team is ready to support your project
                                from discovery through to development.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 shadow-lg group">
                                    Contact Us Today
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 group">
                                    View Our Services
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>

                            <div className="pt-6 flex flex-wrap justify-center gap-6 text-white/45 text-sm">
                                <a href="mailto:info@gemad.co.za" className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-2">
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

export default Home