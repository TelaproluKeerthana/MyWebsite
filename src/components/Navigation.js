import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Navigation.css';

const Navigation = ({ selectedNav, onNavSelect }) => {
  const navItems = useMemo(() => [
    { id: 'home', label: 'HOME', description: 'Portfolio Overview' },
    { id: 'about', label: 'ABOUT', description: 'Developer Profile' },
    { id: 'projects', label: 'PROJECTS', description: 'Portfolio Showcase' },
    { id: 'contact', label: 'CONTACT', description: 'Get In Touch' },
    // { id: 'system', label: 'SYSTEM', description: 'Portfolio Statistics' }
  ], []);

  const currentIndex = navItems.findIndex(item => item.id === selectedNav);
  const navRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(currentIndex);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle keyboard navigation on non-mobile devices
      if (isMobile) return;
      
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = prev <= 0 ? navItems.length - 1 : prev - 1;
            if (navRefs.current[newIndex]) {
              navRefs.current[newIndex].focus();
            }
            return newIndex;
          });
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => {
            const newIndex = prev >= navItems.length - 1 ? 0 : prev + 1;
            if (navRefs.current[newIndex]) {
              navRefs.current[newIndex].focus();
            }
            return newIndex;
          });
          break;
        case 'Home':
          event.preventDefault();
          setFocusedIndex(0);
          if (navRefs.current[0]) {
            navRefs.current[0].focus();
          }
          break;
        case 'End':
          event.preventDefault();
          setFocusedIndex(navItems.length - 1);
          if (navRefs.current[navItems.length - 1]) {
            navRefs.current[navItems.length - 1].focus();
          }
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < navItems.length) {
            onNavSelect(navItems[focusedIndex].id);
          }
          break;
        default:
          break;
      }
    };

    const navigationPanel = document.querySelector('.navigation-panel');
    if (navigationPanel && !isMobile) {
      navigationPanel.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (navigationPanel) {
        navigationPanel.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [focusedIndex, onNavSelect, navItems, isMobile]);

  return (
    <nav className="navigation-panel" tabIndex={isMobile ? -1 : 0}>
      <div className="nav-header">
        <h3>MENU</h3>
      </div>
      <div className="nav-menu">
        {navItems.map((item, index) => (
          <div
            key={item.id}
            ref={el => navRefs.current[index] = el}
            className={`nav-item ${selectedNav === item.id ? 'selected' : ''} ${!isMobile && focusedIndex === index ? 'focused' : ''}`}
            onClick={() => onNavSelect(item.id)}
            tabIndex={isMobile ? -1 : -1}
          >
            <div className="nav-label">{item.label}</div>
            <div className="nav-description">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="nav-footer">
        <div className="nav-help">
          {isMobile ? 'TAP TO SELECT' : '↑↓=NAV | ENTER=SELECT'}
        </div>
        <div className="nav-version">v2.0</div>
      </div>
    </nav>
  );
};

export default Navigation;
