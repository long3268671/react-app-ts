import React,{ Component } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css'
import routers from "./router/index";
class App extends Component<any,any>{
  render(): React.ReactNode {
    return (
        <BrowserRouter>
            <Switch>
            {
                routers.map((router,index)=>{
                    return (
                        <Route
                            exact={ router.exact }
                            key={index}
                            path={router.path}
                            render={ (props)=>{
                                return (
                                   <div>
                                       <router.component { ...props }>
                                           {
                                               router.children?.map((item,itemIndex)=>{
                                                   return (
                                                       <Route
                                                           exact={ item.exact }
                                                           key={itemIndex}
                                                           path={item.path}
                                                           component = { item.component }
                                                       />
                                                   )
                                               })
                                           }
                                       </router.component>
                                   </div>
                                )
                            } }
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
