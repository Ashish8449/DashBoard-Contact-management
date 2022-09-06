import { Avatar, Row, Col, Checkbox, Typography, Divider } from 'antd'
import React, { useState } from 'react'
import randomColor from 'randomcolor'
const { Text, Link } = Typography
const { Title } = Typography
export default function ContactCard() {
  const [color, setColor] = useState(randomColor())
  const [checked, setChecked] = useState(false)

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
    setChecked(e.target.checked)
  }
  return (
    <>
      <Row
        align='middle'
        style={{ background: 'white' }}
        className={`${checked ? 'checked' : 'contactCard'} `}
      >
        <Col className='gutter-row' style={{ marginLeft: '20px' }}>
          <Checkbox onChange={onChange}></Checkbox>
        </Col>
        <Col className='gutter-row' style={{ flex: '1', marginLeft: '10px' }}>
          <Row>
            <Col style={{ margin: '0 15px' }}>
              <Avatar size={40} style={{ backgroundColor: color }}>
                A
              </Avatar>
            </Col>
            <Col>
              <Title style={{ margin: '0' }} level={5}>
                Martina Valencia
              </Title>
              <Text style={{ margin: '0' }} disabled>
                Head OF Client 
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider />
    </>
  )
}
