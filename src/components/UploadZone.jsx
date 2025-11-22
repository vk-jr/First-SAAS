import React, { useState, useCallback } from 'react';

const UploadZone = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    };

    const handleFileInput = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFiles(selectedFiles);
    };

    const handleFiles = (newFiles) => {
        const validFiles = newFiles.filter(file =>
            ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
        );

        if (validFiles.length > 0) {
            setFiles(prev => [...prev, ...validFiles.map(file => ({
                file,
                preview: URL.createObjectURL(file),
                id: Math.random().toString(36).substr(2, 9)
            }))]);
            simulateUpload();
        }
    };

    const simulateUpload = () => {
        setUploading(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const removeFile = (id) => {
        setFiles(prev => prev.filter(f => f.id !== id));
    };

    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-white)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '40px' }}>Upload & Transform in 3 Steps</h2>

                    {/* Steps */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: '60px' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '20%', right: '20%', height: '2px', background: '#E5E7EB', zIndex: 0 }}></div>
                        {['Upload', 'AI Magic', 'Download'].map((step, index) => (
                            <div key={step} style={{ position: 'relative', zIndex: 1, margin: '0 40px', textAlign: 'center' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: index === 0 ? 'white' : 'white',
                                    border: index === 0 ? '2px solid var(--color-primary-start)' : '2px solid #E5E7EB',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    marginBottom: '12px',
                                    boxShadow: index === 0 ? '0 0 0 4px rgba(124, 58, 237, 0.1)' : 'none'
                                }}>
                                    {index === 0 ? '☁️' : index === 1 ? '✨' : '⬇️'}
                                </div>
                                <span style={{ fontSize: '14px', fontWeight: '500', color: index === 0 ? 'var(--color-primary-start)' : 'var(--color-text-body)' }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upload Area */}
                {files.length === 0 ? (
                    <div
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        style={{
                            border: `2px dashed ${isDragging ? 'var(--color-primary-start)' : '#E5E7EB'}`,
                            borderRadius: '24px',
                            padding: '80px 20px',
                            textAlign: 'center',
                            backgroundColor: isDragging ? 'rgba(124, 58, 237, 0.05)' : 'var(--color-bg-subtle)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        <input
                            type="file"
                            multiple
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileInput}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                        />
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                            color: 'white',
                            fontSize: '32px'
                        }}>
                            ↑
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '8px' }}>Drag & drop your product photo</h3>
                        <p style={{ color: 'var(--color-text-body)', marginBottom: '16px' }}>or click to browse</p>
                        <p style={{ fontSize: '12px', color: '#9CA3AF' }}>JPG, PNG, WEBP up to 10MB</p>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                            {files.map((file) => (
                                <div key={file.id} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '1' }}>
                                    <img src={file.preview} alt="Upload preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <button
                                        onClick={() => removeFile(file.id)}
                                        style={{
                                            position: 'absolute',
                                            top: '8px',
                                            right: '8px',
                                            background: 'white',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        ×
                                    </button>
                                    {uploading && (
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(124, 58, 237, 0.8)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white'
                                        }}>
                                            <div style={{
                                                width: '30px',
                                                height: '30px',
                                                border: '3px solid rgba(255,255,255,0.3)',
                                                borderTopColor: 'white',
                                                borderRadius: '50%',
                                                animation: 'spin 1s linear infinite',
                                                marginBottom: '8px'
                                            }} />
                                            <span style={{ fontSize: '12px', fontWeight: '600' }}>{progress}%</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div style={{
                                border: '2px dashed #E5E7EB',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                position: 'relative'
                            }}>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={handleFileInput}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                />
                                <span style={{ color: 'var(--color-primary-start)', fontWeight: '500' }}>+ Add More</span>
                            </div>
                        </div>

                        {!uploading && (
                            <div style={{ textAlign: 'center' }}>
                                <button style={{
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    padding: '16px 48px',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
                                }}>
                                    Generate Photos
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        </section>
    );
};

export default UploadZone;
