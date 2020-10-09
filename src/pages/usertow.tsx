import React,{ Component } from "react";
class UserTwo extends Component<any, any>{
    render(): React.ReactNode {
        return (
            <div>
                这是usertow页面 { this.props.match.params.userId}
            </div>
        )
    }
}
export default UserTwo
