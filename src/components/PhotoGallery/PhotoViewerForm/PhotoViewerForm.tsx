import {useState} from "react";
import './PhotoViewerForm.scss';
import {Rover} from "../../../APIs/RoverManifest";
import NumericInput from 'react-numeric-input';

//TODO remove props : any
const PhotoViewerForm = (props : any) => {

    const [inputs, setInputs] = useState({})
    const [selectedOption, setSelectedOption] = useState(null)
    const [selectedDay, setSelectedDay] = useState(0)

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
                    <label htmlFor="selectSol">Select a day:</label>
                    {/*TODO set max to be max from selected rover*/}
                    <NumericInput
                        min={0}
                        // max={100}
                        onChange={handleDayChange}
                    />
                </fieldset>
            </form>

        </div>
    )
}

export default PhotoViewerForm