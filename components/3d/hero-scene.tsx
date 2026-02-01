"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

// Atomic Nucleus at center
function AtomNucleus() {
  const nucleusRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (nucleusRef.current) {
      nucleusRef.current.rotation.x += 0.002
      nucleusRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={nucleusRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshPhongMaterial
        color="#3b82f6"
        emissive="#0ea5e9"
        emissiveIntensity={0.8}
        shininess={100}
      />
    </mesh>
  )
}

// Orbital path visualization
function OrbitPath({ radius }: { radius: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={64}
          array={new Float32Array(
            Array.from({ length: 64 }, (_, i) => {
              const angle = (i / 64) * Math.PI * 2
              return [
                Math.cos(angle) * radius,
                Math.sin(angle) * radius * 0.3,
                Math.sin(angle) * radius * 0.2,
              ]
            }).flat()
          )}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#06b6d4" size={0.1} sizeAttenuation transparent opacity={0.4} />
    </points>
  )
}

// Electron orbiting around nucleus
function Electron({
  radius,
  speed,
  offset,
  color,
}: {
  radius: number
  speed: number
  offset: number
  color: string
}) {
  const electronRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (electronRef.current) {
      const time = clock.getElapsedTime() * speed + offset
      electronRef.current.position.x = Math.cos(time) * radius
      electronRef.current.position.y = Math.sin(time) * radius * 0.3
      electronRef.current.position.z = Math.sin(time) * radius * 0.2
    }
  })

  return (
    <mesh ref={electronRef}>
      <sphereGeometry args={[0.25, 16, 16]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        shininess={60}
      />
    </mesh>
  )
}

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
        />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.7} color="#06b6d4" />
        <pointLight position={[0, -10, -10]} intensity={0.5} color="#8b5cf6" />

        {/* Atom nucleus */}
        <AtomNucleus />

        {/* First orbit with path and electron */}
        <OrbitPath radius={3} />
        <Electron radius={3} speed={2} offset={0} color="#06b6d4" />

        {/* Second orbit with path and electron */}
        <OrbitPath radius={5} />
        <Electron radius={5} speed={1.5} offset={Math.PI / 1.5} color="#8b5cf6" />

        {/* Third orbit with path and electron */}
        <OrbitPath radius={7} />
        <Electron radius={7} speed={1} offset={Math.PI} color="#10b981" />
      </Canvas>
    </div>
  )
}
