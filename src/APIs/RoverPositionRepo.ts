export enum Mission
{
    Perseverance = "M20",
}

export interface RoverPosition
{
    features: {
        properties: {
            lat: number;
            lon: number;
        };
    }[];
}

export class RoverPositionRepo
{    
    static async GetRoverPosition(mission: Mission)
    {
        const response = await fetch(`https://mars.nasa.gov/mmgis-maps/M20/Layers/json/${mission}_waypoints_current.json`);
        const json = await response.json();

        return (await <RoverPosition>json).features[0].properties;
    }
}