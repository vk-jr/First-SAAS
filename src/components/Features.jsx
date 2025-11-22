import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'AI Background Removal',
            description: 'Instantly remove messy backgrounds and replace them with professional studio settings. Our advanced AI understands complex edges and transparent objects.',
            icon: '✂️',
            image: 'https://placehold.co/600x400/F3F4F6/7C3AED?text=Background+Removal'
        },
        {
            title: 'Smart Model Generation',
            description: 'Showcase your products on diverse AI models without hiring talent. Choose from different ages, ethnicities, and styles to match your brand.',
            icon: '👥',
            image: 'https://placehold.co/600x400/F3F4F6/EC4899?text=AI+Models'
        },
        {
            title: 'One-Click Enhancement',
            description: 'Automatically adjust lighting, shadows, and color balance to make your products pop. Get magazine-quality results in seconds.',
            icon: '⚡',
            image: 'https://placehold.co/600x400/F3F4F6/3B82F6?text=Enhancement'
        },
        {
            title: 'Batch Processing',
            description: 'Upload hundreds of photos at once and let our AI do the heavy lifting. Perfect for e-commerce catalogs and seasonal collections.',
            icon: '🚀',
            image: 'https://placehold.co/600x400/F3F4F6/10B981?text=Batch+Processing'
        }
    ];

    return (
        <section id="features" style={{ padding: '100px 0', backgroundColor: 'white' }}>
            <div className="container">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            gap: '80px',
                            marginBottom: index === features.length - 1 ? 0 : '100px',
                            flexWrap: 'wrap'
                        }}
                    >
                        {/* Image Side */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-soft)',
                                transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'var(--bg-subtle)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '32px',
                                marginBottom: '24px',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '16px' }}>{feature.title}</h3>
                            <p style={{ fontSize: '18px', color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '32px' }}>
                                {feature.description}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                                {['High resolution output', 'Commercial usage rights', 'Instant download'].map((item) => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--color-text-heading)', fontWeight: '500' }}>
                                        <span style={{ color: 'var(--color-success)', fontSize: '18px' }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#" style={{ color: 'var(--color-primary-start)', fontWeight: '600', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                Learn more <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
