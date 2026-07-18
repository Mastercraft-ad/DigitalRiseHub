import "./Hero.css";
import heroImage from "/src/assets/Group3.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Empowering Your Digital Journey</h1>
          <p className="hero__text">
            Transform your skills and career with cutting-edge technology
            training, professional services, and innovative solutions at
            Digital Rise Hub.
          </p>
          <div className="hero__actions">
            <a href="/services" className="btn btn-primary">
              Explore Services →
            </a>
            <a href="/contact" className="btn btn-outline-light">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="Digital workspace" />
        </div>
      </div>
    </section>
  );
}

export default Hero;