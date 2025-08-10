<template>
    <section id="video" class="w-full bg-white py-12 flex flex-col items-center">
        <!-- 视频 -->
        <div class="w-full max-w-6xl aspect-video overflow-hidden rounded-xl shadow-lg">
            <video class="w-full h-full object-contain" :src="videoSrc" autoplay muted loop playsinline></video>
        </div>

        <!-- 下方右对齐文字 -->
        <div class="w-full max-w-6xl px-4 mt-6">
            <p class="text-2xl text-gray-700 text-right">
                Founded in 2020, our team develops electric motorcycles, battery systems and monitoring tools.<br>
                So you get locally built, affordable electric vehicles.
            </p>
        </div>
    </section>
</template>

<script setup>
import videoSrc from '@/assets/video/eride-0526.mp4'
</script>
