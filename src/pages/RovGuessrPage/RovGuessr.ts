import { Rover } from "../../APIs/RoverManifest";
import { getRandomImage } from '../../APIs/RovGuessrGalleryRepo'

export class RovGuessr
{
    constructor(setImageCallback: Function, setRoverCallback: Function, setCurrentScoreCallback: Function)
    {
        this.setImageCallback = setImageCallback;
        this.setRoverCallback = setRoverCallback;
        
        this.currentScore = 0;
        this.setCurrentScoreCallback = setCurrentScoreCallback;
    }

    static selectRandomRover(): Rover
    {
        const values = Object.values(Rover);
        const enumKey = values[Math.floor(Math.random() * values.length)];
        return enumKey;
    }

    handleSelection(actualRover: Rover, chosenRover: Rover)
    {
        if (actualRover === chosenRover)
        {
            // Handle win
            this.currentScore += 1;
            this.setCurrentScoreCallback(this.currentScore);
        }

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

    currentScore: number;
    setCurrentScoreCallback: Function;
}