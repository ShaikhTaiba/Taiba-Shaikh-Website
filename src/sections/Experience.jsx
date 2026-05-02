import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import Developer from '../components/Developer.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  const professional = workExperiences.filter(w => w.subsection === 'professional');
  const volunteering = workExperiences.filter(w => w.subsection === 'volunteering');

  // exact same card JSX as before — extracted into a function so nothing changes
  const renderCards = (list) => list.map(({ id, name, pos, icon, duration, title, animation }) => (
    <div
      key={id}
      className="work-content_container group"
      onClick={() => setAnimationName(animation.toLowerCase())}
      onPointerOver={() => setAnimationName(animation.toLowerCase())}
      onPointerOut={() => setAnimationName('idle')}
    >
      <div className="flex flex-col h-full justify-start items-center py-2">
        <div className="work-content_logo">
          <img src={icon} alt="logo" className="w-full h-full" />
        </div>
        <div className="work-content_bar" />
      </div>
      <div className="sm:p-5 px-2.5 py-5">
        <p className="font-bold text-white-800">{name}</p>
        <p className="text-sm mb-5">{pos} -- {duration}</p>
        <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
      </div>
    </div>
  ));

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Professional Experience & Volunteering</h3>
        <div className="work-container">

          {/* ── 3D canvas — completely untouched ── */}
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-1.5} scale={2} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* ── content — only this part changed ── */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">

              {/* Subsection A */}
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">
                Professional Experience
              </p>
              {renderCards(professional)}

              {/* Divider */}
              <div className="border-t border-white/10 my-6" />

              {/* Subsection B */}
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">
                Volunteering & Community Leadership
              </p>
              {renderCards(volunteering)}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;