import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/div_meter.glb`);
  scene.scale.set(5, 5, 5);
  scene.position.set(0, -0.5, 0);
  return <primitive object={scene} />;
}
useGLTF.preload(`${import.meta.env.BASE_URL}models/div_meter.glb`);

export function DivMeter() {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
