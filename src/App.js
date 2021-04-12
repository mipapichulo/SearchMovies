import React from 'react';
import Home from './pages/Home'
import Results from './pages/Results';
import DetailMovie from './pages/DetailMovie'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import  PropTypes from 'prop-types'

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/movie/:id" component={DetailMovie} />
      </Router>
    </Provider>
      
  );
}

App.propTypes = {
  store : PropTypes.object.isRequired
}

export default App;
