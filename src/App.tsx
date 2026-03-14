const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Implement CV download
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="about" className="section about-section animate-fadeIn">
      <div className="profile-image-container">
        <img
          src="/image/tado.png"  // Fixed: removed the '../'
          alt="Tadiwanashe C Nyatowera"
          className="profile-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error('Image failed to load:', target.src);
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
          elegant, scalable applications. My passion lies in creating systems that make a 
          difference—from HR management platforms to space management solutions.
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
