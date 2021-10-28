import { GetRoverManifest, Rover } from "./RoverManifest";
import { GetRoverPhotos } from "./RoverPhotoRepo";

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
    const manifest = await GetRoverManifest(rover);

    const randomSol = Math.floor(Math.random() * manifest.max_sol);

    const roverPhotos = await GetRoverPhotos(rover, randomSol, "FHAZ")
    cachedImages[rover] = roverPhotos.map(photo => photo.img_src)
}