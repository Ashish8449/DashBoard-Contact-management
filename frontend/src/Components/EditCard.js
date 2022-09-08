import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd'
const { RangePicker } = DatePicker
const { TextArea } = Input

const EditCard = () => {
  const onFormLayoutChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label='Name'>
          <Input />
        </Form.Item>{' '}
        <Form.Item label='Email'>
          <Input />
        </Form.Item>
        <Form.Item label='Gender'>
          <Radio.Group>
            <Radio value='Male'> Male </Radio>
            <Radio value='Female'> Female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='DOB'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='Contact'>
          <Input />
        </Form.Item>
        <Form.Item label='Discription'>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label='Upload' valuePropName='fileList'>
          <Upload action='/upload.do' listType='picture-card'>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Profile Picture
              </div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </>
  )
}

export default () => <EditCard />
