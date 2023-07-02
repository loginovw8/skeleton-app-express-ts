<template>
    <ul class="text-center bg-gray-300">
        <li v-for="(category, index) in categories" :key="index" class="py-2 border-b">
            {{ category.name }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        async fetchCategories() {
            const categoriesResponse = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/categories`
            );
            this.categories = categoriesResponse.data;
        },
    },
    async mounted() {
        await this.fetchCategories();
    }
})
</script>
