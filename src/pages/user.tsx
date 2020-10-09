import React,{ Component } from "react";
class User extends Component<any, any>{
    goHome(){
        console.log(1111111)

        this.props.history.push({ pathname: '/home' , state : { id: '6666' }})
    }
    render(): React.ReactNode {
        return (
            <div>
                这是user页面
                <button onClick={this.goHome.bind(this)}>跳转home页面</button>
            </div>
        )
    }
}
export default User
