import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Target = (props) => {
  const targetRef = useRef()
  const { nodes, materials } = useGLTF('models/target.glb')

  useGSAP(() => {
    if (!targetRef.current) return
    gsap.to(targetRef.current.position, {
      y: "+=0.5",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group ref={targetRef} {...props} scale={1.8} rotation={[0, 0, Math.PI / 2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041_Target_0.geometry}
        material={materials.Target}
      />
    </group>
  )
}

useGLTF.preload('models/target.glb')

export default Target