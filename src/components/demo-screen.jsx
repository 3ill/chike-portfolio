import { useGSAP } from "@gsap/react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const DemoScreen = (props) => {
  const groupRef = useRef();
  const texture = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4",
  );

  useEffect(() => {
    if (texture) {
      texture.flipY = false;
    }
  }, [texture]);

  useGSAP(() => {
    gsap.from(groupRef.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [texture]);

  const { nodes, materials } = useGLTF("models/flat-screen.glb");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials["02___Default"]}
        scale={0.995}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
};

useGLTF.preload("models/flat-screen.glb");

export default DemoScreen;
