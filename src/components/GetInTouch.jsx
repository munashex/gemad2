import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const GetInTouch = () => {
    return (
        <div className="relative bg-[#15202a] overflow-hidden">
            {/* Top bronze accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#764f24] via-[#c89a60] to-transparent" />

            {/* Subtle diagonal pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #764f24 0, #764f24 2px, transparent 0, transparent 50%)`,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="px-6 xl:px-16 py-20 lg:py-28 relative">
                <div className="max-w-3xl mx-auto text-center space-y-6">

                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-10 h-[2px] bg-[#764f24]" />
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                            Get In Touch
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

                    {/* Buttons */}
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

                    {/* Contact info row */}
                    <div className="pt-6 flex flex-wrap justify-center gap-6 text-white/45 text-sm">
                        <a
                            href="mailto:info@gemad.co.za"
                            className="hover:text-[#c89a60] transition-colors duration-200 inline-flex items-center gap-2"
                        >
                            <HiOutlineMail size={16} />
                            info@gemad.co.za
                        </a>
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
    )
}

export default GetInTouch