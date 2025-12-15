import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Shape Component
const FloatingShape = ({ 
  position, 
  geometry, 
  color, 
  speed = 1, 
  rotationIntensity = 1, 
  scale = 1 
}: {
  position: [number, number, number];
  geometry: React.ReactNode;
  color: string;
  speed?: number;
  rotationIntensity?: number;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  
  // Random initial phase for floating so they don't sync
  const initialY = position[1];
  const phase = Math.random() * 10;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Smooth floating animation
    meshRef.current.position.y = initialY + Math.sin(t * speed + phase) * 0.2;
    
    // Rotation logic
    const rotationSpeed = hovered ? 2.5 : 0.5;
    meshRef.current.rotation.x += 0.005 * rotationSpeed * rotationIntensity;
    meshRef.current.rotation.y += 0.01 * rotationSpeed * rotationIntensity;
    
    // Scale animation on hover
    const targetScale = hovered ? scale * 1.1 : scale;
    // Simple lerp for scale
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[scale, scale, scale]}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
    >
      {geometry}
      <meshStandardMaterial 
        color={hovered ? "#333333" : color} 
        roughness={0.4} 
        metalness={0.6} 
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <pointLight position={[-5, 5, -5]} intensity={2} color="#ffffff" />
      <pointLight position={[0, -5, 5]} intensity={1} color="#aaaaff" />
      
      {/* Centerpiece: Icosahedron */}
      <FloatingShape 
        position={[0, 0, 0]} 
        geometry={<icosahedronGeometry args={[1.5, 0]} />} 
        color="#808080" 
        speed={0.8}
        scale={1.3}
      />
    </>
  )
}

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 pt-32 pb-20 gap-12 max-w-[90rem] mx-auto overflow-hidden"
    >
      {/* Typography */}
      <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10 flex flex-col justify-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Specializing in crafting digital experiences that merge function with brutalist aesthetics.
        </motion.h2>

        {/* Staggered Text Reveal */}
        <div className="flex flex-col">
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    Graphic
                </motion.h1>
            </div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    <span className="text-neutral-400 dark:text-neutral-600">&</span> Web
                </motion.h1>
            </div>

             <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    Designer
                </motion.h1>
            </div>
        </div>
          
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex items-center gap-4"
        >
             <div className="h-[1px] bg-current w-16"></div>
             <span className="uppercase tracking-widest text-xs font-medium">Scroll to explore</span>
        </motion.div>
      </div>

      {/* 3D Scene Section */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
         className="w-full md:w-[50%] h-[400px] md:h-[600px] lg:h-[700px] order-1 md:order-2 relative z-0"
      >
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          className="w-full h-full"
          dpr={[1, 2]} // Optimize pixel ratio
        >
           <Scene />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;