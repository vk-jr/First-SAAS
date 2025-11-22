import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ResultsGallery from '../components/ResultsGallery';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <ResultsGallery />
            <Pricing />
            <Testimonials />
        </>
    );
};

export default Home;
