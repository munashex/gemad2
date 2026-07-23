import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'
import { RiCloseFill } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setToggleNav(false)
    }, [location.pathname])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Commodities', path: '/commodities' },
        { name: 'Social', path: '/social-responsibility' },
        { name: 'Team', path: '/team' },
    ]

    const isActive = (path) => location.pathname === path

    const whatsappNumbers = [
        { number: '+27 72 027 0434', link: 'https://wa.me/27720270434' },
        { number: '+27 72 715 0780', link: 'https://wa.me/27727150780' },
    ]

    return (
        <>
            <div className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                    : 'bg-white'
            }`}>
                {/* ── Desktop ── */}
                <div className="hidden lg:block">
                    <div className="container mx-auto px-6 xl:px-16 py-2">
                        <div className="flex items-center justify-between">

                            {/* Logo */}
                            <Link to="/" className="shrink-0">
                                <img
                                    src="/images/logo/logo.png"
                                    alt="GEMAD"
                                    className="h-16 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
                                />
                            </Link>

                            {/* Nav links */}
                            <div className="flex items-center gap-1 xl:gap-2">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`text-sm xl:text-base font-semibold py-2 px-3 xl:px-4 rounded-lg transition-all duration-200 ${
                                            isActive(item.path)
                                                ? 'text-[#764f24] bg-[#764f24]/5'
                                                : 'text-gray-700 hover:text-[#764f24] hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="text-sm xl:text-base font-semibold px-5 xl:px-6 py-2 rounded-full bg-[#764f24] text-white hover:bg-[#a06a32] transition-all duration-300 hover:scale-105 shadow-md whitespace-nowrap"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Mobile ── */}
                <div className="lg:hidden">
                    <div className="px-4 py-2 flex items-center justify-between">
                        <Link to="/" onClick={() => setToggleNav(false)}>
                            <img
                                src="/images/logo/logo.png"
                                alt="GEMAD"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        <button
                            onClick={() => setToggleNav(!toggleNav)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {toggleNav ? (
                                <RiCloseFill size={28} className="text-gray-700" />
                            ) : (
                                <CgMenu size={28} className="text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {toggleNav && (
                        <div className="absolute left-0 right-0 bg-white shadow-lg z-40 border-t border-gray-100">
                            <div className="px-4 py-4 space-y-1">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setToggleNav(false)}
                                        className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors duration-200 ${
                                            isActive(item.path)
                                                ? 'text-[#764f24] bg-[#764f24]/5'
                                                : 'text-gray-800 hover:bg-gray-50 hover:text-[#764f24]'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <Link
                                    to="/contact"
                                    onClick={() => setToggleNav(false)}
                                    className="block text-center mt-4 px-4 py-3 text-base font-semibold rounded-full bg-[#764f24] text-white hover:bg-[#a06a32] transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── WhatsApp Floating Button (Real WhatsApp Colors) ── */}
            <button
                onClick={() => setShowWhatsAppModal(true)}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b85f] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </button>

            {/* ── WhatsApp Modal ── */}
            {showWhatsAppModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl animate-slide-up border-t-4 border-[#25D366]">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                                    <FaWhatsapp size={22} className="text-[#25D366]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#15202a]">Our WhatsApp Numbers</h3>
                                    <p className="text-xs text-gray-400">Click to start chatting</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowWhatsAppModal(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                                <IoClose size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* WhatsApp Numbers */}
                        <div className="space-y-3">
                            {whatsappNumbers.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors duration-300">
                                        <FaWhatsapp size={20} className="text-[#25D366] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-[#15202a]">WhatsApp</p>
                                        <p className="text-sm text-gray-500">{item.number}</p>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-300 group-hover:text-[#25D366] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <p className="text-center text-xs text-gray-400 mt-6">
                            We typically respond within a few minutes
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar