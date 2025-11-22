import React from 'react';

const Testimonials = () => {
    return (
        <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F3E8FF 100%)' }}>
            <div className="container">
                {/* Testimonials */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '60px' }}>Loved by Creators</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: 'var(--shadow-soft)', textAlign: 'left' }}>
                                <div style={{ fontSize: '32px', marginBottom: '16px', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>❝</div>
                                <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#374151', marginBottom: '24px', lineHeight: '1.6' }}>
                                    "This tool completely changed my workflow. I used to spend hours in Photoshop, now it takes seconds to get studio-quality shots."
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E5E7EB' }} />
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Sarah Jenkins</div>
                                        <div style={{ fontSize: '14px', color: '#6B7280' }}>E-commerce Manager</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', marginBottom: '100px', textAlign: 'center' }}>
                    {[
                        { label: 'Photos Created', value: '10M+' },
                        { label: 'Happy Creators', value: '50K+' },
                        { label: 'Average Rating', value: '4.9★' },
                        { label: 'Time Saved', value: '95%' }
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div style={{ fontSize: '48px', fontWeight: '700', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{stat.value}</div>
                            <div style={{ color: '#6B7280', fontWeight: '500' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--gradient-primary)', borderRadius: '24px', padding: '60px', textAlign: 'center', color: 'white', boxShadow: '0 20px 50px rgba(236, 72, 153, 0.3)' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '16px' }}>Ready to Transform Your Products?</h2>
                    <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.9 }}>Join thousands of creators making viral content today.</p>

                    <div style={{ display: 'flex', gap: '0', maxWidth: '500px', margin: '0 auto', background: 'white', padding: '4px', borderRadius: '12px' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{ flex: 1, border: 'none', padding: '0 20px', fontSize: '16px', outline: 'none', borderRadius: '8px' }}
                        />
                        <button style={{ background: 'black', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', fontSize: '16px' }}>
                            Start Free →
                        </button>
                    </div>
                    <p style={{ fontSize: '12px', marginTop: '16px', opacity: 0.7 }}>No credit card required • 10 free credits</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
