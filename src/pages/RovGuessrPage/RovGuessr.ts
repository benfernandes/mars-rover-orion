import { Rover } from "../../APIs/RoverManifest";
import { getRandomImage } from '../../APIs/RovGuessrGalleryRepo'

export class RovGuessr
{
    constructor(setImageCallback: Function, setRoverCallback: Function)
    {
        this.setImageCallback = setImageCallback;
        this.setRoverCallback = setRoverCallback;
    }

    static selectRandomRover(): Rover
    {
        const values = Object.values(Rover);
        const enumKey = values[Math.floor(Math.random() * values.length)];
        return enumKey;
    }

    handleSelection(actualRover: Rover, chosenRover: Rover)
    {
        // Game onto next round
        this.setNewImage();
    }

    setNewImage()
    {
        const newSelectedRover = RovGuessr.selectRandomRover();
        this.setRoverCallback(newSelectedRover);

        getRandomImage(newSelectedRover).then(img => {
            this.setImageCallback(img)
        });
    }

    setImageCallback: Function;
    setRoverCallback: Function;
}