import User from "../pages/user";
import UserTwo from "../pages/usertow";
import Admin from "../pages/admin";
import Demo1 from "../pages/routerDemo/demo1";
import Demo2 from "../pages/routerDemo/demo2";
import Demo3 from "../pages/routerDemo/demo3";
import routerInterface from "./routerInterface";


/**
 * @path 路由地址
 * @name 路由名称
 * @hideMenu 是否在菜单栏显示路由
 * @component 路由指向模块
 * @exact 是都严格匹配
 * @children 子项
 * **/
const routers:Array<routerInterface> = [

    {
        path:'/user',
        exact:true,
        name:'用户',
        component:User
    },
    {
        path:'/home',
        name:'home',
        component:Admin,
        children:[
            {
                path:'/home',
                exact:true,
                name:'Demo1',
                component:Demo1
            },
            {
                path:'/home/demo2',
                name:'Demo2',
                component:Demo2
            },
            {
                path:'/home/demo3',
                name:'Demo3',
                component:Demo3
            }
        ]
    },
    {
        path:'/user/:userId',
        name:'用户2',
        component:UserTwo
    }
]
export default routers
