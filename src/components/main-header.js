import React, {PureComponent} from 'react';
import {
  Link
} from 'react-router-dom';
import './main-header.css';

export default class MainHeader extends PureComponent {
  render() {
    return (
      <header className='main-header'>
        <h1 className='home-link'><Link to='/' className='nav-links'>Message Board</Link></h1>
        <nav>
          <ul className='nav-links-ul'>
            <li><Link to='/categories' className='nav-links'>categories</Link></li>
            <li className='nav-links'>posts</li>
          </ul>
        </nav>
      </header>
    );
  }
}
