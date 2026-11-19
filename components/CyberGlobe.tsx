
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CyberGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.12;
      globeRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.08;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.06;
    }
  });

  return (
    <group scale={0.85}>
      {/* Globe transparent violet */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1.25, 64, 64]} />
          <meshPhysicalMaterial
  color="#BAA7FF"
  transparent
  opacity={0.14}
  metalness={0.15}
  roughness={0.08}
  transmission={0.25}
  thickness={0.4}
  emissive="#9375D6"
  emissiveIntensity={0.12}
  depthWrite={false}
/>
        </mesh>

        {/* Maillage holographique discret */}
<mesh>
  <sphereGeometry args={[1.26, 32, 24]} />
  <meshBasicMaterial
    color="#BAA7FF"
    wireframe
    transparent
    opacity={0.06}
    depthWrite={false}
  />
</mesh>
{/* Points lumineux holographiques */}
{Array.from({ length: 36 }, (_, i) => {
  const y = 1 - (i / 35) * 2;
  const radius = Math.sqrt(1 - y * y);
  const angle = i * 2.39996;

  const x = Math.cos(angle) * radius * 1.28;
  const z = Math.sin(angle) * radius * 1.28;

  return (
    <mesh key={i} position={[x, y * 1.28, z]}>
      <sphereGeometry args={[0.018, 8, 8]} />
      <meshBasicMaterial
        color={i % 2 === 0 ? "#E9A6D0" : "#BAA7FF"}
      />
    </mesh>
  );
})}
        </group>
       {/* Bouclier holographique */}
<group
  position={[0, 0, 1.35]}
  rotation={[0, 0, 0]}
  scale={0.82}
>
  {/* Corps du bouclier */}
  <mesh>
    <shapeGeometry
      args={[
        new THREE.Shape()
          .moveTo(0, 0.65)
          .lineTo(0.55, 0.38)
          .lineTo(0.48, -0.25)
          .quadraticCurveTo(0.35, -0.55, 0, -0.75)
          .quadraticCurveTo(-0.35, -0.55, -0.48, -0.25)
          .lineTo(-0.55, 0.38)
          .closePath(),
      ]}
    />
    <meshStandardMaterial
  color="#E9A6D0"
  emissive="#E9A6D0"
  emissiveIntensity={2}
  transparent
  opacity={0.95}
  side={THREE.DoubleSide}
  depthWrite={false}
/>
  </mesh>
{/* Intérieur violet du bouclier */}
<mesh position={[0, 0, 0.025]} scale={0.88}>
  <shapeGeometry
    args={[
      new THREE.Shape()
        .moveTo(0, 0.65)
        .lineTo(0.55, 0.38)
        .lineTo(0.48, -0.25)
        .quadraticCurveTo(0.35, -0.55, 0, -0.75)
        .quadraticCurveTo(-0.35, -0.55, -0.48, -0.25)
        .lineTo(-0.55, 0.38)
        .closePath(),
    ]}
  />
  <meshBasicMaterial
    color="#302143"
    side={THREE.DoubleSide}
  />
</mesh>
  {/* Cadenas */}
  <group position={[0, -0.08, 0.06]}>
    <mesh position={[0, -0.12, 0]}>
      <boxGeometry args={[0.32, 0.28, 0.08]} />
      <meshStandardMaterial
        color="#F7DDF0"
        emissive="#E9A6D0"
        emissiveIntensity={1}
      />
    </mesh>

    <mesh position={[0, 0.06, 0]}>
      <torusGeometry args={[0.12, 0.045, 12, 32, Math.PI]} />
      <meshStandardMaterial
        color="#F7DDF0"
        emissive="#E9A6D0"
        emissiveIntensity={1}
      />
    </mesh>
   </group>
</group>

{/* Grand anneau rose */}
      <mesh ref={ring1Ref} rotation={[0.45, 0.15, 0.35]}>
        <torusGeometry args={[1.67, 0.025, 20, 128]} />
        <meshStandardMaterial
          color="#E9A6D0"
          emissive="#E9A6D0"
          emissiveIntensity={1.7}
          metalness={0.65}
          roughness={0.2}
        />
      </mesh>

      {/* Anneau lavande */}
      <mesh ref={ring2Ref} rotation={[-0.45, 0.5, -0.25]}>
        <torusGeometry args={[1.52, 0.015, 16, 128]} />
        <meshStandardMaterial
          color="#BAA7FF"
          emissive="#BAA7FF"
          emissiveIntensity={1.5}
          metalness={0.55}
          roughness={0.2}
        />
      </mesh>

      {/* Lumières */}
      <pointLight
        position={[2, 2, 3]}
        color="#E9A6D0"
        intensity={12}
        distance={8}
      />
      <pointLight
        position={[-2, -1, 2]}
        color="#BAA7FF"
        intensity={8}
        distance={7}
      />
    </group>
  );
}
