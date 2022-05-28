import React from "react";

const TopNavbar = () => {
  return (
    <header className="header-section">
      <div className="header-banner">
        <div className="header-link">
          <a className="banner-link" href="#">
            <span>
              We have been working on several voluntary initiatives during the
              COVID-19 pandemic. Check them out
            </span>
          </a>
        </div>
      </div>
      <div className="container-header">
        <div className="header-allitem">
          <div className="naxa-logo">
            <a className="naxalogo-link" href="#">
              <img
                src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png
                "
                alt="logo"
                className="naxa-logo-img"
              />
            </a>
          </div>
          <div className="navigation-section">
            <nav className="navbar-header">
              <ul>
                <li className="header-nav-item">
                  <a href="#" className="header-nav-links">
                    <span>Services</span>
                  </a>
                </li>
                <li class="header-nav-item">
                  <a href="#" className="header-nav-links">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li class="header-nav-item">
                  <a href="#" className="header-nav-links">
                    <span>Company</span>
                  </a>
                </li>
                <li class="header-nav-item">
                  <a href="#" className="header-nav-links">
                    <span>Events&Media</span>
                  </a>
                </li>
                <li class="header-nav-item">
                  <a href="#" className="header-nav-links">
                    <span>Blogs</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header-navbar-button">
            <a href="#" className="header-navbar-button-link">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
