import React from "react";
import './styles.scss'

const RoverInfo = () => {
    return (
        <div className={"rover-info-wrapper"}>
            <div className="rover-info">
                <div className="rover-details">
                    <img className="rover-profile-img" src={"/assets/placeholder.jpg"} />
                    <p className={"rover-name"}>Rover Name</p>
                </div>
                <div className={"rover-status"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>

            <div className="rover-info">
                <div className="rover-details reverse">
                    <p className={"rover-name"}>Rover Name</p>
                    <img className="rover-profile-img" src={"/assets/placeholder.jpg"} />
                </div>
                <div className={"rover-status"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>

            <div className="rover-info">
                <div className="rover-details">
                    <img className="rover-profile-img" src={"/assets/placeholder.jpg"} />
                    <p className={"rover-name"}>Rover Name</p>
                </div>
                <div className={"rover-status"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>

        </div>
    )
}

export default RoverInfo
