import { GetRoverManifest, Rover } from "./RoverManifest";
import { GetRoverPhotos } from "./RoverPhotoRepo";

interface ImageUrlCache {
    curiosity: string[],
    opportunity: string[],
    spirit: string[],
}

let cachedImageUrls: ImageUrlCache;

export async function getRandomImage(rover: Rover, refreshImages: boolean = false) {
    if (!cachedImageUrls)
        cachedImageUrls = {
            curiosity: [],
            opportunity: [],
            spirit: []
        };

    // Pick random photo
    if (refreshImages || cachedImageUrls[rover].length === 0)
        await refreshCachedImages(rover);

    const randomIndex = Math.floor(Math.random() * cachedImageUrls[rover].length);
    return cachedImageUrls[rover][randomIndex];
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

    const maxRefresh = 15;
    let currentRefresh = 0;

    while ((roverPhotos === null || roverPhotos.length === 0) && currentRefresh < maxRefresh)
    {
        let randomCamera = goodCameras[Math.floor(Math.random() * goodCameras.length)];
        let randomSol = Math.floor(Math.random() * manifest.max_sol);
        roverPhotos = await GetRoverPhotos(rover, randomSol, randomCamera);

        currentRefresh += 1;
    }
    
    if (currentRefresh === maxRefresh || roverPhotos === null)
    {
        cachedImageUrls[rover] = ["https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1639612800&v=beta&t=7NqH2EZyTry0de4o9_1UqV5YVi_GOV6smcvpXiDCSb4"];
        return;
    }

    cachedImageUrls[rover] = roverPhotos.map(photo => photo.img_src)
}