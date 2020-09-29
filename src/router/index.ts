import Admin from "../pages/admin";
import Home from "../pages/home";
import User from "../pages/user";

import Demo1 from "../pages/routerDemo/demo1";
import Demo2 from "../pages/routerDemo/demo2";
import Demo3 from "../pages/routerDemo/demo3";
interface router {
    path:string,
    component:any,
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path:'/',
        component:Admin,
        children:[
            {
                path:'/demo1',
                component:Demo1
            },
            {
                path:'/demo2',
                component:Demo2
            },
            {
                path:'/demo3',
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
    }
]
export default routers
