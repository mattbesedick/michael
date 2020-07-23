import React, { useRef, useMemo } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { useBox } from 'use-cannon'

const Confetti = ({ count }) => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [Math.random() - 0.5, 5, Math.random() - 0.5] }))

    // useFrame(() => {
    // })

    return (
        <>
            {/* <pointLight distance={40} intensity={8} color="lightblue" /> */}

            <instancedMesh ref={ref} position={[0, 0, -2]} args={[null, null, count]}>
                <boxBufferGeometry attach="geometry" args={[0.2, 0.01, 0.1]} />
                <meshBasicMaterial attach="material" color="red" />
            </instancedMesh>
        </>
    )

}

export default Confetti