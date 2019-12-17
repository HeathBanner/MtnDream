import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MediaProvider } from './Context/MediaQuery';
import { EditorProvider } from './Context/EditorContext';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article';
import Editor from './pages/Editor/Editor';
import EditorSelection from './pages/Editor/EditorSelection';

const App = () => {

  return (
    <MediaProvider>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:title" component={Article} />

          <EditorProvider>
            <Route path="/editor" exact component={EditorSelection} />
            <Route path="/editor/:title" component={Editor} />
          </EditorProvider>
          
        </Switch>

    </MediaProvider>
  );
};

export default App;
