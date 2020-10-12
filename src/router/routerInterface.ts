interface routerInterface {
    path:string,
    name?:string,
    hideMenu?:boolean,
    component:any,
    exact?:boolean,
    children?:Array<routerInterface>
}
export default routerInterface
