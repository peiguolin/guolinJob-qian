import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/Home/index.vue'
import login from '../view/login.vue'
import job from '../components/job.vue'
import admin from '../view/admin/index.vue'
import user from '../view/user/index.vue'

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
    },
    {
        path: "/admin",
        name: "admin",
        component: admin
    },
    {
        path: '/user',
        name: 'user',
        component: user
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
