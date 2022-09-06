import { Avatar, Typography } from 'antd'
import React from 'react'
const { Text, Paragraph } = Typography
const { Title } = Typography
export default function Header() {
  return (
    <div
      style={{
        boxShadow: ' 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        background: '#fff',
        // marginLeft: '2px',
        display: 'flex',
        height: '60px',
      }}
    >
      <div className='' style={{ flex: 1 }}></div>
      <div
        className=''
        style={{
          marginRight: '20px',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div className='' style={{ marginRight: '20px', textAlign: 'right' }}>
          <Title style={{ margin: '0' }} level={5}>
            Martina Valencia
          </Title>
          <Paragraph style={{ margin: '0', fontSize: '13px' }} disabled>
            {/* xyz@gmail.com */}
          </Paragraph>
        </div>
        <Avatar size={30} style={{ backgroundColor: 'green' }}>
          A
        </Avatar>
      </div>
    </div>
  )
}
