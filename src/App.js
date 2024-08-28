import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Ensure this path is correct
import HomePage from './pages/Home'; // Ensure this path is correct
import ContactPage from './components/ContactPage/ContactPage'; // Ensure this path is correct
import Footer from './components/Footer/Footer'; // Ensure this path is correct
import SectionLinks from './components/SectionLinks/Sectionlinks';
import GrantApplication from 'components/GrantApplication/GrantApplication';
import Partners from 'components/Partners/Partners';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/studem.md/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/granturi" element={<GrantApplication />} />
        <Route path="/parteneri" element={<Partners />} />
      </Routes>
      <SectionLinks />
      <Footer />
    </Router>
  );
}

export default App;
