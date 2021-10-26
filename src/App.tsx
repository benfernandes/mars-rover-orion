import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from './pages/Home';
import { RovGuessr } from './pages/RovGuessr';
import { RoverDetails } from './pages/RoverDetails';
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Router>
        {/* Components that are on all pages go outside of switch */}
        <Switch>
            <Route path="">
                <HomePage/>
            </Route>
            <Route path="/gallery">
                <GalleryPage/>
            </Route>
            <Route path="/RovGuessr">
                <RovGuessr/>
            </Route>
            <Route path="/roverDetails">
                <RoverDetails/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
