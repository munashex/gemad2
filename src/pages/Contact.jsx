
import SEO from '../components/SEO'
import { contactSEO } from '../constants/seo'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import HeroImage from '/images/contact/contact-hero.jpg'

// 👇 YOUR EMAILJS CREDENTIALS (from emailjs.com dashboard)
const EMAILJS_SERVICE_ID = 'service_2d4mdg5'
const EMAILJS_TEMPLATE_ID = 'template_gfk1d2n'
const EMAILJS_PUBLIC_KEY = 'TScleMrx7otXkKfDW'

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

const Contact = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "Us"
    const targetColor = "#c89a60"

    // Form ref for emailjs.sendForm
    const formRef = useRef(null)

    // Form submission state (replaces Formspree's `state`)
    const [status, setStatus] = useState({ submitting: false, succeeded: false, error: null })

    // Start letter animation
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus({ submitting: true, succeeded: false, error: null })

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatus({ submitting: false, succeeded: true, error: null })
                    formRef.current.reset()
                },
                (error) => {
                    console.error('EmailJS error:', error)
                    setStatus({ submitting: false, succeeded: false, error: 'Something went wrong. Please try again or email us directly.' })
                }
            )
    }

    const businessHours = [
        { day: 'Monday - Thursday', hours: '8:00 AM - 5:00 PM', status: 'open' },
        { day: 'Friday', hours: '8:00 AM - 4:00 PM', status: 'open' },
        { day: 'Saturday', hours: 'Closed', status: 'closed' },
        { day: 'Sunday', hours: 'Closed', status: 'closed' },
        { day: 'Public Holidays', hours: 'Closed', status: 'closed' }
    ]

    return (
        <>
          <SEO {...contactSEO} />
            {/* ══════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════ */}
            <div className="relative w-full h-[45vh] min-h-[380px]">
                <img
                    src={HeroImage}
                    alt="Contact GEMAD"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/75 to-[#15202a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />

                <div className="relative h-full flex items-center px-6 xl:px-16">
                    <div className="max-w-3xl space-y-5">
                        {/* Breadcrumb */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2 text-white/50 text-sm"
                        >
                            <Link to="/" className="hover:text-[#c89a60] transition-colors duration-200">Home</Link>
                            <span>/</span>
                            <span className="text-[#c89a60]">Contact</span>
                        </motion.div>

                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#764f24]/20 rounded-full backdrop-blur-sm border border-[#764f24]/30"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                Get In Touch
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1 
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        >
                            Contact{' '}
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

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
                        >
                            Ready to advance your mineral project? Reach out to our team — 
                            we're here to discuss exploration, development, and partnership opportunities.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CONTACT FORM SECTION
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="relative bg-[#15202a] overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 2px, transparent 0, transparent 50%)`,
                            backgroundSize: '24px 24px',
                        }}
                    />

                    <div className="px-6 xl:px-16 py-20 lg:py-24 relative">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <div className="w-12 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                        Send a Message
                                    </p>
                                    <div className="w-12 h-[2px] bg-[#764f24]" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    We'd Love to Hear From You
                                </h2>
                                <p className="text-white/60 max-w-2xl mx-auto">
                                    Fill out the form below and our team will get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                                {/* Form */}
                                <div className="lg:col-span-3">
                                    <motion.form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
                                    >
                                        <div>
                                            <label className="block text-white text-sm font-semibold mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your full name"
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/90 text-[#15202a] placeholder-gray-400 border-2 border-transparent focus:border-[#c89a60] focus:outline-none focus:ring-4 focus:ring-[#c89a60]/20 transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white text-sm font-semibold mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="your@email.com"
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/90 text-[#15202a] placeholder-gray-400 border-2 border-transparent focus:border-[#c89a60] focus:outline-none focus:ring-4 focus:ring-[#c89a60]/20 transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white text-sm font-semibold mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about your project, inquiry, or how we can help..."
                                                required
                                                rows={6}
                                                className="w-full px-5 py-3.5 rounded-xl bg-white/90 text-[#15202a] placeholder-gray-400 border-2 border-transparent focus:border-[#c89a60] focus:outline-none focus:ring-4 focus:ring-[#c89a60]/20 transition-all duration-200 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status.submitting}
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg group text-lg"
                                        >
                                            <HiOutlineMail size={20} />
                                            {status.submitting ? 'Sending...' : 'Send Message'}
                                            {!status.submitting && (
                                                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            )}
                                        </button>

                                        {status.succeeded && (
                                            <div className="bg-emerald-500/20 border-2 border-emerald-500/30 text-emerald-400 px-5 py-3.5 rounded-xl text-sm font-medium text-center">
                                                ✓ Message sent successfully! We'll be in touch soon.
                                            </div>
                                        )}

                                        {status.error && (
                                            <div className="bg-red-500/20 border-2 border-red-500/30 text-red-400 px-5 py-3.5 rounded-xl text-sm font-medium text-center">
                                                {status.error}
                                            </div>
                                        )}
                                    </motion.form>
                                </div>

                                {/* Contact Info Sidebar */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#764f24]/40 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-[#764f24]/20 flex items-center justify-center">
                                                <HiOutlineMail size={22} className="text-[#c89a60]" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                                                    Email
                                                </p>
                                                <a href="mailto:info@gemad.co.za" className="text-white font-medium hover:text-[#c89a60] transition-colors">
                                                    info@gemad.co.za
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-[#764f24]/20 flex items-center justify-center">
                                                <FaPhone size={20} className="text-[#c89a60]" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                                                    Phone
                                                </p>
                                                <div className="space-y-1">
                                                    <a href="tel:+27720270434" className="text-white font-medium hover:text-[#c89a60] transition-colors block">
                                                        +27 72 027 0434
                                                    </a>
                                                    <a href="tel:+27727150780" className="text-white font-medium hover:text-[#c89a60] transition-colors block">
                                                        +27 72 715 0780
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#764f24]/20 flex items-center justify-center">
                                                <FaMapMarkerAlt size={20} className="text-[#c89a60]" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                                                    Location
                                                </p>
                                                <p className="text-white font-medium">
                                                    Delmas, South Africa
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#764f24]/40 transition-all duration-300">
                                        <p className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-4">
                                            Connect With Us
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <a
                                                href="https://www.linkedin.com/company/g-e-m-a-d/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 group"
                                            >
                                                <FaLinkedin size={16} />
                                                LinkedIn
                                                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </a>
                                            <a
                                                href="mailto:info@gemad.co.za"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#764f24]/20 hover:bg-[#764f24]/30 text-[#c89a60] text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 group"
                                            >
                                                <HiOutlineMail size={16} />
                                                Email Us
                                                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="text-white/30 text-xs space-y-2 pt-4 border-t border-white/5">
                                        <p className="flex items-center gap-2">
                                            <span>🌍</span> www.gemad.co.za
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span>📍</span> South Africa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                MAP + BUSINESS HOURS
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gradient-to-b from-gray-50 to-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="group lg:col-span-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#764f24]/10 flex items-center justify-center">
                                        <FaMapMarkerAlt size={16} className="text-[#764f24]" />
                                    </div>
                                    <div>
                                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                            Our Location
                                        </p>
                                        <h2 className="text-2xl font-bold text-[#15202a]">
                                            Find Us Here
                                        </h2>
                                    </div>
                                </div>
                                
                                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.496985576223!2d28.67416027541323!3d-26.147939177111148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9532ac50e59fa1%3A0x31421658957aa45b!2sMareu%20Auditors!5e0!3m2!1sen!2sza!4v1778584986298!5m2!1sen!2sza"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="GEMAD Office Location"
                                        className="w-full"
                                    ></iframe>
                                </div>
                                
                                <div className="mt-5 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#764f24]/10 flex items-center justify-center shrink-0">
                                            <TbMapPin size={18} className="text-[#764f24]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#15202a] mb-1">GEMAD Head Office</p>
                                            <div className="text-gray-500 text-sm leading-relaxed space-y-0.5">
                                                <p>Office No.15</p>
                                                <p>Mareu Buildings</p>
                                                <p>No.5 Samuel Road</p>
                                                <p>Delmas</p>
                                                <p>2210</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#764f24]/10 flex items-center justify-center">
                                        <FaClock size={16} className="text-[#764f24]" />
                                    </div>
                                    <div>
                                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                            Office Hours
                                        </p>
                                        <h2 className="text-2xl font-bold text-[#15202a]">
                                            When to Find Us
                                        </h2>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                                    {businessHours.map((item, idx) => (
                                        <div 
                                            key={idx}
                                            className={`flex justify-between items-center p-4 transition-all duration-200 ${
                                                idx !== businessHours.length - 1 ? 'border-b border-gray-50' : ''
                                            } hover:bg-gray-50/50`}
                                        >
                                            <span className="font-semibold text-[#15202a]">{item.day}</span>
                                            <span className={`text-sm font-medium ${
                                                item.status === 'closed' ? 'text-red-400' : 'text-emerald-600'
                                            }`}>
                                                {item.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://www.linkedin.com/company/g-e-m-a-d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-gradient-to-r from-[#15202a] to-[#1e2a35] rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#764f24]/20 flex items-center justify-center group-hover:bg-[#764f24] transition-all duration-300">
                                            <FaLinkedin size={22} className="text-[#c89a60] group-hover:text-white transition-all duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-white mb-0.5">Follow GEMAD</p>
                                            <p className="text-white/50 text-xs">Stay updated on LinkedIn</p>
                                        </div>
                                        <FaArrowRight size={14} className="text-[#c89a60] group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </>
    )
}

export default Contact