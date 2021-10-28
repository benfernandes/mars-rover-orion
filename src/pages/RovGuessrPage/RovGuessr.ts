import { Rover } from "../../APIs/RoverManifest";
import { getRandomImage } from '../../APIs/RovGuessrGalleryRepo'

export function selectRandomRover(): Rover
{
    const values = Object.values(Rover);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumKey;
}

export function handleSelection(actualRover: Rover, chosenRover: Rover)
{
    alert(actualRover === chosenRover);
}

export function setNewImage(setImageCallback: Function, setRoverCallback: Function)
{
    const newSelectedRover = selectRandomRover();
    setRoverCallback(newSelectedRover);

    getRandomImage(newSelectedRover).then(img => {
        console.log(newSelectedRover)
        setImageCallback(img)
    }
    );
}