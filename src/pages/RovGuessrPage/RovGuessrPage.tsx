import React from 'react';
import './styles.scss'

const RovGuessrPage = () => {
    return <div className='rov-guessr-page'>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1639612800&v=beta&t=7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4"/>
        <ul className='rover-selection'>
            <li><button>Curiosity</button></li>
            <li><button>Perseverance</button></li>
            <li><button>Spirit</button></li>
        </ul>
    </div>;
}

export default RovGuessrPage
