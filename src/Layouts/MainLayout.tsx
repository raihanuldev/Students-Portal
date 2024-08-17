import React from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items = [
    {
        key: "Add Student",
        icon: React.createElement(UploadOutlined),
        label: <NavLink to='add-student'>Add Student</NavLink>
        
    },
    {
        key: "Students-list",
        icon: React.createElement(UserOutlined),
        label: <NavLink to='manage-student'>Manage Student</NavLink>
    },
]

const App: React.FC = () => {

  return (
    <Layout style={{height:"100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} style={{marginTop:"50px"}} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, }}>
        <p style={{fontSize: "40px",fontStyle:"bold",color:"white", textAlign:"center"}}>Student-Portal</p>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;