import React, {useState, useEffect} from 'react';
import './styles.scss'
import {Rover} from '../../APIs/RoverManifest'
import { RovGuessr } from './RovGuessr';

const RovGuessrPage = () => {

    const [currentScore, setCurrentScore] = useState(0);

    const [globalImage, setGlobalImage] = useState("https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1639612800&v=beta&t=7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4");
    const [selectedRover, setSelectedRover] = useState(RovGuessr.selectRandomRover());

    const [game] = useState(new RovGuessr(setGlobalImage, setSelectedRover, setCurrentScore));

    useEffect(() => {
        game.setNewImage()
    }, [])
     

    return <div className='rov-guessr-page'>
        <h1>RovGuessr™</h1>
        <p>Guess what rover this picture was taken from</p>
        <img src={globalImage} alt='currently shown rover'/>
        <ul className='rover-selection'>
            <li>
                <button onClick={() => game.handleSelection(selectedRover, Rover.curiosity)}>
                    Curiosity
                </button>
            </li>
            <li>
            <button onClick={() => game.handleSelection(selectedRover, Rover.opportunity)}>
                    Opportunity
                </button>
            </li>
            <li>
            <button onClick={() => game.handleSelection(selectedRover, Rover.spirit)}>
                    Spirit
                </button>
            </li>
        </ul>

        <div className='game-information'>
            <p>You have: {currentScore} points!</p>
        </div>
    </div>;
}

export default RovGuessrPage
