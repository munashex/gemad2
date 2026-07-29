import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Clients = () => {
    // Clients & Partners - 7 images (client1.png to client7.png)
    const clients = [
        { id: 2, name: 'Client 2', logo: '/images/clients/client2.png', alt: 'Client logo 2' },
        { id: 3, name: 'Client 3', logo: '/images/clients/client3.png', alt: 'Client logo 3' },
        { id: 4, name: 'Client 4', logo: '/images/clients/client4.png', alt: 'Client logo 4' },
        { id: 5, name: 'Client 5', logo: '/images/clients/client5.png', alt: 'Client logo 5' },
        { id: 6, name: 'Client 6', logo: '/images/clients/client6.png', alt: 'Client logo 6' },
        { id: 7, name: 'Client 7', logo: '/images/clients/client7.png', alt: 'Client logo 7' },
    ]

    // Professional Bodies & Affiliations - 6 images (bodies1.png to bodies6.png)
    const professionalBodies = [
        { id: 1, name: 'Professional Body 1', logo: '/images/clients/bodies1.png', alt: 'Professional body logo 1' },
        { id: 2, name: 'Professional Body 2', logo: '/images/clients/bodies2.png', alt: 'Professional body logo 2' },
        { id: 3, name: 'Professional Body 3', logo: '/images/clients/bodies3.png', alt: 'Professional body logo 3' },
        { id: 4, name: 'Professional Body 4', logo: '/images/clients/bodies4.png', alt: 'Professional body logo 4' },
        { id: 5, name: 'Professional Body 5', logo: '/images/clients/bodies5.png', alt: 'Professional body logo 5' },
        { id: 6, name: 'Professional Body 6', logo: '/images/clients/bodies6.png', alt: 'Professional body logo 6' },
    ]

    // Training & Development - 4 images (training1.png to training4.png)
    const training = [
        { id: 1, name: 'Training 1', logo: '/images/clients/training1.png', alt: 'Training logo 1' },
        { id: 2, name: 'Training 2', logo: '/images/clients/training2.png', alt: 'Training logo 2' },
        { id: 3, name: 'Training 3', logo: '/images/clients/training3.png', alt: 'Training logo 3' },
        { id: 4, name: 'Training 4', logo: '/images/clients/training4.png', alt: 'Training logo 4' },
         { id: 5, name: 'Training 5', logo: '/images/clients/training5.jpg', alt: 'Training logo 5' },
    ]
    

    // Simple fade in animation - runs ONCE when in view
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    const ScrollReveal = ({ children, delay = 0 }) => {
        const ref = useRef(null)
        const isInView = useInView(ref, { once: true, amount: 0.2 })
        const controls = useAnimation()

        useEffect(() => {
            if (isInView) {
                controls.start("visible")
            }
        }, [isInView, controls])

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                transition={{ delay }}
            >
                {children}
            </motion.div>
        )
    }

    const Section = ({ title, subtitle, items, cols = 6 }) => (
        <ScrollReveal>
            <div className="mb-16 lg:mb-20">
                {/* Header with brand colors - clean */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-10 h-[2px] bg-[#764f24]"></div>
                        <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                            {subtitle}
                        </p>
                        <div className="w-10 h-[2px] bg-[#764f24]"></div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#15202a]">{title}</h3>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-3 ${cols === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-4'} gap-4 lg:gap-6`}>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl p-4 lg:p-6 flex items-center justify-center border border-gray-100 hover:border-[#764f24]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <img
                                src={item.logo}
                                alt={item.alt}
                                className="max-w-full h-12 lg:h-16 w-auto object-contain hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    )

    return (
        <div className="bg-white py-16 lg:py-24">
            <div className="px-6 xl:px-16">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Main Header - clean */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-10 h-[2px] bg-[#764f24]"></div>
                            <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                Our Network
                            </p>
                            <div className="w-10 h-[2px] bg-[#764f24]"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#15202a] mb-3">
                            Partners & Affiliations
                        </h2>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                            GEMAD collaborates with industry-leading partners and maintains professional affiliations that strengthen our expertise.
                        </p>
                    </div>

                    {/* Clients & Partners */}
                    <Section title="Clients & Partners" subtitle="Trusted By" items={clients} cols={6} />

                    {/* Professional Bodies & Affiliations */}
                    <Section title="Professional Bodies & Affiliations" subtitle="Industry Recognition" items={professionalBodies} cols={6} />

                    {/* Training & Development */}
                    <Section title="Training & Development" subtitle="Continuous Learning" items={training} cols={4} />

                </div>
            </div>
        </div>
    )
}

export default Clients