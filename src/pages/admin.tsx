import React,{ Component } from "react";
class Admin extends Component<any, any>{
    render(): React.ReactNode {
        return (
            <div>
                这是首页
                { this.props.children }
            </div>
        )
    }
}
export default Admin
