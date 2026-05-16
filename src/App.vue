<script setup>
import { RouterView } from "vue-router";
import router from "./router";
</script>

<template>
    <header class="bg-sky-400">
        <nav
            class="flex text-white font-semibold justify-center *:p-2 *:px-4 *:hover:bg-black/10 *:active:bg-black/20"
        >
            <RouterLink class="bg-red-600" to="/">Home</RouterLink>
            <RouterLink class="bg-yellow-600" to="/about">About</RouterLink>
            <select
                class="bg-green-600"
                v-on:change="
                    (e) => {
                        router.push(e.target.value);
                    }
                "
            >
                <option hidden>Competition</option>
                <option value="/desweb">Desain Web</option>
                <option value="/esai">Esai</option>
                <option value="/poster">Poster</option>
            </select>
            <RouterLink class="bg-blue-600" to="/faq">FAQ</RouterLink>
        </nav>
    </header>
    <main class="grow overflow-auto gay">
        <router-view />
    </main>
</template>
