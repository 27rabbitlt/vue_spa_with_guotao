<template>
    <div class="lusaka-path-section">
        <img :src="mapImage" alt="Lusaka Map" class="map-background" />
        <svg class="absolute top-0 left-0 w-full h-full z-10" ref="svgEl">
            <g :transform="`translate(${offsetX}, ${offsetY}) scale(0.5)`">
                <path :d="pathD" stroke="red" fill="none" stroke-width="6" ref="pathEl" 
                      :stroke-dasharray="totalLength" 
                      :stroke-dashoffset="totalLength - progress" />
                <!-- 摩托车图标 -->
                <g v-if="position" :transform="`translate(${position.x}, ${position.y})`">
                    <circle cx="0" cy="0" r="20" fill="#10b981" />
                </g>
            </g>
            <g :transform="`translate(${offsetX+100}, ${offsetY-268}) scale(0.5)`">
                <path :d="pathD" stroke="red" fill="none" stroke-width="6" ref="pathEl2" 
                      :stroke-dasharray="totalLength2" 
                      :stroke-dashoffset="totalLength2 - progress2" />
                <!-- 摩托车图标 -->
                <g v-if="position2" :transform="`translate(${position2.x}, ${position2.y})`">
                    <circle cx="0" cy="0" r="20" fill="#ef4444" />
                </g>
            </g>
            <g :transform="`translate(${offsetX+30}, ${offsetY+100}) scale(0.5)`">
                <path :d="pathD" stroke="red" fill="none" stroke-width="6" ref="pathEl3" 
                      :stroke-dasharray="totalLength3" 
                      :stroke-dashoffset="totalLength3 - progress3" />
                <!-- 摩托车图标 -->
                <g v-if="position3" :transform="`translate(${position3.x}, ${position3.y})`">
                    <circle cx="0" cy="0" r="20" fill="#8b5cf6" />
                </g>
            </g>
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import mapImage from '@/assets/img/lusaka-map-background.png'

const pathD = 'M 43.205 276.875 C 43.205 276.875 127.798 257.914 127.568 257.914 C 127.338 257.914 186.286 301.188 186.286 301.188 L 183.31 401.847 L 301.582 452.043 L 315.463 452.532 L 341.842 363.963 L 353.281 331.713 L 378.12 308.814 L 432.758 343.44 L 416.885 365.014 L 421.268 400.129 L 463.572 488.817'

const offsetX = ref(310)
const offsetY = ref(190)

const pathEl = ref(null)
const pathEl2 = ref(null)
const pathEl3 = ref(null)
const svgEl = ref(null)
const position = ref(null)
const position2 = ref(null)
const position3 = ref(null)

let totalLength = 0
let totalLength2 = 0
let totalLength3 = 0
let progress = 0
let progress2 = 0
let progress3 = 0
let timer = null
const speed = 1

onMounted(() => {
    if (!pathEl.value || !pathEl2.value || !pathEl3.value) return

    totalLength = pathEl.value.getTotalLength()
    totalLength2 = pathEl2.value.getTotalLength()
    totalLength3 = pathEl3.value.getTotalLength()
    
    timer = setInterval(() => {
        // 第一个点
        progress += speed
        if (progress > totalLength) {
            progress = 0
        }
        const pt = pathEl.value.getPointAtLength(progress)
        position.value = { x: pt.x, y: pt.y }
        
        // 第二个点
        progress2 += speed * 0.8
        if (progress2 > totalLength2) {
            progress2 = 0
        }
        const pt2 = pathEl2.value.getPointAtLength(progress2)
        position2.value = { x: pt2.x, y: pt2.y }
        
        // 第三个点
        progress3 += speed * 1.2
        if (progress3 > totalLength3) {
            progress3 = 0
        }
        const pt3 = pathEl3.value.getPointAtLength(progress3)
        position3.value = { x: pt3.x, y: pt3.y }
    }, 50)
})

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* 保证容器可定位并且 SVG 与地图重叠 */
.lusaka-path-section {
    position: relative;
    width: 800px;
    /* 可自适应或传入 props 控制 */
    height: 600px;
}

.map-background {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
</style>
