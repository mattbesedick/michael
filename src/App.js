import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import Box from './Box'
import Controls from './Controls'
import Plane from './Plane'
import * as THREE from 'three'
import Michael from './Michael';
import Confetti from './Confetti';
import { Physics } from 'use-cannon';

function App() {

  const mouse = useRef([0, 0])

  // onCreated={({ gl }) => {
  //   gl.shadowMap.enabled = true
  //   gl.shadowMap.type = THREE.PCFSoftShadowMap
  // }}
  return (
    <>
      <Canvas camera={{ position: [-1, 2, 5] }} shadowMap>
        <Physics>
          {/* <fog attach="fog" args={["white", 5, 15]} /> */}
          {/* <Controls /> */}
          {/* <Box /> */}

          {/* <Suspense fallback={null}> */}

          {/* <Confetti count={10} /> */}
          <pointLight position={[0, 5, 20]} intensity={.4} />
          <ambientLight intensity={.3} />
          <Michael children="Michael" />
          {/* </Suspense> */}
          <Box />
          <Plane />
        </Physics>
      </Canvas>

    </>
  );
}



export default App;
