import React, { useState } from 'react';
import { items } from './SidebarItems/SidebarItems';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import {Layout,Menu, Button } from 'antd';
import { Routes } from './Routes';
const { Header, Sider, Footer } = Layout;
export default function Index() {
    const [collapsed, setCollapsed] = useState(false)
    
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "#1D1D1D", color: "#fff" }}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['2']}
                    style={{ background: "#1D1D1D", color: "#fff" }}
                    items={items}
                />
            </Sider>

            <Layout>
                <Header style={{ padding: "0", background: "#252525" }} className="d-flex align-items-center">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuOpenIcon /> : <WidgetsIcon />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color: "white"
                        }}
                    />
                    <h2 className='text-white fs-3'>Sutdent Managment</h2>
                </Header>
                <Routes/>
                <Footer>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>Copy Right 2023</p>
                            </div>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};
