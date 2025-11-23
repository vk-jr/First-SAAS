import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'AI Background Removal',
            description: 'Instantly remove messy backgrounds and replace them with professional studio settings. Our advanced AI understands complex edges and transparent objects.',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop&q=80'
        },
        {
            title: 'Smart Model Generation',
            description: 'Showcase your products on diverse AI models without hiring talent. Choose from different ages, ethnicities, and styles to match your brand.',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop&q=80'
        },
        {
            title: 'One-Click Enhancement',
            description: 'Automatically adjust lighting, shadows, and color balance to make your products pop. Get magazine-quality results in seconds.',
            image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop&q=80'
        },
        {
            title: 'Batch Processing',
            description: 'Upload hundreds of photos at once and let our AI do the heavy lifting. Perfect for e-commerce catalogs and seasonal collections.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80'
        }
    ];

    return (
        <section id="features" style={{ padding: '120px 0', backgroundColor: 'var(--color-bg-dark)' }}>
            <div className="container">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            gap: '80px',
                            marginBottom: index === features.length - 1 ? 0 : '120px',
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
                                transition: 'transform 0.3s',
                                border: '1px solid var(--color-border)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(20%) contrast(110%)' }}
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h3 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '24px', color: 'var(--color-text-heading)', letterSpacing: '-1px' }}>{feature.title}</h3>
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
