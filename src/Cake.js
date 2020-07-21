import React, { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSphere } from 'use-cannon'

const Cake = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('/scene.gltf', setModel)
    })



    return (
        model ? <primitive object={model.scene} position={[0, 0, -5]} scale={[.01, .01, .01]} /> : null
    )
}

export default Cake