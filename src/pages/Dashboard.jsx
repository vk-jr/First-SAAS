import React from 'react';
import UploadZone from '../components/UploadZone';
import TemplateGallery from '../components/TemplateGallery';

const Dashboard = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container" style={{ marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '10px' }}>Your Studio</h1>
                <p style={{ color: 'var(--color-text-body)' }}>Upload products and generate new photos.</p>
            </div>
            <UploadZone />
            <TemplateGallery />
        </div>
    );
};

export default Dashboard;
