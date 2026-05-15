import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Commodities', path: '/commodities' },
        { name: 'Social Responsibility', path: '/social-responsibility' },
        { name: 'Contact', path: '/contact' },
        { name: 'Team', path: '/team' },
    ]

    const servicesLinks = [
        { name: 'Geological Evaluation & Exploration', path: '/services' },
        { name: 'Resource Modelling & Estimation', path: '/services' },
        { name: 'Mineral Asset Development', path: '/services' },
        { name: 'Project Evaluation & Advisory', path: '/services' },
    ]

    const contactInfo = {
        address: 'Office No.15, Mareu Buildings, No.5 Samuel Road, Delmas, 2210, South Africa',
        phone1: '072 027 0434',
        phone2: '072 715 0780',
        email: 'info@gemad.co.za',
        website: 'www.gemad.co.za'
    }

    const businessHours = [
        'Monday - Thursday: 8:00 AM - 5:00 PM',
        'Friday: 8:00 AM - 4:00 PM',
        'Saturday - Sunday: Closed',
    ]

    return (
        <footer className="bg-[#15202a] mt-20 lg:mt-28">
            {/* Top accent line */}
            <div className="h-[2px] bg-gradient-to-r from-[#764f24] via-[#c89a60]/50 to-transparent" />

            <div className="px-6 xl:px-16 py-12 lg:py-16">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-bold text-white/80 mb-5 tracking-wider">QUICK LINKS</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-white/60 text-sm hover:text-[#c89a60] transition-all duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-sm font-bold text-white/80 mb-5 tracking-wider">OUR SERVICES</h3>
                            <ul className="space-y-2">
                                {servicesLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-white/60 text-sm hover:text-[#c89a60] transition-all duration-200 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-sm font-bold text-white/80 mb-5 tracking-wider">CONTACT US</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <FaMapMarkerAlt size={14} className="text-[#c89a60] mt-0.5 shrink-0" />
                                    <span className="text-white/60 text-xs leading-relaxed">{contactInfo.address}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhone size={14} className="text-[#c89a60] shrink-0" />
                                    <div>
                                        <a href={`tel:${contactInfo.phone1.replace(/\s/g, '')}`} className="text-white/60 text-sm hover:text-[#c89a60] transition-colors duration-200 block">
                                            {contactInfo.phone1}
                                        </a>
                                        <a href={`tel:${contactInfo.phone2.replace(/\s/g, '')}`} className="text-white/60 text-sm hover:text-[#c89a60] transition-colors duration-200 block">
                                            {contactInfo.phone2}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope size={14} className="text-[#c89a60] shrink-0" />
                                    <a href={`mailto:${contactInfo.email}`} className="text-white/60 text-sm hover:text-[#c89a60] transition-colors duration-200 break-all">
                                        {contactInfo.email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <TbWorld size={14} className="text-[#c89a60] shrink-0" />
                                    <span className="text-white/60 text-sm">{contactInfo.website}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Business Hours & Social */}
                        <div>
                            <h3 className="text-sm font-bold text-white/80 mb-5 tracking-wider">OFFICE HOURS</h3>
                            <ul className="space-y-2 mb-6">
                                {businessHours.map((hour, idx) => (
                                    <li key={idx} className="text-white/60 text-xs">{hour}</li>
                                ))}
                            </ul>
                            
                            {/* LinkedIn Only */}
                            <div className="pt-4 border-t border-white/10">
                                <a
                                    href="https://www.linkedin.com/company/g-e-m-a-d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#764f24] rounded-lg transition-all duration-300 group"
                                >
                                    <FaLinkedin size={16} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                                    <span className="text-white/60 text-xs group-hover:text-white transition-colors duration-300">Follow us on LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar - Copyright only */}
                    <div className="border-t border-white/10 mt-10 pt-6">
                        <div className="text-center">
                            <p className="text-white/40 text-xs">
                                © {currentYear} GEMAD. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer