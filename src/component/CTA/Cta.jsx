import "./Cta.css";
import headerLogo  from "/src/assets/Dlogo.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Cta = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="cta">
        <h1>Ready to Start Your Digital Journey?</h1>

        <p>
          Join thousands of learners who have transformed their careers with
          Digital Rise Hub. Get started today!
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">Get Started Today</button>

          <button className="btn-secondary">Browse Courses</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        {/* Column One */}
        <div className="footer-column">
          <img src={headerLogo} alt="DigitalRiseHub Logo" className="logo" />
        <p>
            Empowering individuals and organizations through innovative
            technology solutions and comprehensive training programs.
          </p>
        </div>

        {/* Column Two */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column Three */}
        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Computer Training</li>
            <li>Digital Marketing</li>
            <li>Cyber Security</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Column Four */}
        <div className="footer-column">
          <h3>Contact Info</h3>

          <p>
            <FaEnvelope /> digitalrisedutse@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> +2349025658461, +2349012750604
          </p>

          <p>
            <FaMapMarkerAlt />
            D25 Opp. Dr. Nuhu Muhammad Sunusi School Dambe Dutse, Jigawa State.
          </p>

          <div className="social-icons">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
          </div>
          </div>
          </footer>
          
         {/* Footer Bottom */}
  <div className="footer-bottom">
    <hr />
    <p className="copyright">
      &copy; {new Date().getFullYear()} Digital Rise Hub. All rights reserved.
    </p>
  </div>

    </>
  );
};

export default Cta;