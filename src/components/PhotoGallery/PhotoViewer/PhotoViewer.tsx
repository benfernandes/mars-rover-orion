import React from "react";
import "./PhotoViewer.scss"

//TODO Remove props : any

const PhotoViewer = (props : any) => (

    <div className={"PhotoViewer"}>
        <img src={props.src} alt={"Photo being viewed"}/>
    </div>
)

export default PhotoViewer;
