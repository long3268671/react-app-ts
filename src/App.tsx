import React,{ Component } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import routers from "./router/index";
class App extends Component<any,any>{
  render(): React.ReactNode {
    return (
        <BrowserRouter>
            {
                routers.map(router=>{
                    console.log(router)
                    return (
                        <Route
                            exact
                            path={router.path}
                            component = { router.component }
                        ></Route>
                    )
                })
            }
        </BrowserRouter>
    )
  }
}
export default App
