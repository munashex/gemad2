import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
    TbMicroscope,
    TbChartLine,
    TbBuildingFactory2,
    TbReportAnalytics,
    TbMap,
    TbTestPipe,
    TbChartBar,
    TbDatabase,
    TbFiles,
    TbCoin,
    TbCalendar,
    TbSearch,
    TbClipboardList,
    TbShieldCheck,
    TbTrendingUp,
    TbWaveSine,
} from 'react-icons/tb'
import { GiDrill, GiMining, GiMineTruck } from 'react-icons/gi'
import GetInTouch from '../components/GetInTouch'
import HeroImage from '/images/services/services-hero.jpg'

// Geological Exploration Images
import GeoExploration1 from '/images/services/geo-exploration-1.jpg'
import GeoExploration2 from '/images/services/geo-exploration-2.jpg'
import GeoExploration3 from '/images/services/geo-exploration-3.jpg'

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

/* ─── DATA — client's exact text from PDF ─── */

const services = [
    {
        id: 'geological',
        Icon: TbMicroscope,
        number: '01',
        title: 'Geological Evaluation & Exploration',
        tagline: 'From grassroots exploration to resource definition',
        intro: 'GEMAD provides comprehensive exploration and geological evaluation services aimed at identifying, defining, and advancing mineral resources through scientifically driven exploration methodologies and technical analysis.',
        body: 'Our exploration services are designed to support mineral projects from grassroots exploration through to resource definition and project evaluation. Through integrated exploration solutions and technical expertise, GEMAD supports the successful advancement of mineral projects from early-stage exploration to resource definition and development readiness.',
        subServices: [
            {
                Icon: TbFiles,
                title: 'Desktop Studies & Data Review',
                desc: 'Analysis of historical geological information, maps, previous exploration records, and available technical data to identify exploration potential, assess project viability, and guide exploration strategy and planning.',
            },
            {
                Icon: TbMap,
                title: 'Geological Mapping',
                desc: 'Identification and mapping of rock types, geological structures, alteration zones, and mineralized areas to improve understanding of the geological setting and mineral potential of a project area.',
            },
            {
                Icon: TbWaveSine,
                title: 'Geophysical & Geochemical Surveys',
                desc: 'Application of advanced scientific survey techniques to detect subsurface mineral anomalies, define exploration targets, and support the identification of prospective mineralized zones.',
            },
            {
                Icon: GiDrill,
                title: 'Exploration Drilling',
                desc: 'Execution and supervision of core drilling programs to obtain geological information, define mineralized zones, and collect representative geological samples for analysis.',
            },
            {
                Icon: TbTestPipe,
                title: 'Sampling & Assaying',
                desc: 'Systematic collection, preparation, and laboratory analysis of geological samples to determine mineral grade, composition, quality, and economic potential.',
            },
            {
                Icon: TbDatabase,
                title: 'Geological Data Interpretation',
                desc: 'Integration and interpretation of geological, drilling, geophysical, and geochemical data to develop accurate geological models, identify mineralization trends, and support resource evaluation.',
            },
            {
                Icon: TbClipboardList,
                title: 'Exploration Project Management',
                desc: 'Planning, coordination, supervision, and management of exploration programs to ensure safe, efficient, compliant, and cost-effective project execution while meeting technical and operational objectives.',
            },
        ],
    },
    {
        id: 'resource',
        Icon: TbChartLine,
        number: '02',
        title: 'Resource Modelling & Estimation',
        tagline: '3D geological modelling to bankable resource estimates',
        intro: 'GEMAD utilizes advanced geological and mining methodologies to develop accurate resource models and reliable mineral resource estimates that support project evaluation, mine planning, and investment decision-making.',
        body: 'Our technical approach integrates geological interpretation, data analysis, and industry-standard modelling techniques to improve confidence in mineral resource definition and project development. Through integrated geological modelling and resource estimation expertise, GEMAD delivers technically sound resource evaluations that support sustainable and bankable mineral asset development.',
        subServices: [
            {
                Icon: GiMining,
                title: '3D Geological Modelling',
                desc: 'Development of detailed three-dimensional geological models that accurately represent ore bodies, geological structures, lithology, and mineralized zones using advanced geological modelling software and spatial analysis techniques.',
            },
            {
                Icon: TbChartBar,
                title: 'Geostatistical Analysis',
                desc: 'Application of statistical and geostatistical methods to analyze geological data, assess grade distribution, evaluate data continuity, and improve confidence in resource estimation and ore body interpretation.',
            },
            {
                Icon: TbTrendingUp,
                title: 'Resource Estimation',
                desc: 'Preparation of mineral resource estimates using industry-recognized estimation methodologies and reporting standards to define resource quantity, grade, and classification for project evaluation and development planning.',
            },
            {
                Icon: TbSearch,
                title: 'Ore Body Interpretation',
                desc: 'Interpretation of geological and drilling data to define the geometry, continuity, structure, and mineralization characteristics of ore bodies, supporting accurate modelling and resource assessment.',
            },
        ],
    },
    {
        id: 'asset',
        Icon: TbBuildingFactory2,
        number: '03',
        title: 'Mineral Asset Development',
        tagline: 'From early-stage concept to investment-ready operations',
        intro: 'GEMAD advances mineral projects from early-stage opportunities into technically and economically viable mining assets through integrated technical evaluation, strategic mine planning, and financial assessment.',
        body: 'We provide practical and investment-focused solutions that support the successful development and optimization of mineral projects from concept through to implementation. Our objective is to transform mineral resources into sustainable, efficient, and bankable mining operations capable of delivering long-term value.',
        subServices: [
            {
                Icon: TbMap,
                title: 'Mine Design and Planning',
                desc: 'Development of optimized mine layouts and operational strategies that maximize resource extraction, improve efficiency, and support safe and sustainable mining operations. This includes pit optimization, underground layouts, infrastructure planning, and production strategy development.',
            },
            {
                Icon: TbCalendar,
                title: 'Mine Scheduling',
                desc: 'Preparation of short-term, medium-term, and life-of-mine production schedules to ensure efficient resource extraction, operational continuity, and alignment with project objectives and financial targets.',
            },
            {
                Icon: TbCoin,
                title: 'Mine Financial Valuation',
                desc: 'Comprehensive financial analysis of mining projects to assess economic viability, profitability, capital requirements, operating costs, cash flow projections, and investment returns.',
            },
            {
                Icon: TbChartBar,
                title: 'Pre-Feasibility Studies',
                desc: 'Preliminary technical and economic studies conducted to evaluate the practicality and potential of a mining project before major investment decisions are made. These studies assess mining methods, infrastructure requirements, production potential, and project risks.',
            },
            {
                Icon: TbFiles,
                title: 'Feasibility Studies',
                desc: 'Detailed technical and financial assessments that confirm the viability of a mining project and provide the foundation for financing, project development, and operational implementation.',
            },
            {
                Icon: TbShieldCheck,
                title: 'Bankable Studies',
                desc: 'Preparation of high-level technical and economic studies designed to support funding applications, investment decisions, and project financing by demonstrating the project\'s commercial viability and long-term sustainability.',
            },
        ],
    },
    {
        id: 'advisory',
        Icon: TbReportAnalytics,
        number: '04',
        title: 'Project Evaluation & Advisory',
        tagline: 'Technical intelligence for smarter investment decisions',
        intro: 'GEMAD provides strategic technical support and advisory services to investors, mining companies, financial institutions, and mineral project owners seeking informed decision-making and project development support.',
        body: 'Our advisory services combine geological expertise, technical analysis, and industry insight to assess project potential, identify risks, and support investment and development strategies across the mining value chain. Through professional advisory services and technical expertise, GEMAD helps clients reduce uncertainty, improve project confidence, and unlock the full value of mineral assets.',
        subServices: [
            {
                Icon: TbMicroscope,
                title: 'Technical Due Diligence',
                desc: 'Comprehensive technical assessments of mineral projects, operations, and assets to evaluate geological integrity, resource potential, operational viability, and compliance with industry standards and reporting codes.',
            },
            {
                Icon: TbSearch,
                title: 'Mineral Asset Evaluation',
                desc: 'Independent evaluation of mineral assets to determine their geological, technical, and economic potential, supporting investment decisions, acquisitions, project development, and strategic planning.',
            },
            {
                Icon: TbClipboardList,
                title: 'Project Reviews',
                desc: 'Detailed review and assessment of exploration programs, geological models, resource estimates, mine plans, and technical studies to ensure project quality, accuracy, and development readiness.',
            },
            {
                Icon: TbShieldCheck,
                title: 'Risk Assessments',
                desc: 'Identification and evaluation of technical, geological, operational, environmental, and financial risks associated with mineral projects to support effective risk management and decision-making.',
            },
            {
                Icon: TbCoin,
                title: 'Investment Support',
                desc: 'Technical support for investors and stakeholders through project screening, opportunity evaluation, technical reporting, and strategic advisory services aimed at supporting informed investment decisions.',
            },
        ],
    },
]

