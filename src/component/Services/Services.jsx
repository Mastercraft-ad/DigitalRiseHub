import "./Services.css";

const services = [
  {
    title: "Basic Computer Training",
    description:
      "Master fundamental computer skills with hands-on training programs designed for all skill levels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Learn cutting-edge digital marketing strategies to boost your online presence and reach your audience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    description:
      "Protect your digital assets with comprehensive cybersecurity training and best practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Build modern, responsive websites and applications with industry-standard tools and frameworks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="m8 6-6 6 6 6" />
        <path d="m16 6 6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, beautiful user experiences that delight users and drive engagement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H16a4 4 0 0 0 4-4c0-5-4.5-9-8-9Z" />
        <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="7" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Product Management",
    description:
      "Learn to lead product strategy, development, and launch successful digital products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M5 20V10" />
        <path d="M12 20V4" />
        <path d="M19 20v-7" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Master project planning, execution, and delivery with proven methodologies and tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Internship Programs",
    description:
      "Gain real-world experience with our comprehensive internship opportunities for IT students.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 21v-1c0-2.8 2.2-5 5-5h4" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.5 21v-1c0-2.2 1.8-4 4-4s4 1.8 4 4v1" />
      </svg>
    ),
  },
  {
    title: "Working Space",
    description:
      "Access modern, collaborative workspaces equipped with cutting-edge technology and amenities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 21V9a2 2 0 0 1 2-2h4v14" />
        <path d="M14 21V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v17" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    title: "ICT Consultation",
    description:
      "Get expert guidance on technology strategy, implementation, and digital transformation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
        <path d="M21 14v3a2 2 0 0 1-2 2h-1" />
        <rect x="3" y="14" width="4" height="6" rx="1" />
        <rect x="17" y="14" width="4" height="6" rx="1" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Comprehensive technology solutions designed to elevate your
            skills and drive your business forward
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
