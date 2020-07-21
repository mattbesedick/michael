import React, { useState, useRef } from 'react'
import { useSpring, a } from 'react-spring/three'
import { useFrame, extend, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useBox } from 'use-cannon'




const Box = (props) => {
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    // const props = useSpring({
    //     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    //     color: hovered ? "red" : "gray"
    // })

    const meshRef = useRef()
    // useFrame(() => {
    //     meshRef.current.rotation.y += 0.01
    //     meshRef.current.rotation.x += 0.01
    // })

    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))


    return (
        // <a.mesh onPointerOver={() => setHovered(true)}
        //     onPointerOut={() => setHovered(!hovered)}
        //     onClick={() => setActive(!active)}
        //     scale={props.scale}
        //     ref={meshRef}
        //     castShadow
        // >

        //     <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        //     <a.meshPhysicalMaterial attach="material" color={props.color} />

        // </a.mesh>

        <mesh receiveShadow castShadow ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>

    )
}
export default Box