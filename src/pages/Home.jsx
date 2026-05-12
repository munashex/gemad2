import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import {
    GiCoalWagon,
    GiCrystalBall,
    GiMineWagon,
} from 'react-icons/gi'
import {
    TbMicroscope,
    TbChartLine,
    TbBuildingFactory2,
    TbReportAnalytics,
} from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import HeroImage from '/images/home/geological.avif'
import AboutImage from '/images/home/geological1.avif'

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

const commodities = [
    {
        Icon: GiCoalWagon,
        title: 'Coal',
        tag: 'Energy Resource',
        desc: 'GEMAD is actively involved in the evaluation and development of coal assets with strong geological and economic potential.',
    },
    {
        Icon: GiCrystalBall,
        title: 'Rare Earth Elements',
        tag: 'Future Technologies',
        desc: 'The company is positioning itself within the growing rare earth sector by targeting strategic projects essential for future technologies and the global energy transition.',
    },
    {
        Icon: GiMineWagon,
        title: 'Critical Minerals',
        tag: 'Industrial Growth',
        desc: 'GEMAD focuses on critical minerals required for industrial growth, renewable energy technologies, and future global supply chains.',
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

/* ─── HOME PAGE ─── */

const Home = () => {
    return (
        <>

            {/* ══════════════════════════════════════
                1. HERO — FIXED FOR MOBILE (text inside image)
            ══════════════════════════════════════ */}
            <div className="relative w-full h-[92vh] min-h-[600px] overflow-hidden">
                <img
                    src={HeroImage}
                    alt="Geological exploration and mineral asset development"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/72 to-[#15202a]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#a06a32] to-transparent" />

                {/* Fixed: Added proper padding and max-width constraints for mobile */}
                <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-20">
                    <div className="w-full max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-6">
                        
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-[#764f24]/60 bg-[#764f24]/10 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                                South African Mineral Asset Development
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                            From Discovery to{' '}
                            <span className="text-[#c89a60]">Bankable</span>{' '}
                            Mineral Assets
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                            GEMAD is a South African mineral asset development entity focused on identifying,
                            evaluating, and advancing high-potential mineral projects into economically viable
                            mining operations.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                            From geological evaluation and exploration to resource definition and development
                            planning, we transform mineral opportunities into investment-ready assets.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#764f24] hover:bg-[#a06a32] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group text-sm sm:text-base"
                            >
                                <span>Explore Our Services</span>
                                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 group text-sm sm:text-base"
                            >
                                <span>View Our Projects</span>
                                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 group text-sm sm:text-base"
                            >
                                <span>Contact Us</span>
                                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                2. ABOUT STRIP
            ══════════════════════════════════════ */}
            <div className="bg-[#15202a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">About GEMAD</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                            Geological Evaluation &amp;{' '}
                            <span className="text-[#c89a60]">Mineral Assets Development</span>
                        </h2>
                        <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                            GEMAD — an abbreviation for Geological Evaluation and Mineral Assets Development —
                            represents the full spectrum of technical and project development services required
                            to unlock mineral value responsibly and sustainably.
                        </p>
                        <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                            Based in South Africa, GEMAD operates as both a technical authority and a mineral
                            asset developer, specializing in the acquisition, evaluation, advancement, and
                            development of strategic mineral assets.
                        </p>
                        <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                            Our mission is to identify underdeveloped or early-stage mineral opportunities and
                            systematically progress them through exploration, resource modelling, technical
                            evaluation, and development planning to create bankable and economically sustainable
                            mining projects.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            {[
                                { num: '3', label: 'Core Commodity Areas' },
                                { num: '4', label: 'Specialist Service Lines' },
                                { num: '3', label: 'ISO Certifications' },
                                { num: '100%', label: 'SAMREC-Compliant' },
                            ].map((s) => (
                                <div key={s.label} className="border border-[#764f24]/30 bg-white/5 p-3 sm:p-4 hover:bg-[#764f24]/10 hover:border-[#764f24]/60 transition-all duration-300">
                                    <div className="text-xl sm:text-2xl font-bold text-[#c89a60] mb-1">{s.num}</div>
                                    <div className="text-white/50 text-xs leading-snug">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 text-[#c89a60] font-semibold hover:gap-3 transition-all duration-200 group text-sm pt-1"
                        >
                            Learn More About Us
                            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative overflow-hidden">
                            <img
                                src={AboutImage}
                                alt="GEMAD geological fieldwork"
                                className="w-full h-[300px] sm:h-[420px] object-cover object-center"
                            />
                            <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-l-4 border-[#764f24]" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-[#764f24]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/50 to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#764f24] px-4 py-3 sm:px-5 sm:py-4 shadow-xl">
                            <div className="text-white text-xl sm:text-2xl font-bold leading-none">GEMAD</div>
                            <div className="text-white/80 text-[10px] sm:text-xs tracking-widest uppercase mt-1">Mineral Assets</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                3. SERVICES
            ══════════════════════════════════════ */}
            <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">What We Do</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm sm:text-base">
                            GEMAD provides the full spectrum of technical and project development services
                            required to unlock mineral value responsibly and sustainably.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((s, i) => (
                            <Link
                                to={s.link}
                                key={i}
                                className="group bg-white border-l-4 border-[#764f24] p-5 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#15202a] flex items-center justify-center shrink-0 group-hover:bg-[#764f24] transition-colors duration-300">
                                            <s.Icon size={20} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#15202a] group-hover:text-[#764f24] transition-colors duration-200 leading-snug">
                                            {s.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{s.description}</p>
                                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#764f24] group-hover:gap-2 transition-all duration-200">
                                        Learn more <FaArrowRight size={11} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-10 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md group text-sm sm:text-base"
                        >
                            View All Services
                            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                4. COMMODITIES
            ══════════════════════════════════════ */}
            <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Commodity Focus</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Commodity Portfolio</h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm sm:text-base">
                            GEMAD is focused on building a diversified portfolio of high-quality mineral assets,
                            particularly in coal, rare earth elements, and critical minerals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                        {commodities.map((c, i) => (
                            <Link
                                to="/commodities"
                                key={i}
                                className="group bg-white border border-gray-100 hover:border-[#764f24]/40 p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#764f24] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#15202a] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#764f24] transition-colors duration-300 shadow-lg">
                                    <c.Icon size={26} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#764f24] bg-[#764f24]/8 px-2 sm:px-3 py-1 mb-3">
                                    {c.tag}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-[#15202a] mb-3 group-hover:text-[#764f24] transition-colors duration-200">
                                    {c.title}
                                </h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">{c.desc}</p>
                                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#764f24] group-hover:gap-3 transition-all duration-200">
                                    View Details <FaArrowRight size={12} />
                                </div>
                                <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#764f24]/20 group-hover:border-[#764f24]/60 transition-colors duration-300" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-10 text-center">
                        <Link
                            to="/commodities"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md group text-sm sm:text-base"
                        >
                            View All Commodities
                            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                5. VISION & MISSION
            ══════════════════════════════════════ */}
            <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#15202a]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Who We Are</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Vision &amp; Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        <div className="border border-[#764f24]/30 bg-white/5 p-6 sm:p-8 hover:border-[#764f24]/60 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-1 h-8 sm:h-10 bg-[#764f24]" />
                                <h3 className="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
                            </div>
                            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                                To become a leading African mineral assets development entity recognized for
                                technical excellence, responsible resource development, and sustainable value creation.
                            </p>
                        </div>

                        <div className="border border-[#764f24]/30 bg-white/5 p-6 sm:p-8 hover:border-[#764f24]/60 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-1 h-8 sm:h-10 bg-[#764f24]" />
                                <h3 className="text-lg sm:text-xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                                To identify and develop high-potential mineral assets through innovative geological
                                evaluation, disciplined project development, and responsible mining practices that
                                create long-term value for stakeholders, investors, and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                6. CORE VALUES
            ══════════════════════════════════════ */}
            <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 sm:mb-12">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">What Drives Us</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm sm:text-base">
                            Every decision, evaluation, and project is guided by principles that ensure
                            technical integrity and long-term value creation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {coreValues.map((v) => (
                            <div
                                key={v.num}
                                className="bg-white border-l-4 border-[#764f24] p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#15202a] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                        {v.num}
                                    </div>
                                    <h3 className="font-bold text-[#15202a] text-xs sm:text-sm">{v.title}</h3>
                                </div>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                7. WHY CHOOSE GEMAD
            ══════════════════════════════════════ */}
            <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#15202a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 border border-[#764f24]/8 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 border border-[#764f24]/8 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="max-w-6xl mx-auto relative">
                    <div className="mb-10 sm:mb-12 lg:flex lg:items-end lg:justify-between">
                        <div>
                            <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Why Partner With Us</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Why Choose GEMAD</h2>
                        </div>
                        <Link
                            to="/about"
                            className="mt-5 lg:mt-0 inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 border border-[#764f24] text-[#c89a60] hover:bg-[#764f24] hover:text-white font-semibold rounded-full transition-all duration-300 group text-xs sm:text-sm"
                        >
                            About Us <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {whyUs.map((w, i) => (
                            <div
                                key={i}
                                className="group border border-white/10 bg-white/5 p-5 sm:p-6 hover:bg-[#764f24]/10 hover:border-[#764f24]/40 transition-all duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <MdVerified size={16} className="text-[#764f24] mt-0.5 shrink-0 group-hover:text-[#c89a60] transition-colors duration-200" />
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-xs sm:text-sm">{w.label}</h4>
                                        <p className="text-white/55 text-xs sm:text-sm leading-relaxed">{w.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                8. ESG STRIP
            ══════════════════════════════════════ */}
            <div className="py-12 sm:py-14 px-4 sm:px-6 lg:px-20 bg-[#764f24]/8 border-y border-[#764f24]/20">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                    <div className="max-w-xl text-center lg:text-left">
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase mb-3">ESG Commitment</p>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#15202a] mb-3">
                            Environmental, Social &amp; Governance
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                            At GEMAD, Environmental, Social, and Governance (ESG) principles form an integral
                            part of our mineral asset development strategy. We are committed to conducting our
                            operations responsibly, ethically, and sustainably while creating long-term value
                            for stakeholders, communities, and the environment.
                        </p>
                    </div>
                    <Link
                        to="/social-responsibility"
                        className="shrink-0 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#15202a] hover:bg-[#764f24] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-md group text-xs sm:text-sm"
                    >
                        Our ESG Approach
                        <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>


            {/* ══════════════════════════════════════
                9. CONTACT CTA — FIXED EMAIL ICON SIZE
            ══════════════════════════════════════ */}
            <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-[#15202a] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] via-[#a06a32] to-transparent" />
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 1px, transparent 0, transparent 50%)`,
                        backgroundSize: '24px 24px',
                    }}
                />

                <div className="relative max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Ready to Advance Your{' '}
                        <span className="text-[#c89a60]">Mineral Project?</span>
                    </h2>
                    <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-4">
                        Let's discuss how GEMAD can help you transform your mineral opportunity into a
                        bankable, investment-ready asset. Our team is ready to support your project
                        from discovery through to development.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-2">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group text-sm sm:text-base"
                        >
                            Contact Us Today
                            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 group text-sm sm:text-base"
                        >
                            View Our Services
                            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                    
                    {/* FIXED: Email icon now same size as website icon using HiOutlineMail */}
                    <div className="pt-4 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/45 text-xs sm:text-sm">
                        <a 
                            href="mailto:info@gemad.co.za" 
                            className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-1.5"
                        >
                            <HiOutlineMail size={16} className="sm:size-[18px]" />
                            info@gemad.co.za
                        </a>
                        <span className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-1.5">
                            🌍 www.gemad.co.za
                        </span>
                        <span className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-1.5">
                            📍 South Africa
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home