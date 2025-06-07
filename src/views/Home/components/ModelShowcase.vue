<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen">
    <!-- Left: 3D Canvas -->
    <div ref="canvasContainer" class="w-full lg:w-1/2 h-[500px] lg:h-auto"></div>

    <!-- Right: Info Section -->
    <div class="w-full lg:w-1/2 p-8 bg-white">
      <h2 class="text-2xl font-bold mb-4">Our Motor</h2>
      <p class="text-gray-700 leading-relaxed">
        Showcase of our motorcycle 3D model, not sure whether to keep it or not
        because it seems that this is the best that a software can do.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const canvasContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  const camera = new THREE.PerspectiveCamera(45, canvasContainer.value.clientWidth / canvasContainer.value.clientHeight, 0.1, 100)
  camera.position.set(2, 2, 5)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  const light = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(light)

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
  dirLight.position.set(5, 10, 7.5)
  scene.add(dirLight)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  const loader = new GLTFLoader()
  loader.load('edited_bike.glb', (gltf) => {
    const model = gltf.scene
    model.scale.set(1, 1, 1) // 如模型太大/小，可调整比例
    model.position.set(0, 0, 0)
    scene.add(model)

    animate()
  }, undefined, (error) => {
    console.error('模型加载失败:', error)
  })

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  // 可选：响应窗口大小变化
  window.addEventListener('resize', () => {
    const width = canvasContainer.value.clientWidth
    const height = canvasContainer.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  })
})
</script>

<style scoped>
/* 你可以根据实际需要进一步美化 */
</style>
