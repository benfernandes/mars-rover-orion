export enum Mission
{
    Perseverance = "M20",
}

export interface RoverPosition
{
    features: Array<{
        properties: {
            lat: number;
            lon: number;
        };
    }>;
}

export async function getRoverPosition(mission: Mission)
{
    const response = await fetch(`https://mars.nasa.gov/mmgis-maps/M20/Layers/json/${mission}_waypoints_current.json`);
    const roverPosition: RoverPosition = await response.json();

    return roverPosition.features[0].properties;
}

export async function getRoverWaypoints(mission: Mission)
{
    const response = await fetch(`https://mars.nasa.gov/mmgis-maps/M20/Layers/json/${mission}_waypoints.json`);
    const roverPosition: RoverPosition = await response.json();

    return roverPosition.features;
}