import React, { useContext } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { MediaContext } from './Context/MediaQuery';
import { EditorProvider } from './Context/EditorContext';
import ScrollToTop from './Context/ScrollToTop';

import Navigation from './components/Navigation/Nav';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article';
import Editor from './pages/Editor/Editor';
import EditorSelection from './pages/Editor/EditorSelection';
import Notify from './components/Notification/Notification';

const App = ({ history }) => {

  const context = useContext(MediaContext);

  let isEditor;
  try {
    const location = history.location.pathname.split("/");
    isEditor = location[1] === "editor" && location.length === 3
  } catch (error) { }

  return (
    <>
        <ScrollToTop />
        <Notify
          notify={context.notify}
          handleClose={context.closeNotify}
        />
        {isEditor ? "" : <Navigation />}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />

          <EditorProvider>
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:title" component={Article} />
            <Route path="/editor" exact component={EditorSelection} />
            <Route path="/editor/:title" component={Editor} />
          </EditorProvider>
        </Switch>
    </>
  );
};

export default withRouter(App);