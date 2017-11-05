import React from 'react';
import {Provider} from 'react-redux';
import {
  Switch, Route
} from 'react-router-dom';
import MainHeader    from './components/main-header';
import Home          from './views/home';
import Categories    from './views/categories';
import store from './store';
import './app.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={Categories} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
