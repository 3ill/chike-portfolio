import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("chike@knowforcreators.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Grid 1*/}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container relative">
            <img
              src="assets/3ill-Avatar.png"
              alt="profile"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, i'm Chike</p>
              <p className="grid-subtext">
                I have honed my skills in frontend, backend, blockchain and
                artifical intelligence for over 8 years{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2*/}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My expertise spans modern JavaScript and TypeScript, with deep experience in Node.js, NestJS, Express, and the React/Next.js ecosystem. I also build smart contracts with Solidity for EVM-compatible chains and Solana, enabling robust blockchain solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3*/}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 6.5244,
                    lng: 3.3792,
                    text: "Nigeria, Lagos",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-subtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Nigeria and available for remote work
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Grid 4*/}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="illustration"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                My Passion for Software Engineering
              </p>

              <p className="grid-subtext">
                I love architecting, developing scalable systems and learning
                new technologies. Coding isn't just my profession, it is my
                drug.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  chike@knowforcreators.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
