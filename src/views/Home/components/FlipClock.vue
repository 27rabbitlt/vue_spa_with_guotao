<template>
    <div class="flip-clock">
        <FlipUnit v-for="unit in units" :key="unit" :label="unit" :value="time[unit]" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, toRef } from 'vue';
import FlipUnit from './FlipUnit.vue';

const props = defineProps({
    target: {
        type: [Date, String],
        required: true
    },
    onEnd: Function
});

const time = ref({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
const units = ['Days', 'Hours', 'Minutes', 'Seconds'];

let intervalId = null;
const rawTarget = toRef(props, 'target');
const targetDate = computed(() => {
    return typeof rawTarget.value === 'string'
        ? new Date(rawTarget.value.replace(/-/g, '/'))
        : rawTarget.value;
});

function updateTime() {
    const now = new Date();
    const diff = Math.max(targetDate.value - now, 0);

    time.value.Days = Math.floor(diff / (1000 * 60 * 60 * 24));
    time.value.Hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    time.value.Minutes = Math.floor((diff / 1000 / 60) % 60);
    time.value.Seconds = Math.floor((diff / 1000) % 60);

    if (diff === 0 && typeof props.onEnd === 'function') {
        clearInterval(intervalId);
        props.onEnd();
    }
}

onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
.flip-clock {
    text-align: center;
    perspective: 600px;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>
