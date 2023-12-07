import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface CubeProps {
  color: number;
  setColor: (color: number) => void;
}

const Cube: React.FC<CubeProps> = ({ color, setColor }) => {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      (meshRef.current.material as THREE.MeshBasicMaterial).color.set(color);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Cube;
