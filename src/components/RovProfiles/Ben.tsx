import React from "react";
import "./ProfileStyles.scss"

const Ben = () => {
    return (
        <div className={"rover-profile"}>
            <div className={"border"}>
                <h1 className={"rover-name"}><span>Ben</span></h1>
                <div className={"body"}>
                    <p>Ben has been stranded on Mars since 2006, after a Softwire joke about spacetime travel got out of
                        hand. NASA is aware of Ben's presence, but can't justify the expense of bringing him home until
                        he sends them some photos. Ben has yet to provide any Mars Pics, claiming this is due to his
                        lack of either front or rear hazard avoidance cameras.</p>
                    <div className={"ben-containment-unit"}>
                        <img className={"profile-pic"}
                             src={"https://images-ext-1.discordapp.net/external/yKihDaRUGofpttLRr13n09wVRIFY-8TMsgkifBGN8Rg/%3Fe%3D1639612800%26v%3Dbeta%26t%3D7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4/https/media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334"}/>
                        <p>Hint: If you play MarsQuake for long enough, you might catch sight of a stray Ben.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Ben