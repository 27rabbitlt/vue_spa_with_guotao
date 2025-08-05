<template>
    <div class="scene-wrapper">
        <div class="scene">
            <div class="prism" :style="{ transform: `rotateY(${angle}deg)` }">
                <div class="face" v-for="(photo, i) in photos" :key="i" :style="getFaceStyle(i)"
                    v-on:click="selectCard(i)">
                    <div class="card" :class="{ flipped: isFlipped(i) }">
                        <div class="card-front">
                            <img :src="photo">
                        </div>
                        <div class="card-back">
                            <h3> This is our information</h3>
                            <p>🚀 Buy now with surprise price!</p>
                            <button> Contact Us</button>
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
</template>

<script setup>
import { ref } from 'vue'

import photo1 from '@/assets/img/buy_item_1.jpg'
import photo2 from '@/assets/img/buy_item_2.jpg'
import photo3 from '@/assets/img/buy_item_1.jpg'
import photo4 from '@/assets/img/buy_item_2.jpg'
import photo5 from '@/assets/img/buy_item_1.jpg'

const photos = [
    photo1, photo2, photo3, photo4, photo5
]

const current = ref(0)
const angle = ref(0)
const selectedIndex = ref(null)
const flippedArr = ref(Array(photos.length).fill(false))
const next = () => {
    // current.value = (current.value + 1) % photos.length
    current.value = current.value + 1
    angle.value = current.value * -72 // 每面旋转 72 度
}
const prev = () => {
    // current.value = (current.value - 1 + photos.length) % photos.length
    current.value = current.value - 1
    angle.value = current.value * -72
}

const getFaceStyle = (i) => {
    const rotation = i * 72
    return {
        transform: `rotateY(${rotation}deg) translateZ(300px)`
    }
}

const selectCard = (i) => {
    if (i === current.value % photos.length) {
        flippedArr.value[i] = !flippedArr.value[i];
    }
    console.log(current.value)
}

const isFlipped = (i) => {
    return flippedArr.value[i];
}

</script>

<style scoped>
.scene-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scene {
    width: 400px;
    height: 300px;
    perspective: 2000px;
    margin: 40px auto;
    position: relative;
    text-align: center;
}

.prism {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s ease;
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card {
    width: 100%;
    height: 100%;
    /* transition: 2s; */
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
    transform: rotateX(180deg);
    border: 2px solid #674f88;
    border-radius: 8px;
}

.card.flipped .card-front {
    transform: rotateX(180deg);
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
    border-radius: 8px;
    object-fit: cover;
}

.back {
    transform: rotateY(180deg);
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #007bff;
    color: white;
    transition: background 0.3s ease;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 20px;
}

.nav-button {
    font-size: 32px;
    color: black;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 16px;
    transition: transform 0.2s;
}

.nav-button:hover {
    transform: scale(1.2);
}
</style>
