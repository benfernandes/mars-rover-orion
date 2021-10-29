import React from 'react';
import './App.scss';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StarrySky from './components/Background/StarrySky';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import RoverDetailsPage from './pages/RoverDetailsPage';
import RovGuessrPage from './pages/RovGuessrPage';
import NavBarFunc from "./components/NavBar/NavBar";
import NonExistentPage from './pages/404Page/404Page';

function App() {
  return (
    <Router>
        <NavBarFunc/>
        {/* Components that are on all pages go outside of switch */}
        <StarrySky numberOfStars={250} maxSize={3}/>
        <Switch>
            <Route path="/" exact>
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

            <Route path="">
                <NonExistentPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
