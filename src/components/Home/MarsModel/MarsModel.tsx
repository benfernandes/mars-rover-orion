import React, {useRef, Suspense} from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import './styles.scss'
import { Html } from "@react-three/drei";
import { Object3D } from "three";
import Mars from "./Mars";
import { ResizeObserver } from '@juggle/resize-observer';

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

    useFrame(() => (planet.current.rotation.y += 0.002));
    // Adds rotation to planet

    return (
        <group ref={planet}>
            <mesh
                // Sets initial rotation
                rotation={[0, 4.5, 0]}>
                <Mars />
                <Marker position={[280, 280, 280]} />
                <Html
                    position={[360, 360, 360]}
                    occlude
                    center
                    distanceFactor={1200}
                    >
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
            <directionalLight intensity={0.5} position={[2000, 2000, 2000]}/>
            <ambientLight intensity={0.07} />
            <Suspense fallback="loading">
                <Scene />
            </Suspense>
        </Canvas>
    )
}

export default MarsModel;
