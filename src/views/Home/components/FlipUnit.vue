<template>
    <span class="flip-clock__piece">
        <span class="flip-card" :class="{ flip: flipping }">
            <b class="flip-card__top">{{ zerofill(current) }}</b>
            <b class="flip-card__bottom" :data-value="zerofill(current)"></b>
            <b class="flip-card__back" :data-value="zerofill(previous)"></b>
            <b class="flip-card__back-bottom" :data-value="zerofill(previous)"></b>
        </span>
        <span class="flip-clock__slot">{{ label }}</span>
    </span>
</template>

<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
    value: Number,
    label: String,
});

const current = ref(props.value);
const previous = ref(props.value);
const flipping = ref(false);

watch(() => props.value, (newVal) => {
    if (newVal !== current.value) {
        previous.value = current.value;
        current.value = newVal;
        flipping.value = false;
        void document.body.offsetWidth;
        flipping.value = true;
    }
});

function zerofill(val) {
    return val < 10 && val >= 0 ? '0' + val : String(val);
}
</script>

<style scoped>
.flip-clock__piece {
    display: inline-block;
    margin: 0 0.2vw;
}

.flip-clock__slot {
    font-size: 1rem;
    line-height: 1.5;
    display: block;
}

.flip-card {
    display: block;
    position: relative;
    padding-bottom: 0.72em;
    font-size: 2.25rem;
    line-height: 0.95;
}

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
    display: block;
    height: 0.72em;
    color: #ccc;
    background: #222;
    padding: 0.23em 0.25em 0.4em;
    border-radius: 0.15em 0.15em 0 0;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    width: 1.8em;
}

.flip-card__bottom,
.flip-card__back-bottom {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    border-top: solid 1px #000;
    background: #393939;
    border-radius: 0 0 0.15em 0.15em;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
}

.flip-card__back-bottom {
    z-index: 1;
}

.flip-card__bottom::after,
.flip-card__back-bottom::after {
    display: block;
    margin-top: -0.72em;
}

.flip-card__back::before,
.flip-card__bottom::after

/* .flip-card__back-bottom::after { */
    {
    content: attr(data-value);
}

.flip-card__back {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0%;
    pointer-events: none;
}

.flip-card__back::before {
    position: relative;
    overflow: hidden;
    z-index: -1;
}

.flip-card.flip .flip-card__back::before {
    z-index: 1;
    animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);
    animation-fill-mode: both;
    transform-origin: center bottom;
}

.flip-card.flip .flip-card__bottom {
    transform-origin: center top;
    animation-fill-mode: both;
    animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1);
}

@keyframes flipTop {
    0% {
        transform: rotateX(0deg);
        z-index: 2;
    }

    0%,
    99% {
        opacity: 1;
    }

    100% {
        transform: rotateX(-90deg);
        opacity: 0;
    }
}

@keyframes flipBottom {

    0%,
    50% {
        z-index: -1;
        transform: rotateX(90deg);
        opacity: 0;
    }

    51% {
        opacity: 1;
    }

    100% {
        opacity: 1;
        transform: rotateX(0deg);
        z-index: 5;
    }
}
</style>
