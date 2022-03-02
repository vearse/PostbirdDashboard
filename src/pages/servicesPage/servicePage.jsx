import React from 'react';
import '../servicesPage/service-page.css';
import Header from '../../components/header/header';
import Logistics from '../../components/Logistics/logistics';
import ServiceHero from '../../components/serviceHero/serviceHero';
import Services from '../../components/services/services';

const ServicePage = () => {
    return (
        <div className="service-page">
            <Header/>
            <ServiceHero />
            <Services/>
            <Logistics/> 
        </div>
    )
}
export default ServicePage;
