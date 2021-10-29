import React, {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";
import NumericInput from 'react-numeric-input';
import {FormData} from "../../../pages/GalleryPage/GalleryPage";


interface PhotoViewerFormProps {
    sendFormDataToParent: (data: FormData) => void;
}

const PhotoViewerForm : React.FC<PhotoViewerFormProps> = (props) => {

    const [formData, setFormData] = useState<FormData>({
        "rover": Rover.curiosity,
        "sol": 1000,
        "camera": undefined,
    });

    const handleChange = (event: { target: { name: string; value: string | number | undefined; } } ) => {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.value === "all"){
            value = undefined;
        }

        setFormData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        props.sendFormDataToParent(formData)
    }

    return (
        <div className="photo-viewer-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select which photos you'd like to see</legend>
                    <div className="form-radio-container">
                        <label>
                            <input
                                type="radio"
                                value={Rover.opportunity}
                                name="rover"
                                checked={formData.rover === Rover.opportunity}
                                onChange={handleChange}
                            />
                            Perseverance
                        </label>
                        <label>
                            <input
                                type="radio"
                                value={Rover.curiosity}
                                name="rover"
                                checked={formData.rover === Rover.curiosity}
                                onChange={handleChange}
                            />
                            Curiosity
                        </label>
                        <label>
                            <input
                                type="radio"
                                value={Rover.spirit}
                                name="rover"
                                checked={formData.rover === Rover.spirit}
                                onChange={handleChange}
                            />
                            Spirit
                        </label>
                    </div>
                    <div className="day-selector">
                        <label htmlFor="selectSol">Select a day: </label>
                        {/*TODO set max to be max from selected rover*/}
                        <NumericInput
                            min={0}
                            id="numeric-input"
                            onChange={(e) => {
                                const name = "sol"
                                const value = Number(e);
                                setFormData(values => ({...values, [name]: value}))
                            }}
                        />
                    </div>
                    <label htmlFor="cameraSelector">Select a camera: </label>
                    <select name="camera" id="dropdown"
                            value={formData["camera"]} onChange={handleChange}>
                        <option value="all">All cameras</option>
                        <option value="fhaz">Front Hazard Avoidance Camera</option>
                        <option value="rhaz">Rear Hazard Avoidance Camera</option>
                        <option value="mast">Mast Camera</option>
                        <option value="chemcam">Chemistry and Camera Complex</option>
                        <option value="mahli">Mars Hand Lens Imager</option>
                        <option value="mardi">Mars Descent Imager</option>
                        <option value="navcam">Navigation Camera</option>
                        <option value="pancam">Panoramic Camera</option>
                        <option value="minites">Miniature Thermal Emission Spectrometer</option>
                    </select>
                    <br />
                    <input type="submit" value={"Submit"} className="submit-button"/>
                </fieldset>
            </form>
        </div>
    )
}

export default PhotoViewerForm
