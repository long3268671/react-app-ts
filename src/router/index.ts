import Login from "../pages/login/Login";
import Home from "../pages/home/home";
import User from "../pages/user";
import UserTwo from "../pages/usertow";

import Demo1 from "../pages/routerDemo/demo1";
import Demo2 from "../pages/routerDemo/demo2";
import Demo3 from "../pages/routerDemo/demo3";
interface router {
    path:string,
    component:any,
    exact?:boolean,
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path:'/',
        exact:true,
        component:Login
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/',
                component:()=>{
                    return '这是dome1'
                }
            },
            {
                path:'/home/demo2',
                component:Demo2
            },
            {
                path:'/home/demo3',
                component:Demo3
            }
        ]
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/user/:userId',
        component:UserTwo
    }
]
export default routers
