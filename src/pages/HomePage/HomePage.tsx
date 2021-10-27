import React from 'react';
import MarsModel from '../../components/Home/MarsModel/MarsModel';
import PhotoGallery from "../../components/Home/PhotoGallery/PhotoGallery";
import IntroSection from "../../components/Home/IntroSection/IntroSection";
import RoverInfo from "../../components/Home/RoverInfo/RoverInfo";

const HomePage = () => {
    return <div>
        <MarsModel />
        <IntroSection/>
        <PhotoGallery />
        <RoverInfo />
    </div>;
}

export default HomePage
