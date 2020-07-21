import React from 'react'
import { usePlane } from 'use-cannon'


const Plane = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
            <shadowMaterial attach="material" color="red" />
        </mesh>
        // <mesh rotation={[-Math.PI / 200, 0, 0]} position={[0, -3, 0]} receiveShadow >
        //     <planeBufferGeometry attach="geometry" args={[100, 100]} />
        //     <shadowMaterial attach="material" opacity={.2} />
        // </mesh>
    )
}

export default Plane