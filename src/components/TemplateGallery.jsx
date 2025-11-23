import React, { useState } from 'react';

const TemplateGallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const templates = [
        {
            id: 1,
            name: 'Studio Minimal',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=350&h=400&fit=crop',
            uses: '12.4K',
            description: 'Clean white studio backdrop'
        },
        {
            id: 2,
            name: 'Cozy Lifestyle',
            category: 'Home',
            image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=350&h=400&fit=crop',
            uses: '8.2K',
            description: 'Warm home setting'
        },
        {
            id: 3,
            name: 'Insta Pop',
            category: 'Beauty',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=350&h=400&fit=crop',
            uses: '15.1K',
            description: 'Vibrant social media style'
        },
        {
            id: 4,
            name: 'E-commerce Clean',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=350&h=400&fit=crop',
            uses: '9.8K',
            description: 'Professional product shot'
        },
        {
            id: 5,
            name: 'Summer Vibes',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=350&h=400&fit=crop',
            uses: '5.6K',
            description: 'Outdoorsy casual aesthetic'
        },
        {
            id: 6,
            name: 'Dark Mode',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=350&h=400&fit=crop',
            uses: '3.2K',
            description: 'Sleek dark background'
        },
        {
            id: 7,
            name: 'Kitchen Scene',
            category: 'Food',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=350&h=400&fit=crop',
            uses: '4.1K',
            description: 'Rustic cafe atmosphere'
        },
        {
            id: 8,
            name: 'Luxury',
            category: 'Jewelry',
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=350&h=400&fit=crop',
            uses: '7.9K',
            description: 'Premium elegant setting'
        },
        {
            id: 9,
            name: 'Urban Street',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=350&h=400&fit=crop',
            uses: '6.3K',
            description: 'Streetwear aesthetic'
        },
        {
            id: 10,
            name: 'Botanical',
            category: 'Beauty',
            image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=350&h=400&fit=crop',
            uses: '5.2K',
            description: 'Natural organic feel'
        },
        {
            id: 11,
            name: 'Minimalist Desk',
            category: 'Tech',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=350&h=400&fit=crop',
            uses: '4.7K',
            description: 'Modern workspace vibe'
        },
        {
            id: 12,
            name: 'Artisan',
            category: 'Food',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=350&h=400&fit=crop',
            uses: '3.8K',
            description: 'Handcrafted aesthetic'
        },
    ];

    const filters = ['All', 'Fashion', 'Beauty', 'Tech', 'Food', 'Jewelry', 'Home'];

    const filteredTemplates = activeFilter === 'All'
        ? templates
        : templates.filter(t => t.category === activeFilter);

    return (
        <section id="gallery" style={{ padding: '100px 0', backgroundColor: '#F9FAFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '16px' }}>Choose Your Style</h2>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-body)', marginBottom: '40px' }}>
                        AI-generated backgrounds and scenes for any product
                    </p>

                    {/* Filters */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    padding: '8px 24px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    backgroundColor: activeFilter === filter ? 'var(--color-primary-start)' : 'white',
                                    color: activeFilter === filter ? 'white' : 'var(--color-text-body)',
                                    border: activeFilter === filter ? 'none' : '1px solid #E5E7EB',
                                    transition: 'all 0.2s',
                                    boxShadow: activeFilter === filter ? '0 4px 12px rgba(124, 58, 237, 0.2)' : 'none'
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {filteredTemplates.map(template => (
                        <div
                            key={template.id}
                            className="template-card"
                            style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                aspectRatio: '350/400',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s, box-shadow 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                            }}
                        >
                            <img
                                src={template.image}
                                alt={template.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Gradient Overlay (Always visible at bottom) */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '50%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '20px',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px', color: 'white' }}>{template.name}</h3>
                                <p style={{ fontSize: '11px', opacity: 0.9, marginBottom: '4px' }}>{template.description}</p>
                                <p style={{ fontSize: '12px', opacity: 0.8 }}>Used {template.uses} times</p>
                            </div>

                            {/* Hover Overlay (Button) */}
                            <div
                                className="overlay"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s'
                                }}
                            >
                                <button style={{
                                    background: 'white',
                                    color: 'var(--color-text-heading)',
                                    padding: '12px 24px',
                                    borderRadius: '24px',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    transform: 'translateY(0)',
                                    transition: 'transform 0.2s'
                                }}>
                                    Use Template
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <button style={{
                        color: 'var(--color-primary-start)',
                        fontWeight: '600',
                        fontSize: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        View All Templates <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TemplateGallery;
