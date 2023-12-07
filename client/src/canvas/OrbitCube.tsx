import React, { useRef } from 'react';
import { useFrame, Group } from '@react-three/fiber';
import OrbitCube2 from './OrbitCube2';

const OrbitCube: React.FC = () => {
  const orbitMeshRef = useRef<Group | null>(null);
  const thetaRef = useRef(0);
  const orbitRadius = 2;
  const orbitSpeed = 0.01;

  useFrame(() => {
    if (orbitMeshRef.current) {
      thetaRef.current += orbitSpeed;
      orbitMeshRef.current.position.x = orbitRadius * Math.sin(thetaRef.current);
      orbitMeshRef.current.position.z = orbitRadius * Math.cos(thetaRef.current);
    }
  });

  return (
    <group ref={orbitMeshRef} position={[orbitRadius, 0, 0]}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
      <OrbitCube2 />
    </group>
  );
};

export default OrbitCube;
