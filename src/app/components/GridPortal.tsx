import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const GridPortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uRotationSpeed: 0.2,
    uGridDensity: 15.0,
    uLineWidth: 0.02,
    uPerspective: 4.0,
  },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uTime;
    uniform float uRotationSpeed;
    uniform float uGridDensity;
    uniform float uLineWidth;
    uniform float uPerspective;
    varying vec2 vUv;

    #define PI 3.14159265359

    float grid(vec2 uv, float width) {
      vec2 center = vec2(0.5);
      vec2 point = uv - center;
      
      // Convert to polar coordinates
      float angle = atan(point.y, point.x);
      float dist = length(point);
      
      // Add rotation
      angle += uTime * uRotationSpeed;
      
      // Create radial lines
      float radialLines = abs(mod(angle * uGridDensity / PI, 1.0));
      float radial = smoothstep(width, 0.0, radialLines);
      
      // Create circular lines
      float circles = abs(mod(dist * uGridDensity - uTime * 0.2, 1.0));
      float circle = smoothstep(width, 0.0, circles);
      
      // Perspective distortion
      float perspectiveFactor = pow(dist, uPerspective);
      
      // Combine effects
      float grid = max(radial, circle);
      
      // Fade out at edges and apply perspective
      float edge = smoothstep(1.0, 0.2, dist);
      return grid * edge * (1.0 - perspectiveFactor * 0.8);
    }

    void main() {
      vec2 uv = vUv;
      
      float gridPattern = grid(uv, uLineWidth);
      vec3 color = vec3(1.0) * gridPattern;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ GridPortalMaterial });

// Add types for the custom material
declare global {
  namespace JSX {
    interface IntrinsicElements {
      gridPortalMaterial: any;
    }
  }
}

export default function GridPortal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <gridPortalMaterial
        ref={materialRef}
        transparent
        uRotationSpeed={0.2}
        uGridDensity={15.0}
        uLineWidth={0.02}
        uPerspective={4.0}
      />
    </mesh>
  );
}