import React from "react";
import "./ProfileStyles.scss";

const Curiosity = () => {
    return (
        <div className={"rover-profile"}>
            <h1 className={"rover-name"}>Curiosity</h1>
            <div className={"body"}>
                <img className={"profile-pic"} src={"/assets/RoverProfilePics/curiosity.jpg"}/>
                <p>curiosity is a very good boy and i love him</p>
            </div>
        </div>
    )
}

export default Curiosity
