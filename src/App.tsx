import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarrySky from './components/Background/StarrySky'
import RoverDetailsPage from './pages/RoverDetailsPage';
import HomePage from "./pages/HomePage/HomePage";
import BenHomePage from "./pages/HomePageBen/BenHomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import NavBarFunc from "./components/NavBar/NavBar";
import RovGuessrPage from './pages/RovGuessrPage/RovGuessrPage';
import NonExistentPage from './pages/404Page/404Page';


function App() {
  return (
    <Router>
        <NavBarFunc/>
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

            <Route path="">
                <NonExistentPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
