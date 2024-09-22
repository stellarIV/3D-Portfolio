import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Decal, Stars, useTexture, Preload } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

// Import textures
import sunTexture from '../../assets/tech/reactjs.png';
import mercuryTexture from '../../assets/tech/javascript.png';
import venusTexture from '../../assets/tech/mongodb.png';
import earthTexture from '../../assets/tech/html.png';
import marsTexture from '../../assets/tech/typescript.png';
import jupiterTexture from '../../assets/tech/figma.png';
import saturnTexture from '../../assets/tech/nodejs.png';
import uranusTexture from '../../assets/tech/git.png';
import neptuneTexture from '../../assets/tech/threejs.svg';
import plutoTexture from '../../assets/tech/docker.png';

const themes = {
  dark: {
    background: '#000',
    ambientLightIntensity: 0.7,
    sunLightColor: '#ffffff',
    sunColor: '#fff8eb',
    skyColor: '#aaf',
    groundColor: '#000',
  },
  light: {
    background: '#fff',
    ambientLightIntensity: 1,
    sunLightColor: '#fff9e6',
    sunColor: '#fff8eb',
    skyColor: '#fff',
    groundColor: '#1b161a',
  },
};

// Utility function to create an orbit line
const OrbitLine = ({ radius }) => {
  const points = [];
  const segments = 100;
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle)));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 'white', opacity: 0.5, transparent: true });
  return <lineSegments geometry={geometry} material={material} />;
};

// Utility function to create a planet
const Planet = ({ texture, size, distance, revolutionSpeed, rotationSpeed }) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const [decal] = useTexture([texture]);

  useFrame(() => {
    // Self-rotation
    planetRef.current.rotation.y += rotationSpeed;

    // Revolution around the sun
    orbitRef.current.rotation.y += revolutionSpeed;
  });

  return (
    <group ref={orbitRef}>
      {/* Orbit */}
      <OrbitLine radius={distance} />
      {/* Planet */}
      <mesh ref={planetRef} position={[distance, 0, 0]} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} 
          map={decal}
          scale={[1.3, 1.3, 1.3]} 
        />
      </mesh>
    </group>
  );
};

const SolarSystem = ({ theme }) => {
  const sunRef = useRef();

  useFrame(() => {
    // Sun self-rotation
    sunRef.current.rotation.y += 0.001;
  });

  const [sunTextureMap] = useTexture([sunTexture]);

  const sunSize = 20;

  const planets = [
    { texture: mercuryTexture, size: sunSize * 0.5, distance: 40, revolutionSpeed: 0.002, rotationSpeed: 0.001 },
    { texture: venusTexture, size: sunSize * 0.5, distance: 65, revolutionSpeed: 0.0015, rotationSpeed: 0.001 },
    { texture: earthTexture, size: sunSize * 0.5, distance: 90, revolutionSpeed: 0.001, rotationSpeed: 0.002 },
    { texture: marsTexture, size: sunSize * 0.5, distance: 115, revolutionSpeed: 0.0008, rotationSpeed: 0.0018 },
    { texture: jupiterTexture, size: sunSize * 0.5, distance: 140, revolutionSpeed: 0.0005, rotationSpeed: 0.002 },
    { texture: saturnTexture, size: sunSize * 0.5, distance: 165, revolutionSpeed: 0.0003, rotationSpeed: 0.0018 },
    { texture: uranusTexture, size: sunSize * 0.5, distance: 190, revolutionSpeed: 0.0002, rotationSpeed: 0.0015 },
    { texture: neptuneTexture, size: sunSize * 0.5, distance: 215, revolutionSpeed: 0.0001, rotationSpeed: 0.0012 },
    { texture: plutoTexture, size: sunSize * 0.5, distance: 240, revolutionSpeed: 0.00009, rotationSpeed: 0.001 },
  ];

  return (
    <>
      {/* Sun */}
      <mesh ref={sunRef} scale={sunSize}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={theme.sunColor} polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // to face the camera rotatn ajust
          map={sunTextureMap}
          scale={[1.5, 1.5, 1.5]} 
        />
      </mesh>

      {/* Planet */}
      {planets.map(({ texture, size, distance, revolutionSpeed, rotationSpeed }, i) => (
        <Planet
          key={i}
          texture={texture}
          size={size}
          distance={distance}
          revolutionSpeed={revolutionSpeed}
          rotationSpeed={rotationSpeed}
        />
      ))}

      <Stars />
    </>
  );
};

const Scene = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const selectedTheme = themes[theme === 'dark' ? 'dark' : 'light'];

  return (
    <Canvas
      camera={{ position: [0, 60, 420], fov: 60 }}
      style={{ height: '300px', width: '100%', background: selectedTheme.background }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={true}
          minDistance={100}
          maxDistance={420}
        />

        <ambientLight intensity={selectedTheme.ambientLightIntensity} />

        <pointLight color={selectedTheme.sunLightColor} intensity={4} position={[0, 0, 0]} />

        <hemisphereLight
          skyColor={selectedTheme.skyColor}
          groundColor={selectedTheme.groundColor}
          intensity={0.5}
        />

        <SolarSystem theme={selectedTheme} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Scene;
