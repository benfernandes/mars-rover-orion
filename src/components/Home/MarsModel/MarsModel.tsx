import {Canvas, useFrame } from "@react-three/fiber";
import './styles.scss'
import { Html } from "@react-three/drei";
import Mars from "./Mars";
import { ResizeObserver } from '@juggle/resize-observer';
import {useRef, Suspense, useState, useEffect} from 'react';
import {Object3D, Vector3, Clock} from 'three';
import {EffectComposer, Bloom, Noise} from '@react-three/postprocessing'
import { getRoverPosition, Mission } from '../../../APIs/RoverPositionRepo';
import latLongToVec3 from './LatLongToVec3';

const Marker = (props: JSX.IntrinsicElements['mesh']) => (
    <mesh
        {...props}
        scale={1}>
        <sphereBufferGeometry args={[20, 20, 20]} />
        <meshStandardMaterial color={0xffffff} />
    </mesh>
)

const Scene = () => {
    const planet = useRef(new Object3D());
    const [clock] = useState(new Clock());

    useFrame(() => {
        planet.current.rotation.y += 0.25 * clock.getDelta();
    });
    // Adds rotation to planet

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
                    position={roverPosition.clone().multiplyScalar(640)}
                    occlude
                    center
                    distanceFactor={800}
                >
                    <div className="marker-label">
                        Here I am!
                        <img src={"/assets/MarsModel/roverIcon.png"} className="rover-icon"/>
                    </div>
                </Html>
            </mesh>
        </group>
    );
};


const MarsModel = () => {
    return (
        <Canvas
                camera={{ position: [0, 0, 1700], fov: 40, far: 10000 }}
                resize={{ polyfill: ResizeObserver}}>
            <directionalLight intensity={0.3} position={[-2000, 1000, 2000]}/>
            <ambientLight intensity={0.02} />
            <Suspense fallback="loading">
                <Scene />
            </Suspense>

            <EffectComposer>
                <Bloom luminanceThreshold={0.04} luminanceSmoothing={0.0} intensity={0.2}/>
                <Noise opacity={0.01}/>
            </EffectComposer>
        </Canvas>
    )
}

export default MarsModel;
