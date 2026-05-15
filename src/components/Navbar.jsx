import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
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

    return (
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
    )
}

export default Navbar