import React from 'react';
import '../contactPage/contact-page.css';
import Header from '../../components/header/header';
import ContactForm from '../../components/contact-form/contact-form';
import ContactHero from '../../components/contact-hero/contact-hero';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Header/>
            <ContactHero/>
            <ContactForm/>
        </div>
    )
}

export default ContactPage;
