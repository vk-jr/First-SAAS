import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'Features', id: 'features' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Gallery', id: 'results-gallery' }
    ];

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/'); // Redirect to home or login page after logout
    };

    return (
        <nav style={{
            position: 'fixed',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1100px',
            height: 'auto',
            padding: '12px 24px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: 'rgba(17, 17, 17, 0.6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none' }}>
                <img src={logo} alt="GenAi Logo" style={{ height: '24px', objectFit: 'contain' }} />
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }} className="desktop-nav">
                {navItems.map((item) => {
                    const handleClick = (e) => {
                        e.preventDefault();
                        if (location.pathname !== '/') {
                            navigate('/');
                            setTimeout(() => {
                                const element = document.getElementById(item.id);
                                if (element) {
                                    const yOffset = -120; // Adjusted offset for floating navbar
                                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }, 100);
                        } else {
                            const element = document.getElementById(item.id);
                            if (element) {
                                const yOffset = -120; // Adjusted offset for floating navbar
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }
                    };

                    return (
                        <button
                            key={item.name}
                            onClick={handleClick}
                            style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--color-text-body)',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                background: 'transparent',
                                border: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'white';
                                e.target.style.background = 'rgba(255,255,255,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--color-text-body)';
                                e.target.style.background = 'transparent';
                            }}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text-heading)' }}>
                            Dashboard
                        </Link>
                        <button
                            onClick={handleLogout}
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: 'var(--color-text-body)',
                                padding: '8px 16px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'var(--color-text-heading)',
                            padding: '8px 16px',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-start)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-heading)'}
                        >
                            Sign In
                        </Link>
                        <Link to="/login" style={{
                            background: 'white',
                            color: 'black',
                            padding: '10px 24px',
                            borderRadius: '100px',
                            fontSize: '14px',
                            fontWeight: '600',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            textDecoration: 'none',
                            border: '1px solid white'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 12px rgba(255,255,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            Get Started
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
