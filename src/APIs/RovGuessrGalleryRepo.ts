import { GetRoverManifest, Rover } from "./RoverManifest";
import { GetRoverPhotos } from "./RoverPhotoRepo";

interface ImageUrlCache {
    curiosity: string[],
    perseverance: string[],
    spirit: string[],
}

let cachedImageUrls: ImageUrlCache;

export async function getRandomImage(rover: Rover, refreshImages: boolean = false) {
    if (!cachedImageUrls)
        cachedImageUrls = {
            curiosity: [],
            perseverance: [],
            spirit: []
        };

    // Pick random photo
    if (refreshImages || cachedImageUrls[rover].length === 0)
        await refreshCachedImages(rover);

    const randomIndex = Math.floor(Math.random() * cachedImageUrls[rover].length);
    return cachedImageUrls[rover][randomIndex];
}

async function refreshCachedImages(rover: Rover) {
    const manifest = await GetRoverManifest(rover);

    let randomSol = Math.floor(Math.random() * manifest.max_sol);

    let roverPhotos = await GetRoverPhotos(rover, randomSol, "FHAZ");

    while (roverPhotos.length === 0)
    {
        randomSol = Math.floor(Math.random() * manifest.max_sol);
        roverPhotos = await GetRoverPhotos(rover, randomSol, "FHAZ");
    }

    cachedImageUrls[rover] = roverPhotos.map(photo => photo.img_src);
}
