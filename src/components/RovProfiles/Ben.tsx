import React from "react";
import "./ProfileStyles.scss"

const Ben = () => {
    return (
        <div className={"rover-profile"}>
            <h1 className={"rover-name"}>Ben</h1>
            <div className={"body"}>
                <img className={"profile-pic"} src={""}/>
                <p>Ben has been stranded on Mars since 2006, after a Softwire joke about spacetime travel got out of hand. NASA is aware of Ben's presence, but can't justify the expense of bringing him home until he sends them some photos. Ben has yet to provide any Mars Pics, claiming this is due to his lack of either front or rear hazard avoidance cameras.</p>
                <p>Hint: If you play MarsQuake for long enough, you might catch sight of a stray Ben.</p>
            </div>
        </div>
    )
};

export default Ben