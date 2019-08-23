import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MediaProvider } from './Context/MediaQuery';

import Home from './pages/Home/Home';
import Todo from './pages/ToDo/Todo';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article';
import Editor from './pages/Blog/Editor';

const App = () => {

  return (
    <MediaProvider>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Todo} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/blog/:title" component={Article} />
        </Switch>

    </MediaProvider>
  );
};

export default App;
