import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/search">Search</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="bottom-nav-copyright">
        © {new Date().getFullYear()} Demo App. All rights reserved.
      </div>
    </div>
  );
};

export default BottomNav;