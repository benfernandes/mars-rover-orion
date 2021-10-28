import MarsModel from '../../components/Home/MarsModel/MarsModel';
import PhotoGallery from "../../components/Home/PhotoGallery/PhotoGallery";
import IntroSection from "../../components/Home/IntroSection/IntroSection";
import RoverInfo from "../../components/Home/RoverInfo/RoverInfo";
import "./HomePageStyle.scss"

const HomePage = () => {
    return <div className="page-container">
        <div className={"title-section"}>
            <div className="title-container">
                <h1>Mars Orion Website</h1>
            </div>
            <div className="mars-model-container">
                <div className={"mars-model-wrapper"}>
                    <MarsModel />
                </div>
            </div>
        </div>
        <div className="intro-section-container">
            <IntroSection/>
        </div>
        <div className="photo-gallery-placeholder-container">
            <PhotoGallery />
        </div>
        <div className="rover-info-container">
            <RoverInfo />
        </div>
    </div>;
}

export default HomePage
