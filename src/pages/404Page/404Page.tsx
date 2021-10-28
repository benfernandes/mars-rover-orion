import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss'

const NonExistentPage: React.FC = () => {
    return <div className='wrong-page'>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1639612800&v=beta&t=7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4"/>
        <div className='wrong-page-description'>
            <h1>Uh Oh</h1>
            <p>You stumbled upon a non existent page</p>
            <p>(Or maybe just not yet discovered!)</p>
            <Link to='/'>Go Home</Link>
        </div>
    </div>;
}

export default NonExistentPage
