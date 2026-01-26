import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Partners from './pages/Partners';
import News from './pages/News';
import Contact from './pages/Contact';
import Imprint from './pages/Imprint';
import ForPatients from './pages/ForPatients';
import ForRelatives from './pages/ForRelatives';
import ForProfessionals from './pages/ForProfessionals';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  // Update HTML lang attribute when language changes (WCAG compliance)
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router basename="/Psy-Diver_Webseite2">
      <ScrollToTop />
      <div className="app">
        <a href="#main-content" className="skip-link">
          {t('common.skipToMain')}
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/patients" element={<ForPatients />} />
            <Route path="/about/relatives" element={<ForRelatives />} />
            <Route path="/about/professionals" element={<ForProfessionals />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
