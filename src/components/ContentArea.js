import React from 'react';
import './ContentArea.css';

const ContentArea = ({ selectedNav }) => {
  const renderContent = () => {
    switch (selectedNav) {
      case 'home':
        return (
          <div className="content-home">
            <h2>Hi! I'm Keerthana</h2>
            <div className="system-info">
              <p>Portfolio Status: ACTIVE</p>
              <p>Current Time: {new Date().toLocaleString()}</p>
            </div>
            <div className="welcome-message">
              <p>Welcome to my developer portfolio built with a retro aesthetic.</p>
              <p>Select an option from the navigation panel to explore my work.</p>
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="content-about">
            <h2>DEVELOPER PROFILE</h2>
            <div className="about-content">
              <h3>Professional Summary</h3>
              <p>Name: Keerthana Telaprolu</p>
              <p>Role: Software Engineer @ Januity Health</p>
              <p>Experience: 2+ Years</p>
              <p>Location: California, USA</p>
              
              <h3>Technical Skills</h3>
              <p>Languages: Java, Python, JavaScript, SQL, C#</p>
              <p>Frameworks/Libraries: Spring, Spring Boot, JUnit, Hibernate, Selenium, Django, React, Socket.io, Mockito</p>
              <p>Databases: PostgreSQL, SQL Server</p>
              <p>Developer Tools: Git, GitHub, Docker, Kubernetes, Apache Kafka, Maven, Fiddler, JProfiler</p>
              <p>Cloud Platforms: AWS (S3, EC2, SQS), Azure, GCP, Firebase</p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="content-projects">
            <h2>PROJECT PORTFOLIO</h2>
            <div className="projects-grid">
              <div className="project-item">
                <h3>Project Alpha</h3>
                <p>E-commerce Platform</p>
                <p>Tech: React, Node.js, MongoDB</p>
                <p>Status: COMPLETED</p>
              </div>
              <div className="project-item">
                <h3>Project Beta</h3>
                <p>Task Management App</p>
                <p>Tech: React Native, Firebase</p>
                <p>Status: IN DEVELOPMENT</p>
              </div>
              <div className="project-item">
                <h3>Project Gamma</h3>
                <p>Data Visualization Dashboard</p>
                <p>Tech: React, D3.js, Python</p>
                <p>Status: PLANNING</p>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="content-contact">
            <h2>CONTACT INFORMATION</h2>
            <div className="contact-info">
              <h3>Professional Contact</h3>
              <p>Email: keerthana.telaprolu@gmail.com</p>
              <p>LinkedIn: https://www.linkedin.com/in/keerthana-telaprolu/</p>
              <p>GitHub: https://github.com/keerthana-telaprolu</p>
              <p>Phone: +1 (203) 539-1433</p>
              
              <h3>Availability</h3>
              <p>Response Time: Within 24 hours</p>
              <p>Preferred Contact: Email or LinkedIn</p>
              <p>Business Hours: Monday - Friday, 9 AM - 6 PM</p>
              <p>Freelance: Available for new projects</p>
            </div>
          </div>
        );
      
      // case 'system':
      //   return (
      //     <div className="content-system">
      //       <h2>PORTFOLIO STATISTICS</h2>
      //       <div className="system-stats">
      //         <h3>Development Metrics</h3>
      //         <p>Years of Experience: [X] Years</p>
      //         <p>Projects Completed: 15+</p>
      //         <p>Technologies Mastered: 10+</p>
      //         <p>Client Satisfaction: 100%</p>
              
      //         <h3>Recent Activity</h3>
      //         <div className="log-entries">
      //           <p>[INFO] Portfolio website created</p>
      //           <p>[INFO] React components implemented</p>
      //           <p>[INFO] Retro theme applied</p>
      //           <p>[STATUS] Ready for client review</p>
      //         </div>
      //       </div>
      //     </div>
      //   );
      
      default:
        return <div>Select a navigation item</div>;
    }
  };

  return (
    <main className="content-area">
      <div className="content-header">
        <h2>{selectedNav.toUpperCase()}</h2>
      </div>
      <div className="content-body">
        {renderContent()}
      </div>
      <div className="content-footer">
        <div className="content-help">Press F1 for help</div>
        <div className="content-time">{new Date().toLocaleTimeString()}</div>
      </div>
    </main>
  );
};

export default ContentArea;
