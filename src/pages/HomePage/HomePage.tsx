import React from 'react';
import MarsModel from '../../components/Home/MarsModel/MarsModel';
import PhotoGallery from "../../components/Home/PhotoGallery/PhotoGallery";
import AllImages from "../../components/Home/PhotoGallery/AllImages";

const HomePage = () => {
    return <div>
        <MarsModel />
        <PhotoGallery slides={AllImages}/>
    </div>;
}

export default HomePage
