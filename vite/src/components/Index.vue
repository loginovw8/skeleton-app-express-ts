<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    title: String,
});

let count = ref(0);
</script>

<template>
    <h1 class="text-center py-4">{{ title }}</h1>

    <div class="bg-gray-300 text-center py-4">
        <button class="bg-gray-500 text-white py-2 px-4 rounded-lg" type="button" @click="count++">
            count is {{ count }}
        </button>
    </div>
</template>
