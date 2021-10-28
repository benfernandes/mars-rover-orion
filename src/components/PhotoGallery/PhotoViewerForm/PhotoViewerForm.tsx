import {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";

//TODO remove props : any
const PhotoViewerForm = (props : any) => {

    const [inputs, setInputs] = useState({})

    //TODO remove event : any
    const handleSubmit = (event : any) => {

    }

    // GetRoverPhotos(rover: Rover, sol = 1, camera?: string)
    return (
        <div className="photo-viewer-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select which photos you'd like to see</legend>

                </fieldset>
            </form>

        </div>
    )
}

export default PhotoViewerForm