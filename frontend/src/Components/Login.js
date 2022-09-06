import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import { BACKEND_URL } from '../constamts'

export default function Login() {
  const onFinish = async (values) => {
    console.log('Success:', values)
    console.log(values)
    await axios
      .post(`${BACKEND_URL}/login`, {
        email: values.email,
        password: values.password,
      })
      .then(() => {
        console.log('LOgin login successful')
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <div style={{ textAlign: 'center', margin: '15px 0' }}>Login</div>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your  email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
