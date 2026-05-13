import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import {
    GiCoalWagon,
    GiCrystalBall,
    GiMineWagon,
    GiMinerals,
} from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'
import HeroImage from '/images/commodities/commodities-hero.jpg'
import CriticalMineralsImg from '/images/commodities/critical-minerals.jpg'
import RareEarthImg from '/images/commodities/rare-earth.jpg'
import CoalImg from '/images/commodities/coal.jpg'
import BaseMetalsImg from '/images/commodities/base-metals.jpg'

const Commodities = () => {
    const commodities = [
        {
            icon: GiMineWagon,
            title: 'Critical Minerals',
            tag: 'Strategic Priority',
            image: CriticalMineralsImg,
            description: 'GEMAD focuses on critical minerals required for industrial growth, renewable energy technologies, and future global supply chains.',
        },
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
                HERO SECTION — premium
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
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                            <Link to="/" className="hover:text-[#c89a60] transition-colors duration-200">Home</Link>
                            <span>/</span>
                            <span className="text-[#c89a60]">Commodities</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 border-l-4 border-[#764f24] bg-[#764f24]/10 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[#764f24] animate-pulse" />
                            <span className="text-[#c89a60] text-xs font-semibold tracking-[0.2em] uppercase">
                                Our Mineral Portfolio
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c89a60] to-[#764f24]">Commodities</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                            GEMAD is focused on building a diversified portfolio of high-quality mineral assets,
                            spanning critical minerals, rare earth elements, coal, and base metals.
                        </p>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                STATS BAR — premium stats
            ══════════════════════════════════════ */}
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

            {/* ══════════════════════════════════════
                COMMODITIES GRID — premium cards
            ══════════════════════════════════════ */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {commodities.map((commodity, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white border border-gray-200 hover:border-[#764f24]/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                {/* Image Section with overlay */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={commodity.image}
                                        alt={commodity.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#c89a60] bg-[#15202a]/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#764f24]/40 shadow-md">
                                            {commodity.tag}
                                        </span>
                                    </div>
                                    {/* Icon overlay on image */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#764f24] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <commodity.icon size={22} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#15202a] mb-3 group-hover:text-[#764f24] transition-colors duration-300">
                                        {commodity.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {commodity.description}
                                    </p>

                                    {/* Base Metals Tags - only for Base Metals */}
                                    {commodity.title === 'Base Metals' && (
                                        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
                                            {baseMetalsList.map((metal, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[11px] font-medium text-[#764f24] bg-[#764f24]/8 px-3 py-1.5 rounded-full hover:bg-[#764f24] hover:text-white transition-all duration-300 cursor-default"
                                                >
                                                    {metal}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#764f24]/10 group-hover:border-[#764f24]/40 transition-all duration-300 rounded-br-2xl" />
                            </div>
                        ))}
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

            {/* ══════════════════════════════════════
                STRATEGIC VALUE SECTION — premium cards with gradients
            ══════════════════════════════════════ */}
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
                        {/* Card 1 */}
                        <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden">
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
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden">
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
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#764f24]/30 relative overflow-hidden">
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
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                CTA SECTION — premium
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
        </>
    )
}

export default Commodities