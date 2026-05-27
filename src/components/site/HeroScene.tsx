import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function GlassTower({ position, scale = 1, delay = 0 }: { position: [number, number, number]; scale?: number; delay?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15 + delay;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <boxGeometry args={[1, 3.2, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          roughness={0.05}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          ior={1.4}
          color="#7dd3fc"
        />
      </mesh>
    </Float>
  );
}

function WaterDrop({ position, scale = 0.18 }: { position: [number, number, number]; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          roughness={0}
          ior={1.33}
          chromaticAberration={0.06}
          color="#bae6fd"
        />
      </mesh>
    </Float>
  );
}

function Squeegee() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });
  return (
    <group ref={ref} position={[2.2, 0.6, 0.6]}>
      <Float speed={1} floatIntensity={0.4}>
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.4, 12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.75, 0]} castShadow>
          <boxGeometry args={[0.9, 0.08, 0.08]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.3} emissive="#38bdf8" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, -0.82, 0]}>
          <boxGeometry args={[0.95, 0.03, 0.12]} />
          <meshStandardMaterial color="#0ea5e9" roughness={0.6} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 6, 5]} intensity={1.2} castShadow color="#bae6fd" />
        <pointLight position={[-5, 2, -3]} intensity={2} color="#38bdf8" />
        <pointLight position={[3, -2, 4]} intensity={1.5} color="#0ea5e9" />

        <GlassTower position={[-1.6, 0, 0]} scale={0.95} delay={0} />
        <GlassTower position={[0, 0.3, -1]} scale={1.15} delay={1.5} />
        <GlassTower position={[1.4, -0.1, 0.2]} scale={0.85} delay={3} />

        <Squeegee />

        <WaterDrop position={[-2.5, 1.2, 1]} />
        <WaterDrop position={[2.6, 1.5, 0.5]} scale={0.12} />
        <WaterDrop position={[-1.8, -1.4, 1.6]} scale={0.14} />
        <WaterDrop position={[1.2, -1.6, 1.4]} scale={0.1} />
        <WaterDrop position={[0.5, 1.8, 1.2]} scale={0.09} />

        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={12} blur={2.5} far={3} />
        <Environment preset="city" />

        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.6} luminanceSmoothing={0.3} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
