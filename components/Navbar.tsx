import React from 'react';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#111', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>My API Docs</div>
        <SearchBar />
      </div>
    </nav>
  );
}