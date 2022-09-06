import React from 'react'
import { Avatar, Checkbox, Col, Divider, Row, Typography } from 'antd'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import ContactCard from './ContactCard'
const { Title } = Typography
const { Text, Link } = Typography
export default function SearchTab() {
  function getRandomColor() {
    return '#' + Math.random().toString(16).substr(-6)
  }
  const color = getRandomColor()

  return (
    <>
      <div className='' style={{ padding: '10px 20px' }}>
        <Title level={3}>My Contacts</Title>

        {/* seacrh */}

        <div style={{ margin: '30px 0px' }}>
          <Input
            size='large'
            placeholder='Search'
            style={{ background: '   #f5f7fb' }}
            prefix={<SearchOutlined />}
          />
        </div>
      </div>

      <div>
        {/* contact */}
        <div
          className='contactList'
          style={{ height: '80vh', overflowY: 'scroll' }}
        >
          <ContactCard />
          <ContactCard />
          <ContactCard /> <ContactCard />
          <ContactCard /> <ContactCard />
          <ContactCard /> <ContactCard />
          <ContactCard />
        </div>
      </div>
    </>
  )
}
