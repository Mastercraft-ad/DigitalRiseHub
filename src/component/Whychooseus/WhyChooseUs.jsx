import React from "react";
import "./WhyChooseUs.css";
import teamPhoto from "../../assets/Group.jpeg";// Data lives outside the render — this is what makes the list "duplicate-proof."
// Want a 5th feature? Add one line here, not one new block of JSX.
const FEATURES = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of practical experience",
  },
  {
    title: "Hands-On Learning",
    description: "Apply your knowledge through real-world projects and practical exercises",
  },
  {
    title: "Modern Facilities",
    description: "Access state-of-the-art equipment and collaborative workspaces",
  },
  {
    title: "Career Support",
    description: "Get guidance and opportunities to advance your professional journey",
  },
];

function WhyChooseUs({
  imageSrc = teamPhoto,
  imageAlt = "Team collaborating around a table",
}){
  return (
    <section className="wcu">
      {/* Left column: image */}
      <div className="wcu__image-col">
        <img className="wcu__image" src={imageSrc} alt={imageAlt} />
      </div>

      {/* Right column: content */}
      <div className="wcu__content-col">
        <div className="wcu__content-inner">
          <h2 className="wcu__heading">Why Choose Digital Rise Hub?</h2>

          <p className="wcu__intro">
            We provide practical digital skills, real-world training, and a
            supportive environment that helps you grow, work, and succeed in
            today&apos;s digital economy.
          </p>

          <ul className="wcu__features">
            {FEATURES.map((feature) => (
              <li className="wcu__feature" key={feature.title}>
                <span className="wcu__dot" aria-hidden="true" />
                <div className="wcu__feature-text">
                  <h3 className="wcu__feature-title">{feature.title}</h3>
                  <p className="wcu__feature-desc">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="wcu__cta" type="button">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;