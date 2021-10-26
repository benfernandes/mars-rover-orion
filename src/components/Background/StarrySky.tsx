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
    const allStars = Array(props.numberOfStars).fill(null).map(() => props.imagesForStars ?
        <ImageStar urls={props.imagesForStars}/> :
        <PointStar maxSize={props.maxSize}/>);

    // The stars all being large on page refresh is a feature now, not a bug

    return (
        <div className='Starry-sky-background'>
            {allStars}
        </div>
    );
}

interface PointStarProp
{
    maxSize: number;
}

const PointStar: React.FC<PointStarProp> = (props: PointStarProp) =>
{
    // Create small elements with css styling for the stars
    const [randomPosition] = useState({
        x: Math.floor(Math.random() * window.screen.width),
        y: Math.floor(Math.random() * window.screen.height),
    })

    const [randomSize] = useState(Math.random() * props.maxSize);

    const [randomRotation] = useState(Math.random() * 90);

    const durationVariance = 5;
    const durationMinimum = randomSize * 2;

    const [randomAnimationDuration] = useState(Math.random() * durationVariance + durationMinimum);

    return <div className='single-star' style={{
        top: randomPosition.y,
        left: randomPosition.x,
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
    const [chosenURL] = useState(props.urls[Math.floor(Math.random() * props.urls.length)]);
        
    return <img src={chosenURL}/>
}
