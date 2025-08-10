<template>
    <section id="portfolio" class="portfolio-section">
        <div class="portfolio-container">
            <!-- 标题 -->
            <div class="portfolio-heading wow " data-wow-duration="1s">
                <h2 class="title text-primary text-7xl font-bold">Our Portfolio</h2>
                <p class="subtitle text-primary text-2xl font-medium">Discover our innovative electric mobility solutions</p>
            </div>
            
            <!-- 照片墙 -->
            <div class="scene-wrapper">
                <div class="scene">
                    <div class="prism">
                        <div class="face" v-for="(photo, i) in photos" :key="i" :style="getFaceStyle(i)"
                            v-on:click="selectCard(i)">
                            <div class="card" :class="{ flipped: isFlipped(i) }">
                                <div class="card-front">
                                    <img :src="photo">
                                </div>
                                <div class="card-back">
                                    <h3>This is our information</h3>
                                    <p>🚀 Buy now with surprise price!</p>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button @click="prev" class="nav-button">&lt;</button>
                    <button @click="next" class="nav-button">&gt;</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import photo1 from '@/assets/img/buy_item_1.jpg'
import photo2 from '@/assets/img/buy_item_2.jpg'
import photo3 from '@/assets/img/buy_item_1.jpg'
import photo4 from '@/assets/img/buy_item_2.jpg'
import photo5 from '@/assets/img/buy_item_2.jpg'

const photos = [
    photo1, photo2, photo3, photo4, photo5
]

const current = ref(0)
const selectedIndex = ref(null)
const flippedArr = ref(Array(photos.length).fill(false))
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

// 响应式的translateZ值
const translateZ = computed(() => {
    return windowWidth.value <= 768 ? 400 : 400
})

const next = () => {
    current.value = (current.value + 1) % photos.length
    // 不再需要旋转整个3D对象，因为getFaceStyle会根据current.value动态计算
}

const prev = () => {
    current.value = (current.value - 1 + photos.length) % photos.length
    // 不再需要旋转整个3D对象，因为getFaceStyle会根据current.value动态计算
}

const getFaceStyle = (i) => {
    const currentModed = current.value % photos.length
    
    // 计算相对于当前照片的位置
    const relativeIndex = (i - currentModed + photos.length) % photos.length
    
    // 只显示当前照片和左右两张照片
    if (relativeIndex === 0) {
        // 当前照片 - 正面
        if (flippedArr.value[i]) {
        return {
            transform: `rotateY(0deg) translateZ(${translateZ.value + 600}px)`,
                opacity: 1,
                zIndex: 10
            }
        } else {
            return {
                transform: `rotateY(0deg) translateZ(${translateZ.value}px)`,
                opacity: 1,
                zIndex: 10
            }
        }
    } else if (relativeIndex === 1) {
        // 右边照片 - 偏转95度
        return {
            transform: `rotateY(80deg) translateZ(${translateZ.value}px)`,
            opacity: 1,
            zIndex: 5
        }
    } else if (relativeIndex === photos.length - 1) {
        // 左边照片 - 偏转-95度
        return {
            transform: `rotateY(-80deg) translateZ(${translateZ.value}px)`,
            opacity: 1,
            zIndex: 5
        }
    } else if (relativeIndex === 2) {
        return {
            transform: `rotateY(160deg) translateZ(${translateZ.value}px)`,
            opacity: 0,
            zIndex: 5
        }
    } else if (relativeIndex === photos.length - 2) {
        return {
            transform: `rotateY(-160deg) translateZ(${translateZ.value}px)`,
            opacity: 0,
            zIndex: 5
        }
    } else {
        // 其他照片不显示
        return {
            transform: `rotateY(relativeIndex * 80deg) translateZ(${translateZ.value}px)`,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 1
        }
    }
}

const selectCard = (i) => {
    if (i === current.value % photos.length) {
        flippedArr.value[i] = !flippedArr.value[i];
    }
}

const isFlipped = (i) => {
    return flippedArr.value[i];
}

// 获取当前可见的照片索引
const getVisiblePhotos = () => {
    const currentModed = current.value % photos.length
    const visible = []
    
    // 当前照片
    visible.push(currentModed + 1)
    // 右边照片
    visible.push(((currentModed + 1) % photos.length) + 1)
    // 左边照片
    visible.push(((currentModed - 1 + photos.length) % photos.length) + 1)
    
    return visible.sort((a, b) => a - b)
}

// 监听窗口大小变化
const handleResize = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.portfolio-section {
    background-color: #ffffff;
    padding: 100px 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.portfolio-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.portfolio-heading {
    margin-bottom: 60px;
    
    .title {
        margin-bottom: 20px;
    }
    
    .subtitle {
        color: #666;
        font-weight: 400;
    }
}

.scene-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scene {
    width: 600px;
    height: 450px;
    perspective: 4000px;
    margin: 40px auto;
    position: relative;
    text-align: center;

    @media (max-width: 768px) {
        width: 400px;
        height: 300px;
    }
}

.prism {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all 0.6s ease;
}

.card {
    width: 100%;
    height: 100%;
}

.card.flipped {
    /* transform: rotateX(180deg); */
}

.card-front {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s;
    transform: none;
}

.card-back {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s;
    transform: rotateY(180deg);
    border: 2px solid #674f88;
    border-radius: 12px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.card.flipped .card-front {
    transform: rotateY(180deg);
}

.card.flipped .card-back {
    transform: none;
}

.card-front,
.card-back {
    position: absolute;
    backface-visibility: hidden;
}

.card-front img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
}

.card-back h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.card-back p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.card-back button {
    margin-top: 0;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #007bff;
    color: white;
    transition: background 0.3s ease;
    font-weight: 500;
}

.card-back button:hover {
    background: #0056b3;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 30px;
}

.nav-button {
    font-size: 36px;
    color: #333;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 12px 20px;
    transition: transform 0.2s;
    border-radius: 8px;
    
    &:hover {
        transform: scale(1.2);
        background: rgba(0, 123, 255, 0.1);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .portfolio-section {
        padding: 60px 0;
    }
    
    .portfolio-heading {
        margin-bottom: 40px;
        
        .title {
            font-size: 3rem;
        }
        
        .subtitle {
            font-size: 1.2rem;
        }
    }
    
    .controls {
        gap: 24px;
        margin-top: 20px;
    }
    
    .nav-button {
        font-size: 28px;
        padding: 8px 16px;
    }
}
</style>
