import React from 'react';
import BottomNav from '../components/BottomNav';
import './BottomNavDemo.css';

const BottomNavDemo = () => {
  return (
    <div className="bottom-nav-demo">
      <div className="demo-showcase">
        <h1>Bottom Navigation Component</h1>
        <p>This is a standalone demo of the Bottom Navigation component.</p>
        
        <div className="component-info">
          <h3>Component Details:</h3>
          <ul>
            <li><strong>Repository:</strong> repo-bottom-nav</li>
            <li><strong>Type:</strong> Footer Component</li>
            <li><strong>Features:</strong> Navigation links, copyright information</li>
          </ul>
        </div>

        <div className="component-code">
          <h3>Implementation Example:</h3>
          <pre>
            <code>{`import { BottomNav } from 'repo-bottom-nav';

// Then in your component:
<BottomNav />`}</code>
          </pre>
        </div>
        
        <div className="component-display">
          <h3>Component Preview:</h3>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default BottomNavDemo;