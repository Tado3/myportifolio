import React, { useState, useEffect, useMemo } from 'react';

// --- IMPORT ALL ICONS FROM LUCIDE REACT ---
import {
  Atom,
  Code,
  Palette,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
  Database,
  Cloud,
  Download,
  Mail,
  MapPin,
  Briefcase
} from 'lucide-react';

// Define types
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

// --- Button Component ---
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
      <span className="button-text">{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

// --- About Section Component ---
const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="about" className="section about-section animate-fadeIn">
      <div className="about-content">
        <div className="about-badge">
          <Briefcase size={16} />
          <span>Full-Stack Developer</span>
        </div>
        <h1 className="about-heading">
          Hi, I'm <span className="gradient-text">Tadiwanashe C Nyatowera</span>
        </h1>
        <p className="about-paragraph">
          I architect and build innovative digital solutions that solve real-world problems. 
          With expertise in full-stack development, I transform complex requirements into 
          elegant, scalable applications. My passion lies in creating systems that make a 
          difference—from HR management platforms to space management solutions.
        </p>
        
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>

        <div className="contact-info-cards">
          <div className="contact-info-card">
            <Mail className="contact-icon" size={20} />
            <a href="mailto:nyamutoweratadiwanashe@gmail.com">nyamutoweratadiwanashe@gmail.com</a>
          </div>
          <div className="contact-info-card">
            <MapPin className="contact-icon" size={20} />
            <span>Zimbabwe</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/tadiwanashe" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github className="social-icon" size={24} />
          </a>
          <a href="https://linkedin.com/in/tadiwanashe" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin className="social-icon" size={24} />
          </a>
          <Button 
            onClick={handleDownloadCV} 
            variant="outline" 
            icon={<Download size={18} />}
            className="download-cv-btn"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- Skills Section Component ---
const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { 
      title: 'Frontend Development', 
      description: 'React, TypeScript, Next.js, Vue.js, Tailwind CSS, Material-UI', 
      icon: <Code className="skill-icon" size={48} />,
      level: 95
    },
    { 
      title: 'UI/UX Design', 
      description: 'Figma, Adobe XD, User Research, Prototyping', 
      icon: <Palette className="skill-icon" size={48} />,
      level: 85
    },
    { 
      title: 'Backend Development', 
      description: 'Node.js, Python, Django, REST APIs, GraphQL, Microservices', 
      icon: <Atom className="skill-icon" size={48} />,
      level: 90
    },
    { 
      title: 'Database Management', 
      description: 'PostgreSQL, MongoDB, MySQL', 
      icon: <Database className="skill-icon" size={48} />,
      level: 88
    },
    { 
      title: 'DevOps & Cloud', 
      description: 'AWS, Firebase, Vercel, CI/CD, GitHub Actions', 
      icon: <Cloud className="skill-icon" size={48} />,
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
      description: 'A cutting-edge digital platform for progression tracking and analytics. Features include real-time monitoring, predictive analytics, and comprehensive reporting tools for businesses to track their digital transformation journey.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker'],
      featured: true,
      link: 'https://progressiondigitalark.com',
      github: 'https://github.com/tadiwanashe/progression-digital-ark'
    },
    {
      title: 'Starspace Management System',
      description: 'An innovative space management solution for modern facilities. Implements real-time space utilization tracking, booking management, IoT integration, and advanced analytics for optimal resource allocation.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'WebSocket', 'Javascript'],
      featured: true,
      link: 'https://starspace.co.zw',
      github: 'https://github.com/tadiwanashe/starspace'
    },
    {
      title: 'Mutare Dry Port Management System',
      description: 'Comprehensive logistics and port management platform. Handles cargo tracking, customs documentation, warehouse management, and real-time inventory monitoring. Features include automated reporting and multi-user role management.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'REST API', 'Celery'],
      featured: true,
      link: 'https://',
      github: 'https://github.com/tadiwanashe/mutare-dry-port'
    },
    {
      title: 'Mutare Dry Port HRMS',
      description: 'Advanced Human Resources Management System designed specifically for port operations. Streamlines employee management, payroll processing, leave tracking, and performance evaluations with secure role-based access.',
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
                    Live Demo <ExternalLink className="icon-small" size={16} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub <Github className="icon-small" size={16} />
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
    
    // Simulate API call
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
              <Mail className="contact-detail-icon" size={20} />
              <div>
                <strong>Email:</strong>
                <a href="mailto:nyamutoweratadiwanashe@gmail.com">nyamutoweratadiwanashe@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <MapPin className="contact-detail-icon" size={20} />
              <div>
                <strong>Location:</strong>
                <span>Zimbabwe</span>
              </div>
            </div>
            <div className="contact-detail-item">
              <Briefcase className="contact-detail-icon" size={20} />
              <div>
                <strong>Availability:</strong>
                <span className="availability-badge">Open to opportunities</span>
              </div>
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

// --- Main App Component ---
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

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            font-size: 16px;
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
          }

          .app-container {
            min-height: 100vh;
            width: 100%;
            overflow-x: hidden;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (min-width: 640px) {
            .container {
              padding: 0 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .container {
              padding: 0 2rem;
            }
          }

          /* Header Styles */
          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 0.75rem 0;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          @media (min-width: 768px) {
            .header {
              padding: 1rem 0;
            }
          }

          .header-scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            letter-spacing: -0.5px;
            transition: opacity 0.3s ease;
            white-space: nowrap;
          }

          @media (min-width: 768px) {
            .logo {
              font-size: 1.75rem;
            }
          }

          .logo:hover {
            opacity: 0.8;
          }

          .logo-version {
            font-weight: 400;
            color: #667eea;
            -webkit-text-fill-color: #667eea;
          }

          .nav {
            display: none;
            gap: 1.5rem;
            font-size: 0.95rem;
            font-weight: 500;
          }

          @media (min-width: 1024px) {
            .nav {
              gap: 2.5rem;
              font-size: 1rem;
            }
          }

          @media (min-width: 768px) {
            .nav {
              display: flex;
            }
          }

          .nav-link {
            text-decoration: none;
            color: #4a5568;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
            white-space: nowrap;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: width 0.3s ease;
          }

          .nav-link:hover {
            color: #667eea;
          }

          .nav-link:hover::after,
          .nav-link.active::after {
            width: 100%;
          }

          .nav-link.active {
            color: #667eea;
          }

          .mobile-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
            color: #667eea;
          }

          @media (min-width: 768px) {
            .mobile-menu-button {
              display: none;
            }
          }

          .mobile-menu-button:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .mobile-menu {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            text-align: center;
            padding: 1rem;
            transition: all 0.3s ease;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            z-index: 999;
          }

          @media (min-width: 768px) {
            .mobile-menu {
              display: none !important;
            }
          }

          .mobile-menu.open {
            max-height: 400px;
            opacity: 1;
            padding: 1rem;
          }

          .mobile-menu-link {
            display: block;
            padding: 0.75rem;
            font-size: 1rem;
            text-decoration: none;
            color: #4a5568;
            transition: all 0.3s ease;
            border-radius: 0.5rem;
          }

          .mobile-menu-link:hover {
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
          }

          .mobile-menu-link.active {
            color: #667eea;
            background: rgba(102, 126, 234, 0.1);
          }

          /* Main Content */
          .main-content {
            padding-top: 64px;
            min-height: 100vh;
            width: 100%;
          }

          @media (min-width: 768px) {
            .main-content {
              padding-top: 80px;
            }
          }

          .section {
            padding: 3rem 0;
            scroll-margin-top: 64px;
            width: 100%;
          }

          @media (min-width: 768px) {
            .section {
              padding: 4rem 0;
              scroll-margin-top: 80px;
            }
          }

          @media (min-width: 1024px) {
            .section {
              padding: 6rem 0;
            }
          }

          .section-header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .section-header {
              margin-bottom: 3rem;
            }
          }

          @media (min-width: 1024px) {
            .section-header {
              margin-bottom: 4rem;
            }
          }

          .section-heading {
            font-size: 1.75rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
            color: #ffffff;
            line-height: 1.2;
          }

          @media (min-width: 640px) {
            .section-heading {
              font-size: 2rem;
            }
          }

          @media (min-width: 1024px) {
            .section-heading {
              font-size: 2.5rem;
              margin-bottom: 1rem;
            }
          }

          .section-subheading {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .section-subheading {
              font-size: 1rem;
            }
          }

          @media (min-width: 1024px) {
            .section-subheading {
              font-size: 1.125rem;
            }
          }

          .divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
            margin: 1.5rem 0;
          }

          @media (min-width: 768px) {
            .divider {
              margin: 2rem 0;
            }
          }

          /* Gradient Text */
          .gradient-text {
            background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* Animations */
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
            animation: fadeIn 0.8s ease-out forwards;
          }

          /* Button Styles */
          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            text-decoration: none;
            gap: 0.5rem;
            white-space: nowrap;
          }

          @media (min-width: 768px) {
            .button {
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
            }
          }

          .button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
          }

          .button-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .button-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }

          .button-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .button-secondary:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.3);
          }

          .button-outline {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
          }

          .button-outline:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }

          .button-icon {
            transition: transform 0.3s ease;
            display: inline-flex;
            align-items: center;
          }

          .button:hover:not(:disabled) .button-icon {
            transform: translateX(4px);
          }

          .button-full-width {
            width: 100%;
          }

          /* About Section */
          .about-section {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: calc(100vh - 64px);
            padding: 2rem 1rem;
          }

          @media (min-width: 768px) {
            .about-section {
              min-height: calc(100vh - 80px);
              padding: 3rem 2rem;
            }
          }

          .about-content {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }

          .about-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 0.8rem;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .about-badge {
              padding: 0.5rem 1rem;
              font-size: 0.875rem;
              margin-bottom: 1.5rem;
            }
          }

          .about-heading {
            font-size: 1.75rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            color: #fff;
          }

          @media (min-width: 640px) {
            .about-heading {
              font-size: 2.25rem;
            }
          }

          @media (min-width: 1024px) {
            .about-heading {
              font-size: 3rem;
              margin-bottom: 1.5rem;
            }
          }

          .about-paragraph {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 1.5rem;
            line-height: 1.6;
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .about-paragraph {
              font-size: 1rem;
              margin-bottom: 2rem;
              padding: 0;
            }
          }

          @media (min-width: 1024px) {
            .about-paragraph {
              font-size: 1.125rem;
              line-height: 1.8;
            }
          }

          .stats-container {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
          }

          @media (min-width: 768px) {
            .stats-container {
              gap: 2rem;
              margin-bottom: 2rem;
            }
          }

          @media (min-width: 1024px) {
            .stats-container {
              gap: 3rem;
            }
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 80px;
          }

          .stat-number {
            font-size: 1.5rem;
            font-weight: 800;
            color: #fff;
          }

          @media (min-width: 768px) {
            .stat-number {
              font-size: 1.75rem;
            }
          }

          @media (min-width: 1024px) {
            .stat-number {
              font-size: 2rem;
            }
          }

          .stat-label {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
          }

          @media (min-width: 768px) {
            .stat-label {
              font-size: 0.875rem;
            }
          }

          .contact-info-cards {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .contact-info-cards {
              gap: 1.5rem;
              margin-bottom: 2rem;
            }
          }

          @media (min-width: 1024px) {
            .contact-info-cards {
              gap: 2rem;
            }
          }

          .contact-info-card {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .contact-info-card {
              width: auto;
              padding: 0.6rem 1.2rem;
            }
          }

          @media (min-width: 768px) {
            .contact-info-card {
              padding: 0.75rem 1.5rem;
            }
          }

          .contact-info-card a,
          .contact-info-card span {
            color: #fff;
            text-decoration: none;
            font-size: 0.85rem;
            word-break: break-word;
          }

          @media (min-width: 768px) {
            .contact-info-card a,
            .contact-info-card span {
              font-size: 0.95rem;
            }
          }

          .contact-info-card a:hover {
            text-decoration: underline;
          }

          .contact-icon {
            color: #fff;
            flex-shrink: 0;
          }

          .social-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .social-links {
              gap: 1rem;
            }
          }

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          @media (min-width: 768px) {
            .social-link {
              width: 48px;
              height: 48px;
            }
          }

          .social-link:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
          }

          .social-icon {
            width: 20px;
            height: 20px;
          }

          @media (min-width: 768px) {
            .social-icon {
              width: 24px;
              height: 24px;
            }
          }

          .download-cv-btn {
            height: 40px;
          }

          @media (min-width: 768px) {
            .download-cv-btn {
              height: 48px;
            }
          }

          /* Skills Section */
          .skills-section {
            background: rgba(255, 255, 255, 0.05);
            width: 100%;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (min-width: 640px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .skills-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 2rem;
            }
          }

          .skill-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
          }

          @media (min-width: 768px) {
            .skill-card {
              padding: 1.75rem;
            }
          }

          @media (min-width: 1024px) {
            .skill-card {
              padding: 2rem;
            }
          }

          .skill-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .skill-icon-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1.25rem;
          }

          .skill-icon {
            width: 40px;
            height: 40px;
            color: #fff;
          }

          @media (min-width: 768px) {
            .skill-icon {
              width: 48px;
              height: 48px;
            }
          }

          .skill-title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: #fff;
            text-align: center;
          }

          @media (min-width: 768px) {
            .skill-title {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }

          @media (min-width: 1024px) {
            .skill-title {
              font-size: 1.25rem;
            }
          }

          .skill-description {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.5;
            margin-bottom: 1.25rem;
            text-align: center;
            font-size: 0.85rem;
          }

          @media (min-width: 768px) {
            .skill-description {
              font-size: 0.9rem;
              margin-bottom: 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .skill-description {
              font-size: 0.95rem;
            }
          }

          .skill-level {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }

          @media (min-width: 768px) {
            .skill-level {
              height: 6px;
            }
          }

          .skill-level-bar {
            height: 100%;
            background: linear-gradient(90deg, #fff, #f0f0f0);
            border-radius: 10px;
            transition: width 1s ease;
          }

          /* Projects Section */
          .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          @media (min-width: 640px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
            }
          }

          .project-card {
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
          }

          .project-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          @media (min-width: 1024px) {
            .project-card:hover {
              transform: translateY(-8px);
            }
          }

          .project-card.featured {
            border: 2px solid #fff;
            background: rgba(255, 255, 255, 0.15);
          }

          .project-featured-badge {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            padding: 0.2rem 0.75rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #fff;
            font-size: 0.7rem;
            font-weight: 600;
            border-radius: 50px;
            z-index: 1;
          }

          @media (min-width: 768px) {
            .project-featured-badge {
              top: 1rem;
              right: 1rem;
              padding: 0.25rem 1rem;
              font-size: 0.75rem;
            }
          }

          .project-card-content {
            padding: 1.5rem;
          }

          @media (min-width: 768px) {
            .project-card-content {
              padding: 1.75rem;
            }
          }

          @media (min-width: 1024px) {
            .project-card-content {
              padding: 2rem;
            }
          }

          .project-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: #fff;
            padding-right: 2rem;
          }

          @media (min-width: 768px) {
            .project-title {
              font-size: 1.35rem;
            }
          }

          @media (min-width: 1024px) {
            .project-title {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }
          }

          .project-description {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 1.25rem;
            line-height: 1.5;
            font-size: 0.85rem;
          }

          @media (min-width: 768px) {
            .project-description {
              font-size: 0.9rem;
              margin-bottom: 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .project-description {
              font-size: 0.95rem;
            }
          }

          .project-technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 1.25rem;
          }

          @media (min-width: 768px) {
            .project-technologies {
              gap: 0.5rem;
              margin-bottom: 1.5rem;
            }
          }

          .technology-tag {
            padding: 0.2rem 0.6rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.65rem;
            font-weight: 500;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          @media (min-width: 768px) {
            .technology-tag {
              padding: 0.25rem 0.75rem;
              font-size: 0.7rem;
            }
          }

          @media (min-width: 1024px) {
            .technology-tag {
              font-size: 0.75rem;
            }
          }

          .project-links {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          @media (min-width: 768px) {
            .project-links {
              gap: 1.5rem;
            }
          }

          .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            color: #fff;
            font-weight: 600;
            font-size: 0.8rem;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          @media (min-width: 768px) {
            .project-link {
              font-size: 0.875rem;
            }
          }

          .project-link:hover {
            color: #f0f0f0;
            gap: 0.5rem;
          }

          .icon-small {
            width: 14px;
            height: 14px;
          }

          @media (min-width: 768px) {
            .icon-small {
              width: 16px;
              height: 16px;
            }
          }

          /* Contact Section */
          .contact-section {
            background: rgba(255, 255, 255, 0.05);
            width: 100%;
          }

          .contact-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          @media (min-width: 768px) {
            .contact-container {
              grid-template-columns: 1fr 1.5fr;
              gap: 2.5rem;
              padding: 2rem;
            }
          }

          @media (min-width: 1024px) {
            .contact-container {
              gap: 3rem;
              padding: 3rem;
              border-radius: 30px;
            }
          }

          .contact-info {
            color: #fff;
          }

          .contact-info h3 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }

          @media (min-width: 768px) {
            .contact-info h3 {
              font-size: 1.35rem;
              margin-bottom: 1rem;
            }
          }

          @media (min-width: 1024px) {
            .contact-info h3 {
              font-size: 1.5rem;
            }
          }

          .contact-info p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 1.5rem;
            line-height: 1.6;
            font-size: 0.9rem;
          }

          @media (min-width: 768px) {
            .contact-info p {
              font-size: 0.95rem;
              margin-bottom: 2rem;
            }
          }

          @media (min-width: 1024px) {
            .contact-info p {
              font-size: 1rem;
            }
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-detail-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
          }

          @media (min-width: 768px) {
            .contact-detail-item {
              gap: 1rem;
            }
          }

          .contact-detail-icon {
            color: #fff;
            flex-shrink: 0;
            margin-top: 0.2rem;
          }

          .contact-detail-item strong {
            color: #fff;
            font-size: 0.8rem;
            display: block;
            margin-bottom: 0.2rem;
          }

          @media (min-width: 768px) {
            .contact-detail-item strong {
              font-size: 0.875rem;
            }
          }

          .contact-detail-item a,
          .contact-detail-item span {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.85rem;
            word-break: break-word;
          }

          @media (min-width: 768px) {
            .contact-detail-item a,
            .contact-detail-item span {
              font-size: 0.95rem;
            }
          }

          .contact-detail-item a:hover {
            color: #fff;
          }

          .availability-badge {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            color: #fff !important;
            font-size: 0.7rem;
          }

          @media (min-width: 768px) {
            .availability-badge {
              padding: 0.25rem 0.75rem;
              font-size: 0.75rem;
            }
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          @media (min-width: 768px) {
            .contact-form {
              gap: 1.5rem;
            }
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          @media (min-width: 640px) {
            .form-row {
              grid-template-columns: 1fr 1fr;
            }
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }

          @media (min-width: 768px) {
            .form-group {
              gap: 0.5rem;
            }
          }

          .form-label {
            font-size: 0.8rem;
            font-weight: 500;
            color: #fff;
          }

          @media (min-width: 768px) {
            .form-label {
              font-size: 0.875rem;
            }
          }

          .form-input,
          .form-textarea {
            width: 100%;
            padding: 0.6rem 0.8rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
          }

          @media (min-width: 768px) {
            .form-input,
            .form-textarea {
              padding: 0.75rem 1rem;
              border-radius: 10px;
              font-size: 0.95rem;
            }
          }

          .form-input:focus,
          .form-textarea:focus {
            outline: none;
            border-color: #fff;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
          }

          .form-input:hover,
          .form-textarea:hover {
            border-color: rgba(255, 255, 255, 0.5);
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .form-error {
            color: #ff6b6b;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .form-error {
              font-size: 0.875rem;
            }
          }

          /* Footer */
          .footer {
            background: rgba(0, 0, 0, 0.2);
            padding: 2rem 0;
            text-align: center;
            color: rgba(255, 255, 255, 0.9);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          @media (min-width: 768px) {
            .footer {
              padding: 3rem 0;
            }
          }

          .footer p {
            margin-bottom: 0.5rem;
            font-size: 0.85rem;
          }

          @media (min-width: 768px) {
            .footer p {
              font-size: 0.9rem;
            }
          }

          @media (min-width: 1024px) {
            .footer p {
              font-size: 1rem;
            }
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 0.75rem;
            flex-wrap: wrap;
          }

          @media (min-width: 768px) {
            .footer-links {
              gap: 2rem;
              margin-top: 1rem;
            }
          }

          .footer-links a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.8rem;
          }

          @media (min-width: 768px) {
            .footer-links a {
              font-size: 0.875rem;
            }
          }

          .footer-links a:hover {
            color: #fff;
          }
        `}
      </style>

      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
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
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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

      <main className="main-content">
        <div className="container">
          <AboutSection />
          <div className="divider"></div>
          <SkillsSection />
          <div className="divider"></div>
          <ProjectsSection />
          <div className="divider"></div>
          <ContactSection />
        </div>
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

export default App;
