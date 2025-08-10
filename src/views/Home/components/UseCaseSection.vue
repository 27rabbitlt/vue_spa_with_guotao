<template>
    <div id="usecase" class="w-full flex justify-between items-start p-8 bg-white relative overflow-hidden">
        <!-- 左边：Rural -->
        <div class="w-1/2 pr-8 mb-8">
            <img :src="ruralImage" alt="Rural IoT" class="rounded shadow mb-8 w-full h-64 object-cover" />
            <h2 class="text-3xl font-semibold mb-4 text-gray-800">Rural IOT Use case</h2>
            <ul class="text-xl list-disc pl-5 text-gray-700 space-y-2">
                <li>Tracking of fuel savings.</li>
                <li>Monitoring of scheduled activities.</li>
                <li>Review previous trips to optimize future activities.</li>
                <li>Safety - Know where your team and personal is at all times.</li>
            </ul>
        </div>

        <div class="w-12 relative flex justify-center items-center">
            <svg class="h-[400px] w-10" viewBox="0 0 10 100" preserveAspectRatio="none">
                <line x1="5" y1="0" x2="5" y2="100" stroke="#999" stroke-width="1.5" />
            </svg>
        </div>


        <!-- 右边：Urban -->
        <div class="w-1/2 pl-8">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800">Urban IOT Use case</h2>
            <ul class="mb-8 text-xl list-disc pl-5 text-gray-700 space-y-2">
                <li>Completely customizable, self-designed plugins for specific needs</li>
                <li>Remote Velocity limitation, and theft control.</li>
                <li>Live battery status and health for remote maintenance</li>
                <li>Evaluate driving pattern for route optimization</li>
            </ul>
            <img :src="urbanImage" alt="Urban IoT" class="rounded shadow mb-4 w-full h-64 object-cover" />
        </div>
    </div>
</template>

<script setup>
// const ruralImage = 'https://via.placeholder.com/600x300?text=Rural+IoT'
// const urbanImage = 'https://via.placeholder.com/600x300?text=Urban+IoT'
import ruralImage from '@/assets/img/zambia-rural.jpg'
import urbanImage from '@/assets/img/lusaka-zambia-urban.jpg'
</script>

<style scoped>
/* Optional: subtle hover effect on polyline */
svg polyline {
    transition: stroke 0.3s;
}

svg:hover polyline {
    stroke: #666;
}
</style>
