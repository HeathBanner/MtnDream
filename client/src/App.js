import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { MediaProvider } from './Context/MediaQuery';

import Home from './pages/Home/Home';
import Todo from './pages/ToDo/Todo';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Editor from './pages/Blog/Editor';

const App = () => {

  return (
    
    <MediaProvider>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Todo} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/editor" exact component={Editor} />
        </Switch>

    </MediaProvider>
  );
}

export default App;
