import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-dark)', borderTop: '1px solid var(--color-border)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>✨</div>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600', color: 'var(--color-text-heading)' }}>GenAi</span>
                        </div>
                        <p style={{ color: 'var(--color-text-body)', fontSize: '14px', lineHeight: '1.6' }}>
                            Transforming product photography with the power of artificial intelligence.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-heading)' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Features', 'Pricing', 'Gallery', 'API'].map(item => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <a href="#" style={{ color: 'var(--color-text-body)', fontSize: '14px', transition: 'color 0.2s' }} className="interactive">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-heading)' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <a href="#" style={{ color: 'var(--color-text-body)', fontSize: '14px', transition: 'color 0.2s' }} className="interactive">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-text-heading)' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Privacy', 'Terms', 'Security'].map(item => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <a href="#" style={{ color: 'var(--color-text-body)', fontSize: '14px', transition: 'color 0.2s' }} className="interactive">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--color-text-body)', fontSize: '14px' }}>© 2025 GenAi. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                            <a key={social} href="#" style={{ color: 'var(--color-text-body)', fontSize: '14px' }} className="interactive">{social}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
