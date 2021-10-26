import { sign } from 'crypto';
import React, { ReactElement, useState } from 'react';
import './StarrySky.scss'

interface StarrySkyProps
{
    numberOfStars: number;
    maxSize: number;

    imagesForStars?: string[];
}

export const StarrySky: React.FC<StarrySkyProps> = (props: StarrySkyProps) =>
{
    const allStars = Array(props.numberOfStars).fill(null).map(() =>
    <SingleStar
        urls={props.imagesForStars}
        maxSize={props.maxSize}
    />);

    // The stars all being large on page refresh is a feature now, not a bug

    return (
        <div className='Starry-sky-background'>
            {allStars}
        </div>
    );
}

interface SingleStarProp
{
    // List of image urls to use for random stars to give variety
    // If unused, then just use point light
    urls?: Array<string>;
    maxSize: number;
}

const SingleStar: React.FC<SingleStarProp> = (props: SingleStarProp) =>
{
    if (!props.urls)
        return <PointStar maxSize={props.maxSize}/>;
    else
        return <ImageStar urls={props.urls}/>;
}

interface PointStarProp
{
    maxSize: number;
}

const PointStar: React.FC<PointStarProp> = (props: PointStarProp) =>
{
    // Create small elements with css styling for the stars
    const [randomPosition, setPosition] = useState({
        x: Math.floor(Math.random() * window.screen.width),
        y: Math.floor(Math.random() * window.screen.height),
    })

    const [randomSize, setSize] = useState(Math.random() * props.maxSize);

    const [randomRotation, setRotation] = useState(Math.random() * 90);

    const durationVariance = 5;
    const durationMinimum = randomSize * 2;

    const [randomAnimationDuration, setAnimationDuration] = useState(Math.random() * durationVariance + durationMinimum);

    return <div className='single-star' style={{
        top: randomPosition.x,
        left: randomPosition.y,
        width: randomSize,
        height: randomSize,
        transform: `rotate(${randomRotation}deg)`,
        animationDuration: `${randomAnimationDuration}s`,
        }}/>
}

interface ImageStarProp
{
    urls: string[];
}

// Not finished
const ImageStar: React.FC<ImageStarProp> = (props: ImageStarProp) =>
{
    const chosenURL = props.urls[Math.floor(Math.random() * props.urls.length)];
        
    return <img src={chosenURL}/>
}
