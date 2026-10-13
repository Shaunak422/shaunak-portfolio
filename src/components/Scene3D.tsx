import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Central Neural Computational Core
function ComputationalCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
      meshRef.current.rotation.y = t * 0.25;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.15;
      outerRingRef.current.rotation.x = Math.cos(t * 0.15) * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Gyro Ring 1 */}
      <group ref={outerRingRef}>
        <mesh>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#35D5F5" emissive="#35D5F5" emissiveIntensity={0.6} wireframe />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshStandardMaterial color="#8B7CFF" emissive="#8B7CFF" emissiveIntensity={0.5} wireframe />
        </mesh>
      </group>

      {/* Main Translucent Glass / Geometric Sphere with Subtle Distortion */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#101827"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.15}
          metalness={0.9}
          wireframe={false}
          transparent
          opacity={0.88}
        />
      </Sphere>

      {/* Inner glowing core representation */}
      <mesh>
        <icosahedronGeometry args={[0.9, 2]} />
        <meshStandardMaterial
          color="#35D5F5"
          emissive="#35D5F5"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
    </group>
  );
}

// Connected Floating Data Nodes & Synapses
function NeuralDataNodes({ count = 36 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  const { points, connections } = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 1.8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pts.push([x, y, z]);
    }

    const conns: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.7 && Math.random() > 0.4) {
          conns.push([i, j]);
        }
      }
    }
    return { points: pts, connections: conns };
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {points.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={idx % 2 === 0 ? "#35D5F5" : "#8B7CFF"} />
        </mesh>
      ))}

      {/* Synaptic line connections */}
      {connections.map(([i, j], idx) => {
        const p1 = new THREE.Vector3(...points[i]);
        const p2 = new THREE.Vector3(...points[j]);
        const lineGeom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        return (
          <primitive key={`line-${idx}`} object={new THREE.Line(
            lineGeom,
            new THREE.LineBasicMaterial({
              color: idx % 3 === 0 ? 0x8B7CFF : 0x35D5F5,
              transparent: true,
              opacity: 0.28
            })
          )} />
        );
      })}
    </group>
  );
}

// Background Floating Data Particles
function ParticleField({ count = 80 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      coords[i] = (Math.random() - 0.5) * 14;
      coords[i + 1] = (Math.random() - 0.5) * 14;
      coords[i + 2] = (Math.random() - 0.5) * 8;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#35D5F5"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

interface Scene3DProps {
  isMobile?: boolean;
}

export const Scene3D: React.FC<Scene3DProps> = ({ isMobile = false }) => {
  return (
    <div className="w-full h-full relative" aria-label="Interactive 3D Abstract Computational Object">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        {/* Controlled Ambient and Directional Lighting */}
        <ambientLight intensity={0.7} />
        
        {/* Electric Cyan Rim Light */}
        <pointLight position={[-4, 3, 3]} color="#35D5F5" intensity={18} distance={12} />
        
        {/* Violet Fill Light */}
        <pointLight position={[4, -3, 2]} color="#8B7CFF" intensity={15} distance={12} />
        
        {/* Soft highlight */}
        <directionalLight position={[0, 5, 4]} color="#F4F7FB" intensity={1.2} />

        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
          <ComputationalCore />
          <NeuralDataNodes count={isMobile ? 20 : 36} />
        </Float>

        <ParticleField count={isMobile ? 40 : 80} />
      </Canvas>
    </div>
  );
};
