import { useGSAP } from "@gsap/react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const DemoComputer = (props) => {
  const { nodes, materials } = useGLTF("models/sci-fi-transformed.glb");

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

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane002_digital_displays_0.geometry}
        material={materials.digital_displays}
        position={[0, 0.289, 3.122]}
        rotation={[-1.469, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Plane002_digital_display_sides_0.geometry}
        material={materials.digital_display_sides}
        position={[0, 0.289, 3.122]}
        rotation={[-1.469, 0, 0]}
      ></mesh>
      <mesh
        geometry={nodes.Circle_metal_2_0.geometry}
        material={materials.metal_2}
        position={[0, 0, -0.948]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.238}
      />
      <mesh
        geometry={nodes.Circle_metal_1_0.geometry}
        material={materials.metal_1}
        position={[0, 0, -0.948]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.238}
      />
    </group>
  );
};

useGLTF.preload("models/sci-fi-transformed.glb");

export default DemoComputer;
