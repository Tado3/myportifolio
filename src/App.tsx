import React, { useState, useEffect, useMemo } from 'react';

// Define a type for navigation links to ensure type safety
type NavLink = {
  id: string;
  label: string;
};

// --- SVG Icons (replacing lucide-react) ---
const AtomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="m2 12h2" /><path d="m20 12h2" /><path d="m4.93 19.07 1.41-1.41" /><path d="m17.66 6.34 1.41-1.41" /><circle cx="12" cy="12" r="2" />
  </svg>
);

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

const PaletteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21.365a1.85 1.85 0 0 1-2.924-1.259c-.584-1.921-1.972-3.6-4.908-4.707-.94-.35-1.57-.966-1.785-1.516a3.033 3.033 0 0 1-.226-2.912c.32-1.077 1.185-2.022 2.584-2.822.493-.292.903-.799 1.192-1.295.53-.9.96-1.936 1.13-3.141a2.668 2.668 0 0 1 .55-1.393c.69-.9 1.62-1.463 2.76-1.636 1.15-.17 2.19.123 2.89 1.15.54.8 1.12 1.66 1.82 2.5a3.033 3.033 0 0 1 1.78 2.91 1.849 1.849 0 0 1 1.79 3.064c-.38.56-.88 1.05-1.54 1.46-1.9.98-3.59 2.55-4.48 4.79-.18.45-.4.86-.67 1.25a3.029 3.029 0 0 1-1.29 1.21zm.072-10.45a3.029 3.029 0 0 0-1.29 1.21c-.48.7-.9 1.5-1.2 2.4-1.2 3.1-2.6 5.8-5 7.1" />
  </svg>
);

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// --- Reusable Button Component ---
// A reusable button with hover effects and consistent styling
const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string; type?: 'button' | 'submit' | 'reset'; icon?: React.ReactNode }> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  icon,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`button ${className}`}
  >
    {children}
    {icon && <span className="button-icon">{icon}</span>}
  </button>
);

// --- Sections as separate components for organization ---

// About Section Component
const AboutSection: React.FC = () => (
  <section id="about" className="section about-section animate-fadeIn">
    <div className="profile-image-container">
      <img
        src="../image/tado.png" // This line has been updated
        alt="Profile Picture"
        className="profile-image"
      />
    </div>
    <div className="about-content">
      <h1 className="about-heading">
        Hi, I'm <span className="gradient-text">Tadiwanashe C Nyatowera</span>.
      </h1>
      <p className="about-paragraph">
        A passionate web developer specializing in modern, responsive, and user-friendly digital experiences. I bring ideas to life with clean code and creative design.
      </p>
      <Button icon={<ArrowRightIcon className="icon-arrow-right" />}>Explore My Work</Button>
    </div>
  </section>
);

