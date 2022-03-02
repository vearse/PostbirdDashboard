import React from 'react';
import Header from '../../components/header/header';
import About from '../../components/about/about';
import Hero from '../../components/hero/hero';
import Services from '../../components/services/services';
import Solution from '../../components/solutions/solutions';
import Rides from '../../components/rides/rides';
import CTA from '../../components/CTA/cta';
import FAQ from '../../components/FAQ/faq';

const LandingPage = () => {
    return (
        <div className="Landing-page">
            <Header/>
            <Hero/>
            <Services/>
            <About/>
            <Solution/>
            <Rides/>
            <CTA/>
            <FAQ/>
        </div>
    )
}

export default LandingPage;
