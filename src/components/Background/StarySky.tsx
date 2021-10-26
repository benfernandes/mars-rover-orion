import React, { ReactElement } from 'react';
import './StarySky.scss'

interface StarySkyProps
{
    numberOfStars: number;
    maxSize: number;

    imagesForStars?: Array<string>;
}

export const StarySky: React.FC<StarySkyProps> = (props: StarySkyProps) =>
{
    const allStars: Array<ReactElement> = [];

    for (let i = 0; i < props.numberOfStars; i++)
    {
        allStars.push(<SingleStar urls={props.imagesForStars} maxSize={props.maxSize}/>)
    }

    return (
        <div className='stary-sky-background'>
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
    {
        // Create small elements with css styling for the stars
        const randomPositionX = Math.floor(Math.random() * window.screen.width);
        const randomPositionY = Math.floor(Math.random() * window.screen.height);

        const randomSize = Math.random() * props.maxSize;

        return <div className='single-star' style={{
            top: randomPositionY,
            left: randomPositionX,
            width: randomSize,
            height: randomSize
            }}></div>
    }
    else
    {
        const chosenURL = props.urls[Math.floor(Math.random() * props.urls.length)];

        return <img src={chosenURL}/>
    }
}