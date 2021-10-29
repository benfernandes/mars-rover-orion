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
    try {
        const response = await fetch(camera === undefined ? `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&api_key=kJ7v3N2kgUumU8btc2WlCNAjYstJgXeGyXtYslTj` : `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&camera=${camera}&api_key=kJ7v3N2kgUumU8btc2WlCNAjYstJgXeGyXtYslTj`)
        const json = await response.json();
        return (json as RoverPhotos).photos;

    } catch (error) {
        console.log("Oh no, it went wrong", error)
        throw error;
    }
}
