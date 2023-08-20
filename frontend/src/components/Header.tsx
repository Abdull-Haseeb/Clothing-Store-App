// import "./Header.css";

import Logo from "../assets/Logo";
// import { FaBeer } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <div className="header-search">
          <input
            type="search"
            name="search"
            placeholder="Search Product..."
            className="input-field"
          />

          <button className="search-btn" aria-label="Search"></button>
        </div>

        <a href="#" className="logo">
          <Logo />
        </a>

        <div className="header-actions">
          <button className="header-action-btn">
            {/* <IonIcon name="person-outline" aria-hidden="true" /> */}

            <p className="header-action-label">Sign in</p>
          </button>

          {/* Similar conversion for other header-action-btn elements */}
        </div>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          aria-label="Open Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="navbar" data-navbar>
          {/* Navigation items */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
