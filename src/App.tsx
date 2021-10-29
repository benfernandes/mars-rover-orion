import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarrySky from './components/Background/StarrySky'
import RoverDetailsPage from './pages/RoverDetailsPage';
import RovGuessrPage from './pages/RovGuessrPage';
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage";
import BenHomePage from "./pages/HomePageBen/BenHomePage";

function App() {
  return (
    <Router>
        {/* Components that are on all pages go outside of switch */}
        <StarrySky numberOfStars={250} maxSize={3}/>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
                <HomePage/>
            </Route>
            <Route exact path="/benhome">
                <BenHomePage />
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
