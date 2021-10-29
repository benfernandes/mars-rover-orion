import React from "react";
import "./ProfileStyles.scss"

const Opportunity = () => {
    return (
        <div className={"rover-profile"}>
            <div className={"border"}>
                <h1 className={"rover-name"}><span>Opportunity</span></h1>
                <div className={"body"}>
                    <img className={"profile-pic"} src={"/assets/RoverProfilePics/opportunity.jpg"}/>
                    <p>opportunity is alright i guess</p>
                </div>
            </div>
        </div>
    )
}

export default Opportunity
