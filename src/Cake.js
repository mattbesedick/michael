import React, { useEffect, useState, useMemo, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSphere, useBox, useCylinder, useConvexPolyhedron, usePointToPointConstraint } from 'use-cannon'
import { useLoader, useFrame } from 'react-three-fiber'

const Cake = (props) => {
    const model = useRef()
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    // const [ref] = useBox(() => ({ mass: 3, position: [0, 5, -2], rotation: [0.2, 0, 0] }))
    useFrame(() => {

        model.current.rotation.y -= .005

    })
    return (
        gltf ? <primitive ref={model} object={gltf.scene} position={[0, 0, -2]} scale={[.02, .02, .02]} /> : null
        // <mesh position={[0, 0, -10]} rotation={[5, 0, 0]}>
        //     <bufferGeometry attach="geometry"  {...gltf} />
        //     <meshPhysicalMaterial attach="material" {...gltf} name="Material" />
        // </mesh>
    )
}

export default Cake