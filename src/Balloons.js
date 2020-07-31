import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from 'react-three-fiber'

const Balloons = ({ position }) => {
    //loading model into scene
    const model = useRef()
    const gltf = useLoader(GLTFLoader, '/model.gltf')

    useFrame(() => {
        if (model.current.position.y < 10) {
            model.current.position.y += .005
        } else {
            model.current.position.y = -1
        }
    })
    return (
        gltf ? <primitive ref={model} object={gltf.scene} position={position} scale={[1, 1, 1]} /> : null
    );
}

export default Balloons;