import {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";
import NumericInput from 'react-numeric-input';

//TODO remove props : any
const PhotoViewerForm = (props : any) => {

    const [selectedRover, setSelectedRover] = useState(Rover.perseverance)
    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedCamera, setSelectedCamera] = useState("")

    //TODO remove event : any

    const onValueChange = (event : any) => {
        if (event.target.value === "Perseverance") {
            setSelectedRover(Rover.perseverance)
        }
        else if (event.target.value === "Curiosity") {
            setSelectedRover(Rover.curiosity)
        }
        else if (event.target.value === "Spirit") {
            setSelectedRover(Rover.spirit)
        }
    }

    const handleDayChange = (event : any) => {
        setSelectedDay(event)
        console.log(selectedDay)
    }

    const handleCameraChange = (event : any) => {
        setSelectedCamera(event.target.value)
        console.log(selectedCamera)
    }

    const handleSubmit = (event : any) => {
        let form = [selectedRover, selectedDay, selectedCamera]
        alert(form[0])
        props.sendFormDataToParent(form)
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
                                value="Perseverance"
                                checked={selectedRover === Rover.perseverance}
                                onChange={onValueChange}
                            />
                            Perseverance
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Curiosity"
                                checked={selectedRover === Rover.curiosity}
                                onChange={onValueChange}
                            />
                            Curiosity
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Spirit"
                                checked={selectedRover === Rover.spirit}
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
                    <input type="submit" value={"Submit"}/>
                </fieldset>
            </form>

        </div>
    )
}

export default PhotoViewerForm