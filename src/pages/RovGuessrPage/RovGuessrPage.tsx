import React, {useState, useEffect} from 'react';
import './styles.scss'
import {getRandomImage} from '../../APIs/RovGuessrGalleryRepo'
import {Rover} from '../../APIs/RoverManifest'

const RovGuessrPage = () => {

    const [globalImage, setGlobalImage] = useState("https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1639612800&v=beta&t=7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4");

    useEffect(() => {
        getRandomImage(Rover.curiosity).then(img =>
            setGlobalImage(img)
        )
    }, [])
     

    return <div className='rov-guessr-page'>
        <h1>RovGuessr™</h1>
        <p>Guess what rover this picture was taken from</p>
        <img src={globalImage}/>
        <ul className='rover-selection'>
            <li><button>Curiosity</button></li>
            <li><button>Perseverance</button></li>
            <li><button>Spirit</button></li>
        </ul>
    </div>;
}

export default RovGuessrPage
