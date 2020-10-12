import React,{ Component } from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import './App.css'
import comRouters from "./router/comRouters";
import routerInterface from "./router/routerInterface";
let Routes: any = new Array()
interface RouteItemInterface extends routerInterface{
    key:string|number
}
interface mProps {

}
class App extends Component<mProps,any>{
    constructor(mProps:mProps) {
        super(mProps);
        console.log(Routes)
        comRouters.forEach((router,key)=>{
            return router.children && router.children.length?this.loopRoutr(router,key,router.path):Routes.push(this.RouteItem({key,...router}))
        })
        console.log(Routes)
        this.RouteItem = this.RouteItem.bind(this)
        this.loopRoutr = this.loopRoutr.bind(this)
    }
    RouteItem = (props:RouteItemInterface) => {
        const { exact, path, component, key } = props
        // if (redirect) {
        //     return <Redirect exact key={key} from={path} to={redirect} />
        // }
        return <Route exact={exact} key={key} component={component} path={path} />
    }
    loopRoutr =  (route:any,i:number,pre_path:string)=>{
        return route.children.forEach((routeChild:routerInterface, idx:number) => {
            let __path = routeChild.path
            const { exact, component, children } = routeChild
            if (children && children.length) {
                // 递归获取子路径
                if (component) {
                    Routes = Routes.flat()
                    Routes.push(this.RouteItem({
                        key: `${i}-${idx}`,
                        exact,
                        path: __path,
                        component: component
                    }))
                }
                this.loopRoutr(routeChild, idx, __path)
            } else {
                Routes.push( this.RouteItem({
                    key: `${i}-${idx}`,
                    exact,
                    path: __path,
                    component: component
                }))
            }
        })
    }

    render(): React.ReactNode {
    return (
        <BrowserRouter>
            <Switch>

                {
                    comRouters.map((routers,routersIndex)=>{
                        return (
                            <Route
                                exact={routers.exact}
                                key={routersIndex}
                                path={routers.path}
                                render={(props) => {
                                    return (
                                        <routers.component {...props}>
                                            {
                                                routers.children?.map((item, itemIndex) => {
                                                    return (
                                                        <Route
                                                            exact={item.exact}
                                                            key={itemIndex}
                                                            path={item.path}
                                                            render={(props) => {
                                                                return (
                                                                    <item.component {...props} >
                                                                        {
                                                                            item.children?.map((child, childIndex) => {
                                                                                return (
                                                                                    <Route
                                                                                        exact={child.exact}
                                                                                        key={childIndex}
                                                                                        path={child.path}
                                                                                        render={(props)=>{
                                                                                            return (
                                                                                                <child.component { ...props }/>
                                                                                            )
                                                                                        }}
                                                                                    />
                                                                                )
                                                                            })
                                                                        }
                                                                    </item.component>
                                                                )
                                                            }}

                                                        />
                                                    )
                                                })
                                            }
                                        </routers.component>
                                    )

                                }}
                            />
                        )
                    })
                }
            </Switch>
        </BrowserRouter>
    )
  }
}
export default App
