import React from "react";
import {Link} from "react-router-dom";
import './styles.scss';

const RoverInfo = () => {
    return (
        <div className={"rover-info-wrapper"}>
            <div className="rover-container">
                <div className="rover-info">
                    <div className="rover-details">
                        <img className="rover-profile-img" src={"/assets/RoverProfilePics/opportunity.jpg"} alt="small picture of rover"/>
                        <Link to = "/rovers/opportunity"><p className={"rover-name"}>Opportunity</p></Link>
                    </div>
                    <div className={"rover-status"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="rover-info">
                    <div className="rover-details reverse">
                        <Link to = "/rovers/curiosity"><p className={"rover-name"}>Curiosity</p></Link>
                        <img className="rover-profile-img" src={"/assets/RoverProfilePics/curiosity.jpg"} alt="small picture of rover"/>
                    </div>
                    <div className={"rover-status"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="rover-info">
                    <div className="rover-details">
                        <img className="rover-profile-img" src={"/assets/RoverProfilePics/spirit.jpg"} alt="small picture of rover"/>
                        <Link to = "rovers/spirit"><p className={"rover-name"}>Spirit</p></Link>
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
