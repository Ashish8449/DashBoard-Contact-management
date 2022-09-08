import { Avatar, Typography } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
const { Text, Paragraph } = Typography
const { Title } = Typography
export default function Header() {
  const { user } = useSelector((state) => state.user.user)
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
          <Title level={5} style={{ margin: '0' }} level={5}>
            {user.name}
          </Title>
          <Paragraph style={{ margin: '0', fontSize: '13px' }} disabled>
            {user.email.slice(0,15)}
          </Paragraph>
        </div>
        <Avatar
          size={30}
          style={{ backgroundColor: 'green' }}
          src={user.photo}
        ></Avatar>
      </div>
    </div>
  )
}
