import React from "react";
import './styles.scss'

const RoverInfo = () => {
    return (
        <div>
            <div className="rover-info">
                <img className="rover-profile-img" src={"/assets/placeholder.jpg"} />
                <p className={"rover-name"}>Rover Name</p>
            </div>
            <div className={"rover-status"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    )
}

export default RoverInfo