// _app.js
import { ChakraProvider } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei' // Drei 库中引入的常用控件
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import '../styles/globals.css' // 引入全局样式

// 封装音频组件
function useAudioListener() {
  const audioListener = useRef(null) // useRef 应该是圆括号

  useEffect(() => {
    const listener = new THREE.AudioListener()
    audioListener.current = listener

    const audio = new Audio('/afro_gangster_2.mp3')
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    const mediaElementSource = audioContext.createMediaElementSource(audio)
    const panner = audioContext.createPanner() // 用于空间音效

    panner.panningModel = 'HRTF'
    panner.setPosition(1, 0, 0) // 控制音频在3D空间中的位置

    mediaElementSource.connect(panner)
    panner.connect(audioContext.destination)

    audio.play()

    return () => {
      audio.pause()
      audioContext.close()
    }
  }, [])

  return audioListener.current
}

function Model() {
  const gltf = useGLTF('/model.glb') // 加载 3D 模型
  return <primitive object={gltf.scene} scale={0.5} />
}

function MyApp({ Component, pageProps }) {
  const audioListener = useAudioListener() // 使用音频监听器

  return (
    <ChakraProvider>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls /> {/* 鼠标旋转控制 */}
        <Model /> {/* 加载 3D 模型 */}
      </Canvas>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp()
