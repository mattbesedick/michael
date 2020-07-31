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
import Balloons from './Balloons'

function App() {


  return (
    <>
      <Canvas camera={{ position: [-1, 0, 7] }} shadowMap>
        <Physics>
          {/* <fog attach="fog" args={["white", 5, 15]} /> */}
          <Controls />
          <spotLight position={[0, 15, 0]} intensity={.7} />
          <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={.8} castShadow />
          <Suspense fallback={null}>
            <Text children="H" position={[-500, 200, 100]} />
            <Text children="a" position={[-440, 200, 100]} />
            <Text children="p" position={[-390, 200, 100]} />
            <Text children="p" position={[-340, 200, 100]} />
            <Text children="y" position={[-290, 200, 100]} />
            <Text children="B" position={[-200, 200, 100]} />
            <Text children="i" position={[-150, 200, 100]} />
            <Text children="r" position={[-120, 200, 100]} />
            <Text children="t" position={[-65, 200, 100]} />
            <Text children="h" position={[-20, 200, 100]} />
            <Text children="d" position={[40, 200, 100]} />
            <Text children="a" position={[100, 200, 100]} />
            <Text children="y" position={[160, 200, 100]} />
            <Text children="M" position={[250, 200, 100]} />
            <Text children="i" position={[320, 200, 100]} />
            <Text children="c" position={[350, 200, 100]} />
            <Text children="h" position={[410, 200, 100]} />
            <Text children="a" position={[470, 200, 100]} />
            <Text children="e" position={[520, 200, 100]} />
            <Text children="l" position={[560, 200, 100]} />
            <Balloons position={[3, 0, 0]} />
            <Balloons position={[-3, 0, 0]} />
            <Confetti count={200} />
            <Plane />
            <Cake />
          </Suspense>
        </Physics>
      </Canvas>

    </>
  );
}



export default App;
