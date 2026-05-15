import { useState, useEffect, useRef } from 'react'

const Clients = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const clients = [
        { id: 1, name: 'Client 1', logo: '/images/clients/client1.png', alt: 'Client logo 1' },
        { id: 2, name: 'Client 2', logo: '/images/clients/client2.png', alt: 'Client logo 2' },
        { id: 3, name: 'Client 3', logo: '/images/clients/client3.png', alt: 'Client logo 3' },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-slate-50 py-16 lg:py-20">
            <div className="px-6 xl:px-16">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="text-center mb-10 lg:mb-12">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-10 h-[2px] bg-[#764f24]"></div>
                            <p className="text-[#764f24] text-xs font-semibold tracking-[0.25em] uppercase">
                                Trusted By Industry Leaders
                            </p>
                            <div className="w-10 h-[2px] bg-[#764f24]"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#15202a] mb-3">
                            Our Valued Clients
                        </h2>
                    </div>

                    {/* Clients Grid */}
                    <div 
                        ref={sectionRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {clients.map((client, index) => (
                            <div
                                key={client.id}
                                className={`group bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 hover:border-[#764f24]/30 hover:shadow-lg transition-all duration-500 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.alt}
                                    className="max-w-full h-20 lg:h-24 w-auto object-contain  group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients