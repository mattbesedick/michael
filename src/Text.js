import React, { useMemo, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { useSpring, a } from 'react-spring/three'

const Michael = ({ children, position, props }) => {
    const font = useLoader(THREE.FontLoader, '/bold.blob')
    const config = useMemo(() => ({
        font, size: 60, height: 30
    }), [font])
    const mesh = useRef()
    // const props = useSpring({
    //     position: [-200, 0, 100]
    // })
    // const [mesh] = useBox(() => ({ mass: 1 }))
    useFrame(() => {
        if (mesh.current.position.y > 4) {
            mesh.current.position.y -= Math.random() * 10
        }
    })



    return (
        <group scale={[.0065, .0065, .0065]} >
            <mesh position={position} receiveShadow castShadow ref={mesh}>
                <textBufferGeometry attach="geometry" args={[children, config]} />
                <meshPhysicalMaterial attach="material" color="white" />
            </mesh>
        </group>
    )
}

export default Michael
