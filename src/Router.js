import { Carousel, UserPortrait } from './screens'
import {
  UserOutlined,
  ScheduleOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
const routes = [
  {
    path: '/user',
    name: 'user',
    icon: <UserOutlined />,
    title: '用户分析',
    component: UserPortrait,
    children: [
      {
        path: '/user/portrait',
        name: 'portrait',
        icon: <ScheduleOutlined />,
        title: '用户概览',
        component: UserPortrait,
        children: ''
      },
      {
        path: '/user/list',
        name: 'userList',
        icon: <ScheduleOutlined />,
        title: '用户列表',
        component: UserPortrait,
        children: ''
      }
    ]
  },
  {
    path: '/asset',
    name: 'asset',
    icon: <UserOutlined />,
    title: '终端分析',
    component: UserPortrait,
    children: [
      {
        path: '/asset/terminal',
        name: 'terminal',
        icon: <ScheduleOutlined />,
        title: '终端概览',
        component: Carousel,
        children: ''
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    icon: <AppstoreOutlined />,
    title: '企业应用分析',
    component: Carousel,
    children: ''
  }
]

export default routes