import { Vector3 } from "three";

export default function lonLatToVector3(latitude: number, longitude: number): Vector3
{
    latitude = Math.PI / 2 - latitude;

    const output = new Vector3(
        Math.sin( latitude ) * Math.sin( longitude ),
        Math.cos( latitude ),
        Math.sin( latitude ) * Math.cos( longitude )
    );

    return output;
}