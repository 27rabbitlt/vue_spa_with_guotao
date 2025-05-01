<template>
    <div>
        <!-- Hero Background -->
        <div class="hero">
            Hero Background
        </div>

        <!-- Scroll Sections -->
        <div v-for="(section, index) in sections" :key="index" class="section" :class="{ reverse: index % 2 === 1 }">
            <div class="text wow animate__animated animate__fadeInLeft">
                <h2>{{ section.title }}</h2>
                <p>{{ section.text }}</p>
            </div>
            <div class="image wow animate__animated animate__fadeInRight">
                <img :src="section.img" :alt="section.title" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // WOW.js 初始化
    if (typeof WOW !== 'undefined') {
        new WOW().init()
    }
})

const sections = [
    {
        title: '第一部分标题',
        text: '这是第一部分的文本内容，会在滚动时从左侧淡入。',
        img: 'https://picsum.photos/seed/pic1/600/400',
    },
    {
        title: '第二部分标题',
        text: '这是第二部分的文本内容，也会有滚动动画。',
        img: 'https://picsum.photos/seed/pic2/600/400',
    },
    {
        title: '第三部分标题',
        text: '你可以继续添加更多部分，WOW.js 会自动应用动画。',
        img: 'https://picsum.photos/seed/pic3/600/400',
    },
]
</script>

<style scoped>
.hero {
    height: 100vh;
    width: 100%;
    background: url('https://picsum.photos/id/1018/1920/1080') center center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
}

.section {
    width: 100%;
    display: flex;
    padding: 100px 10%;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
}

.section.reverse {
    background-color: #e0e0e0;
    flex-direction: row-reverse;
}

.text {
    color: black;
    width: 45%;
    font-size: 1.2em;
}

.image {
    width: 45%;
}

.image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>