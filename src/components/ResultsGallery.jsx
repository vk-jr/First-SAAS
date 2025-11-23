import React from 'react';
import { useNavigate } from 'react-router-dom';
import watchBefore from '../assets/gallery-watch-before.png';
import watchAfter from '../assets/gallery-watch-after.png';
import headphonesBefore from '../assets/gallery-headphones-before.png';
import headphonesAfter from '../assets/gallery-headphones-after.png';
import coffeeBefore from '../assets/gallery-coffee-before.png';
import coffeeAfter from '../assets/gallery-coffee-after.png';

const ResultsGallery = () => {
    const navigate = useNavigate();

    // Real examples with generated and curated images
    const allItems = [
        {
            id: 1,
            height: 450,
            category: 'Fashion',
            prompt: 'Luxury marble background',
            before: watchBefore,
            after: watchAfter
        },
        {
            id: 2,
            height: 500,
            category: 'Tech',
            prompt: 'Futuristic neon setup',
            before: headphonesBefore,
            after: headphonesAfter
        },
        {
            id: 3,
            height: 400,
            category: 'Food',
            prompt: 'Cozy cafe atmosphere',
            before: coffeeBefore,
            after: coffeeAfter
        },
        {
            id: 4,
            height: 450,
            category: 'Beauty',
            prompt: 'Pink aesthetic scene',
            before: 'https://images.unsplash.com/photo-1571380401583-72ca84994796?w=400&h=450&fit=crop',
            after: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=450&fit=crop'
        },
        {
            id: 5,
            height: 480,
            category: 'Fashion',
            prompt: 'Urban street style',
            before: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=480&fit=crop',
            after: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=480&fit=crop'
        },
        {
            id: 6,
            height: 420,
            category: 'Tech',
            prompt: 'Minimalist workspace',
            before: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=420&fit=crop',
            after: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=420&fit=crop'
        },
        {
            id: 7,
            height: 460,
            category: 'Food',
            prompt: 'Rustic kitchen scene',
            before: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=460&fit=crop',
            after: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=460&fit=crop'
        },
        {
            id: 8,
            height: 440,
            category: 'Jewelry',
            prompt: 'Elegant luxury setting',
            before: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=440&fit=crop',
            after: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=440&fit=crop'
        },
        {
            id: 9,
            height: 470,
            category: 'Home',
            prompt: 'Cozy home decor',
            before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=470&fit=crop',
            after: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=470&fit=crop'
        }
    ];

    // Show only first 3 items for the home page preview
    const items = allItems.slice(0, 3);

    return (
        <section id="results-gallery" style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-heading)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-text-heading)' }}>See The Magic</h2>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-body)' }}>AI-powered transformations from simple prompts</p>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-body)', marginTop: '8px' }}>
                        Each transformation created with just a few words
                    </p>
                </div>

                <div style={{
                    columnCount: 3,
                    columnGap: '24px'
                }}>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                breakInside: 'avoid',
                                marginBottom: '24px',
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '2px solid var(--color-border)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            className="result-card"
                        >
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                marginBottom: '20px',
                                boxShadow: 'var(--shadow-soft)',
                                border: '1px solid var(--color-border)'
                            }}>
                                {/* Image container */}
                                <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                                    {/* After Image */}
                                    <img
                                        src={item.after}
                                        alt={`Generated ${item.category}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    />

                                    {/* Before Image Overlay (Small) */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '16px',
                                        left: '16px',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        border: '2px solid white',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                    }}>
                                        <img
                                            src={item.before}
                                            alt="Original"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        color: 'var(--color-primary-start)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {item.category}
                                    </span>
                                </div>
                                <p style={{ fontSize: '16px', color: 'var(--color-text-heading)', fontWeight: '500' }}>
                                    "{item.prompt}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <button
                        onClick={() => {
                            navigate('/gallery');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{
                            background: 'transparent',
                            color: 'var(--color-text-heading)',
                            padding: '16px 40px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '16px',
                            fontWeight: '600',
                            border: '1px solid var(--color-border)',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary-start)';
                            e.currentTarget.style.color = 'var(--color-primary-start)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.color = 'var(--color-text-heading)';
                        }}
                    >
                        See More Examples <span>→</span>
                    </button>
                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    div[style*="columnCount: 3"] { column-count: 2 !important; }
                }
                @media (max-width: 640px) {
                    div[style*="columnCount: 3"] { column-count: 1 !important; }
                }
            `}</style>
        </section>
    );
};

export default ResultsGallery;
