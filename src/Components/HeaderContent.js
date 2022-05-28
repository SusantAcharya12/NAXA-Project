import React from "react";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="wrap-content-navigation">
        <div className="container-content">
          <h1 className="content-heading">Services</h1>

          <p className="content-heading-para">
            At <span className="NAXA-Blue">NAXA</span> we work on{" "}
            <span className="NAXA-Blue">ideas</span>;ideas that can provide{" "}
            <span className="NAXA-Blue">simple solutions</span> to{" "}
            <span className="NAXA-Blue">complex problems</span>{" "}
          </p>

          <p className="content-paragraph2">
            We work as a team to generate, explore, build and validate ideas. We
            also contextualize innovations <br /> around the world to find the
            best fitting solutions to local problems.
          </p>
        </div>

        <nav className="navbar-services">
          <ul className="navbar-services-items">
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                GIS & Geospatial <br />
                <span className="a">Technologies</span>
              </a>
            </li>
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                Surveying & Data
                <br />
                Collection
              </a>
            </li>
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                Data Visualization&
                <br />
                Mapping
              </a>
            </li>
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                Software & Apps
                <br />
                Development
              </a>
            </li>
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                Frontier Technologies
              </a>
            </li>
            <li className="navbar-services-items">
              <a href="#" className="navbar-services-link">
                Research & Training
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderContent;
