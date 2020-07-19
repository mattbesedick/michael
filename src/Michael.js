import React, { useMemo } from 'react'
import { useLoader } from 'react-three-fiber'
import * as THREE from 'three'

const Michael = ({ children }) => {
    const font = useLoader(THREE.FontLoader, '/bold.blob')
    const config = useMemo(() => ({
        font, size: 40, height: 50
    }), [font])
    return (
        <group scale={[.01, .01, .01]} >
            <mesh position={[-50, -50, 0]} castShadow>
                <textGeometry attach="geometry" args={[children, config]} />
                <meshNormalMaterial attach="material" />
            </mesh>
        </group>
    )
}

export default Michael
