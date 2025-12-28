import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/canvas-loader";
import DemoComputer from "../components/demo-computer";
import { myProjects } from "../constants";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = myProjects[currentProjectIndex];

  const handleNavigation = (direction) => {
    setCurrentProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section id="work" className="c-space my-20">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Projects Context*/}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={myProjects[0].spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl "
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5 ">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText ">{currentProject.desc}</p>
            <p className="animatedText ">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo !bg-black-300">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7 ">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="arrow"
                className="w-3 h-3"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="arrow"
                className="w-3 h-3"
              />
            </button>
          </div>
        </div>

        {/* Projects Canvas*/}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={Math.PI} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer
                    texture={currentProject.texture}
                    scale={0.7}
                    position={[0.5, 1.5, 0]}
                    rotation={[0, Math.PI / 15, 0]}
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enableDamping={true}
              dampingFactor={0.2}
              enablePan={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
