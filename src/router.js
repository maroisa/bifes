import { createRouter, createWebHistory } from "vue-router";
import DesainWeb from "./pages/competition/DesainWeb.vue";
import Poster from "./pages/competition/Poster.vue";
import Esai from "./pages/competition/Esai.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import FAQ from "./pages/FAQ.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: Home },
        { path: "/desweb", component: DesainWeb },
        { path: "/poster", component: Poster },
        { path: "/esai", component: Esai },
        { path: "/about", component: About },
        { path: "/faq", component: FAQ },
    ],
});

export default router;
