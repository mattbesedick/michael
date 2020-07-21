import React, { useMemo, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { useSpring, a } from 'react-spring/three'

const Michael = ({ children }) => {
    const font = useLoader(THREE.FontLoader, '/bold.blob')
    const config = useMemo(() => ({
        font, size: 60, height: 30
    }), [font])
    const mesh = useRef()
    const props = useSpring({
        yPos: 0
    })
    useFrame(() => {
        // mesh.current.rotation.x = mesh.current.rotation.y += .01
        // mesh.current.position.y -= 2
    })



    return (
        <group scale={[.01, .01, .01]} >
            <a.mesh position={[-200, 200, 100]} castShadow ref={mesh}>
                <textBufferGeometry attach="geometry" args={[children, config]} />
                <meshPhysicalMaterial attach="material" color="white" />
            </a.mesh>
        </group>
    )
}

export default Michael
