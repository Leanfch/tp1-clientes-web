<script>
import { ref, onMounted } from "vue";
import { fetchProducts } from "../services/product.js";
import LoaderCircle from "../components/LoaderCircle.vue";

export default {
    name: "Home",
    components: { LoaderCircle },
    setup() {
        const products = ref([]);
        const productsLoading = ref(true);
        onMounted(async () => {
            products.value = await fetchProducts();
            productsLoading.value = false;
        });

        return {
            products,
            productsLoading,
        };
    },

};
</script>

<template>
    <div>
        <h1 class="mb-20 font-bold text-5xl text-center mt-10">Servicio de hosting</h1>
        <div v-if="productsLoading" class="flex items-center justify-center align-middle">
            <LoaderCircle />
        </div>
        <div class="flex justify-center">
            <div class="flex-col w-[30%] mx-3 p-5 rounded-xl" v-for="product in products" :class="{
                'bg-[#f8982b]': product.name === 'Vita Basic',
                'bg-[#47b0e0]': product.name === 'Vita Plus',
                'bg-[#d13d3d]': product.name === 'Vita Premium',
            }" :key="product.id">
                <h2 class="text-center text-4xl mb-1 font-bold uppercase h-10">{{ product.name }}</h2>
                <p class="text-center mb-2 text-xl italic h-[75px]">{{ product.description }}</p>
                <p class="font-bold mb-2 text-xl text-center">Funciones principales:</p>
                <ul>
                    <li v-for="feature in product.features" :key="feature">- {{ feature }}</li>
                </ul>
                <div class="flex justify-center items-center">
                    <p class="font-bold rounded-3xl bg-blanco mt-5 text-center text-5xl">${{ product.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>