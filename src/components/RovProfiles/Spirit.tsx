import React from "react";
import "./ProfileStyles.scss"

const Spirit = () => {
    return (
        <div className={"rover-profile"}>
            <div className={"border"}>
                <div className={"rover-name"}><span>Spirit</span></div>
                <div className={"body"}>
                    <p>Spirit landed on Mars on the 4th of January, 2004 - three weeks before his twin, Opportunity.
                        Designed by NASA's Jet Propulsion Laboratory to explore opposite side's of the planet, the two
                        rovers never saw each other after they left Earth.</p>
                    <img className={"profile-pic"} src={"/assets/RoverProfilePics/spirit.jpg"}/>
                </div>
            </div>
        </div>
    )
}

export default Spirit