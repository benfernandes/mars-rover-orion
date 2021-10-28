import { Rover } from "./RoverManifest";

let cachedImages: {
    "curiosity": string[],
    "perseverance": string[],
    "spirit": string[],
};

export async function getRandomImage(rover: Rover)
{
    // Pick random photo
    if (cachedImages[rover].length === 0)
        refreshCachedImages(rover);

    const randomIndex = Math.floor(Math.random() * cachedImages[rover].length);
    return cachedImages[rover][randomIndex];
}

async function refreshCachedImages(rover: Rover)
{
    
}