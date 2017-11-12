import React from 'react';
import {Provider} from 'react-redux';
import {
  Switch, Route
} from 'react-router-dom';
import MainHeader    from './components/main-header';
import CategorySidebar from './components/category-sidebar';
import Main          from './views/main';
import store from './store';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className='page-content'>
        <MainHeader />
        <main className='main-container'>
          <CategorySidebar />
          <Switch>
            <Route path='/' component={Main} />
            <Route path='/category/:categoryPath' component={Main} />
          </Switch>
        </main>
      </div>
    </Provider>
  );
}

export default App;
