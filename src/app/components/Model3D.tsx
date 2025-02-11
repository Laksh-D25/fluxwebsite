"use client";
import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Environment, ContactShadows, BakeShadows } from "@react-three/drei";
import * as THREE from "three";

const getResponsiveConfig = () => {
  const isMobile = window.innerWidth < 768;
  return {
    cameraZ: isMobile ? 18 : 12, // Adjust camera distance
    modelScaleFactor: isMobile ? 0.7 : 1, // Scale down for mobile
    positionMultiplier: isMobile ? 0.5 : 1, // Reduce spacing for mobile
  };
};

const MODEL_CONFIG = {
  chip: {
    path: "/threedmodel/chip.gltf",
    position: [-6, 3, -1],
    description: "Advanced processing unit powering next-gen AI",
    scale: 1,
    rotationX: Math.PI / 6,
    rotationZ: Math.PI / 6,
  },
  robot: {
    path: "/threedmodel/robot.gltf",
    position: [5.3, 0.5, 2],
    description: "Autonomous robotic assistant with advanced capabilities",
    scale: 0.5,
    rotationX: Math.PI / 6,
    rotationZ: Math.PI / 12,
  },
  portal: {
    path: "/threedmodel/portal.gltf",
    position: [-6, -2.5, 0],
    description: "Interdimensional gateway technology",
    scale: 3.5,
    rotationX: -Math.PI / 6,
    rotationZ: Math.PI / 6,
  },
  stalin: {
    path: "/threedmodel/stalin.gltf",
    position: [7, -2, 0],
    description: "Historical figure model for educational purposes",
    scale: 0.5,
    rotationX: 0,
    rotationZ: Math.PI / 6,
  },
};

function ModelWithBoundingBox({ modelKey, basePosition }) {
  const { scene } = useGLTF(MODEL_CONFIG[modelKey].path);
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const [normalizedScale, setNormalizedScale] = useState(MODEL_CONFIG[modelKey].scale);
  const [responsiveConfig, setResponsiveConfig] = useState(getResponsiveConfig());

  useEffect(() => {
    const updateConfig = () => setResponsiveConfig(getResponsiveConfig());
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  // Normalize model size based on bounding box
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);
    const targetSize = 3;
    setNormalizedScale(((targetSize / maxDimension) * MODEL_CONFIG[modelKey].scale) * responsiveConfig.modelScaleFactor);
  }, [scene, modelKey, responsiveConfig]);

  // Add shadows to all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.roughness = 0.8;
          child.material.metalness = 0.2;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      setYOffset(Math.sin(time) * 0.1);
      groupRef.current.rotation.y = time * 0.2;
    }
  });

  const adjustedPosition = basePosition.map((coord) => coord * responsiveConfig.positionMultiplier);

  return (
    <group
      ref={groupRef}
      position={[adjustedPosition[0], adjustedPosition[1] + yOffset, adjustedPosition[2]]}
      rotation={[MODEL_CONFIG[modelKey].rotationX, 0, MODEL_CONFIG[modelKey].rotationZ]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={normalizedScale}
    >
      <primitive object={scene} />
      {hovered && (
        <Html position={[0, 1, 0]} center>
          <div className="bg-black bg-opacity-75 text-white p-2 rounded-lg text-sm w-48">
            {MODEL_CONFIG[modelKey].description}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function Model3D(props) {
  const { camera } = useThree();
  const [responsiveConfig, setResponsiveConfig] = useState(getResponsiveConfig());

  useEffect(() => {
    const updateConfig = () => {
      setResponsiveConfig(getResponsiveConfig());
      camera.position.set(0, 2, getResponsiveConfig().cameraZ);
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener("resize", updateConfig);
    updateConfig();
    return () => window.removeEventListener("resize", updateConfig);
  }, [camera]);

  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Environment and shadows */}
      <Environment preset="city" />
      <ContactShadows position={[0, -3, 0]} opacity={0.75} scale={40} blur={2.5} far={4} />
      <BakeShadows />

      {/* Models */}
      <group {...props} dispose={null}>
        {Object.keys(MODEL_CONFIG).map((modelKey) => (
          <ModelWithBoundingBox key={modelKey} modelKey={modelKey} basePosition={MODEL_CONFIG[modelKey].position} />
        ))}
      </group>
    </>
  );
}

// Preload all models
Object.values(MODEL_CONFIG).forEach((config) => {
  useGLTF.preload(config.path);
});
