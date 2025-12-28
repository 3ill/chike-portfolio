import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/canvas-loader";
import Developer from "../components/developer";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  console.log(`animationName: ${animationName}`)
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text"> My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas
              style={{
                width: "100%",
                height: "500px",
                minHeight: "500px",
                maxHeight: "500px",
              }}
            >
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
              <directionalLight position={[10, 10, 10]} intensity={7} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3.5}
                  scale={3.5}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div
              className="sm:py-10 py-5 sm:px-5 px-2.5"
              onMouseLeave={() => setAnimationName("idle")}
            >
              {workExperiences.map(
                ({ id, name, icon, pos, duration, animation, title }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onMouseEnter={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2 ">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {" "}
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
