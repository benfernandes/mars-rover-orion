import React, {useState} from "react";
import "./ImageSelector.scss"

//TODO remove props : any

const ImageSelector = (props : any) => {

    return (
    <div className="ImageSelector">
        {
            props.imageUrls.map((url : string, index : number) =>
                <img key={url}
                     onClick={() => {props.sendDataToParent(index);  }}
                     className={index === props.selectedIndex ? "selected ImageSelectorPhoto" : "ImageSelectorPhoto"}
                     src={url}
                     alt="" //purposefully left blank as no meaningful alt text can be added here
                     data-testid={index}
                />
            )
        }
    </div>
    )
}

export default ImageSelector