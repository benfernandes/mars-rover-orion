import {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";
import NumericInput from 'react-numeric-input';

//TODO remove props : any
const PhotoViewerForm = (props : any) => {

    const [inputs, setInputs] = useState({})
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedCamera, setSelectedCamera] = useState("")

    //TODO remove event : any
    const handleSubmit = (event : any) => {

    }

    const onValueChange = (event : any) => {
        setSelectedOption(event.target.value)
    }

    const handleDayChange = (event : any) => {
        setSelectedDay(event)
        console.log(selectedDay)
    }

    const handleCameraChange = (event : any) => {
        setSelectedCamera(event.target.value)
        console.log(selectedCamera)
    }

    // GetRoverPhotos(sol = 1, camera?: string)
    return (
        <div className="photo-viewer-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select which photos you'd like to see</legend>
                    <div className="form-radio-container">
                        <label>
                            <input
                                type="radio"
                                value="Perseverance"
                                checked={selectedOption === "Perseverance"}
                                onChange={onValueChange}
                            />
                            Perseverance
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Curiosity"
                                checked={selectedOption === "Curiosity"}
                                onChange={onValueChange}
                            />
                            Curiosity
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Spirit"
                                checked={selectedOption === "Spirit"}
                                onChange={onValueChange}
                            />
                            Spirit
                        </label>
                    </div>
                    <label htmlFor="selectSol">Select a day: </label>
                    {/*TODO set max to be max from selected rover*/}
                    <NumericInput
                        min={0}
                        // max={100}
                        onChange={handleDayChange}
                    />
                    <label htmlFor="cameraSelector">Select a camera: </label>
                    <select id="dropdown" value={selectedCamera} onChange={handleCameraChange}>
                        <option value="FHAZ">Front Hazard Avoidance Camera</option>
                        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                        <option value="MAST">Mast Camera</option>
                        <option value="CHEMCAM">Chemistry and Camera Complex</option>
                        <option value="MAHLI">Mars Hand Lens Imager</option>
                        <option value="MARDI">Mars Descent Imager</option>
                        <option value="NAVCAM">Navigation Camera</option>
                        <option value="PANCAM">Panoramic Camera</option>
                        <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                    </select>
                </fieldset>
            </form>

        </div>
    )
}

export default PhotoViewerForm