import React from 'react';

const ResultsGallery = () => {
    // Placeholder data for masonry grid
    const items = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        height: [400, 500, 450][i % 3], // Varied heights
        category: ['Fashion', 'Tech', 'Food'][i % 3],
        before: `https://placehold.co/400x${[400, 500, 450][i % 3]}/333/FFF?text=Before`,
        after: `https://placehold.co/400x${[400, 500, 450][i % 3]}/7C3AED/FFF?text=After`
    }));

    return (
        <section style={{ padding: '100px 0', backgroundColor: '#1F2937', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '16px' }}>See The Magic</h2>
                    <p style={{ fontSize: '18px', color: '#9CA3AF' }}>Real transformations from our users</p>
                </div>

                <div style={{
                    columnCount: 3,
                    columnGap: '24px',
                    '@media (max-width: 768px)': { columnCount: 1 }
                }}>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                breakInside: 'avoid',
                                marginBottom: '24px',
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '2px solid rgba(255,255,255,0.1)'
                            }}
                            className="result-card"
                        >
                            <div style={{ display: 'flex', height: item.height }}>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <img src={item.before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>Before</span>
                                </div>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <img src={item.after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--color-success)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px' }}>After</span>
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(4px)',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '12px'
                            }}>
                                {item.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 1024px) {
          .result-card { column-count: 2; }
        }
        @media (max-width: 640px) {
          .result-card { column-count: 1; }
        }
      `}</style>
        </section>
    );
};

export default ResultsGallery;
