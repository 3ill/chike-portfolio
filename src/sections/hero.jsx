import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../components/button";
import CanvasLoader from "../components/canvas-loader";
import HackerRoom from "../components/hacker-room";
import HeroCamera from "../components/hero-camera";
import { calculateSizes } from "../constants";

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   rotation: { value: [0, -Math.PI, 0] },
  //   position: { value: [2, -2, 4] },
  //   scale: { value: [0.1, 0.1, 0.1], min: 0.1, max: 2, step: 0.1 },
  // });

  const isSmall = useMediaQuery({
    maxWidth: 440,
  });

  const isMobile = useMediaQuery({
    maxWidth: 768,
  });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Chike <span className="waving-hand">👋🏽</span>{" "}
        </p>

        <p className="hero_tag text-gray_gradient">
          I Build Scalable, Impactful Software Solutions for the Future
        </p>

        <div className="flex w-full h-screen justify-center items-center relative lg:pt-8 ">
          {/* <Leva />*/}
          <div className="w-full h-full absolute inset-0">
            <Canvas>
              <Suspense fallback={<CanvasLoader />}>
                {/* <OrbitControls
                  enableZoom={true}
                  enableDamping={true}
                  dampingFactor={0.2}
                  enablePan={true}
                  enableRotate={true}
                />*/}
                <PerspectiveCamera makeDefault position={[0, 0, 27]} />
                <ambientLight intensity={1} color={`#ffffff`} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <HeroCamera isMobile={isMobile}>
                  <HackerRoom
                    scale={sizes.deskScale}
                    position={sizes.deskPosition}
                    rotation={
                      isMobile ? [0.6, -Math.PI, 0] : [0.7, -Math.PI, 0]
                    }
                  />
                </HeroCamera>

                {/* <group>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition} />
                </group>*/}
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[320px] md:bottom-[200px] lg:bottom-[150px] left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
