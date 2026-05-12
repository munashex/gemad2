import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenu, CgChevronDown } from 'react-icons/cg'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
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
        setIsMobileServicesOpen(false)
        setIsServicesOpen(false)
    }, [location.pathname])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Services',
            isDropdown: true,
            items: [
                { name: 'Geological Evaluation & Exploration', path: '/services#geological' },
                { name: 'Resource Modelling & Estimation', path: '/services#resource' },
                { name: 'Mineral Asset Development', path: '/services#asset' },
                { name: 'Project Evaluation & Advisory', path: '/services#advisory' },
            ]
        },
        { name: 'Commodities', path: '/commodities' },
        { name: 'Social Responsibility', path: '/social-responsibility' },
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

                        {/* Logo - reduced size */}
                        <Link to="/" className="shrink-0">
                            <img
                                src="images/logo/logo.png"
                                alt="GEMAD"
                                className="h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
                            />
                        </Link>

                        {/* Nav links - better spacing */}
                        <div className="flex items-center gap-2">
                            {navLinks.map((item) => {
                                if (item.isDropdown) {
                                    return (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <button className={`flex items-center gap-1 cursor-pointer text-base font-semibold py-2 px-4 transition-all duration-200 rounded-lg ${
                                                location.pathname === '/services'
                                                    ? 'text-[#764f24] bg-[#764f24]/5'
                                                    : 'text-gray-700 hover:text-[#764f24] hover:bg-gray-50'
                                            }`}>
                                                {item.name}
                                                <CgChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isServicesOpen && (
                                                <div className="absolute top-full left-0 pt-2 z-50 animate-fade-down">
                                                    <div className="w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                                                        <div className="h-0.5 bg-gradient-to-r from-[#764f24] to-[#c89a60]" />
                                                        <div className="py-2">
                                                            {item.items.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    to={sub.path}
                                                                    onClick={() => setIsServicesOpen(false)}
                                                                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#764f24]/5 hover:text-[#764f24] transition-colors duration-150 font-medium border-b border-gray-50 last:border-0"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                }

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`text-base font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${
                                            isActive(item.path)
                                                ? 'text-[#764f24] bg-[#764f24]/5'
                                                : 'text-gray-700 hover:text-[#764f24] hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* CTA - using brand color */}
                        <Link
                            to="/contact"
                            className="text-base font-semibold px-6 py-2.5 rounded-full bg-[#764f24] text-white hover:bg-[#a06a32] transition-all duration-300 hover:scale-105 shadow-md"
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
                            src="images/logo/logo.png"
                            alt="GEMAD"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    <button
                        onClick={() => setToggleNav(!toggleNav)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {toggleNav
                            ? <RiCloseFill size={28} className="text-gray-700" />
                            : <CgMenu size={28} className="text-gray-700" />
                        }
                    </button>
                </div>

                {/* Mobile menu - with animation */}
                <div 
                    className={`absolute left-0 right-0 bg-white border-b border-gray-100 z-40 transition-all duration-300 overflow-hidden ${
                        toggleNav ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((item) => {
                            if (item.isDropdown) {
                                return (
                                    <div key={item.name} className="space-y-1">
                                        <button
                                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            className="flex items-center justify-between w-full text-left px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                        >
                                            <span>{item.name}</span>
                                            <CgChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            isMobileServicesOpen ? 'max-h-96' : 'max-h-0'
                                        }`}>
                                            <div className="ml-4 border-l-2 border-[#764f24]/30 pl-4 space-y-1">
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => { setToggleNav(false); setIsMobileServicesOpen(false) }}
                                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#764f24] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            return (
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
                            )
                        })}

                        <Link
                            to="/contact"
                            onClick={() => setToggleNav(false)}
                            className="block text-center mt-4 px-4 py-3 text-base font-semibold rounded-full bg-[#764f24] text-white hover:bg-[#a06a32] transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar