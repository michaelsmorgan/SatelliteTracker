import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls } from '@react-three/drei';
import OrbitCube from './OrbitCube';  // Add this line

function ThreeCanvas() {
  const [color, setColor] = useState(0xff0000);

  const changeColor = async () => {
    const response = await fetch('http://localhost:5000/random_color');
    const data = await response.json();
    setColor(parseInt(data.color, 16));
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <Canvas>
        <Cube color={color} setColor={setColor} />
        <OrbitCube />  // Add this line
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
