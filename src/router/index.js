import { START_LOCATION } from 'vue-router'
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Intera from "@/views/Intera.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/intera",
    name: "Intera",
    component: Intera,
    beforeEnter: (to, from) => {
      if (from === START_LOCATION) { // 直アクセスだった場合
        return '/' // '/' へリダイレクトする
      }
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;