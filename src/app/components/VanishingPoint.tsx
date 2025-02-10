import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function RockingChairScene() {
  return (
    <div className="absolute bottom-0 inset-x-0 h-[calc(100vh-4rem)] bg-black">
      <Canvas 
        shadows 
        gl={{ 
          antialias: true,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 1.5, 4]} fov={45} rotation={[-0.1, 0, 0]} />
        
        <ambientLight intensity={0.1} />
        <spotLight
          position={[0, 4, 0]}
          angle={0.5}
          penumbra={0.5}
          intensity={20}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        <Suspense fallback={null}>
          <Chair />
          <mesh 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, 0, 0]} 
            receiveShadow
          >
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial 
              color="#222222"
              roughness={0.8}
              metalness={0.2}
            />
          </mesh>
        </Suspense>
        
        <DustParticles />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

function Chair() {
  const chairRef = useRef();
  const { scene } = useGLTF("/threedmodel/western_rocking_chair/scene.gltf");
  
  // Apply shadows and material updates to the GLTF model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child.material) {
        child.material.side = THREE.DoubleSide;
        child.material.needsUpdate = true;
      }
    }
  });

  useFrame(({ clock }) => {
    if (chairRef.current) {
      chairRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 1.5) * 0.08;
    }
  });
  
  return (
    <primitive
      ref={chairRef}
      object={scene}
      position={[0, 0.1, 0]}
      scale={0.01}  // You might need to adjust this scale for the GLTF model
    />
  );
}

function DustParticles() {
  const particlesRef = useRef();
  const particleCount = 800;
  
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  
  const generateStartPosition = () => {
    const height = Math.random() * 3;
    const spread = Math.random() * 2 - 1;
    return {
      x: 2 + Math.random() * 0.5,
      y: height,
      z: spread * (1 - height/4)
    };
  };

  const generateVelocity = () => {
    return {
      x: -0.002 - Math.random() * 0.003,
      y: (Math.random() - 0.5) * 0.0015,
      z: (Math.random() - 0.5) * 0.001
    };
  };

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const pos = generateStartPosition();
    const vel = generateVelocity();
    
    positions[i3] = pos.x;
    positions[i3 + 1] = pos.y;
    positions[i3 + 2] = pos.z;
    
    velocities[i3] = vel.x;
    velocities[i3 + 1] = vel.y;
    velocities[i3 + 2] = vel.z;
  }
  
  useFrame(({ clock }) => {
    if (!particlesRef.current) return;
    
    const positions = particlesRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      const yOffset = Math.sin(time + positions[i3]) * 0.0002;
      const zOffset = Math.cos(time + positions[i3]) * 0.0002;
      
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1] + yOffset;
      positions[i3 + 2] += velocities[i3 + 2] + zOffset;
      
      if (positions[i3] < -2 || Math.abs(positions[i3 + 2]) > 2) {
        const newPos = generateStartPosition();
        const newVel = generateVelocity();
        positions[i3] = newPos.x;
        positions[i3 + 1] = newPos.y;
        positions[i3 + 2] = newPos.z;
        velocities[i3] = newVel.x;
        velocities[i3 + 1] = newVel.y;
        velocities[i3 + 2] = newVel.z;
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Pre-load the GLTF model
useGLTF.preload("/threedmodel/western_rocking_chair/scene.gltf");