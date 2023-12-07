import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const OrbitCube2: React.FC = () => {
  const orbitMeshRef = useRef<THREE.Mesh | null>(null);
  const thetaRef = useRef(0);
  const orbitRadius = 2;
  const orbitSpeed = 0.02;

  useFrame(() => {
    if (orbitMeshRef.current) {
      thetaRef.current += orbitSpeed;
      orbitMeshRef.current.position.x = orbitRadius * Math.sin(thetaRef.current);
      orbitMeshRef.current.position.z = orbitRadius * Math.cos(thetaRef.current);
    }
  });

  return (
    <mesh ref={orbitMeshRef} position={[orbitRadius, 0, 0]}>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshBasicMaterial color={0x0000ff} />
    </mesh>
  );
};

export default OrbitCube2;
