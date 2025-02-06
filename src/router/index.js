import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/Home/index.vue'
import login from '../view/login.vue'
import job from '../components/job.vue'

const routes = [
    {
        path: "/",
        component: login,
    },
    {
        path: "/home",
        name:"home",
        component: Home
    },
    {
        path: "/job",
        name: "job",
        component: job
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
