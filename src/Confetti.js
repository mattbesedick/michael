import React, { useRef, useMemo } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

// const Confetti = ({ position, color, count }) => {
//     const mesh = useRef()

//     // useFrame(() => {
//     //     mesh.current.position.y += -0.1
//     // })

//     return (
//         <>
//             {/* <pointLight distance={40} intensity={8} color="lightblue" /> */}
//             <instancedMesh args={[null, null, 100]}>
//                 <boxBufferGeometry attach="geometry" args={[0.2, 0]} />
//                 <meshPhongMaterial attach="material" color="blue" />
//             </instancedMesh>
//         </>
//     )
// }

// export default Confetti

const Confetti = ({ count }) => {
    const mesh = useRef()
    // const { size, viewport } = useThree()
    // const aspect = size.width / viewport.width

    const dummy = useMemo(() => new THREE.Object3D(), [])
    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 50 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -20 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, speed, factor, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])
    useFrame(state => {
        // Makes the light follow the mouse
        // light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
        // Run through the randomized data to calculate some movement
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            // There is no sense or reason to any of this, just messing around with trigonometric functions
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            // particle.mx += (mouse.current[0] - particle.mx) * 0.01
            // particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(0.2, 0.2, 0.2)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <>
            {/* <pointLight distance={40} intensity={8} color="lightblue" /> */}

            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronBufferGeometry attach="geometry" args={[0.2, 0]} />
                <meshBasicMaterial attach="material" color="red" />
            </instancedMesh>
        </>
    )

}

export default Confetti