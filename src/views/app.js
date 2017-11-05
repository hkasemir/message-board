import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <section>
        <header className='main-header'>
          <h1 className='home-link'>Message Board</h1>
          <nav>
            <ul className='nav-links-ul'>
              <li className='nav-links'>categories</li>
              <li className='nav-links'>posts</li>
            </ul>
          </nav>
        </header>
        <p>
          like reddit, maybe?
        </p>
      </section>
    );
  }
}

export default App;
