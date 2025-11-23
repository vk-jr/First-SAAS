import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsAuthenticated(true);
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-dark)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                width: '100%',
                maxWidth: '400px',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <img src={logo} alt="GenAi Logo" style={{ height: '80px', objectFit: 'contain', marginBottom: '16px' }} />
                    <h1 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-text-heading)' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--color-text-body)' }}>Sign in to continue creating</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'var(--color-text-heading)' }}>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            defaultValue="demo@genai.com"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text-heading)',
                                fontSize: '16px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-start)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                        />
                    </div>
                    <div style={{ marginBottom: '32px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'var(--color-text-heading)' }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            defaultValue="password"
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text-heading)',
                                fontSize: '16px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-start)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '600',
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? 'not-allowed' : 'none', // Using 'none' for custom cursor, or 'pointer' if we want standard behavior (but we hid it globally)
                            border: 'none',
                            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)')}
                        onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)')}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
