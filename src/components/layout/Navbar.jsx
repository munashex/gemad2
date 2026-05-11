import { CgMenu, CgChevronDown } from "react-icons/cg";
import { Link } from 'react-router-dom'; 
import { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    

    const handleNav = () => setToggleNav(!toggleNav);
    
    const navLinks = [ 
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { 
            name: "Services", 
            isDropdown: true,
            items: [
                { name: "Geological Evaluation & Exploration", path: "/services#geological-evaluation" },
                { name: "Resource Modelling & Estimation", path: "/services#resource-modelling" },
                { name: "Mineral Asset Development", path: "/services#mineral-development" },
                { name: "Project Evaluation & Advisory", path: "/services#project-advisory" }
            ]
        },
        { name: "Commodities", path: "/commodities" },
        { name: "Social Responsibility", path: "/social-responsibility" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div>
            {/* Large Screen Navbar */}
            <div className="hidden lg:block ">
                <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-3 lg:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="shrink-0">
                            <img 
                                src="/images/logo/logo.png" 
                                alt="GEMAD - Geological Evaluation & Mineral Assets Development" 
                                className="w-44 lg:w-52 xl:w-56 hover:opacity-90 transition-opacity duration-200"
                            /> 
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                            {navLinks.map((item) => {
                                if (item.isDropdown) {
                                    return (
                                        <div 
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <button className="flex items-center space-x-1 text-base lg:text-lg font-semibold text-primary hover:text-accent transition-colors duration-200 py-2">
                                                <span>{item.name}</span>
                                                <CgChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Dropdown Menu */}
                                            {isServicesOpen && (
                                                <div className="absolute top-full left-0 pt-2 z-50">
                                                    <div className="w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in">
                                                        {item.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className="block px-6 py-3 text-sm text-primary hover:bg-accent/10 hover:text-accent transition-colors duration-200 font-medium"
                                                                onClick={() => setIsServicesOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`text-base lg:text-lg font-semibold py-2 transition-all duration-300 ${
                                            item.name === 'Contact' 
                                                ? 'bg-accent !text-white px-4 lg:px-6 py-2 rounded-md hover:bg-primary hover:!text-white hover:scale-105'
                                                : 'text-primary hover:text-accent'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden">
                <div className="px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" onClick={() => setToggleNav(false)}>
                        <img 
                            src="/images/logo/logo.png" 
                            alt="GEMAD - Geological Evaluation & Mineral Assets Development" 
                            className="w-48"
                        />
                    </Link>

                    {/* Menu Button */}
                    <button 
                        onClick={handleNav}
                        className="p-2 rounded-lg transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {toggleNav ? (
                            <RiCloseFill size={28} className="text-primary" />
                        ) : (
                            <CgMenu size={28} className="text-primary" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {toggleNav && (
                    <div className="absolute left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40 animate-slide-down">
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((item) => {
                                if (item.isDropdown) {
                                    return (
                                        <div key={item.name} className="space-y-1">
                                            <button
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                className="flex items-center justify-between w-full text-left px-4 py-3 text-lg font-semibold text-primary rounded-lg transition-colors duration-200"
                                            >
                                                <span>{item.name}</span>
                                                <CgChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Mobile Dropdown */}
                                            {isMobileServicesOpen && (
                                                <div className="ml-4 space-y-1 border-l border-accent/30 pl-4">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.path}
                                                            onClick={() => {
                                                                setToggleNav(false);
                                                                setIsMobileServicesOpen(false);
                                                            }}
                                                            className="block px-4 py-3 text-sm text-primary hover:text-accent rounded-lg transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setToggleNav(false)}
                                        className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                                            item.name === 'Contact'
                                                ? 'bg-accent !text-white hover:bg-primary hover:!text-white text-center'
                                                : 'text-primary hover:text-accent'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;