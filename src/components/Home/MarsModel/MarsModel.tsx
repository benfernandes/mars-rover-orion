import React, {useRef, Suspense} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import './styles.scss'
import { Html } from "@react-three/drei";
import { Object3D } from "three";
import Mars from "./Mars";

const Scene = () => {
    const planet = useRef(new Object3D());

    useFrame(() => (planet.current.rotation.y += 0.002));
    // Adds rotation to planet


    //  TODO 47 remove @ts-ignore
    // @ts-ignore
    const Marker = (props) => (
        <mesh
            {...props}
            scale={1}>
            <sphereBufferGeometry args={[20, 20, 20]} />
            <meshStandardMaterial color={0xffffff} />
        </mesh>
    )

    return (
        <group ref={planet}>
            <Mars />
            <Marker position={[280, 280, 280]} />
            <Html
                position={[340, 340, 340]}
                occlude>
                <div className="marker-label">Here's where I am!</div>
            </Html>
        </group>
    );
};


const MarsModel = () => {
    return (
        <Canvas className="canvas"
                camera={{ position: [0, 0, 2000], fov: 40, far: 10000 }}>
            <directionalLight intensity={0.5} position={[2000, 2000, 2000]}/>
            <ambientLight intensity={0.07} />
            <Suspense fallback="loading">
                <Scene />
            </Suspense>
        </Canvas>
    )
}

export default MarsModel;