import {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";
import NumericInput from 'react-numeric-input';

//TODO remove props : any
const PhotoViewerForm = (props : any) => {

    const [inputs, setInputs] = useState({
        "rover": Rover.curiosity,
        "day": 1000,
        "camera": undefined,
    });

    //TODO remove event : any

    const handleChange = (event : any) => {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.value === "all"){
            value = undefined;
        }

        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event : any) => {
        event.preventDefault()
        props.sendFormDataToParent(inputs)
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
                                value={Rover.perseverance}
                                name="rover"
                                checked={inputs["rover"] === Rover.perseverance}
                                onChange={handleChange}
                            />
                            Perseverance
                        </label>
                        <label>
                            <input
                                type="radio"
                                value={Rover.curiosity}
                                name="rover"
                                checked={inputs["rover"] === Rover.curiosity}
                                onChange={handleChange}
                            />
                            Curiosity
                        </label>
                        <label>
                            <input
                                type="radio"
                                value={Rover.spirit}
                                name="rover"
                                checked={inputs["rover"] === Rover.spirit}
                                onChange={handleChange}
                            />
                            Spirit
                        </label>
                    </div>
                    <label htmlFor="selectSol">Select a day: </label>
                    {/*TODO set max to be max from selected rover*/}
                    <NumericInput
                        min={0}
                        onChange={(e) => {
                            const name = "sol"
                            const value = e;
                            setInputs(values => ({...values, [name]: value}))
                        }}
                    />
                    <label htmlFor="cameraSelector">Select a camera: </label>
                    <select name="camera" id="dropdown"
                            value={inputs["camera"]} onChange={handleChange}>
                        <option value="all">All cameras</option>
                        <option value="fhaz">Front Hazard Avoidance Camera</option>
                        <option value="rhaz">Rear Hazard Avoidance Camera</option>
                        <option value="mast">Mast Camera</option>
                        <option value="chemcam">Chemistry and Camera Complex</option>
                        <option value="mahli">Mars Hand Lens Imager</option>
                        <option value="mardi">Mars Descent Imager</option>
                        <option value="navcam">Navigation Camera</option>
                        <option value="pancam">Panoramic Camera</option>
                        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                    </select>
                    <input type="submit" value={"Submit"}/>
                </fieldset>
            </form>
        </div>
    )
}

export default PhotoViewerForm