import React from "react";
import './styles.scss'

const RoverInfo = () => {
    return (
        <div className={"rover-info-wrapper"}>
            <div className="rover-container">
                <div className="rover-info">
                    <div className="rover-details">
                        <img className="rover-profile-img" src={"/assets/placeholder.jpg"} alt="small picture of rover"/>
                        <p className={"rover-name"}>Rover Name</p>
                    </div>
                    <div className={"rover-status"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="rover-info">
                    <div className="rover-details reverse">
                        <p className={"rover-name"}>Rover Name</p>
                        <img className="rover-profile-img" src={"/assets/placeholder.jpg"} alt="small picture of rover"/>
                    </div>
                    <div className={"rover-status"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="rover-info">
                    <div className="rover-details">
                        <img className="rover-profile-img" src={"/assets/placeholder.jpg"} alt="small picture of rover"/>
                        <p className={"rover-name"}>Rover Name</p>
                    </div>
                    <div className={"rover-status"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoverInfo