import React from "react";
import "./PhotoViewer.scss"

const PhotoViewer = (props: { src: string | undefined; }) => (

    <div className={"PhotoViewer"}>
        {
            props.src === undefined
                ?
                <h2>There are no images :( Try again! </h2>
                :
                <img src={props.src} alt={"Photo being viewed"}/>
        }
    </div>
)

export default PhotoViewer;
