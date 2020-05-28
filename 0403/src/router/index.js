import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("../views/main/index.vue"),
        children:[
            {
                path: "/main/addQuestions/:id",
                name: "addQuestions",
                component: () => import("../views/main/testQuestions/addQuestions"),
            },
            {
                path: "/main/questionsType",
                name: "questionsType",
                component: () => import("../views/main/testQuestions/questionsType"),
            },
            {
                path: "/main/watchQuestions",
                name: "watchQuestions",
                component: () => import("../views/main/testQuestions/watchQuestions"),
            },
            {
                path: "/main/addUser",
                name: "addUser",
                component: () => import("../views/main/user/addUser"),
            },
            {
                path: "/main/showUser",
                name: "showUser",
                component: () => import("../views/main/user/showUser"),
            },
            {
                path: "/main/addExam",
                name: "addExam",
                component: () => import("../views/main/exam/addExam"),
            },
            {
                path: "/main/exam/list",
                name: "list",
                component: () => import("../views/main/exam/list"),
            },
            {
                path: "/main/grade",
                name: "classExam",
                component: () => import("../views/main/classexam/classExam"),
            },
            {
                path: "/main/room",
                name: "classRoom",
                component: () => import("../views/main/classexam/classRoom"),
            },
            {
                path: "/main/student",
                name: "students",
                component: () => import("../views/main/classexam/students"),
            },
            {
                path: "/main/paper/classlist",
                name: "classList",
                component: () => import("../views/main/papers/classList"),
            }
        ]
    }, {
        path: "/",
        redirect: "/login"
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
