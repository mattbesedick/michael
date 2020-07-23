import React from 'react'
import { useBox } from 'use-cannon'

const Confetti = ({ count }) => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [Math.random() - 0.5, 5, Math.random() - 0.5] }))



    return (
        <>
            <instancedMesh ref={ref} position={[0, 0, -2]} args={[null, null, count]}>
                <boxBufferGeometry attach="geometry" args={[0.2, 0.01, 0.1]} />
                <meshBasicMaterial attach="material" color="red" />
            </instancedMesh>
        </>
    )

}

export default Confetti