import React from 'react';
import Header from '../../components/header/header';
import AboutHero from '../../components/About-Hero/about-hero';
import About from '../../components/about/about';
import '../AboutPage/aboutPage.css';
import Rides from '../../components/rides/rides';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header/>
            <AboutHero/>
            <About/>
            <Rides/>
        </div>
    )
}

export default AboutPage;
