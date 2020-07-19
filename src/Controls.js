import React, { useRef } from 'react'
import { useFrame, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = () => {
    const { camera, gl } = useThree()
    const orbitRef = useRef()

    useFrame(() => {
        orbitRef.current.update()
    })
    // maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
    return (
        <orbitControls args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}

export default Controls