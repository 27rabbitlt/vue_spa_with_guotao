<template>
    <div class="relative w-full h-full">
        <!-- 地图背景图 -->
        <img :src="mapImage" alt="Map" class="w-full h-full object-cover absolute top-0 left-0 z-0" />

        <!-- SVG 路径和移动图标 -->
        <svg class="absolute top-0 left-0 w-full h-full z-10" ref="svgEl">
            <g :transform="`translate(${offsetX}, ${offsetY}) scale(0.5)`">
                <path :d="pathD" stroke="red" fill="none" stroke-width="6" ref="pathEl" />
                <!-- 摩托车图标 -->
                <g v-if="position" :transform="`translate(${position.x}, ${position.y})`">
                    <!-- 摩托车主体 -->
                    <rect x="-36" y="-18" width="72" height="36" rx="18" fill="#2c3e50" />
                    <!-- 前轮 -->
                    <circle cx="-27" cy="18" r="13.5" fill="#34495e" stroke="#2c3e50" stroke-width="4.5" />
                    <!-- 后轮 -->
                    <circle cx="27" cy="18" r="13.5" fill="#34495e" stroke="#2c3e50" stroke-width="4.5" />
                    <!-- 车把 -->
                    <line x1="-36" y1="-9" x2="-54" y2="-18" stroke="#2c3e50" stroke-width="9" />
                    <line x1="-36" y1="9" x2="-54" y2="18" stroke="#2c3e50" stroke-width="9" />
                    <!-- 座位 -->
                    <ellipse cx="0" cy="-9" rx="27" ry="9" fill="#e74c3c" />
                </g>
            </g>
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import mapImage from '@/assets/img/lusaka-map-background.png'
const pathD = 'M 43.205 276.875 C 43.205 276.875 127.798 257.914 127.568 257.914 C 127.338 257.914 186.286 301.188 186.286 301.188 L 183.31 401.847 L 301.582 452.043 L 315.463 452.532 L 341.842 363.963 L 353.281 331.713 L 378.12 308.814 L 432.758 343.44 L 416.885 365.014 L 421.268 400.129 L 463.572 488.817' // 你的路径字符串

const offsetX = ref(310)
const offsetY = ref(190)

const pathEl = ref(null)
const svgEl = ref(null)
const position = ref(null)

let totalLength = 0
let progress = 0
let timer = null
const speed = 1 // 每次前进的距离（SVG 单位），你可以调快点

onMounted(() => {
    if (!pathEl.value) return

    totalLength = pathEl.value.getTotalLength()
    timer = setInterval(() => {
        progress += speed
        if (progress > totalLength) {
            progress = 0 // 循环
        }
        const pt = pathEl.value.getPointAtLength(progress)
        position.value = { x: pt.x, y: pt.y }
    }, 50) // 每 50ms 移动一次
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* 保证容器可定位并且 SVG 与地图重叠 */
.relative {
    position: relative;
    width: 800px;
    /* 可自适应或传入 props 控制 */
    height: 600px;
}
</style>
