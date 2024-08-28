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
// import NewsSection from '../components/News/News';
import Space from 'components/Space/Space';

import GrantApplication from 'components/GrantApplication/GrantApplication';
import ContactPage from 'components/ContactPage/ContactPage';
import Donors from 'components/Donors/Donors';
// import NewsList from 'components/contentful/ArticlesList';
import ArticlesList from 'components/contentful/ArticlesList';


const Home = () => {
  return (
    <div>
      
      <Element name="ArticlesList">
        <ArticlesList/>
      </Element>
      <Element name="home">
        <About />
      </Element>
      <Element name="domains">
        <Services />
      </Element>
      <Element name="space">
        <Space />
      </Element>
      
      {/* <Element name="GrantApplication">
        <GrantApplication />
      </Element> */}
      
     


      
      {/* <Element name="NewSection">
        <NewsSection />
      </Element> */}
      <Element name="team">
        <Team />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>

      {/* <Element name="contactPage">
        <ContactPage/>
      </Element> */}
      
      <Element name="finantatori">
        <Donors/>
      </Element>
      
      {/* <Element name="contact">
        <ContactsDetail />
      </Element> */}
      {/* <ContactUs /> */}
      
      
      
    </div>
  );
};

export default Home;
