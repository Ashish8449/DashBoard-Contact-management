import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ContactsProfileCard from './Card'
import ContactCard from './ContactCard'
import EditCard from './EditCard'
import Header from './Header'
import SimpleModal from './Modal'

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

const items = [getItem('User', 'sub1', <TeamOutlined />)]

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(true)

  const handleEditOk = () => {
    setIsEditModalOpen(false)
  }

  const handleEditCancel = () => {
    setIsEditModalOpen(false)
  }
  const { user } = useSelector((state) => state.user)
  const { contacts } = useSelector((state) => state.contacts)
  const recentContacts = contacts.slice(0, 3)
  console.log(recentContacts)
  return (
    <>
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
                <ContactsProfileCard onEdit={() => setIsEditModalOpen(true)} />
                <Row style={{ marginTop: '30px' }}>
                  <Col style={{ flex: 1 }}>graph</Col>
                  <Col style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold' }}>RECENTLY ADDEDD</p>
                    {recentContacts.map((item, ind) => (
                      <ContactCard checkBox={true} key={ind} item={item} />
                    ))}
                  </Col>
                </Row>
              </Content>
            </Col>
          </Row>
        </Layout>
      </Layout>

      <SimpleModal
        isModalOpen={isEditModalOpen}
        handleOk={handleEditOk}
        handleCancel={handleEditCancel}
        title={'Edit User Info'}
      >
        <EditCard />
      </SimpleModal>
    </>
  )
}
