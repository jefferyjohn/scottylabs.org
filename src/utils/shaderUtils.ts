import { Vector3 } from "three";

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rgb(r: number, g: number, b: number) {
  return new Vector3(r, g, b);
}

export function hexToRgb(hex: string) {
  const [_, rs, gs, bs] = hex.match(/^#(..)(..)(..)$/) ?? ["", "0", "0", "0"];
  const [r, g, b] = [rs, gs, bs].map((hexStr) => parseInt(hexStr, 16));

  return new Vector3(r, g, b);
}