// Skills Section Component
const SkillsSection: React.FC = () => {
  const skills = [
    { title: 'Web Development', description: 'HTML, CSS, JavaScript, TypeScript, React, Vue, Angular.', icon: <CodeIcon className="skill-icon" /> },
    { title: 'UI/UX Design', description: 'Figma, Adobe XD, Sketch, User Research, Prototyping.', icon: <PaletteIcon className="skill-icon" /> },
    { title: 'Backend', description: 'Node.js, Python, Django, REST APIs, Databases (SQL/NoSQL).', icon: <AtomIcon className="skill-icon" /> },
    
  ];
  return (
    <section id="skills" className="section text-center animate-fadeIn">
      <h2 className="section-heading gradient-text">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-container">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'Mutare Dry Port HRMS', description: 'A web-based Human Resources Management System designed for the Mutare Dry Port. The platform streamlines HR operations, including employee records management, payroll processing, leave and attendance tracking, and performance appraisals. It features secure access for employees and HR administrators to manage their profiles and access relevant information.' },
    
  ];
  return (
    <section id="projects" className="section animate-fadeIn">
      <h2 className="section-heading text-center gradient-text">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href="#" className="project-link">
                View Project <ArrowRightIcon className="icon-arrow-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection: React.FC = () => (
  <section id="contact" className="section text-center animate-fadeIn">
    <h2 className="section-heading gradient-text">Get in Touch</h2>
    <p className="contact-description">
      I'm always open to new opportunities and collaborations. Feel free to reach out to me via the form below.
    </p>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" rows={5} className="form-textarea"></textarea>
      </div>
      <Button type="submit" className="button-full-width">Send Message</Button>
    </form>
  </section>
);

// The main App component
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navLinks: NavLink[] = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false); // Close menu on click
  };

  // Logic to highlight the active navigation link based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  return (
    <div className="app-container">
      <style>
        {`
          @import url('https://rsms.me/inter/inter.css');
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Inter', sans-serif;
            background-color: #0d1117; /* A dark, GitHub-like background */
            color: #c9d1d9; /* Light text color */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .app-container {
            min-height: 100vh;
            color: #c9d1d9;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          /* --- Header & Navigation --- */
          .header {
            position: sticky;
            top: 0;
            z-index: 50;
            background-color: rgba(13, 17, 23, 0.9);
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 1rem 0;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            background-image: linear-gradient(to right, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            cursor: pointer;
          }

          .logo-version {
            color: #9ca3af;
          }

          .nav {
            display: none;
            gap: 2rem;
            font-size: 1.125rem;
            font-weight: 500;
          }

          .nav-link {
            text-decoration: none;
            color: #c9d1d9;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: #6366f1;
          }

          .nav-link.active {
            color: #8b5cf6;
            font-weight: bold;
          }

          .mobile-menu-button {
            display: block;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: transparent;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .mobile-menu-button:hover {
            background-color: #161b22;
          }

          .mobile-menu {
            display: none;
            background-color: #161b22;
            text-align: center;
            padding-bottom: 1rem;
            transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
          }

          .mobile-menu.open {
            display: block;
            max-height: 500px;
            opacity: 1;
          }

          .mobile-menu-link {
            display: block;
            padding: 0.75rem;
            font-size: 1.125rem;
            text-decoration: none;
            color: #c9d1d9;
            transition: background-color 0.3s ease;
          }

          .mobile-menu-link:hover {
            background-color: #1f242c;
          }

          .mobile-menu-link.active {
            color: #8b5cf6;
            font-weight: bold;
          }

          /* --- Main Content & Sections --- */
          .main-content {
            padding: 0 1rem;
          }

          .section {
            padding: 5rem 0;
          }

          .divider {
            width: 100%;
            height: 1px;
            background-color: #24292e;
            margin: 2rem 0;
            border-radius: 9999px;
          }

          /* --- Gradient Text & Animations --- */
          .gradient-text {
            background-image: linear-gradient(to right, #6366f1, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          /* --- Button --- */
          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            background-image: linear-gradient(to bottom right, #6366f1, #8b5cf6);
            color: #fff;
            font-weight: 600;
            border-radius: 9999px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            transform: scale(1);
            border: none;
            cursor: pointer;
            text-decoration: none;
          }

          .button:hover {
            background-image: linear-gradient(to bottom right, #4f46e5, #7c3aed);
            transform: scale(1.05);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          .button-icon {
            margin-left: 0.5rem;
            transition: transform 0.3s ease;
          }

          .button:hover .button-icon {
            transform: translateX(4px);
          }

          .button-full-width {
            width: 100%;
          }

          /* --- About Section --- */
          .about-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 2rem;
          }

          .profile-image-container {
            position: relative;
            width: 12rem;
            height: 12rem;
            border-radius: 9999px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border: 4px solid rgba(139, 92, 246, 0.5);
          }
          
          .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .about-content {
            max-width: 48rem;
          }

          .about-heading {
            font-size: 2.25rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 1rem;
          }

          .about-paragraph {
            font-size: 1.125rem;
            color: #9ca3af;
            margin-bottom: 1.5rem;
          }

          /* --- Skills Section --- */
          .section-heading {
            font-size: 2.25rem;
            font-weight: bold;
            margin-bottom: 3rem;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
          }

          .skill-card {
            padding: 1.5rem;
            background-color: #161b22;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, border-color 0.3s ease;
            border: 1px solid #24292e;
          }

          .skill-card:hover {
            transform: scale(1.05);
            border-color: #6366f1;
          }

          .skill-icon-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .skill-icon {
            width: 2rem;
            height: 2rem;
            color: #6366f1;
          }

          .skill-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #c9d1d9;
          }

          .skill-description {
            color: #9ca3af;
          }

          /* --- Projects Section --- */
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
          }

          .project-card {
            position: relative;
            background-color: #161b22;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            transition: all 0.3s ease;
            transform: translateY(0);
            border: 1px solid #24292e;
          }

          .project-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            transform: translateY(-8px);
          }

          .project-card-content {
            padding: 1.5rem;
          }

          .project-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #c9d1d9;
          }

          .project-description {
            color: #9ca3af;
            margin-bottom: 1rem;
          }

          .project-link {
            display: inline-flex;
            align-items: center;
            color: #6366f1;
            font-weight: 600;
            text-decoration: none;
            transition: transform 0.3s ease;
          }
          
          .project-link:hover {
            text-decoration: underline;
          }

          .project-link:hover .icon-arrow-right {
            transform: translateX(4px);
          }

          /* --- Contact Section --- */
          .contact-description {
            font-size: 1.125rem;
            color: #9ca3af;
            margin-bottom: 2rem;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-form {
            max-width: 36rem;
            margin-left: auto;
            margin-right: auto;
            background-color: #161b22;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #24292e;
          }

          .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
          }

          .form-label {
            display: block;
            color: #c9d1d9;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .form-input, .form-textarea {
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background-color: #0d1117;
            color: #c9d1d9;
            border: 1px solid #30363d;
            transition: border-color 0.3s ease;
          }

          .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
          }
          
          /* --- Footer --- */
          .footer {
            background-color: #010409;
            padding: 2rem 0;
            text-align: center;
            color: #9ca3af;
            border-top: 1px solid #24292e;
          }

          /* --- Media Queries (for responsiveness) --- */
          @media (min-width: 768px) {
            .nav {
              display: flex;
            }

            .mobile-menu-button {
              display: none;
            }

            .mobile-menu {
              display: none !important;
            }
            
            .about-section {
              flex-direction: row;
              text-align: left;
            }

            .about-heading {
                font-size: 3rem;
            }
          }
        `}
      </style>

      {/* Header & Navigation */}
      <header className="header">
        <div className="container header-inner">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="logo">
            My<span className="logo-version">Portifolio</span>
          </a>
          {/* Desktop Navigation */}
          <nav className="nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-button">
            {isMobileMenuOpen ? (
              <XIcon className="icon" />
            ) : (
              <MenuIcon className="icon" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className={`mobile-menu-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main className="container main-content">
        <AboutSection />
        <div className="divider"></div>
        <SkillsSection />
        <div className="divider"></div>
        <ProjectsSection />
        <div className="divider"></div>
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Vitae. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;