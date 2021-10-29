import PhotoGallery from "../../components/Home/PhotoGallery/PhotoGallery";
import IntroSection from "../../components/Home/IntroSection/IntroSection";
import RoverInfo from "../../components/Home/RoverInfo/RoverInfo";
import "./BenHomePageStyle.scss"
import BenModel from "../../components/Home/MarsModel/BenModel/BenModel";

const BenHomePage = () => {
    return <div className="page-container">
        <div className={"title-section"}>
            <div className="title-container">
                <h1>Mars Orion We<a href={"/home"}>b</a>site</h1>
            </div>
            <div className="mars-model-container">
                <div className={"mars-model-wrapper"}>
                    <BenModel />
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

export default BenHomePage
