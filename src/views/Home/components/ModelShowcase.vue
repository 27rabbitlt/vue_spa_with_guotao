<template>
  <div class="flex flex-row w-full min-h-[400px]">
    <!-- 左侧 3D -->
    <div class="w-[60%] min-h-[400px] bg-gray-100 relative">
      <canvas ref="canvas" class="w-full h-full block absolute top-0 left-0" />
    </div>

    <!-- 右侧内容 -->
    <div class="w-[40%] p-6 bg-white">
      <h1 class="text-3xl font-bold mb-4">未来电动摩托车</h1>
      <p class="text-gray-700 text-lg mb-4">
        我们的电动摩托车融合了创新设计与尖端科技，拥有高效能与智能化操控系统，是城市出行的理想之选。
      </p>
      <ul class="list-disc pl-5 text-gray-600 space-y-2">
        <li>极速可达 120km/h</li>
        <li>续航 180 公里</li>
        <li>智能仪表盘</li>
        <li>支持快充、换电</li>
      </ul>
    </div>
  </div>

  <!-- 页面其他内容 -->
  <div class="p-10 bg-gray-50 text-gray-800">
    <h2 class="text-2xl font-semibold mb-4">更多介绍</h2>
    <p class="mb-4">我们正打造一个完整的电动车生态系统，从车辆制造到充电网络，实现真正的可持续出行。</p>
    <p class="mb-4">请继续向下浏览了解我们的设计理念与技术优势。</p>

    <!-- 模拟长页面 -->
    <!-- <div class="h-[1000px] bg-gradient-to-b from-white to-gray-200"></div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = ref()

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.value.clientWidth / canvas.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1, 5)

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.target.set(0, 1, 0)
  controls.update()

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 150, 20)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, metalness: 0.6, roughness: 0.3 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const animate = () => {
    requestAnimationFrame(animate)
    mesh.rotation.y += 0.005
    controls.update()
    renderer.render(scene, camera)
  }

  animate()

  // 响应 canvas 容器大小变化
  const resize = () => {
    const width = canvas.value.clientWidth
    const height = canvas.value.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', resize)
  resize()
})
</script>
