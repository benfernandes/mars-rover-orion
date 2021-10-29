import {Canvas, useFrame } from "@react-three/fiber";
import '../styles.scss'
import { Html } from "@react-three/drei";
import Ben from "./Ben";
import { ResizeObserver } from '@juggle/resize-observer';
import React, {useRef, Suspense, useState, useEffect} from 'react';
import {Object3D, Vector3} from 'three';
import { Mission, getRoverPosition } from '../../../../APIs/RoverPositionRepo';
import LatLongToVec3 from '../LatLongToVec3';


const BenScene = () => {
    const planet = useRef(new Object3D());

    useFrame(() => (planet.current.rotation.y += 0.005));
    // Adds rotation to planet


    const Marker = (props : any) => (
        <mesh
            {...props}
            scale={1}>
            <sphereBufferGeometry args={[20, 20, 20]} />
            <meshStandardMaterial color={0xffffff} />
        </mesh>
    )

    const sizeOfSphere = 15;
    const [roverPosition, setRoverPosition] = useState(new Vector3(0, 0, 0));

    useEffect(() => {
        getRoverPosition(Mission.Perseverance).then(latLong => {
            const cartesianPosition = LatLongToVec3(latLong.lat, latLong.lon);
            setRoverPosition(cartesianPosition);
        });
    }, [])


    return (
        <group ref={planet}>
            <mesh
                // Sets initial rotation
                rotation={[0, 5.9, 0]}>
                <Ben />
                <Marker position={roverPosition.clone().multiplyScalar(490)} />
                <Html
                    position={roverPosition.clone().multiplyScalar(640)}
                    occlude
                    center
                    distanceFactor={800}
                >
                    <div className="marker-label">
                        Here I am!
                        <img src={"/assets/MarsModel/ben.jfif"} className="rover-icon"/>
                    </div>
                </Html>
            </mesh>
        </group>
    );
};


const BenModel = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 1700], fov: 40, far: 10000 }}
            resize={{ polyfill: ResizeObserver}}>
            <directionalLight intensity={0.3} position={[-2000, 1000, 2000]}/>
            <ambientLight intensity={0.02} />
            <Suspense fallback="loading">
                <BenScene />
            </Suspense>
        </Canvas>
    )
}

export default BenModel;
