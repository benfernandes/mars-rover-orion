import React, { ReactElement } from 'react';
import './StarySky.scss'

interface StarySkyProps
{
    numberOfStars: number;

    imagesForStars?: SingleStarProp;
}

export const StarySky: React.FC<StarySkyProps> = (props: StarySkyProps) =>
{
    const allStars: Array<ReactElement> = [];

    for (let i = 0; i < props.numberOfStars; i++)
    {
        allStars.push(<SingleStar urls={props.imagesForStars?.urls}/>)
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
}

const SingleStar: React.FC<SingleStarProp> = ({urls = []}: SingleStarProp) =>
{
    if (urls.length === 0)
    {
        // Create small elements with css styling for the stars
        const randomPositionX = Math.floor(Math.random() * window.screen.width);
        const randomPositionY = Math.floor(Math.random() * window.screen.height);

        return <div className='single-star' style={{top: randomPositionY, left: randomPositionX}}></div>
    }
    else
    {
        const chosenURL = urls[Math.floor(Math.random() * urls.length)];

        return <img src={chosenURL}/>
    }
}