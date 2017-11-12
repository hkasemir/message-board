import React from 'react';
import {Provider} from 'react-redux';
import {
  Switch, Route
} from 'react-router-dom';
import MainHeader    from './components/main-header';
import CategorySidebar from './components/category-sidebar';
import Home          from './views/home';
import store from './store';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MainHeader />
        <main>
          <CategorySidebar />
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/category/:categoryPath' component={Home} />
          </Switch>
        </main>
      </div>
    </Provider>
  );
}

export default App;
