import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from 'react-three-fiber'

const Cake = () => {
    //loading model into scene
    const model = useRef()
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    useFrame(() => {
        model.current.rotation.y -= .005
    })

    return (
        gltf ? <primitive ref={model} object={gltf.scene} position={[0, 0, -2]} scale={[.02, .02, .02]} /> : null
    )
}

export default Cake