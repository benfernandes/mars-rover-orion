import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StarrySky from './components/Background/StarrySky'
import CuriosityProfile from './pages/RoverProfiles/CuriosityProfile';
import RovGuessrPage from './pages/RovGuessrPage';
import NavBarFunc from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
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
            {/*<Route path="/Rovers">*/}
            {/*    <Route path="/Opportunity">*/}
            {/*        <OpportunityProfile/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/Curiosity">*/}
            {/*        <CuriosityProfile/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/Spirit">*/}
            {/*        <SpiritProfile/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/Ben">*/}
            {/*        <BenProfile/>*/}
            {/*    </Route>*/}
            {/*</Route>*/}
        </Switch>
    </Router>
  );
}

export default App;
