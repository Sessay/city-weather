import React, { useState } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HeatMapOutlined
} from '@ant-design/icons';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './index.css';
import './styles/app.sass';
import routes from './Router';
import { NoMatch } from './screens';

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const [currentMenu, setCurrentMenu] = useState('');

  function toggle () {
    setCollapsed(!collapsed)
  }

  function circleArguments (data) {
    let arr = []
    arr = data.map(item => {
      if (!item.component) return null
      const { name, path, component } = item
      if (item.children) {
        return circleArguments(item.children)
      } else {
        return component && <Route exact key={name} path={path} component={component} />;
      }
    })
    return arr.flat()
  }

  // function changeMenu (menu) {
  //   setCurrentMenu({ currentMenu: menu })
  //   console.log(menu)
  //   console.log(currentMenu)
  // }

  function renderMenu (menu) {
    if (menu.children) {
      return (
        <Menu.SubMenu key={`${menu.title}`} icon={menu.icon} title={menu.title}>
          { menu.children.map(item => renderMenu(item))}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={menu.title} icon={menu.icon}>
        {/* <span>{menu.title}</span> */}
        <Link to={menu.path}>{menu.title}</Link>
      </Menu.Item>
    )
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item disabled icon={<HeatMapOutlined />} id="logoTitle">
            <span className="logo" >安天移动安全</span>
          </Menu.Item>
          {
            Array.isArray(routes) && routes.map(item => renderMenu(item))
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
          {
            collapsed ?
              <MenuUnfoldOutlined className="trigger" onClick={toggle} style={{ fontSize: 20 }} /> :
              <MenuFoldOutlined className="trigger" onClick={toggle} style={{ fontSize: 20 }} />
          }
          {/* <Breadcrumb style={{ paddingLeft: '14px' }}>
            {
              // currentMenu.keyPath.map(args => {
              //   return (
              //     <Breadcrumb.Item>
              //       <Link to="/">args</Link>
              //     </Breadcrumb.Item>
              //   )
              // })
              currentMenu
            }
          </Breadcrumb> */}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Switch>
            {
              circleArguments(routes)
            }
            <Route exact path="/404" component={NoMatch} />
            <Redirect from="/" to="/user/portrait" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
