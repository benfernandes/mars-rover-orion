import { GetRoverManifest, Rover } from "./RoverManifest";
import { GetRoverPhotos, RoverPhotos } from "./RoverPhotoRepo";

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
    const goodCameras = [
        "FHAZ",
        "RHAZ",
        "NAVCAM"
    ];

    const manifest = await GetRoverManifest(rover);

    let roverPhotos: Array<{
        sol: number,
        img_src: string,
        camera: {
            name: string,
        },
    }> | null = null;

    while (roverPhotos === null || roverPhotos.length === 0)
    {
        let randomCamera = goodCameras[Math.floor(Math.random() * goodCameras.length)];
        let randomSol = Math.floor(Math.random() * manifest.max_sol);
        roverPhotos = await GetRoverPhotos(rover, randomSol, randomCamera);
    }

    cachedImages[rover] = roverPhotos.map(photo => photo.img_src)
}