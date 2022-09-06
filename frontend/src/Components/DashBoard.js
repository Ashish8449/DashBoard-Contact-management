import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd'
import React, { useState } from 'react'
import ContactsProfileCard from './Card'
import Header from './Header'
import SearchTab from './SearchTab'
const { Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
]

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo' />
        <Menu
          theme='light'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
        <Row
          style={{
            minHeight: '100vh',
            background: '#fff',
          }}
        >
          <Col
            span={7}
            style={{ boxShadow: 'rgb(99 92 99 / 39%) 1px -2px 6px 0px' }}
          >
            <SearchTab />
          </Col>
          <Col span={17}>
            <Header />
            <Content style={{ marginTop: '20px', padding: '0 30px' }}>
              <ContactsProfileCard />
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  )
}
