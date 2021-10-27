import {Rover} from "./RoverManifest";

export interface RoverPhotos {
    photos: {
        sol: number,
        img_src: string,
        camera: {
            name: string,
        },
    }[],
}


export class RoverGalleryRepo {
}