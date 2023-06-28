<template>
    <ul class="text-center bg-gray-300">
        <li v-for="(item, index) in items" :key="index" class="py-2 border-b">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            items: [],
        }
    },
    methods: {
        async fetchItems() {
            const itemsResponse = await axios.get('http://localhost:3000/api/v1/items');
            this.items = itemsResponse.data;
        },
    },
    async mounted() {
        await this.fetchItems();
    }
})
</script>
