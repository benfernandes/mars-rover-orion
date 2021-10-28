import { GetRoverManifest, Rover } from "./RoverManifest";
import { GetRoverPhotos } from "./RoverPhotoRepo";

var cachedImages: {
    curiosity: string[],
    opportunity: string[],
    spirit: string[],
};

export async function getRandomImage(rover: Rover, refreshImages: boolean = false)
{
    if (!cachedImages)
        cachedImages = {
            curiosity: [],
            opportunity: [],
            spirit: []
        };

    // Pick random photo
    if (refreshImages || cachedImages[rover].length === 0)
        await refreshCachedImages(rover);

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