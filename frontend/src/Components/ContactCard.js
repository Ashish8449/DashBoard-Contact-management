import { Avatar, Row, Col, Checkbox, Typography, Divider } from 'antd'
import React, { useState } from 'react'
import randomColor from 'randomcolor'
import { useDispatch, useSelector } from 'react-redux'
import { contactActions } from '../Reducer/ContactsSlice'
const { Text, Link } = Typography
const { Title } = Typography
export default function ContactCard({ item, checkBox }) {
  const [color, setColor] = useState(randomColor())
  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()
  const handelContactClick = (id) => {
    console.log(id)
    dispatch(contactActions.setCurrentContact(id))
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
    setChecked(e.target.checked)
  }
  console.log(checkBox)
  return (
    <>
      <Row
        align='middle'
        style={{ background: 'white', cursor: 'pointer' }}
        className={`${checked ? 'checked' : 'contactCard'} `}
        onClick={() => handelContactClick(item._id)}
      >
        {!checkBox && (
          <Col className='gutter-row' style={{ marginLeft: '20px' }}>
            <Checkbox onChange={onChange}></Checkbox>
          </Col>
        )}
        <Col className='gutter-row' style={{ flex: '1', marginLeft: '10px' }}>
          <Row>
            <Col style={{ margin: '0 15px' }}>
              <Avatar size={40} style={{ backgroundColor: color }}>
                {item.name[0]}
              </Avatar>
            </Col>
            <Col>
              <Title style={{ margin: '0' }} level={5}>
                {item.name}
              </Title>
              <Text style={{ margin: '0', color: 'gray' }}>
                {item.category}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
    </>
  )
}
