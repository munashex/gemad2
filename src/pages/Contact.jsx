import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin, TbMail, TbPhone, TbCalendarTime } from 'react-icons/tb'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import HeroImage from '/images/contact/contact-hero.jpg'

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

const Contact = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "Us"
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

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Us',
            description: 'Drop by our office for a face-to-face consultation',
            details: [
                'Office No.15',
                'Mareu Buildings',
                'No.5 Samuel Road',
                'Delmas',
                '2210'
            ],
            action: { text: 'Get Directions', link: 'https://maps.google.com/?q=Delmas+2210+South+Africa' },
        },
        {
            icon: FaPhone,
            title: 'Call Us',
            description: 'Speak directly with our team',
            details: [
                { number: '072 027 0434', href: '+270720270434' },
                { number: '072 715 0780', href: '+270727150780' }
            ],
            action: { text: 'Call Now', link: 'tel:+270720270434' },
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            description: 'Send us your inquiry anytime',
            details: [
                { email: 'info@gemad.co.za' }
            ],
            action: { text: 'Send Email', link: 'mailto:info@gemad.co.za' },
        }
    ]

    const businessHours = [
        { day: 'Monday - Thursday', hours: '8:00 AM - 5:00 PM', status: 'open' },
        { day: 'Friday', hours: '8:00 AM - 4:00 PM', status: 'open' },
        { day: 'Saturday', hours: 'Closed', status: 'closed' },
        { day: 'Sunday', hours: 'Closed', status: 'closed' },
        { day: 'Public Holidays', hours: 'Closed', status: 'closed' }
    ]

    return (
        <>
            {/* ══════════════════════════════════════
                HERO SECTION — with fade from left and letter animation on "Us"
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
                        {/* Breadcrumb - fade from left */}
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

                        {/* Badge - fade from left */}
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

                        {/* Main headline - fade from left with letter animation on "Us" */}
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

                        {/* Description - fade from left */}
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
                CONTACT INFO CARDS — scroll reveal
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-12 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Connect With Us
                                </p>
                                <div className="w-12 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                We're Here to Help
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Choose the best way to reach us — whether it's a call, email, or visit to our office.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {contactInfo.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-white border border-gray-100 hover:border-[#764f24]/30 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#764f24] to-[#c89a60] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-[#764f24]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                                        <div className="relative w-16 h-16 bg-gradient-to-br from-[#15202a] to-[#1e2a35] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <item.icon size={26} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-5">{item.description}</p>
                                    
                                    <div className="space-y-3 mb-6">
                                        {item.title === 'Visit Us' && (
                                            <div className="space-y-1">
                                                {item.details.map((line, i) => (
                                                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {item.title === 'Call Us' && (
                                            <div className="space-y-3">
                                                {item.details.map((phone, i) => (
                                                    <a 
                                                        key={i}
                                                        href={`tel:${phone.href}`}
                                                        className="block text-lg font-semibold text-[#15202a] hover:text-[#764f24] transition-all duration-200 hover:translate-x-1"
                                                    >
                                                        {phone.number}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {item.title === 'Email Us' && (
                                            <div className="space-y-3">
                                                {item.details.map((email, i) => (
                                                    <a 
                                                        key={i}
                                                        href={`mailto:${email.email}`}
                                                        className="block text-base font-semibold text-[#15202a] hover:text-[#764f24] transition-all duration-200 hover:translate-x-1 break-all"
                                                    >
                                                        {email.email}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <a
                                        href={item.action.link}
                                        target={item.title === 'Visit Us' ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#764f24] group-hover:gap-3 transition-all duration-200"
                                    >
                                        {item.action.text}
                                        <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
                                    </a>

                                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#764f24]/5 group-hover:border-[#764f24]/20 transition-all duration-300 rounded-br-xl" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* ══════════════════════════════════════
                MAP + BUSINESS HOURS — scroll reveal
            ══════════════════════════════════════ */}
            <ScrollReveal>
                <div className="bg-gradient-to-b from-gray-50 to-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            
                            {/* Google Maps Section */}
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

                            {/* Business Hours + LinkedIn */}
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

                                {/* LinkedIn Section */}
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

            {/* ══════════════════════════════════════
                FINAL CTA SECTION — scroll reveal
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

                    <div className="px-6 xl:px-16 py-16 lg:py-20 relative">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="inline-flex items-center gap-2">
                                <div className="w-8 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Get In Touch
                                </p>
                                <div className="w-8 h-[2px] bg-[#764f24]" />
                            </div>
                            
                            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                Let's Build Something{' '}
                                <span className="text-[#c89a60]">Together</span>
                            </h2>
                            
                            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                                Whether you're an investor, mining company, or project owner — 
                                our team is ready to discuss how GEMAD can add value to your mineral assets.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <a
                                    href="mailto:info@gemad.co.za"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                                >
                                    <HiOutlineMail size={16} />
                                    Email Us
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/g-e-m-a-d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                                >
                                    <FaLinkedin size={14} />
                                    Follow on LinkedIn
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>

                            {/* Contact footer strip */}
                            <div className="pt-6 flex flex-wrap justify-center gap-6 text-white/40 text-sm">
                                <span className="inline-flex items-center gap-2">
                                    <HiOutlineMail size={14} />
                                    info@gemad.co.za
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    🌍 www.gemad.co.za
                                </span>
                                <span className="inline-flex items-center gap-2">
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

export default Contact
