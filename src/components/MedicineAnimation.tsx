
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// Medicine bottle model
const MedicineBottle = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]} rotation={rotation as [number, number, number]}>
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      <meshStandardMaterial color="#38bdf8" metalness={0.3} roughness={0.2} />
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#0284c7" metalness={0.3} roughness={0.4} />
      </mesh>
    </mesh>
  );
};

// WhatsApp icon
const WhatsAppIcon = ({ position = [2, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.005;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <boxGeometry args={[1.2, 1.2, 0.2]} />
      <meshStandardMaterial color="#25D366" metalness={0.3} roughness={0.4} />
      <mesh position={[0, 0, 0.15]}>
        <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </mesh>
  );
};

// Main animation component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <MedicineBottle position={[-1.5, 0, 0]} />
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
        <WhatsAppIcon position={[1.5, 0, 0]} />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <Environment preset="city" />
    </>
  );
};

const MedicineAnimation = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] mt-4 rounded-xl overflow-hidden shadow-lg animate-on-scroll">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default MedicineAnimation;
