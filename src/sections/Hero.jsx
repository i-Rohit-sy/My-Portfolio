import HeroText from "../assets/components/HeroText";
import ParallelxBackground from "../assets/components/ParallelxBackground";
import { ShipModel } from "../assets/components/ShipModel";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import Loader from "../assets/components/Loader";
import { Suspense } from "react";
import { alpha } from "motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 828 });
  const isMedium = useMediaQuery({ minWidth: 829, maxWidth: 1050 });
  const isLarge = useMediaQuery({ minWidth: 1051 });

  let modelPosition = [0, -5, 0]; // Default fallback
  let modelScale = 0.01;

  if (isMobile) {
    modelPosition = [4, -10, 1];
    modelScale = 0.005;
  } else if (isMedium) {
    modelPosition = [2, -7, -4];
    modelScale = 0.01;
  } else if (isLarge) {
    modelPosition = [0, -7, -5.5];
    modelScale = 0.015;
  }
  return (
    <section
      id="home"
      className="flex items-start justify-center overflow-hidden md:items-start md:justify-start min-h-screen c-space"
    >
      <HeroText />
      <ParallelxBackground />
      <figure
        className="absolute inset-0 overflow-y-hidden"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [10, 1, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          {/* <OrbitControls target={[0, 0, 0]} /> */}
          <Suspense fallback={<Loader />}>
            <Float>
              <ShipModel scale={modelScale} position={modelPosition} />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
