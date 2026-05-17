import SEO from '../components/SEO'
import { socialResponsibilitySEO } from '../constants/seo'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { 
    TbLeaf, 
    TbUsers, 
    TbShieldCheck, 
    TbHeartHandshake,
    TbCertificate,
    TbBuildingCommunity,
    TbPlant,
    TbTools,
} from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import HeroImage from '/images/social/social_hero.jpg'

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

const SocialResponsibility = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "Responsibility"
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

    const esgPillars = [
        {
            icon: TbLeaf,
            title: 'Environmental',
            description: 'We are committed to responsible mineral development that balances economic growth with environmental stewardship, ensuring sustainable resource management for future generations.',
        },
        {
            icon: TbUsers,
            title: 'Social',
            description: 'We believe mineral development should contribute positively to local communities through skills development, local employment, economic empowerment, and meaningful social investment initiatives.',
        },
        {
            icon: TbShieldCheck,
            title: 'Governance',
            description: 'We operate with transparency, professionalism, accountability, and ethical business practices in all our operations, partnerships, and stakeholder engagements.',
        },
    ]

    const isoCertifications = [
        { code: 'ISO 9001:2015', name: 'Quality Management Systems', description: 'Ensuring consistent quality in all our operations and deliverables' },
        { code: 'ISO 14001:2015', name: 'Environmental Management Systems', description: 'Managing our environmental impact and commitment to sustainability' },
        { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', description: 'Protecting our workforce and maintaining safe working conditions' },
    ]

    const communityInitiatives = [
        {
            icon: TbBuildingCommunity,
            title: 'Local Employment',
            description: 'Prioritizing local hiring and skills development to empower communities where we operate.',
        },
        {
            icon: TbHeartHandshake,
            title: 'Social Investment',
            description: 'Meaningful investment in community projects, education, and healthcare initiatives.',
        },
        {
            icon: TbPlant,
            title: 'Sustainable Practices',
            description: 'Implementing responsible mining practices that minimize environmental impact.',
        },
        {
            icon: TbTools,
            title: 'Skills Development',
            description: 'Training and upskilling programs for local community members in mining and related fields.',
        },
    ]

    return (
        <>
          <SEO {...socialResponsibilitySEO} />
            {/* ══════════════════════════════════════
                HERO SECTION — with fade from left and letter animation
            ══════════════════════════════════════ */}
            <div className="relative w-full h-[45vh] min-h-[380px] lg:h-[55vh]">
                <img
                    src={HeroImage}
                    alt="GEMAD Social Responsibility"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/75 to-[#15202a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/60 via-transparent to-transparent" />
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
                            <span className="text-[#c89a60]">Social Responsibility</span>
                        </motion.div>

                        {/* Badge - fade from left */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#764f24]/60 bg-[#764f24]/10 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                ESG Commitment
                            </span>
                        </motion.div>

                        {/* Main headline - fade from left with letter animation */}
                        <motion.h1 
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        >
                            Social{' '}
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
                            className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl"
                        >
                            At GEMAD, Environmental, Social, and Governance (ESG) principles form an integral
                            part of our mineral asset development strategy.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                ESG COMMITMENT SECTION — scroll reveal
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Our Approach
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Environmental, Social &amp; Governance
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                At GEMAD, Environmental, Social, and Governance (ESG) principles form an integral part of our 
                                mineral asset development strategy. We are committed to conducting our operations responsibly, 
                                ethically, and sustainably while creating long-term value for stakeholders, communities, and the environment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {esgPillars.map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-white border border-gray-200 hover:border-[#764f24]/40 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#764f24]/5 to-transparent rounded-bl-full" />
                                    <div className="w-16 h-16 rounded-2xl bg-[#764f24]/10 flex items-center justify-center mb-5 group-hover:bg-[#764f24] transition-all duration-300">
                                        <pillar.icon size={28} className="text-[#764f24] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#15202a] mb-3 group-hover:text-[#764f24] transition-colors duration-300">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                    <div className="mt-4 w-12 h-[2px] bg-[#764f24]/20 group-hover:w-20 transition-all duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                COMMUNITY INITIATIVES SECTION — scroll reveal
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gray-50 px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Community First
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Community Development
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                We believe mineral development should contribute positively to local communities 
                                through skills development, local employment, and meaningful social investment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {communityInitiatives.map((initiative, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group bg-white rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#764f24]/30"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#764f24]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#764f24] transition-all duration-300">
                                        <initiative.icon size={24} className="text-[#764f24] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-200">
                                        {initiative.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {initiative.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                ISO CERTIFICATIONS SECTION — scroll reveal
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-[#15202a] px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    International Standards
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                ISO-Certified Operational Standards
                            </h2>
                            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                                GEMAD is committed to maintaining internationally recognized operational, quality, 
                                environmental, and occupational safety standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {isoCertifications.map((iso, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group border border-[#764f24]/30 bg-white/5 rounded-xl p-6 hover:bg-[#764f24]/10 hover:border-[#764f24]/60 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#764f24]/20 flex items-center justify-center group-hover:bg-[#764f24] transition-all duration-300">
                                            <TbCertificate size={24} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-lg">{iso.code}</div>
                                            <div className="text-[#c89a60] text-xs">{iso.name}</div>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {iso.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                CTA SECTION — scroll reveal
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
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Join The Journey
                                </p>
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
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                                >
                                    Contact Us Today
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                                >
                                    View Our Services
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </>
    )
}

export default SocialResponsibility