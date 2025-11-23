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
            price: annual ? 99 : 19,
            description: 'For content creators and sellers',
            features: ['200 credits/month', 'No watermark', 'HD downloads', '50+ templates', 'Priority processing', 'Commercial license'],
            cta: 'Get Creator',
            popular: true
        },
        {
            name: 'Business',
            price: annual ? 199 : 49,
            description: 'For agencies and power users',
            features: ['1000 credits/month', 'Everything in Creator', 'API access', 'Custom branding', 'Dedicated support', 'Team collaboration'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <section id="pricing" style={{ padding: '100px 0', backgroundColor: 'var(--color-bg-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px', color: 'var(--color-text-heading)', letterSpacing: '-1px' }}>
                        Simple, Transparent Pricing
                    </h2>
                    <p style={{ fontSize: '18px', color: 'var(--color-text-body)', maxWidth: '600px', margin: '0 auto' }}>
                        Choose the plan that's right for you and your business.
                    </p>

                    {/* Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
                        <span style={{ color: !annual ? 'var(--color-text-heading)' : 'var(--color-text-body)', fontWeight: '500' }}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            style={{
                                width: '60px',
                                height: '32px',
                                background: 'var(--color-border)',
                                borderRadius: '16px',
                                position: 'relative',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: 'var(--color-primary-start)',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '4px',
                                left: annual ? '32px' : '4px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
                            }} />
                        </button>
                        <span style={{ color: annual ? 'var(--color-text-heading)' : 'var(--color-text-body)', fontWeight: '500' }}>
                            Yearly <span style={{ fontSize: '12px', color: 'var(--color-primary-start)', marginLeft: '4px' }}>-20%</span>
                        </span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '24px',
                                padding: '40px',
                                border: plan.popular ? '1px solid var(--color-primary-start)' : '1px solid var(--color-border)',
                                position: 'relative',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--gradient-primary)',
                                    padding: '4px 16px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: 'white'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-text-heading)' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--color-text-body)', marginBottom: '32px', fontSize: '14px' }}>{plan.description}</p>

                            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                <span style={{ fontSize: '48px', fontWeight: '700', color: 'var(--color-text-heading)' }}>${plan.price}</span>
                                <span style={{ color: 'var(--color-text-body)' }}>/{annual ? 'yr' : 'mo'}</span>
                            </div>

                            <button style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '12px',
                                border: 'none',
                                background: plan.popular ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.05)',
                                color: plan.popular ? 'white' : 'var(--color-text-heading)',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginBottom: '40px',
                                transition: 'all 0.2s'
                            }}>
                                {plan.cta}
                            </button>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--color-text-body)', fontSize: '14px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(140, 130, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-start)', fontSize: '12px' }}>✓</div>
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
