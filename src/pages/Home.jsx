import React from 'react';
import { Element } from 'react-scroll';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SectionLinks from '../components/SectionLinks/Sectionlinks';
import Team from '../components/Team';
import About from '../components/About';
// import ContactUs from '../components/ContactUs';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial/Testimonial';
// import Newsletter from '../components/Newsletter/Newsletter';
// import ContactsDetail from '../components/ContactsDetail/Contacts';
import NewsSection from '../components/News/News';
import Space from 'components/Space/Space';

import GrantApplication from 'components/GrantApplication/GrantApplication';
import ContactPage from 'components/ContactPage/ContactPage';
import Partners from 'components/Partners/Partnes';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <About />
      </Element>
      <Element name="domains">
        <Services />
      </Element>
      <Element name="space">
        <Space />
      </Element>
      
      <Element name="GrantApplication">
        <GrantApplication />
      </Element>

      
      <Element name="news">
        <NewsSection />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>
      <Element name="partners">
        <Partners/>
      </Element>
      <Element name="contactpage">
        <ContactPage />
      </Element>
      {/* <Element name="contact">
        <ContactsDetail />
      </Element> */}
      {/* <ContactUs /> */}
      {/* <Newsletter /> */}
      <SectionLinks />
      <Footer />
    </div>
  );
};

export default Home;
