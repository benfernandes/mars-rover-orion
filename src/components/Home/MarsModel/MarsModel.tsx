import React, {useRef, Suspense} from "react";
import {Canvas, useFrame, useLoader} from "react-three-fiber";
import './styles.scss'
import { Html } from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Object3D} from "three";

const Mars = () => {
    const planet = useRef(new Object3D());

    const { nodes } = useLoader(GLTFLoader, "assets/MarsModel/mars.glb");
    // model is from https://solarsystem.nasa.gov/resources/2372/mars-3d-model/
    // use GTLFLoader from three.js and useLoader hook from react-three-fiber to load model


    useFrame(() => (planet.current.rotation.y += 0.002));
    // Adds rotation to planet

    // @ts-ignore
    const Marker = (props) => {
        // const ref = useRef()
        //
        // useFrame(() => (ref.current.rotation.y += 0.001));

        return (
            <group>
                <mesh
                    {...props}
                    // ref={ref}
                    scale={1}>
                    <sphereBufferGeometry args={[20, 20, 20]} />
                    <meshStandardMaterial color={0xffffff} />
                </mesh>
            </group>
        )
    }

    // @ts-ignore
    return (
        <group ref={planet}>
            <mesh
                visible={true}
                position={[0, 0, 0]}
                // Adding data from mars.glb to the geometry and material of the sphere
                geometry={
                    // @ts-ignore
                    nodes.Cube008.geometry}
                material={
                    // @ts-ignore
                    nodes.Cube008.material}>
                {/*<sphereBufferGeometry args={[260, 260, 260]} />*/}
                {/*<meshStandardMaterial color={0xffffff} />*/}
            </mesh>
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
    // @ts-ignore
    return (
        <Canvas className="canvas"
                camera={{ position: [0, 0, 2000], fov: 40, far: 10000 }}>
            <directionalLight intensity={0.5} position={[2000, 2000, 2000]}/>
            <ambientLight intensity={0.07} />
            <Suspense fallback="loading">
                <Mars />
            </Suspense>
        </Canvas>
    )
}

export default MarsModel;