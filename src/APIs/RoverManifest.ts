export enum Rover {
    opportunity = "opportunity",
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
        photos: Array<{
            sol: number,
            total_photos: number,
            cameras: string[],
        }>,
    }
}

export async function GetRoverManifest(rover: Rover) {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=kJ7v3N2kgUumU8btc2WlCNAjYstJgXeGyXtYslTj`); // wither api key?
    console.log(response);
    const json = await response.json();

    return (json as RoverManifest).photo_manifest;
}
