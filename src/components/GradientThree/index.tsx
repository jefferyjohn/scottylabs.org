import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh, ShaderMaterial, Vector2, Vector3 } from "three";
import { hexToRgb, randomInteger, rgb } from "../../utils/shaderUtils";
import styles from "./index.module.scss";

import fragmentShader from "./fragmentShader.glsl";
import sNoiseFunction from "./sNoiseFunction.glsl";
import vertexShader from "./vertexShader.glsl";

function R(x: number, y: number, t: number) {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
}

function G(x: number, y: number, t: number) {
  return Math.floor(
    192 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
}

function B(x: number, y: number, t: number) {
  return Math.floor(
    192 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
}

function almostEquals(x: number, y: number, delta: number = 1e-3) {
  return Math.abs(x - y) <= delta;
}

type GradientColors = [string, string, string, string];

const GRADIENT_COLORS: GradientColors = [
  "#F91A3D",
  "#502584",
  "#5AE5FC",
  "#0780BA",
];

const GradientMesh = () => {
  const mesh = useRef<Mesh>(null);
  const [meshState, setMeshState] = useState({
    t: 0,
    j: 0,
    x: randomInteger(0, 32),
    y: randomInteger(0, 32),
    vCheck: false,
  });

  useFrame((state, delta) => {
    const shaderMaterial = mesh.current?.material as ShaderMaterial;
    if (shaderMaterial?.uniforms) {
      let t = shaderMaterial?.uniforms["u_time"].value;
      let x = shaderMaterial?.uniforms["x"].value;
      let y = shaderMaterial?.uniforms["y"].value;
      let j = shaderMaterial?.uniforms["j"].value;
      let vCheck = shaderMaterial?.uniforms["vCheck"].value;

      if (almostEquals(t % 0.1, 0)) {
        if (vCheck == false) {
          x -= 1;
          if (x <= 0) {
            vCheck = true;
          }
        } else {
          x += 1;
          if (x >= 32) {
            vCheck = false;
          }
        }
      }

      // Increase t by a certain value every frame
      j = j + 0.01;
      t = t + 0.01;

      console.log(t, j, x, y, vCheck);

      shaderMaterial.uniforms = {
        ...shaderMaterial.uniforms,
        x: { value: x },
        y: { value: y },
        j: { value: j },
        vCheck: { value: vCheck },
      };
      shaderMaterial.uniforms["u_color1"].value = new Vector3(
        R(x, y, t / 2),
        G(x, y, t / 2),
        B(x, y, t / 2)
      );
      shaderMaterial.uniforms["u_color1"].value.needsUpdate = true;

      shaderMaterial.uniforms["u_randomisePosition"].value = new Vector2(j, j);
      shaderMaterial.uniforms["u_randomisePosition"].value.needsUpdate = true;

      shaderMaterial.uniforms["u_time"].value = t;
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={3}
      position={new Vector3(-200, 0, -280)}
      rotation-x={-0.3}
      rotation-y={0}
      rotation-z={0.1}
    >
      <planeGeometry args={[1920 / 2, 400, 100, 100]} />
      <shaderMaterial
        uniforms={{
          u_bg: { value: hexToRgb(GRADIENT_COLORS[1]) },
          u_bgMain: { value: hexToRgb(GRADIENT_COLORS[0]) },
          u_color1: {
            value: new Vector3(R(0, 0, 0), G(0, 0, 0), B(0, 0, 0)),
          },
          u_color2: { value: hexToRgb(GRADIENT_COLORS[2]) },
          u_time: { value: 0 },
          u_randomisePosition: { value: new Vector2(0, 0) },
          x: { value: 0 },
          y: { value: 0 },
          j: { value: 0 },
          vCheck: { value: false },
        }}
        fragmentShader={sNoiseFunction + fragmentShader}
        vertexShader={sNoiseFunction + vertexShader}
      />
    </mesh>
  );
};

const GradientThree = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.canvas} ${className}`}>
      <Canvas>
        <perspectiveCamera
          fov={75}
          aspect={1920 / 1080}
          near={0.1}
          far={1000}
          position={new Vector3(0, 1, 20)}
        />
        <GradientMesh />
      </Canvas>
    </div>
  );
};

export default GradientThree;
