import React from "react";
import "./PhotoViewer.scss"

const PhotoViewer = (props: { src: string | undefined; }) => (

    <div className={"PhotoViewer"}>
        <img src={props.src} alt={"Photo being viewed"}/>
    </div>
)

export default PhotoViewer;
