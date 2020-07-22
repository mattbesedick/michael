import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import Box from './Box'
import Controls from './Controls'
import Plane from './Plane'
import * as THREE from 'three'
import Text from './Text';
import Confetti from './Confetti';
import { Physics } from 'use-cannon';
import Cake from './Cake'

function App() {

  const mouse = useRef([0, 0])

  // onCreated={({ gl }) => {
  //   gl.shadowMap.enabled = true
  //   gl.shadowMap.type = THREE.PCFSoftShadowMap
  // }}
  return (
    <>
      <Canvas camera={{ position: [-1, 0, 7] }} shadowMap>
        <Physics>
          {/* <fog attach="fog" args={["white", 5, 15]} /> */}
          <Controls />
          <spotLight position={[0, 15, 0]} intensity={.7} />

          <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={.8} castShadow />
          <Suspense fallback={null}>
            <Text children="M" position={[-200, 200, 100]} />
            <Text children="i" position={[-130, 200, 100]} />
            <Text children="c" position={[-100, 200, 100]} />
            <Text children="h" position={[-45, 200, 100]} />
            <Text children="a" position={[20, 200, 100]} />
            <Text children="e" position={[80, 200, 100]} />
            <Text children="l" position={[140, 200, 100]} />
            <Box />
            <Plane />
            <Cake />
          </Suspense>
        </Physics>
      </Canvas>

    </>
  );
}



export default App;
