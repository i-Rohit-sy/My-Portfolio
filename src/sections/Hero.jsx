import HeroText from "../assets/components/HeroText";
import ParallelxBackground from "../assets/components/ParallelxBackground";
import { ShipModel } from "../assets/components/ShipModel";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import Loader from "../assets/components/Loader";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 828 });
  return (
    <section className="flex items-start justify-center overflow-hidden md:items-start md:justify-start min-h-screen c-space">
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
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          {/* <OrbitControls target={[0, 0, 0]} /> */}
          <Suspense fallback={<Loader />}>
            <Float>
              <ShipModel
                scale={isMobile && 0.005}
                position={isMobile && [4, -10, 1.1]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
