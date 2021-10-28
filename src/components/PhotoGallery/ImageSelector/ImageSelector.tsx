import React from "react";
import "./ImageSelector.scss"

interface ImageSelectorProps {
    imageUrls: string[];
    selectedIndex: number;
    sendDataToParent: (arg0: number) => void;
}

const ImageSelector : React.FC<ImageSelectorProps> = (props) => {

    return (
    <div className="ImageSelector">
        {
            props.imageUrls.map((url, index) =>
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