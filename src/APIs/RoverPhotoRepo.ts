import {Rover} from "./RoverManifest";

export interface RoverPhotos {
    photos: Array<{
        sol: number,
        img_src: string,
        camera: {
            name: string,
        },
    }>,
}

export async function GetRoverPhotos(rover: Rover, sol = 1, camera?: string) {
    const response = await fetch(camera == undefined ? `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.REACT_APP_NASA_API_KEY}` : `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    const json = await response.json();

    return (json as RoverPhotos).photos;
}
