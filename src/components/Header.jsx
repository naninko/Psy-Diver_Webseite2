import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';
import logo from '/FINAL_psydiver_logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const isAboutActive = () => {
    return location.pathname === '/about' ||
           location.pathname === '/about/patients' ||
           location.pathname === '/about/relatives' ||
           location.pathname === '/about/professionals' ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img
              src={logo}
              alt="PSY-DIVER Logo"
              className="logo"
            />
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive('/')}`}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li className="nav-item-dropdown">
                <Link
                  to="/about"
                  className={`nav-link ${isAboutActive()}`}
                  onClick={closeMenu}
                >
                  {t('nav.about')}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/about/patients"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {t('nav.forPatients')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/relatives"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {t('nav.forRelatives')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/professionals"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      {t('nav.forProfessionals')}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/team"
                  className={`nav-link ${isActive('/team')}`}
                  onClick={closeMenu}
                >
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className={`nav-link ${isActive('/news')}`}
                  onClick={closeMenu}
                >
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActive('/contact')}`}
                  onClick={closeMenu}
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li className="lang-switcher-item">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
