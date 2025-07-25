// src/components/Header.jsx
'use client';

import Logo from './Logo';
import SocialLinks from './SocialLinks';
import SearchForm from './SearchForm';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header id="header" className="header position-relative">
      <div className="container-fluid container-xl position-relative">
        <div className="top-row d-flex align-items-center justify-content-between">
          <Logo />
          <div className="d-flex align-items-center">
            <SocialLinks />
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container d-flex justify-content-center position-relative">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
