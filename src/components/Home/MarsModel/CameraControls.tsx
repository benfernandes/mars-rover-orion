import React, { useRef } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { ReactThreeFiber } from 'react-three-fiber'

extend({ OrbitControls });
//Uses three.js OrbitControls

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

const CameraControls : React.FC = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    // Ref to the controls, so that we can update them on every frame with useFrame
    const controls = useRef(new OrbitControls(camera, domElement));

    camera.position.z = 999;
    //zoom

    useFrame(() => controls.current.update());

    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            autoRotate={false}
            enableZoom={false}
        />
    );
};

export default CameraControls;