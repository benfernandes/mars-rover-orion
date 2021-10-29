import React from "react";
import "./ProfileStyles.scss"

const Opportunity = () => {
    return (
        <div className={"rover-profile"}>
            <div className={"border"}>
                <h1 className={"rover-name"}><span>Opportunity</span></h1>
                <div className={"body"}>
                    <p>Opportunity (nickname: Oppy) landed on Mars on January 25th, 2004. Thanks to careful operation, Oppy stayed active on the planet for 5,111 sols - 57 times longer than its planned lifespan, and 2903 sols longer than her twin, Spirit.</p>
                    <img className={"profile-pic"} src={"/assets/RoverProfilePics/opportunity.jpg"}/>
                </div>
            </div>
        </div>
    )
}

export default Opportunity
