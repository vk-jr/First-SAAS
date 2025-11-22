import React, { useState } from 'react';
import templateStudio from '../assets/template-studio.png';
import templateLifestyle from '../assets/template-lifestyle.png';
import templateInstagram from '../assets/template-instagram.png';

const TemplateGallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const templates = [
        { id: 1, name: 'Studio Minimal', category: 'Fashion', image: templateStudio, uses: '12.4K' },
        { id: 2, name: 'Cozy Lifestyle', category: 'Home', image: templateLifestyle, uses: '8.2K' },
        { id: 3, name: 'Insta Pop', category: 'Beauty', image: templateInstagram, uses: '15.1K' },
        { id: 4, name: 'E-commerce Clean', category: 'Tech', image: templateStudio, uses: '9.8K' }, // Reusing studio image
        { id: 5, name: 'Summer Vibes', category: 'Fashion', image: templateLifestyle, uses: '5.6K' },
        { id: 6, name: 'Dark Mode', category: 'Tech', image: templateInstagram, uses: '3.2K' },
        { id: 7, name: 'Kitchen Scene', category: 'Food', image: templateLifestyle, uses: '4.1K' },
        { id: 8, name: 'Luxury', category: 'Jewelry', image: templateStudio, uses: '7.9K' },
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
