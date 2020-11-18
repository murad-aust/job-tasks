import React from 'react';
import Home from './Components/Task-1/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ImagesPreview from './Components/Task-2_3/ImagesPreview';
import ImageDraggable from './Components/Task-4_5_6/Draggable';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/imagePreview">
            <ImagesPreview></ImagesPreview>
        </Route>
        <Route path="/draggable">
          <ImageDraggable></ImageDraggable>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
