/* eslint-disable react-hooks/purity */
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* -------------------- Pale Yellow Animated Mesh Shader -------------------- */
function PaleYellowMesh() {
  const matRef = useRef(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uRes: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame(({ clock, mouse, size }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.elapsedTime;
    matRef.current.uniforms.uMouse.value.lerp(new THREE.Vector2(mouse.x, mouse.y), 0.06);
    matRef.current.uniforms.uRes.value.set(size.width, size.height);
  });

  return (
    <mesh position={[0, 0, -2]} scale={[26, 14, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        transparent={false}
        depthWrite={false}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;
          varying vec2 vUv;

          uniform float uTime;
          uniform vec2 uMouse;
          uniform vec2 uRes;

          float circle(vec2 uv, vec2 p, float r, float blur) {
            float d = length(uv - p);
            return smoothstep(r + blur, r - blur, d);
          }

          void main() {
            vec2 uv = vUv;
            vec2 m = uMouse * 0.5;

            // Base gradient: dark olive-black -> warm pale yellow haze -> near black
            vec3 topCol = vec3(0.11, 0.10, 0.05);
            vec3 midCol = vec3(0.22, 0.20, 0.12);
            vec3 botCol = vec3(0.05, 0.045, 0.025);

            float g1 = smoothstep(0.0, 0.58, uv.y);
            float g2 = smoothstep(0.48, 1.0, uv.y);

            vec3 col = mix(botCol, midCol, g1);
            col = mix(col, topCol, g2);

            // Animated soft blobs (dynamic movement)
            vec2 p1 = vec2(0.28 + sin(uTime * 0.12) * 0.06, 0.67 + cos(uTime * 0.11) * 0.05);
            vec2 p2 = vec2(0.68 + cos(uTime * 0.09) * 0.07, 0.45 + sin(uTime * 0.10) * 0.06);
            vec2 p3 = vec2(0.50 + m.x * 0.08, 0.36 + m.y * 0.06);

            float b1 = circle(uv, p1, 0.36, 0.30);
            float b2 = circle(uv, p2, 0.32, 0.26);
            float b3 = circle(uv, p3, 0.40, 0.34);

            vec3 glowA = vec3(0.96, 0.88, 0.60); // pale yellow
            vec3 glowB = vec3(0.84, 0.74, 0.46); // warm gold muted
            vec3 glowC = vec3(1.00, 0.95, 0.78); // soft cream

            col += glowA * b1 * 0.20;
            col += glowB * b2 * 0.16;
            col += glowC * b3 * 0.10;

            // Fine animated wave modulation (subtle living effect)
            float wave = sin((uv.x * 7.0 + uv.y * 9.0) + uTime * 0.35) * 0.5 + 0.5;
            col += vec3(0.08, 0.07, 0.04) * wave * 0.06;

            // Light center haze
            float haze = smoothstep(0.7, 0.05, distance(uv, vec2(0.52 + m.x * 0.03, 0.5 + m.y * 0.02)));
            col += vec3(0.18, 0.15, 0.09) * haze * 0.22;

            // Gentle contrast
            col = pow(col, vec3(0.92));

            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}

/* -------------------- Floating Warm Dust -------------------- */
function WarmDust() {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const count = 1000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 28;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(({ clock, mouse }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.01;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.05;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 0.2, 0.03);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 0.12, 0.03);
  });

  return (
    <points ref={ref} position={[0, 0, -1]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#fff1bf"
        transparent
        opacity={0.28}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="bg3d" style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 2, 3]} intensity={0.35} color="#ffe8a3" />
        <pointLight position={[-3, -1, 2]} intensity={0.22} color="#fff2cc" />

        <PaleYellowMesh />
        <WarmDust />

        <EffectComposer multisampling={0}>
          <Bloom intensity={0.24} luminanceThreshold={0.3} luminanceSmoothing={0.95} mipmapBlur />
          <Noise opacity={0.006} />
          <Vignette eskil={false} offset={0.25} darkness={0.52} />
        </EffectComposer>
      </Canvas>

      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}