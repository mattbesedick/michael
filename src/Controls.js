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

    return (
        <orbitControls maxPolarAngle={Math.PI / 3} minPolarAngle={Math.PI / 3} args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}

export default Controls