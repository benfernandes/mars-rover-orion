import {Canvas, useFrame } from "@react-three/fiber";
import './styles.scss'
import { Html } from "@react-three/drei";
import Mars from "./Mars";
import { ResizeObserver } from '@juggle/resize-observer';
import React, {useRef, Suspense, useState, useEffect} from 'react';
import {Object3D, Vector3} from 'three';
import { getRoverPosition, Mission } from '../../../APIs/RoverPositionRepo';
import latLongToVec3 from './LatLongToVec3';


const Scene = () => {
    const planet = useRef(new Object3D());

    useFrame(() => (planet.current.rotation.y += 0.005));
    // Adds rotation to planet


    const Marker = (props: JSX.IntrinsicElements['mesh']) => (
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
            const cartesianPosition = latLongToVec3(latLong.lat, latLong.lon);
            setRoverPosition(cartesianPosition);
        });
    }, [])
    

    return (
        <group ref={planet}>
            <mesh
                // Sets initial rotation
                rotation={[0, 3.3, 0]}>
                <Mars />
                <Marker position={roverPosition.clone().multiplyScalar(490)} />
                <Html
                    position={roverPosition.clone().multiplyScalar(540)}
                    occlude>
                    <div className="marker-label">Here's where I am!</div>
                </Html>
            </mesh>
        </group>
    );
};


const MarsModel = () => {
    return (
        <Canvas className="canvas"
                camera={{ position: [0, 0, 2000], fov: 40, far: 10000 }}
                resize={{ polyfill: ResizeObserver}}>
            <directionalLight intensity={0.3} position={[-2000, 1000, 2000]}/>
            <ambientLight intensity={0.02} />
            <Suspense fallback="loading">
                <Scene />
            </Suspense>
        </Canvas>
    )
}

export default MarsModel;
