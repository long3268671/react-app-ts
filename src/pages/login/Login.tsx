import React,{ Component } from "react";
import { Button }  from 'antd'
class Login extends Component<any, any>{
    goHome(){
        this.props.history.push('/home')
    }
    render(): React.ReactNode {
        return (
            <div>
                这是登录页
                <Button type='primary' onClick={this.goHome.bind(this)}>跳转首页</Button>
            </div>
        )
    }
}
export default Login
