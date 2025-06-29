import {
  useGLTF,
  useAnimations,
  useMotion,
  MotionPathControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "motion/react";
import { useMotionValue } from "framer-motion";
import React, { useRef, useEffect } from "react";

export function ShipModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/phoenix_bird.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play any available animation
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0) {
      actions[actionNames[0]].play();
    }
  }, [actions, animations]);
  const yPosition = useMotionValue(6);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1.6); // Set the initial position of the bird
  }, [ySpring]);
  useFrame(() => {
    group.current.position.y = ySpring.get();
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={props.scale || 0.009}
      position={props.position || [4, -1, -1]}
      rotation={[-Math.PI / -4, 1, -0.6]}
    >
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.MatI_Ride_FengHuang_01a}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.MatI_Ride_FengHuang_01b}
        skeleton={nodes.Object_8.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/models/phoenix_bird.glb");
