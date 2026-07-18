import "../Header/Header.css";
import headerLogo  from "/src/assets/Dlogo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={headerLogo} alt="DigitalRiseHub Logo" className="logo" />
        </div>

        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/contact" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;