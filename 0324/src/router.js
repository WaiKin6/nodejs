import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/'

Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: "/home/movie",
            children: [{
                path: '/home/cinema',
                name: 'home/cinema',
                component: () =>
                    import ('./views/home/cinema/')
            }, {
                path: '/home/movie',
                name: 'home/movie',
                component: () =>
                    import ('./views/home/movie/'),
                redirect: "/home/movie/hot",
                children: [{
                    path: '/home/movie/future',
                    name: 'home/movie/future',
                    component: () =>
                        import ('./views/home/movie/future/')
                }, {
                    path: '/home/movie/hot',
                    name: 'home/movie/hot',
                    component: () =>
                        import ('./views/home/movie/hot/')
                }]
            }, ]
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/login/')
        }, {
            path: '/search',
            name: 'search',
            component: () =>
                import ('./views/search/')
        }, {
            path: '/detail',
            name: 'detail',
            component: () =>
                import ('./views/detail/')
        }, {
            path: '/address',
            name: 'address',
            component: () =>
                import ('./views/address/')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == "/detail") {
        let token = localStorage.getItem("token")
        if (token) {
            next()
        } else {
            next({
                path: "/login",
                query: {
                    topath: to.path
                }
            })
        }
    } {
        next()
    }
})

export default router;