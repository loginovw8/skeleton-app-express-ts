<script setup>
import { ref } from 'vue';

defineProps({
    title: String,
});

let count = ref(0);
</script>

<template>
    <div class="text-center">
        <img class="inline-block w-24 py-2" src="/vue.svg" />
    </div>

    <h1 class="text-center py-2">{{ title }}</h1>

    <div class="bg-gray-300 text-center py-4">
        <button class="bg-gray-500 text-white py-2 px-4 rounded-lg" type="button" @click="count++">
            count is {{ count }}
        </button>
    </div>
</template>