const softwareTools = [
    { name: 'Leapfrog Geo', category: 'Geological Modelling' },
    { name: 'Leapfrog Edge', category: 'Resource Estimation' },
    { name: 'Deswik', category: 'Mine Planning' },
    { name: 'ArcGIS Pro', category: 'Spatial Analysis' },
]

// Geological exploration images
const geoExplorationImages = [
    { id: 1, image: GeoExploration1, name: 'Geological Exploration 1' },
    { id: 2, image: GeoExploration2, name: 'Geological Exploration 2' },
    { id: 3, image: GeoExploration3, name: 'Geological Exploration 3' },
]

/* ─── SERVICES PAGE ─── */

const Services = () => {
    const [letterColors, setLetterColors] = useState({})
    const [startLetterAnimation, setStartLetterAnimation] = useState(false)
    const word = "Services"
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

    return (
        <>

            {/* HERO — with fade from left and letter animation */}
            <div className="relative w-full h-[55vh] min-h-[420px]">
                <img
                    src={HeroImage}
                    alt="GEMAD geological services"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/75 to-[#15202a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#a06a32] to-transparent" />

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
                            <span className="text-[#c89a60]">Services</span>
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
                                Technical Services
                            </span>
                        </motion.div>

                        {/* Main headline - fade from left with letter animation */}
                        <motion.h1 
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
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
                            className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl"
                        >
                            GEMAD provides the full spectrum of technical and project development services
                            required to unlock mineral value responsibly and sustainably — from grassroots
                            exploration through to bankable feasibility studies and investment advisory.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* SERVICES OVERVIEW STRIP — scroll reveal */}
            <ScrollReveal>
                <div className="bg-[#15202a] py-10 px-6 xl:px-16 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {services.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="group flex items-center gap-3 p-4 border border-white/10 hover:border-[#764f24]/60 hover:bg-[#764f24]/10 transition-all duration-300 rounded-lg"
                                >
                                    <div className="w-9 h-9 bg-[#764f24]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#764f24] transition-colors duration-300">
                                        <s.Icon size={18} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-[#764f24] mb-0.5">{s.number}</div>
                                        <div className="text-white text-xs font-semibold leading-snug line-clamp-2">{s.title}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* EACH SERVICE SECTION — with scroll reveal */}
            {services.map((service, serviceIndex) => (
                <div
                    key={service.id}
                    id={service.id}
                    className={serviceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                    <div className="px-6 xl:px-16 py-20 lg:py-28">
                        <div className="max-w-7xl mx-auto">

                            <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                <ScrollReveal>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-[2px] bg-[#764f24]" />
                                            <span className="text-[#764f24] text-xs font-bold tracking-[0.25em] uppercase">
                                                Service {service.number}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-5 mb-5">
                                            <div className="w-14 h-14 bg-[#15202a] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                                <service.Icon size={26} className="text-[#c89a60]" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#15202a] leading-tight">
                                                    {service.title}
                                                </h2>
                                                <p className="text-[#764f24] font-medium mt-1 text-sm">{service.tagline}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-base">{service.intro}</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal>
                                    <div className="lg:pt-8 border-l-0 lg:border-l border-[#764f24]/20 lg:pl-8">
                                        <p className="text-gray-600 leading-relaxed text-sm">{service.body}</p>

                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#15202a] hover:bg-[#764f24] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
                                        >
                                            Enquire About This Service
                                            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Geological Exploration Image Gallery - only for first service */}
                            {service.id === 'geological' && (
                                <div className="mb-10">
                                    <h3 className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                                        <span>Field Work Gallery</span>
                                        <div className="flex-1 h-[1px] bg-gray-200" />
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                        {geoExplorationImages.map((img, idx) => (
                                            <motion.div
                                                key={img.id}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="group overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                                            >
                                                <div className="relative aspect-video overflow-hidden">
                                                    <img
                                                        src={img.image}
                                                        alt={img.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h3 className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                                    <span>Services Include</span>
                                    <div className="flex-1 h-[1px] bg-gray-200" />
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {service.subServices.map((sub, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group bg-white border border-gray-100 hover:border-[#764f24]/40 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] to-[#c89a60] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />

                                            <div className="w-11 h-11 bg-[#15202a] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#764f24] transition-colors duration-300">
                                                <sub.Icon size={20} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                            </div>

                                            <h4 className="font-bold text-[#15202a] mb-3 text-base group-hover:text-[#764f24] transition-colors duration-200">
                                                {sub.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{sub.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {serviceIndex < services.length - 1 && (
                        <div className="mx-6 xl:mx-16 border-b border-gray-100" />
                    )}
                </div>
            ))}

            {/* WHY CHOOSE US + SOFTWARE STRIP — scroll reveal */}
            <ScrollReveal>
                <div className="bg-[#15202a] px-6 xl:px-16 py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Why Partner With Us</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Why Choose GEMAD</h2>

                                <div className="space-y-4">
                                    {[
                                        'Integrated Geology-Mining Solutions combining exploration, modelling, mine planning, and project development in one seamless workflow.',
                                        'SAMREC-Compliant Reporting — transparent, accurate mineral resource reporting adhering to industry-recognised standards and best practices.',
                                        'Experienced Technical Team of geologists, mining engineers, exploration specialists, and field professionals.',
                                        'Converting Resources into Bankable Mineral Assets — from early-stage exploration to technically sound, investment-ready assets.',
                                        'ISO-Certified Operational Standards — ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 group">
                                            <MdVerified size={18} className="text-[#764f24] mt-0.5 shrink-0 group-hover:text-[#c89a60] transition-colors duration-200" />
                                            <p className="text-white/65 text-sm leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Technical Software</p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Advanced Technical Software</h2>
                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                    GEMAD utilizes advanced industry software and technologies to enable accurate geological
                                    interpretation, resource modelling, mine planning, and project optimization.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {softwareTools.map((tool) => (
                                        <div
                                            key={tool.name}
                                            className="border border-[#764f24]/30 bg-white/5 p-5 hover:bg-[#764f24]/10 hover:border-[#764f24]/60 transition-all duration-300 rounded-lg"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <FaCheckCircle size={12} className="text-[#764f24] shrink-0" />
                                                <div className="text-white font-bold text-sm">{tool.name}</div>
                                            </div>
                                            <div className="text-white/45 text-xs pl-5">{tool.category}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border border-[#764f24]/30 bg-white/5 p-5 rounded-lg">
                                    <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-3">ISO Certified Standards</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'].map((iso) => (
                                            <span
                                                key={iso}
                                                className="px-3 py-1.5 bg-[#764f24]/20 border border-[#764f24]/40 text-[#c89a60] text-xs font-bold rounded-full"
                                            >
                                                {iso}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* OTHER PAGES REDIRECT STRIP — scroll reveal */}
            <ScrollReveal>
                <div className="bg-gray-50 px-6 xl:px-16 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-10">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Explore More</p>
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#15202a]">Explore Other Areas</h2>
                            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
                                Learn more about GEMAD's commodity focus, ESG commitment, and who we are.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { title: 'About Us', desc: 'Our story, vision, mission, and the values that drive everything we do.', path: '/about', label: 'Learn About Us' },
                                { title: 'Commodities', desc: 'Coal, rare earth elements, and critical minerals — our commodity portfolio.', path: '/commodities', label: 'View Commodities' },
                                { title: 'Social Responsibility', desc: 'Our ESG commitment, community development, and ISO certifications.', path: '/social-responsibility', label: 'Our ESG Approach' },
                                { title: 'Contact Us', desc: 'Ready to advance your mineral project? Get in touch with our team.', path: '/contact', label: 'Get In Touch' },
                            ].map((card) => (
                                <Link
                                    key={card.path}
                                    to={card.path}
                                    className="group bg-white border border-gray-100 hover:border-[#764f24]/40 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] to-[#c89a60] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />
                                    <h3 className="font-bold text-[#15202a] text-base mb-2 group-hover:text-[#764f24] transition-colors duration-200">{card.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.desc}</p>
                                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#764f24] group-hover:gap-2.5 transition-all duration-200">
                                        {card.label} <FaArrowRight size={11} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* GET IN TOUCH — scroll reveal */}
            <ScrollReveal>
                <GetInTouch />
            </ScrollReveal>

        </>
    )
}

export default Services