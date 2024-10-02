import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Ensure this path is correct
import HomePage from './pages/Home'; // Ensure this path is correct
import ContactPage from './components/ContactPage/ContactPage'; // Ensure this path is correct
import Footer from './components/Footer/Footer'; // Ensure this path is correct
import SectionLinks from './components/SectionLinks/Sectionlinks';
import GrantApplication from 'components/GrantApplication/GrantApplication';
import Partners from 'components/Partners/Partners';
import Transparency from 'components/Transparency/Transparency';
import BoardMembers from 'components/BoardMembers/BoardMembers';
import Team2020 from 'components/Team2020/Team2020';
import Team2021 from 'components/Team2021/Team2021';
import Team2022 from 'components/Team2022/Team2022';
import Team2023 from 'components/Team2023/Team2023';
// import ArticlesList from './components/contentful/ArticlesList';
// import ArticlePage from './components/contentful/ArticlePage';
// import HomePagee from './components/contentful/HomePagee';
import ArticlesListPage from './components/contentful/ArticleListPage.jsx';
// import ArticlePage from './components/contentful/ArticlePage';
import ArticleDetail from './components/contentful/ArticleDetail';
// import TabelComponent from 'components/TabelComponent/TabelComponent';
// import Tabel from './components/Tabel/Tabel';


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
        <Route path="/transparenta" element={<Transparency/>} />
        <Route path="/board" element={<BoardMembers />} />
        <Route path="/board/2020" element={<Team2020 />} />
        <Route path="/board/2021" element={<Team2021 />} />
        <Route path="/board/2022" element={<Team2022 />} />
        <Route path="/board/2023" element={<Team2023 />} />
        {/* <Route path="/consiliipart" element={<TabelComponent />} /> */}
        {/* <Route path="/" element={<HomePagee />} /> */}
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <SectionLinks />
      <Footer />
    </Router>
  );
}

export default App;
