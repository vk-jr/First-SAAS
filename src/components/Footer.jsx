import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '80px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '600' }}>PhotoAI</span>
                        </div>
                        <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.6' }}>
                            Transforming product photography with the power of artificial intelligence.
                        </p>
                    </div>

                    {/* Links */}
                    {[
                        { title: 'Product', links: ['Features', 'Pricing', 'Templates', 'API'] },
                        { title: 'Resources', links: ['Blog', 'Help Center', 'Tutorials', 'Community'] },
                        { title: 'Company', links: ['About', 'Careers', 'Contact', 'Privacy'] }
                    ].map((column) => (
                        <div key={column.title}>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>{column.title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {column.links.map((link) => (
                                    <li key={link} style={{ marginBottom: '12px' }}>
                                        <a href="#" style={{ color: '#9CA3AF', fontSize: '14px', transition: 'color 0.2s' }}
                                            onMouseEnter={(e) => e.target.style.color = 'white'}
                                            onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ borderTop: '1px solid #374151', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: '#9CA3AF', fontSize: '14px' }}>© 2025 PhotoAI. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                            <a key={social} href="#" style={{ color: '#9CA3AF', fontSize: '14px' }}>{social}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
