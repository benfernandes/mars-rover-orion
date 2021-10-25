// noinspection CommaExpressionJS

import React, {useRef, Suspense} from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {Canvas, useFrame, useLoader} from "react-three-fiber";
import model from '../../../assets/Sphere/mars.glb'
import CameraControls from "./CameraControls";
import './styles.scss'

const Mars = () => {
    const planet = useRef();

    const { nodes } = useLoader(GLTFLoader, model);
    // model is from https://solarsystem.nasa.gov/resources/2372/mars-3d-model/
    // use GTLFLoader from three.js and useLoader hook from react-three-fiber to load model


    useFrame(() => (planet.current.rotation.y += 0.001));
    // Adds rotation to planet

    return (
        <mesh
            ref={planet}
            visible={true}
            position={[0, 0, 0]}
            // Adding data from mars.glb to the geometry and material of the sphere
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
        />
    );
};

const Sphere = () => {
    return (
        <Canvas className="canvas">
            <CameraControls />
            <directionalLight intensity={0.3} position={(1, 0.5, 0.5)}/>
            <ambientLight intensity={0.05} />
            <Suspense fallback="loading">
                <Mars />
            </Suspense>
        </Canvas>
    )
}

export default Sphere;