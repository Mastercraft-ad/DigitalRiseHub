// App.jsx
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

export default function App() {
  return (
    <div style={styles.wrapper}>
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Main Body Content (Expands to push footer down) */}
    
        <h1>Welcome to the Site</h1>
        <p>This is where your dynamic page or router view will load.</p>
     

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
