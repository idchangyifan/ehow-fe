import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Project from '@/components/Project'
import GLOBAL from '@/components/Global'
import axios from 'axios'
import {getCookie} from '@/assets/js/cookie'
import Enroll from '@/components/Enroll'
import Register from '@/components/Register'
import ModifyUserInfo from '@/components/ModifyUserInfo'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/enroll/:projectCode',
            name: 'Enroll',
            component: Enroll
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/modifyUserInfo',
            name: 'ModifyUserInfo',
            component: ModifyUserInfo
        }
    ]
});

//全局路由导航钩子
router.beforeEach((to, from, next) => {
    //此处获取登陆的用户信息，可以按照自己的方法获取
    const userId = getCookie("userId");
    //判断是否存在用户信息、或者该页面是否需要登陆
    if (to.path == '/login' || to.path == '/register' || userId) {
        //如果能获取到用户信息，说明用户已经登陆了，或者该页面不需要登陆也能进入就直接放行进入该页面
        next();
    } else {
        //否则的跳转到登陆页面
        next({path: "/login"});
    }
});

export default router;
