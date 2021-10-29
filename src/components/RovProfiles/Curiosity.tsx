import React from "react";
import "./ProfileStyles.scss";

const Curiosity = () => {
    return (
        <div className={"rover-profile"}>
            <div className={"border"}>
                <h1 className={"rover-name"}><span>Curiosity</span></h1>
                <div className={"body"}>
                    <p>Designed by NASA's Mars Science Laboratory to explore the Gale crater, Curiosity landed inside said crater on the 6th of August 2012. In December 2012 Curiosity's original two-year mission was extended indefinitely, and they have remained active for over nine years. Curiosity's design has been used as the basis for NASA's 2021 Perseverance rover mission.</p>
                    <img className={"profile-pic"} src={"/assets/RoverProfilePics/curiosity.jpg"}/>
                </div>
            </div>
        </div>
    )
}

export default Curiosity
