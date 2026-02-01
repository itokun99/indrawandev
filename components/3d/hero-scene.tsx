"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="#3b82f6" wireframe emissive="#1e40af" emissiveIntensity={0.3} />
    </mesh>
  )
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0.4, 0.4, 0]}>
      <torusGeometry args={[3, 0.8, 16, 100]} />
      <meshPhongMaterial color="#06b6d4" wireframe={false} emissive="#0891b2" emissiveIntensity={0.2} />
    </mesh>
  )
}

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.2} />
    </mesh>
  )
}

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />

        <FloatingCube />
        <FloatingTorus />
        <Sphere />
      </Canvas>
    </div>
  )
}
