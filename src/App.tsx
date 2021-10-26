import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RovGuessr } from './pages/RovGuessrPage';
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import RoverDetailsPage from './pages/RoverDetailsPage';

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
                <RovGuessrPage/>
            </Route>
            <Route path="/roverDetails">
                <RoverDetailsPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
