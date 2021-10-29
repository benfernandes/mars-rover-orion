import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarrySky from './components/Background/StarrySky'
import RoverDetailsPage from './pages/RoverDetailsPage';
import CuriosityProfile from './pages/RoverProfiles/CuriosityProfile';
import RovGuessrPage from './pages/RovGuessrPage';
import NavBarFunc from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import BenHomePage from "./pages/HomePageBen/BenHomePage";
import NavBarFunc from "./components/NavBar/NavBar";
import RovGuessrPage from './pages/RovGuessrPage/RovGuessrPage';
import NonExistentPage from './pages/404Page/404Page';
import GalleryPage from "./pages/GalleryPage";
import OpportunityProfile from "./pages/RoverProfiles/OpportunityProfile";
import SpiritProfile from "./pages/RoverProfiles/SpiritProfile";
import BenProfile from "./pages/RoverProfiles/BenProfile";


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
            <Route path="/Rovers/Curiosity">
                <CuriosityProfile/>
            </Route>
            <Route path="/Rovers/Opportunity">
                <OpportunityProfile/>
            </Route>
            <Route path="/Rovers/Spirit">
                <SpiritProfile/>
            </Route>
            <Route path="/Rovers/Ben">
                <BenProfile/>
            </Route>
            <Route path="">
                <NonExistentPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
