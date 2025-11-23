import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productRaw from '../assets/product-raw.png';
import productPro from '../assets/product-pro.png';

const Hero = () => {
    const navigate = useNavigate();
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const position = ((clientX - left) / width) * 100;

        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-dark)'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(140, 130, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(60px)',
                zIndex: 0
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* Left Column: Text */}
                <div style={{ maxWidth: '600px' }}>
                    <div style={{
                        color: 'var(--color-accent)',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginBottom: '24px'
                    }}>
                        AI-Powered Photo Magic
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(48px, 6vw, 80px)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        marginBottom: '32px',
                        color: 'var(--color-text-heading)',
                        letterSpacing: '-2px'
                    }}>
                        Transform Product Photos Into <span style={{ color: 'var(--color-primary-start)' }}>Viral Content</span>
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        color: 'var(--color-text-body)',
                        marginBottom: '48px',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}>
                        Generate professional product photos with AI models, studio backgrounds, and perfect lighting in seconds. No photographer needed.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <button style={{
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            height: '56px',
                            padding: '0 32px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '16px',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)',
                            transition: 'transform 0.2s',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Start <span>→</span>
                        </button>
                        <button
                            onClick={() => {
                                navigate('/gallery');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                color: 'var(--color-primary-start)',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            See Examples <span>→</span>
                        </button>
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: 'var(--color-text-body)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-success)' }}>✓</span> 10M+ Photos Generated
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-success)' }}>✓</span> Trusted by 50K+ Creators
                        </div>
                    </div>
                </div>

                {/* Right Column: Slider */}
                <div style={{ position: 'relative', padding: '20px' }}>
                    <div
                        ref={containerRef}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                            aspectRatio: '6/7',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-hover)',
                            cursor: 'ew-resize',
                            userSelect: 'none'
                        }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        {/* After Image (Background) */}
                        <img
                            src={productPro}
                            alt="Professional Product Photo"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />

                        {/* Before Image (Foreground, clipped) */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${sliderPosition}%`,
                            height: '100%',
                            overflow: 'hidden',
                            borderRight: '2px solid white'
                        }}>
                            <img
                                src={productRaw}
                                alt="Raw Product Photo"
                                style={{
                                    width: `${100 * (100 / sliderPosition)}%`, // Counteract container width
                                    maxWidth: 'none',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Labels */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            background: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600',
                            zIndex: 10
                        }}>Before</div>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255,255,255,0.9)',
                            color: 'var(--color-primary-start)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '600',
                            zIndex: 10
                        }}>After</div>

                        {/* Handle */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: `${sliderPosition}%`,
                            transform: 'translate(-50%, -50%)',
                            width: '48px',
                            height: '48px',
                            background: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            zIndex: 20
                        }}>
                            <div style={{ width: '24px', height: '24px', color: 'var(--color-primary-start)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8L22 12L18 16" />
                                    <path d="M6 8L2 12L6 16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
