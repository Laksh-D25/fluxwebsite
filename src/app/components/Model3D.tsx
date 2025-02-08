"use client";

import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Model3D(props) {
  const { nodes, materials } = useGLTF("/threedmodel/flux_logo.gltf");
  const groupRef = useRef();
  const meshRef = useRef();
  const { camera, pointer } = useThree();
  const [scale, setScale] = useState([3, 3, 3]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width < 640 ? [1.8, 1.8, 1.8] : width < 1024 ? [2.5, 2.5, 2.5] : [3, 3, 3]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);
      meshRef.current.position.set(0, 0, 0);
    }
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const x = pointer.x * 0.3;
    const y = pointer.y * 0.3;
    const target = camera.position.clone();
    target.x += x;
    target.y += y;
    target.z = 2;
    groupRef.current.lookAt(target);
  });

  return (
    <group {...props} dispose={null}>
      <group name="Scene" ref={groupRef} position={[0, 0, 0]}>
        <mesh
          ref={meshRef}
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          rotation={[1.685, 0, -0.03]}
          material={materials["Material.001"]}
          material-emissive={"#ffffff"}
          material-emissiveIntensity={2.5}
          material-toneMapped={false}
          scale={scale}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/threedmodel/flux_logo.gltf");
