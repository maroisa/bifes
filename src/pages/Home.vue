<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div
        class="h-full flex flex-col justify-center items-center font-bold gap-4"
    >
        <h1 class="card text-4xl">
            <span class="text-red-600">By</span>
            <span class="text-yellow-600">tes</span>
            <span class="text-green-600">fe</span>
            <span class="text-blue-600">st</span>
            <span class="text-purple-600"> 2077</span>
        </h1>

        <RouterLink class="underline text-blue-600 bg-white/50" to="/about"
            >Apa itu Bytesfest??</RouterLink
        >
    </div>
</template>
