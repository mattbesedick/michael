import React, { useEffect, useState, useMemo, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSphere } from 'use-cannon'
import { useLoader, useFrame } from 'react-three-fiber'

const Cake = () => {
    const model = useRef()
    const gltf = useLoader(GLTFLoader, '/scene.gltf')

    useFrame(() => {
        if (model.current.rotation.y > 7.5) {
            model.current.rotation.y -= .05
        }
    })
    return (
        gltf ? <primitive ref={model} castShadow object={gltf.scene} position={[0, 2, -10]} rotation={[0, 10, 0]} scale={[.5, .5, .5]} /> : null
        // <mesh position={[0, 0, -10]} rotation={[5, 0, 0]}>
        //     <bufferGeometry attach="geometry"  {...gltf} />
        //     <meshPhysicalMaterial attach="material" {...gltf} name="Material" />
        // </mesh>
    )
}

export default Cake