import { Row } from 'antd'
import React from 'react'
import Login from '../Components/Login'

export default function LoginPage() {
  return (
    <div className='App'>
      <Row
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
        }}
        align='middle'
        justify='center'
        className='auth-wrapper'
      >
        <div
          className='auth-inner'
          style={{
            minHeight: '40vh',
            padding: '20px 30px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow:
              ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          }}
        >
          <Login />
        </div>
      </Row>
    </div>
  )
}
