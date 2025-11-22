import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    // Hide navbar on login page
    if (location.pathname === '/login') return null;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
            padding: scrolled ? '15px 0' : '20px 0'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--gradient-primary)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        ✨
                    </div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--color-text-heading)' }}>
                        PhotoAI
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
                    {['Features', 'Pricing', 'Gallery', 'API'].map((item) => (
                        <a key={item} href={`/#${item.toLowerCase()}`} style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'var(--color-text-body)',
                            position: 'relative',
                            transition: 'color 0.2s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-start)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-body)'}
                        >
                            {item}
                        </a>
                    ))}
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
                                    padding: '8px 16px'
                                }}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: 'var(--color-text-heading)',
                                padding: '8px 16px'
                            }}>
                                Sign In
                            </Link>
                            <Link to="/login" style={{
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                padding: '10px 24px',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '14px',
                                fontWeight: '600',
                                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                                transition: 'transform 0.2s'
                            }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
