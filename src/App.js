import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import Box from './Box'
import Controls from './Controls'
import Plane from './Plane'
import * as THREE from 'three'
import Michael from './Michael';

function App() {

  return (
    <Canvas camera={{ position: [0, 0, 5] }} onCreated={({ gl }) => {
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}>
      {/* <spotLight /> */}
      {/* <fog attach="fog" args={["white", 5, 15]} /> */}
      <Controls />
      {/* <Box /> */}
      <ambientLight intensity={.5} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Michael children="Michael" />
      </Suspense>
      <Plane />

    </Canvas>
  );
}

export default App;
