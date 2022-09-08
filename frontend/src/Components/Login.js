import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import { BACKEND_URL } from '../constamts'
import { useDispatch } from 'react-redux'
import { userActions } from '../Reducer/UserSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/login`, {
        email: values.email,
        password: values.password,
      })
      dispatch(userActions.logIn(data.data))
      dispatch(userActions.setToken(data.token))
      Cookies.set('user', JSON.stringify(data.data), { expires: 1 })
      Cookies.set('token', JSON.stringify(data.token), { expires: 1 })
      console.log(data.data)
      console.log(data.token)
      // navigate('/')

      navigate('/dashboard')
    } catch (error) {}
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
