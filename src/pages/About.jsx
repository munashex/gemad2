import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import {
    TbTarget,
    TbEye,
    TbHeartHandshake,
    TbLeaf,
    TbUsers,
    TbBrain,
    TbTrendingUp,
    TbAward,
    TbWorld,
    TbCertificate,
    TbRocket,
} from 'react-icons/tb'
import HeroImage from '/images/about/about-hero.jpg'

const About = () => {
    // Core Values from PDF
    const coreValues = [
        {
            icon: TbBrain,
            title: 'Technical Excellence',
            description: 'We apply rigorous scientific and technical methodologies to deliver reliable, accurate, and high-quality geological evaluations, mineral resource assessments, and project development solutions.',
        },
        {
            icon: TbHeartHandshake,
            title: 'Integrity',
            description: 'We operate with transparency, professionalism, accountability, and ethical business practices in all our operations, partnerships, and stakeholder engagements.',
        },
        {
            icon: TbLeaf,
            title: 'Sustainability',
            description: 'We are committed to responsible mineral development that balances economic growth with environmental stewardship, social responsibility, and long-term resource sustainability.',
        },
        {
            icon: TbBrain,
            title: 'Innovation',
            description: 'We embrace advanced technologies, modern geological tools, and innovative solutions to improve exploration efficiency, resource modelling, and mineral asset development.',
        },
        {
            icon: TbTrendingUp,
            title: 'Profitability',
            description: 'We focus on developing economically viable mineral projects that create sustainable long-term value through strategic planning, operational efficiency, and disciplined project evaluation.',
        },
        {
            icon: TbUsers,
            title: 'Community Development',
            description: 'We believe mineral development should contribute positively to local communities through skills development, local employment, economic empowerment, and meaningful social investment initiatives.',
        },
    ]

    // Stats from PDF with icons
    const stats = [
        { value: '3', label: 'Core Commodity Areas', icon: TbWorld, color: 'from-blue-500/20 to-blue-600/10' },
        { value: '4', label: 'Specialist Service Lines', icon: TbCertificate, color: 'from-emerald-500/20 to-emerald-600/10' },
        { value: '3', label: 'ISO Certifications', icon: TbAward, color: 'from-amber-500/20 to-amber-600/10' },
        { value: '100', label: 'SAMREC-Compliant', icon: FaCheckCircle, suffix: '%', color: 'from-[#764f24]/30 to-[#c89a60]/20' },
    ]

    return (
        <>
            {/* ══════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════ */}
            <div className="relative w-full h-[45vh] min-h-[380px] lg:h-[55vh]">
                <img
                    src={HeroImage}
                    alt="About GEMAD"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15202a]/95 via-[#15202a]/75 to-[#15202a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15202a]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />

                <div className="relative h-full flex items-center px-6 xl:px-16">
                    <div className="max-w-3xl space-y-5">
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Link to="/" className="hover:text-[#c89a60] transition-colors duration-200">Home</Link>
                            <span>/</span>
                            <span className="text-[#c89a60]">About Us</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#764f24]/60 bg-[#764f24]/10 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                Who We Are
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            About <span className="text-[#c89a60]">GEMAD</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
                            Geological Evaluation and Mineral Assets Development — unlocking mineral value 
                            responsibly and sustainably across South Africa.
                        </p>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                ABOUT INTRO - MODERN DESIGN WITH BETTER STATS
            ══════════════════════════════════════ */}
            <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left - About Text */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-10 h-[2px] bg-[#764f24]" />
                                    <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                        About GEMAD
                                    </p>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] leading-tight">
                                    Geological Evaluation &amp;{' '}
                                    <span className="text-[#764f24]">Mineral Assets Development</span>
                                </h2>
                            </div>
                            
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p className="text-base">
                                    <span className="font-bold text-[#15202a]">GEMAD</span> — an abbreviation for Geological Evaluation and Mineral Assets Development —
                                    represents the full spectrum of technical and project development services required
                                    to unlock mineral value responsibly and sustainably.
                                </p>
                                <p className="text-base">
                                    Based in South Africa, <span className="font-bold text-[#15202a]">GEMAD</span> operates as both a technical authority and a mineral
                                    asset developer, specializing in the acquisition, evaluation, advancement, and
                                    development of strategic mineral assets.
                                </p>
                                <p className="text-base">
                                    Our mission is to identify underdeveloped or early-stage mineral opportunities and
                                    systematically progress them through exploration, resource modelling, technical
                                    evaluation, and development planning to create <span className="font-bold text-[#764f24]">bankable and economically sustainable
                                    mining projects</span>.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                            >
                                Partner With Us
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                          
                          {/* Right - Modern Stats Cards with slate background */}
<div>
    <div className="grid grid-cols-2 gap-5">
        {stats.map((stat, idx) => (
            <div
                key={idx}
                className={`group relative overflow-hidden bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100`}
            >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full" />
                <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-[#764f24] transition-all duration-300 shadow-sm">
                        <stat.icon size={22} className="text-[#764f24] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-1">
                        {stat.value}{stat.suffix || ''}
                    </div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                        {stat.label}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
                        
                       
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                VISION & MISSION
            ══════════════════════════════════════ */}
            <div className="bg-[#15202a] px-6 xl:px-16 py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                            <div className="w-10 h-[2px] bg-[#764f24]" />
                            <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                Our Direction
                            </p>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Vision &amp; Mission</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="group border border-[#764f24]/30 bg-white/5 p-8 hover:border-[#764f24]/60 hover:bg-[#764f24]/5 transition-all duration-300 rounded-xl overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#764f24]/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#764f24]/20 flex items-center justify-center group-hover:bg-[#764f24] transition-all duration-300">
                                        <TbEye size={24} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed">
                                    To become a leading African mineral assets development entity recognized for
                                    technical excellence, responsible resource development, and sustainable value creation.
                                </p>
                            </div>
                        </div>

                        <div className="group border border-[#764f24]/30 bg-white/5 p-8 hover:border-[#764f24]/60 hover:bg-[#764f24]/5 transition-all duration-300 rounded-xl overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#764f24]/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#764f24]/20 flex items-center justify-center group-hover:bg-[#764f24] transition-all duration-300">
                                        <TbTarget size={24} className="text-[#c89a60] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Our Mission</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed">
                                    To identify and develop high-potential mineral assets through innovative geological
                                    evaluation, disciplined project development, and responsible mining practices that
                                    create long-term value for stakeholders, investors, and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CORE VALUES
            ══════════════════════════════════════ */}
            <div className="bg-gray-50 px-6 xl:px-16 py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                            <div className="w-10 h-[2px] bg-[#764f24]" />
                            <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                What Drives Us
                            </p>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm">
                            Every decision, evaluation, and project is guided by principles that ensure
                            technical integrity and long-term value creation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, idx) => (
                            <div
                                key={idx}
                                className="group bg-white border-l-4 border-[#764f24] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-r-lg"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#15202a] to-[#1e2a35] text-white text-xs font-bold flex items-center justify-center shrink-0">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="font-bold text-[#15202a] text-sm">{value.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                WHY CHOOSE GEMAD + ISO
            ══════════════════════════════════════ */}
            <div className="bg-white px-6 xl:px-16 py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-[2px] bg-[#764f24]" />
                                <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                    Why Partner With Us
                                </p>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#15202a] mb-4">
                                Why Choose <span className="text-[#764f24]">GEMAD</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                We combine technical excellence with industry insight to deliver bankable mineral assets.
                                Our multidisciplinary team brings together geologists, mining engineers, and exploration 
                                specialists with practical expertise across the entire mining value chain.
                            </p>
                            
                            <div className="space-y-3">
                                {[
                                    'Integrated Geology-Mining Solutions combining exploration, modelling, mine planning, and project development in one seamless workflow.',
                                    'SAMREC-Compliant Reporting — transparent, accurate mineral resource reporting adhering to industry-recognised standards.',
                                    'Experienced Technical Team of geologists, mining engineers, exploration specialists, and field professionals.',
                                    'Converting Resources into Bankable Mineral Assets — from early-stage exploration to technically sound, investment-ready assets.',
                                    'ISO-Certified Operational Standards — ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <FaCheckCircle size={14} className="text-[#764f24] shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#764f24] hover:bg-[#a06a32] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
                            >
                                Partner With Us
                                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-[#15202a] to-[#1e2a35] rounded-xl p-8 shadow-2xl">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#764f24]/20 rounded-full mb-4">
                                    <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                                    <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                        ISO Certified
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">International Standards</h3>
                                <p className="text-white/50 text-xs">Globally recognized quality standards</p>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { code: 'ISO 9001:2015', name: 'Quality Management Systems' },
                                    { code: 'ISO 14001:2015', name: 'Environmental Management Systems' },
                                    { code: 'ISO 45001:2018', name: 'Occupational Health & Safety' },
                                ].map((iso, i) => (
                                    <div key={i} className="group border border-[#764f24]/30 bg-white/5 p-4 hover:bg-[#764f24]/10 hover:border-[#764f24]/60 transition-all duration-300 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-[#c89a60] text-sm">{iso.code}</div>
                                                <div className="text-white/40 text-xs mt-1">{iso.name}</div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-[#764f24]/20 flex items-center justify-center group-hover:bg-[#764f24] transition-all duration-300">
                                                <TbAward size={14} className="text-[#c89a60] group-hover:text-white" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CTA SECTION
            ══════════════════════════════════════ */}
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
                        <div className="inline-flex items-center gap-2">
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
        </>
    )
}

export default About