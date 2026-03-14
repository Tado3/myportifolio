import React, { useState, useEffect, useMemo } from 'react';

// --- IMPORT ALL ICONS ---
// Add these imports at the top of your file
import {
  AtomIcon,
  CodeIcon,
  PaletteIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  ExternalLinkIcon,
  DatabaseIcon,
  CloudIcon,
  DownloadIcon
} from 'lucide-react';  // If using lucide-react

// OR if you're using your custom SVG icons, make sure they're exported properly

// Define types (keep your existing type definitions)
type NavLink = {
  id: string;
  label: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
};

type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: number;
};

// --- FIXED: Button Component with proper export ---
const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string; 
  type?: 'button' | 'submit' | 'reset'; 
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  icon,
  variant = 'primary',
  disabled = false,
}) => {
  const variantClass = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline',
  }[variant];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${variantClass} ${className}`}
      disabled={disabled}
    >
      {children}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

// --- FIXED: About Section Component (make sure it's defined before App) ---
const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="about" className="section about-section animate-fadeIn">
      <div className="profile-image-container">
        <img
          src="/image/tado.png"
          alt="Tadiwanashe C Nyatowera"
          className="profile-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x300?text=TCN';
          }}
        />
      </div>
      <div className="about-content">
        <div className="about-badge">Full-Stack Developer</div>
        <h1 className="about-heading">
          Hi, I'm <span className="gradient-text">Tadiwanashe C Nyatowera</span>
        </h1>
        <p className="about-paragraph">
          I architect and build innovative digital solutions that solve real-world problems. 
          With expertise in full-stack development, I transform complex requirements into 
          elegant, scalable applications.
        </p>
        
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/tadiwanashe" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <GithubIcon className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/tadiwanashe" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <LinkedinIcon className="social-icon" />
          </a>
          <Button 
            onClick={handleDownloadCV} 
            variant="outline" 
            icon={<DownloadIcon width={18} height={18} />}
            className="download-cv-btn"
          >
            Download CV
          </Button>
        </div>
        
        <Button icon={<ArrowRightIcon className="icon-arrow-right" />}>
          View My Work
        </Button>
      </div>
    </section>
  );
};

// --- Skills Section Component ---
const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { 
      title: 'Frontend Development', 
      description: 'React, TypeScript, Next.js, Vue.js, Tailwind CSS', 
      icon: <CodeIcon className="skill-icon" />,
      level: 95
    },
    { 
      title: 'UI/UX Design', 
      description: 'Figma, Adobe XD, User Research, Wireframing', 
      icon: <PaletteIcon className="skill-icon" />,
      level: 85
    },
    { 
      title: 'Backend Development', 
      description: 'Node.js, Python, Django, REST APIs, GraphQL', 
      icon: <AtomIcon className="skill-icon" />,
      level: 90
    },
    { 
      title: 'Database Management', 
      description: 'PostgreSQL, MongoDB, MySQL, Redis', 
      icon: <DatabaseIcon className="skill-icon" />,
      level: 88
    },
    { 
      title: 'DevOps & Cloud', 
      description: 'Docker, AWS, Firebase, Vercel, CI/CD', 
      icon: <CloudIcon className="skill-icon" />,
      level: 82
    }
  ];

  return (
    <section id="skills" className="section skills-section animate-fadeIn">
      <div className="section-header">
        <h2 className="section-heading gradient-text">Technical Expertise</h2>
        <p className="section-subheading">
          Specialized in modern web technologies and best practices
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-container">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Projects Section Component ---
const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Progression Digital Ark',
      description: 'A cutting-edge digital platform for progression tracking and analytics.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
      featured: true,
      link: 'https://progressiondigitalark.com',
      github: 'https://github.com/tadiwanashe/progression-digital-ark'
    },
    {
      title: 'Starspace Management System',
      description: 'An innovative space management solution for modern facilities.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'WebSocket', 'Redis'],
      featured: true,
      link: 'https://starspace.management',
      github: 'https://github.com/tadiwanashe/starspace'
    },
    {
      title: 'Mutare Dry Port Management System',
      description: 'Comprehensive logistics and port management platform.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'REST API', 'Celery'],
      featured: true,
      link: 'https://mutaredryport.gov.zw',
      github: 'https://github.com/tadiwanashe/mutare-dry-port'
    },
    {
      title: 'Mutare Dry Port HRMS',
      description: 'Advanced Human Resources Management System.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
      featured: false,
      github: 'https://github.com/tadiwanashe/mutare-hrms'
    }
  ];

  return (
    <section id="projects" className="section projects-section animate-fadeIn">
      <div className="section-header">
        <h2 className="section-heading gradient-text">Featured Projects</h2>
        <p className="section-subheading">
          Innovative solutions that drive business success
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="project-featured-badge">Featured</div>}
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLinkIcon className="icon-small" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub <GithubIcon className="icon-small" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Contact Section Component ---
const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section animate-fadeIn">
      <div className="section-header">
        <h2 className="section-heading gradient-text">Let's Work Together</h2>
        <p className="section-subheading">
          Have a project in mind? I'd love to hear about it.
        </p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <strong>Email:</strong>
              <a href="mailto:tadiwanashe@example.com">tadiwanashe@example.com</a>
            </div>
            <div className="contact-detail-item">
              <strong>Location:</strong>
              <span>Zimbabwe</span>
            </div>
            <div className="contact-detail-item">
              <strong>Availability:</strong>
              <span className="availability-badge">Open to opportunities</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="form-input" 
              value={formData.subject}
              onChange={handleChange}
              required 
              placeholder="Project Inquiry"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              className="form-textarea" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <Button 
            type="submit" 
            className="button-full-width"
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending...' : 
             formStatus === 'success' ? 'Message Sent!' : 
             'Send Message'}
          </Button>
          {formStatus === 'error' && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

// --- FIXED: Main App Component with default export ---
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
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
      {/* Keep all your existing styles here */}
      <style>{/* Your CSS styles */}</style>

      <header className="header">
        <div className="container header-inner">
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} 
            className="logo"
          >
            TCN<span className="logo-version">.dev</span>
          </a>
          
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
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="mobile-menu-button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        
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

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Tadiwanashe C Nyatowera. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- FIXED: Add default export ---
export default App;
