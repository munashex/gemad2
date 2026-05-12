import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CgMenu, CgChevronDown } from 'react-icons/cg'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
    const location = useLocation()

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
        <div>

            {/* ── Desktop ── */}
            <div className="hidden lg:block">
                <div className="container mx-auto px-6 xl:px-16 py-3">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/" className="shrink-0">
                            <img
                                src="images/logo/logo.png"
                                alt="GEMAD"
                                className="h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
                            />
                        </Link>

                        {/* Nav links */}
                        <div className="flex items-center gap-1">
                            {navLinks.map((item) => {

                                if (item.isDropdown) {
                                    return (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <button className={`flex items-center gap-1 cursor-pointer text-base font-semibold py-2 px-3 transition-colors duration-200 ${
                                                location.pathname === '/services'
                                                    ? 'text-[#764f24]'
                                                    : 'text-gray-800 hover:text-[#764f24]'
                                            }`}>
                                                {item.name}
                                                <CgChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isServicesOpen && (
                                                <div className="absolute top-full left-0 pt-2 z-50 animate-fade-down">
                                                    <div className="w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                                                        <div className="h-0.75 bg-[#764f24]" />
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
                                        className={`text-base font-semibold py-2 px-3 transition-colors duration-200 ${
                                            isActive(item.path)
                                                ? 'text-[#764f24]'
                                                : 'text-gray-800 hover:text-[#764f24]'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="text-base font-semibold px-7 py-2.5 rounded-full bg-[#15202a] text-white hover:bg-[#764f24] transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Mobile ── */}
            <div className="lg:hidden">
                <div className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" onClick={() => setToggleNav(false)}>
                        <img
                            src="images/logo/logo.png"
                            alt="GEMAD"
                            className="h-20 w-auto object-contain"
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

                {/* Mobile menu */}
                {toggleNav && (
                    <div className="absolute left-0 right-0 bg-white  z-40 animate-fade-down">
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((item) => {

                                if (item.isDropdown) {
                                    return (
                                        <div key={item.name}>
                                            <button
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                className="flex items-center justify-between w-full text-left px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                            >
                                                <span>{item.name}</span>
                                                <CgChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isMobileServicesOpen && (
                                                <div className="ml-4 animate-fade-down border-l-2 border-[#764f24]/30 pl-4 space-y-1">
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
                                            )}
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
                                className="block text-center mt-2 px-4 py-3 text-base font-semibold rounded-full bg-[#15202a] text-white hover:bg-[#764f24] transition-all duration-300"
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