import React from 'react';
import { Link } from 'react-router-dom';
import './main-header.css';

const MainHeader = () => {
  return (
    <header className='main-header'>
      <h1 className='home-link'><Link to='/' className='nav-links'>Message Board</Link></h1>
    </header>
  );
}

export default MainHeader;
