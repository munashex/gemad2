import SEO from '../components/SEO'
import { teamSEO } from '../constants/seo'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaUserCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { TbBriefcase, TbCertificate, TbMapPin } from 'react-icons/tb'
import HeroImage from '/images/team/hero-image.jpg'
import GijimaniImg from '/images/team/GijimaniMotau.jpg'
import IsaacImg from '/images/team/Isaac.jpg'
import NjabuloImg from '/images/team/NjabuloMxusile.jpg'
import NangamsoImg from '/images/team/NangamsoMagobiyane.jpg'
import Tloto from '/images/team/Tloto.jpg'

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const ScrollReveal = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp}>
            {children}
        </motion.div>
    )
}

const ReadMore = ({ text, maxLength = 200 }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    if (text.length <= maxLength) {
        return <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
    }

    return (
        <div>
            <p className="text-gray-500 text-xs leading-relaxed">
                {isExpanded ? text : `${text.substring(0, maxLength)}...`}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 text-[#764f24] text-xs font-medium mt-2 hover:text-[#c89a60] transition-colors duration-200"
            >
                {isExpanded ? (
                    <>Read Less <FaChevronUp size={10} /></>
                ) : (
                    <>Read More <FaChevronDown size={10} /></>
                )}
            </button>
        </div>
    )
}

const OurTeam = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = 'Team'
    const targetColor = '#c89a60'

    useEffect(() => {
        const timer = setTimeout(() => setStartLetterAnimation(true), 1200)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!startLetterAnimation) return
        word.split('').forEach((_, index) => {
            setTimeout(
                () => setLetterColors((prev) => ({ ...prev, [index]: targetColor })),
                index * 200
            )
        })
    }, [startLetterAnimation])

    const getLetterColor = (index) => letterColors[index] || '#ffffff'

    const leader = {
        name: 'Gijimani Motau',
        position: 'Managing Director',
        qualifications: 'BSc (Hons) Geology | Pr.Sci.Nat',
        experience:
            'Gijimani Motau is an experienced geologist and aspiring mining entrepreneur with extensive expertise in mineral exploration, mining operations, and resource development. He specialises in exploration, geological modelling, and resource estimation, with strong experience in managing exploration and drilling programmes, as well as project development. His business interests focus on identifying, evaluating, and advancing high-potential mineral projects into economically viable mining operations. He has a keen interest in coal, Platinum Group Metals (PGMs), and base metals. ',
        image: GijimaniImg,
    }

    const teamMembers = [
        {
            name: 'Dr Wilhemina M. Langa',
            position: 'Exploration Geologist',
            qualifications: 'PhD in Geology | Pr.Sci.Nat',
            experience:
                'Over 15 years of experience in mineral exploration, mining geology, and resource development. Experienced in geological mapping, drilling programme management, core logging, geochemical analysis, QA/QC implementation, and 3D geological modelling across commodities including gold, PGEs, and coal. Skilled in technical reporting, geological interpretation, and resource support within both underground and exploration environments.',
            image: null,
        },
        {
            name: 'Isaac Mabonda',
            position: 'Exploration Geologist',
            qualifications: 'BSc (Hons) Geology | Pr.Sci.Nat',
            experience:
                'Over 14 years of experience in open-cast mining, production geology, and greenfield exploration projects. Skilled in geological control, grade management, drill supervision, geological modelling, and exploration programme management across commodities including chromite, PGE, coal, iron ore, gold, nickel, and manganese. Experienced in both South African and international mining environments.',
            image: IsaacImg,
        },
        {
            name: 'Njabulo Mxusile',
            position: 'Environmental Consultant',
            qualifications: 'BSc (Hons) Environmental Management | Pr.Sci.Nat',
            experience:
                'More than 5 years of experience in environmental management within the diamond and coal mining industries. Environmental Consultant and Professional Natural Scientist specializing in environmental compliance, regulatory management, and sustainable mining practices. Skilled in environmental auditing, environmental authorisations, water management, waste management, rehabilitation planning, and ISO 14001:2015 compliance across underground and surface mining operations.',
            image: NjabuloImg,
        },
        {
            name: 'Nangamso Magobiyane',
            position: 'Resource Geologist',
            qualifications: 'BSc (Hons) Geology | Pr.Sci.Nat | MBA',
            experience:
                'Over 15 years of experience in mining and mineral exploration. Professional Natural Scientist and Senior Geologist specializing in geological modelling, mine planning, operational geology, and mineral resource estimation across underground and surface mining operations. Experienced in managing drilling programmes, multidisciplinary technical teams, and integrating geological, geochemical, and geophysical data to support strategic project decisions from exploration through to production. Affiliated with SACNASP, SAIMM, CGSSA, and WIMSA.',
            image: NangamsoImg,
        },
        {
            name: 'Tlotlo Kearata Poti',
            position: 'Junior Mine Planner',
            qualifications: 'BEng Mining Engineering',
            experience:
                'Tlotlo is a Mining Engineer with over three years of experience in the mining and construction sectors. His expertise spans mine planning and design, production scheduling, drill and blast engineering, costing, explosive handling, geotechnical analysis, soil profiling, and mining design simulations. Based in Botswana, he supports the delivery of technically sound and efficient mining solutions across the project development lifecycle.',
            image: Tloto,
        }
    ]

    return (
        <>
         <SEO {...teamSEO} />
            {/* HERO SECTION — fade from left (like other pages) */}
            <div className="relative w-full h-[45vh] min-h-[380px] lg:h-[55vh]">
                <img
                    src={HeroImage}
                    alt="GEMAD Team"
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
                            <Link to="/" className="hover:text-[#c89a60]">Home</Link>
                            <span>/</span>
                            <span className="text-[#c89a60]">Our Team</span>
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
                                Meet Our Experts
                            </span>
                        </motion.div>

                        {/* Heading - fade from left with letter animation */}
                        <motion.h1 
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        >
                            Our{' '}
                            {word.split('').map((letter, idx) => (
                                <span
                                    key={idx}
                                    style={{ color: getLetterColor(idx) }}
                                    className="inline-block transition-colors duration-300"
                                >
                                    {letter}
                                </span>
                            ))}
                        </motion.h1>

                        {/* Description - fade from left */}
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl"
                        >
                            Meet the experienced professionals driving GEMAD's vision for sustainable
                            mineral asset development across Africa.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* MANAGING DIRECTOR — on top */}
            <ScrollReveal>
                <div className="bg-white px-6 xl:px-16 pt-16 lg:pt-20 pb-0">
                    <div className="max-w-2xl mx-auto">
                        <div className="group relative bg-white border border-[#764f24]/25 rounded-2xl p-8 hover:border-[#764f24]/60 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-[#764f24] rounded-t-2xl" />
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
                                <div className="w-30 h-30 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0 ring-2 ring-[#764f24]/30 group-hover:ring-[#764f24]/60 transition-all duration-300 shadow-md">
                                    {leader.image ? (
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <FaUserCircle size={72} className="text-gray-300" />
                                    )}
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-[#764f24] bg-[#764f24]/8 px-3 py-1 rounded-full mb-3">
                                        Managing Director
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#15202a] mb-1">{leader.name}</h3>
                                    <p className="text-[#764f24] text-sm font-medium mb-3">{leader.qualifications}</p>
                                    <ReadMore text={leader.experience} maxLength={250} />
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-[#764f24]/15 group-hover:border-[#764f24]/35 transition-colors duration-300 rounded-br-2xl" />
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CONNECTOR LINES */}
            <div className="px-6 xl:px-16 overflow-hidden" style={{ height: '56px' }}>
                <svg
                    viewBox="0 0 1000 56"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full"
                    aria-hidden="true"
                >
                    <line x1="500" y1="0"  x2="500" y2="22" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="100" y1="22" x2="900" y2="22" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="100" y1="22" x2="100" y2="50" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="300" y1="22" x2="300" y2="50" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="500" y1="22" x2="500" y2="50" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="700" y1="22" x2="700" y2="50" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <line x1="900" y1="22" x2="900" y2="50" stroke="#c89a60" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.7" />
                    <circle cx="100" cy="52" r="3" fill="#c89a60" fillOpacity="0.45" stroke="#764f24" strokeWidth="1.2" />
                    <circle cx="300" cy="52" r="3" fill="#c89a60" fillOpacity="0.45" stroke="#764f24" strokeWidth="1.2" />
                    <circle cx="500" cy="52" r="3" fill="#c89a60" fillOpacity="0.45" stroke="#764f24" strokeWidth="1.2" />
                    <circle cx="700" cy="52" r="3" fill="#c89a60" fillOpacity="0.45" stroke="#764f24" strokeWidth="1.2" />
                    <circle cx="900" cy="52" r="3" fill="#c89a60" fillOpacity="0.45" stroke="#764f24" strokeWidth="1.2" />
                </svg>
            </div>

            {/* TEAM MEMBERS GRID */}
            <div className="bg-white px-6 xl:px-16 pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-gray-100 hover:border-[#764f24]/40 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] to-[#c89a60] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />
                                <div className="p-5 flex flex-col items-center text-center flex-1">
                                    <div className="w-30 h-30 rounded-full bg-gray-50 border border-[#764f24]/20 group-hover:border-[#764f24]/50 flex items-center justify-center overflow-hidden shrink-0 mb-4 transition-all duration-300 shadow-sm">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <FaUserCircle size={48} className="text-gray-300" />
                                        )}
                                    </div>
                                    <span className="inline-block text-[9px] font-bold tracking-[0.14em] uppercase text-[#764f24] bg-[#764f24]/8 px-2.5 py-0.5 rounded-full mb-2">
                                        {member.position}
                                    </span>
                                    <h3 className="text-sm font-bold text-[#15202a] group-hover:text-[#764f24] transition-colors duration-200 mb-1 leading-snug">
                                        {member.name}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 mb-3 leading-snug">
                                        {member.qualifications}
                                    </p>
                                    <ReadMore text={member.experience} maxLength={120} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#764f24]/10 group-hover:border-[#764f24]/30 transition-colors duration-300 rounded-br-xl" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* EXPERTISE SECTION */}
            <ScrollReveal>
                <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Core Competencies
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Areas of Expertise
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: TbBriefcase,
                                    title: 'Geological Exploration',
                                    desc: 'Mineral exploration, drilling programmes, and geological mapping across multiple commodities including coal, gold, PGEs, and base metals.',
                                },
                                {
                                    icon: TbCertificate,
                                    title: 'Technical Excellence',
                                    desc: 'Pr.Sci.Nat certified professionals with expertise in resource estimation, QA/QC, and 3D geological modelling.',
                                },
                                {
                                    icon: TbMapPin,
                                    title: 'Environmental Compliance',
                                    desc: 'ISO 14001:2015 certified environmental management, regulatory compliance, and sustainable mining practices.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white border border-gray-200 hover:border-[#764f24]/40 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#764f24]/10 flex items-center justify-center mb-4 group-hover:bg-[#764f24] transition-all duration-300">
                                        <item.icon
                                            size={22}
                                            className="text-[#764f24] group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#15202a] mb-2 group-hover:text-[#764f24] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CTA SECTION */}
            <ScrollReveal>
                <div className="relative bg-[#15202a] overflow-hidden py-20 lg:py-28">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />
                    <div className="px-6 xl:px-16 relative">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Join The Journey
                                </p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Ready to Work With{' '}
                                <span className="text-[#c89a60]">Industry Experts?</span>
                            </h2>
                            <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto">
                                Our team of experienced geologists, environmental specialists, and project
                                developers is ready to support your mineral project from exploration to production.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                                >
                                    Contact Our Team
                                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                                >
                                    Explore Our Services
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

export default OurTeam