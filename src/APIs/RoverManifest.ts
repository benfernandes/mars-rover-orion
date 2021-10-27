export enum Rover {
    perseverance = "perseverance",
    curiosity = "curiosity",
    spirit = "spirit",
}

export interface RoverManifest {
    photo_manifest: {
        launch_date: string,
        landing_date: string,
        status: string,
        max_sol: number,
        total_photos: number,
        photos: {
            sol: number,
            total_photos: number,
            cameras: string[],
        }[],
    }
}

export class RoverManifestRepo {
    static async GetRoverManifest(rover: Rover) {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${process.env.REACT_APP_NASA_API_KEY}`); // wither api key?
        const json = await response.json();

        return (json as RoverManifest).photo_manifest;
    }
}