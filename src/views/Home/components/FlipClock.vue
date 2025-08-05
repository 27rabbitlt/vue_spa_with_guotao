<template>
    <div class="clock">
        <!-- 小时 -->
        <div v-for="(digit, index) in 2" :key="index" class="flip"
            :class="{ running: flippers[index] && flippers[index].isFlipping }">
            <div class="digital front" :data-number="flippers[index] ? flippers[index].frontTime : '0'"></div>
            <div class="digital back" :data-number="flippers[index] ? flippers[index].backTime : '0'"></div>
        </div>
        <em class="divider">:</em>
        <!-- 分钟 -->
        <div v-for="(digit, index) in 2" :key="index + 2" class="flip"
            :class="{ running: flippers[index + 2] && flippers[index + 2].isFlipping }">
            <div class="digital front" :data-number="flippers[index + 2] ? flippers[index + 2].frontTime : '0'"></div>
            <div class="digital back" :data-number="flippers[index + 2] ? flippers[index + 2].backTime : '0'"></div>
        </div>
        <em class="divider">:</em>
        <!-- 秒钟 -->
        <div v-for="(digit, index) in 2" :key="index + 4" class="flip"
            :class="{ running: flippers[index + 4] && flippers[index + 4].isFlipping }">
            <div class="digital front" :data-number="flippers[index + 4] ? flippers[index + 4].frontTime : '0'"></div>
            <div class="digital back" :data-number="flippers[index + 4] ? flippers[index + 4].backTime : '0'"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 响应式数据
const flippers = ref([])
const timer = ref(null)

// 方法
const getTimeFromDate = (date) => {
    return date
        .toTimeString()
        .slice(0, 8)
        .split(":")
        .join("")
}

const initClock = () => {
    const now = new Date()
    const currentTimeStr = getTimeFromDate(now)

    flippers.value = Array.from({ length: 6 }, (_, i) => ({
        isFlipping: false,
        duration: 500,
        frontTime: currentTimeStr[i] || '0',
        backTime: currentTimeStr[i] || '0',
        lastUpdate: Date.now()
    }))
}

const flipDown = (index, currentTime, nextTime) => {
    const flipper = flippers.value[index]

    // 防止频繁更新和无效更新
    const now = Date.now()
    if (flipper.isFlipping ||
        (now - flipper.lastUpdate) < 500 ||
        currentTime === nextTime) {
        return false
    }

    flipper.isFlipping = true
    flipper.frontTime = currentTime
    flipper.backTime = nextTime
    flipper.lastUpdate = now

    setTimeout(() => {
        flipper.isFlipping = false
        flipper.frontTime = nextTime
    }, flipper.duration)
}

const startTimer = () => {
    // 计算到下一秒的精确时间
    const syncToNextSecond = () => {
        const now = new Date()
        const delay = 1000 - now.getMilliseconds()

        setTimeout(() => {
            updateTime()
            timer.value = setInterval(updateTime, 1000)
        }, delay)
    }

    const updateTime = () => {
        const now = new Date()
        const currentTimeStr = getTimeFromDate(now)

        for (let i = 0; i < flippers.value.length; i++) {
            const currentDigit = currentTimeStr[i] || '0'
            const flipper = flippers.value[i]

            // 只有当数字真正改变时才翻页，并且确保不是动画中
            if (flipper.frontTime !== currentDigit &&
                !flipper.isFlipping &&
                flipper.frontTime !== undefined) {
                flipDown(i, flipper.frontTime, currentDigit)
            }
        }
    }

    // 启动同步
    syncToNextSecond()
}

// 生命周期
onMounted(() => {
    initClock()
    startTimer()
})

onBeforeUnmount(() => {
    if (timer.value) {
        clearInterval(timer.value)
    }
})
</script>

<style scoped>
.clock {
    display: flex;
}

/* 时钟的分隔 */
.clock .divider {
    font-size: 66px;
    line-height: 102px;
    font-style: normal;
    color: rgb(51, 50, 50);
}

/* 时钟的卡片 */
.clock .flip {
    position: relative;
    width: 60px;
    height: 100px;
    margin: 2px;
    font-size: 70px;
    font-weight: 700;
    line-height: 100px;
    text-align: center;
    background: rgb(46, 45, 45);
    border: 1px solid rgb(34, 33, 33);
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(54, 54, 54, 0.5);
}

/* 时钟上的数字 */
.clock .flip .digital::before,
.clock .flip .digital::after {
    position: absolute;
    content: attr(data-number);
    left: 0;
    right: 0;
    color: white;
    background: rgb(51, 50, 50);
    overflow: hidden;
    -webkit-perspective: 160px;
    perspective: 160px;
}

/* 翻页前的数字 */
.clock .flip .digital::before {
    top: 0;
    bottom: 50%;
    border-bottom: 1px solid #666;
    border-radius: 10px 10px 0 0;
}

/* 翻页后的数字 */
.clock .flip .digital::after {
    top: 50%;
    bottom: 0;
    line-height: 0;
    border-radius: 0 0 10px 10px;
}

.clock .flip .back::before,
.clock .flip .front::after {
    z-index: 1;
}

.clock .flip .back::after {
    z-index: 2;
}

.clock .flip .front::before {
    z-index: 3;
}

.clock .flip .back::after {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: rotateX(0.5turn);
    transform: rotateX(0.5turn);
}

.clock .flip.running .front::before {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation: frontFlipDown 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    animation: frontFlipDown 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.clock .flip.running .back::after {
    -webkit-animation: backFlipDown 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    animation: backFlipDown 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

@-webkit-keyframes frontFlipDown {
    0% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
    }

    100% {
        -webkit-transform: rotateX(0.5turn);
        transform: rotateX(0.5turn);
    }
}

@keyframes frontFlipDown {
    0% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
    }

    100% {
        -webkit-transform: rotateX(0.5turn);
        transform: rotateX(0.5turn);
    }
}

@-webkit-keyframes backFlipDown {
    0% {
        -webkit-transform: rotateX(0.5turn);
        transform: rotateX(0.5turn);
    }

    100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
    }
}

@keyframes backFlipDown {
    0% {
        -webkit-transform: rotateX(0.5turn);
        transform: rotateX(0.5turn);
    }

    100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
    }
}
</style>