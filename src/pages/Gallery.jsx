import React, { useState } from 'react';
import watchBefore from '../assets/gallery-watch-before.png';
import watchAfter from '../assets/gallery-watch-after.png';
import headphonesBefore from '../assets/gallery-headphones-before.png';
import headphonesAfter from '../assets/gallery-headphones-after.png';
import coffeeBefore from '../assets/gallery-coffee-before.png';
import coffeeAfter from '../assets/gallery-coffee-after.png';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    // All gallery examples with categories
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

    // Filter items based on active category
    const filteredItems = activeFilter === 'All'
        ? allItems
        : allItems.filter(item => item.category === activeFilter);

    const categories = ['All', 'Fashion', 'Tech', 'Food', 'Beauty', 'Jewelry', 'Home'];

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'white' }}>
            <div className="container" style={{ padding: '60px 20px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        marginBottom: '16px',
                        color: '#1F2937'
                    }}>
                        Gallery
                    </h1>
                    <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '40px' }}>
                        Explore AI-powered transformations across different categories
                    </p>

                    {/* Category Filters */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '24px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    backgroundColor: activeFilter === category ? '#7C3AED' : '#F3F4F6',
                                    background: activeFilter === category ? 'linear-gradient(135deg, #7C3AED, #EC4899)' : '#F3F4F6',
                                    color: activeFilter === category ? 'white' : '#374151',
                                    border: activeFilter === category ? 'none' : '1px solid #E5E7EB',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeFilter === category ? '0 4px 15px rgba(124, 58, 237, 0.4)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeFilter !== category) {
                                        e.currentTarget.style.backgroundColor = '#E5E7EB';
                                        e.currentTarget.style.borderColor = '#D1D5DB';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeFilter !== category) {
                                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                                        e.currentTarget.style.borderColor = '#E5E7EB';
                                    }
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div style={{
                    columnCount: 3,
                    columnGap: '24px'
                }}>
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                breakInside: 'avoid',
                                marginBottom: '24px',
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '2px solid #E5E7EB',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            className="result-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ display: 'flex', height: item.height }}>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <img src={item.before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <span style={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        background: 'rgba(0,0,0,0.7)',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        letterSpacing: '0.5px',
                                        color: 'white'
                                    }}>BEFORE</span>
                                </div>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <img src={item.after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <span style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        letterSpacing: '0.5px',
                                        color: 'white'
                                    }}>AFTER</span>
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(124, 58, 237, 0.9)',
                                backdropFilter: 'blur(10px)',
                                padding: '6px 16px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: '600',
                                color: 'white'
                            }}>
                                {item.category}
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'rgba(124, 58, 237, 0.95)',
                                backdropFilter: 'blur(4px)',
                                padding: '8px 14px',
                                borderRadius: '8px',
                                fontSize: '11px',
                                fontWeight: '500',
                                maxWidth: '80%',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                color: 'white'
                            }}>
                                "{item.prompt}"
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message if no items in category */}
                {filteredItems.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
                        <p style={{ fontSize: '18px' }}>No examples found in this category yet.</p>
                    </div>
                )}
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    div[style*="columnCount: 3"] { column-count: 2 !important; }
                }
                @media (max-width: 640px) {
                    div[style*="columnCount: 3"] { column-count: 1 !important; }
                }
            `}</style>
        </div>
    );
};

export default Gallery;
