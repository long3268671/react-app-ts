import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from "react";
import routers from '../../router/index'
import './home.scss'
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Home extends React.Component<any,any> {
    state = {
        collapsed: false,
        defaultSelectedKeys:['0'],
        defaultOpenKeys:[]
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className='Body'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >LOGO</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={this.state.defaultSelectedKeys}
                        defaultOpenKeys={this.state.defaultOpenKeys}
                    >
                        {

                            routers.map((router,index)=>{
                                if(router.hideMenu && router.hideMenu){
                                    return false
                                }
                                if(router.children){
                                    return (
                                        <SubMenu key={index} icon={<UserOutlined />} title={router.name}>
                                            {
                                                router.children.map((item,itemIndex)=>{
                                                    return (
                                                        <Menu.Item key={index + '-' + itemIndex} icon={<UserOutlined />} className='menuItem'>
                                                            <Link to={item.path} >{ item.name }</Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }

                                        </SubMenu>
                                    )
                                }else{
                                    return (
                                        <Menu.Item key={index} icon={<UserOutlined />} className='menuItem'>
                                            <Link to={router.path} >{ router.name }</Link>
                                        </Menu.Item>
                                    )
                                }
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        { this.props.children }
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default Home
