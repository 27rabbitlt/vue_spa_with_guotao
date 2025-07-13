<template>
    <div class="product-page">
        <!-- 商品主图展示 -->
        <div class="product-gallery">
            <div class="main-image">
                <img :src="currentVariant.image" :alt="product.name" />
            </div>
            <div class="thumbnail-list">
                <div v-for="(variant, index) in product.variants" :key="index" class="thumbnail"
                    :class="{ active: currentVariantIndex === index }" @click="switchVariant(index)">
                    <img :src="variant.thumbnail" :alt="variant.name" />
                </div>
            </div>
        </div>

        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <div class="price-section">
                <span class="current-price">CHF {{ currentVariant.price }}</span>
                <span v-if="currentVariant.originalPrice" class="original-price">¥{{ currentVariant.originalPrice
                    }}</span>
                <span v-if="currentVariant.discount" class="discount-tag">{{ currentVariant.discount }}% OFF</span>
            </div>

            <div class="variant-selector">
                <div v-for="(spec, specName) in product.specifications" :key="specName" class="spec-section">
                    <h3>{{ specName }}</h3>
                    <div class="spec-options">
                        <button v-for="(option, optionIndex) in spec" :key="optionIndex"
                            :class="{ active: isOptionSelected(specName, option) }"
                            @click="selectOption(specName, option)">
                            {{ option }}
                        </button>
                    </div>
                </div>
            </div>

            <button class="buy-button" @click="goToCheckout">
                Buy Now!
            </button>

            <div class="product-details">
                <h2 class="text-xl">Details</h2>
                <p> we can put some descriptions here or maybe a table of parameters?</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

import item1image from '@/assets/img/buy_item_1.jpg'
import item2image from '@/assets/img/buy_item_2.jpg'

const product = ref({
    name: 'Our Bike Prototypes',
    variants: [
        {
            id: 1,
            name: 'Red Horse Ultra',
            image: item1image,
            thumbnail: item1image,
            price: 1299,
            originalPrice: 1599,
            discount: '19',
            specs: {
                'Prototype': 'Red Horse Ultra',
            }
        },
        {
            id: 2,
            name: 'Black Dragon Pro',
            image: item2image,
            thumbnail: item2image,
            price: 1499,
            originalPrice: 1799,
            discount: '17',
            specs: {
                'Prototype': 'Black Dragon Pro',
            }
        },
    ],
    specifications: {
        'Prototype': ['Red Horse Ultra', 'Black Dragon Pro'],
    },
    detailImages: [
        'https://example.com/detail-1.jpg',
        'https://example.com/detail-2.jpg',
        'https://example.com/detail-3.jpg'
    ]
});

const currentVariantIndex = ref(0);

const selectedSpecs = ref({
    'Prototype': 'Red Horse Ultra',
});

const currentVariant = computed(() => {
    const matchedVariant = product.value.variants.find(variant => {
        return Object.keys(selectedSpecs.value).every(
            specName => variant.specs[specName] === selectedSpecs.value[specName]
        );
    });

    return matchedVariant || product.value.variants[currentVariantIndex.value];
});

const switchVariant = (index) => {
    currentVariantIndex.value = index;
    selectedSpecs.value = { ...product.value.variants[index].specs };
    console.log(selectedSpecs.value)
};

const selectOption = (specName, option) => {
    selectedSpecs.value[specName] = option;
};

const isOptionSelected = (specName, option) => {
    return selectedSpecs.value[specName] === option;
};

const goToCheckout = () => {
    router.push({
        name: 'checkout',
        query: {
            productId: currentVariant.value.id,
            variant: JSON.stringify(currentVariant.value)
        }
    });
};
</script>

<style scoped>
.product-page {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    gap: 40px;
}

.product-gallery {
    flex: 1;
}

.main-image img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    border: 1px solid #eee;
    border-radius: 8px;
}

.thumbnail-list {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.thumbnail {
    width: 60px;
    height: 60px;
    border: 2px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
}

.thumbnail.active {
    border-color: #ff6700;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-info {
    flex: 1;
}

.price-section {
    margin: 20px 0;
}

.current-price {
    font-size: 28px;
    color: #ff6700;
    font-weight: bold;
}

.original-price {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
    margin-left: 10px;
}

.discount-tag {
    display: inline-block;
    background: #ff6700;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 10px;
}

.variant-selector {
    margin: 30px 0;
}

.spec-section {
    margin-bottom: 20px;
}

.spec-section h3 {
    margin-bottom: 10px;
    font-size: 16px;
}

.spec-options {
    display: flex;
    gap: 10px;
}

.spec-options button {
    padding: 8px 15px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
}

.spec-options button.active {
    border-color: #ff6700;
    color: #ff6700;
    background: #fff5f0;
}

.buy-button {
    width: 100%;
    padding: 15px;
    background: #ff6700;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    margin: 20px 0;
    transition: background 0.3s;
}

.buy-button:hover {
    background: #ff4500;
}

.product-details {
    margin-top: 40px;
}

.detail-images img {
    width: 100%;
    margin-top: 15px;
    border-radius: 4px;
}
</style>