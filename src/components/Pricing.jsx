import React, { useState } from 'react';

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    const plans = [
        {
            name: 'Free',
            price: 0,
            description: 'Perfect for trying out the magic',
            features: ['10 credits/month', 'Watermarked images', 'Standard quality', '5 templates'],
            cta: 'Start Free',
            popular: false
        },
        {
            name: 'Creator',
            price: annual ? 19 : 24,
            description: 'For content creators and sellers',
            features: ['200 credits/month', 'No watermark', 'HD downloads', '50+ templates', 'Priority processing', 'Commercial license'],
            cta: 'Get Creator',
            popular: true
        },
        {
            name: 'Business',
            price: annual ? 49 : 59,
            description: 'For agencies and power users',
            features: ['1000 credits/month', 'Everything in Creator', 'API access', 'Custom branding', 'Dedicated support', 'Team collaboration'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <section id="pricing" style={{ padding: '100px 0', backgroundColor: '#F9FAFB' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '16px' }}>Simple, Transparent Pricing</h2>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
                        <span style={{ fontWeight: '500', color: !annual ? 'var(--color-text-heading)' : 'var(--color-text-body)' }}>Monthly</span>
                        <div
                            onClick={() => setAnnual(!annual)}
                            style={{
                                width: '56px',
                                height: '32px',
                                background: 'var(--color-primary-start)',
                                borderRadius: '16px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: 'white',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '4px',
                                left: annual ? '28px' : '4px',
                                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }} />
                        </div>
                        <span style={{ fontWeight: '500', color: annual ? 'var(--color-text-heading)' : 'var(--color-text-body)' }}>
                            Yearly <span style={{ fontSize: '12px', color: 'var(--color-success)', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '10px' }}>Save 20%</span>
                        </span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'flex-start' }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '40px',
                                boxShadow: plan.popular ? '0 20px 40px rgba(124, 58, 237, 0.15)' : 'var(--shadow-soft)',
                                border: plan.popular ? '2px solid var(--color-primary-start)' : '1px solid #E5E7EB',
                                position: 'relative',
                                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                zIndex: plan.popular ? 2 : 1
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    right: '40px',
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    padding: '4px 16px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    letterSpacing: '1px'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--color-text-body)', fontSize: '14px', marginBottom: '24px' }}>{plan.description}</p>

                            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '32px' }}>
                                <span style={{ fontSize: '48px', fontWeight: '700', color: 'var(--color-text-heading)' }}>${plan.price}</span>
                                <span style={{ fontSize: '16px', color: 'var(--color-text-body)', marginLeft: '4px' }}>/month</span>
                            </div>

                            <button style={{
                                width: '100%',
                                height: '48px',
                                borderRadius: '12px',
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '32px',
                                background: plan.popular ? 'var(--gradient-primary)' : (plan.name === 'Business' ? 'var(--color-bg-dark)' : 'transparent'),
                                color: plan.popular || plan.name === 'Business' ? 'white' : 'var(--color-text-heading)',
                                border: plan.popular || plan.name === 'Business' ? 'none' : '1px solid #E5E7EB',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                            >
                                {plan.cta}
                            </button>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-body)' }}>
                                        <span style={{ color: 'var(--color-success)', fontSize: '16px' }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
