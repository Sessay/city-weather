import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import './styles/app.sass';
import routes from './Router';
import { Carousel } from './screens';

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  function toggle () {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 20px' }}>
          {
            collapsed ?
              <MenuUnfoldOutlined className="trigger" onClick={toggle} style={{ fontSize: 20 }} /> :
              <MenuFoldOutlined className="trigger" onClick={toggle} style={{ fontSize: 20 }} />
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <BrowserRouter>
            <Switch>
              {
                routes.map(item => {
                  if (!item) return null;
                  const { path, component } = item;
                  console.log(item)
                  return component && <Route exact key={path} path={path} component={component} />;
                })
              }
              <Route exact from="/" to="/carousel" component={Carousel} />
            </Switch>
          </BrowserRouter>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
