import { Col, Row, Typography, Button, Divider } from 'antd'
import React from 'react'
import { HeartFilled } from '@ant-design/icons'

import Avatar from 'antd/lib/avatar/avatar'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BACKEND_URL } from '../constamts'
const { Text } = Typography
const { Title } = Typography
export default function ContactsProfileCard({ onEdit }) {
  const { contacts, cureentId } = useSelector((state) => state.contacts)
  const user = useSelector((state) => state.user)
  const currentContact = contacts.filter((ele) => ele._id === cureentId)[0]

  function getFormattedDate(date) {
    var year = date.getFullYear()

    var month = (1 + date.getMonth()).toString()
    month = month.length > 1 ? month : '0' + month

    var day = date.getDate().toString()
    day = day.length > 1 ? day : '0' + day

    return month + '/' + day + '/' + year
  }

  const handelfavClick=async ()=>{
    try {
      
    } catch (error) {
      
    }
  }
  const handelDelete = async () => {
    try {
      await axios.delete(
        `${BACKEND_URL}/api/contact/delete/${currentContact._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
    } catch (error) {
      alert('Error deleting')
    }
  }
  return (
    currentContact && (
      <Row gutter={8}>
        <Col
          span={8}
          className='shadow1'
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div
            className=''
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'inherit',
              width: '100%',
              padding: '20px 0',
              borderRadius: '10px',
              boxShadow:
                ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            }}
          >
            <Avatar size={100} src={currentContact.photo} />
            <Title level={3} style={{ margin: '0', marginTop: '10px' }}>
              {currentContact.name}
            </Title>

            <Text type='secondary'>ashishgururani8449@gmail.com</Text>
            <Row align='middle' style={{ margin: '10px 0' }}>
              <HeartFilled
                style={{
                  margin: ' 0 20px',
                  color: currentContact.favourite ? '#f44538 ' : 'gray',
                  fontSize: '30px',
                }}
                onClick={handelfavClick}
              />
            </Row>
          </div>
        </Col>{' '}
        <Col
          span={16}
          className='shadow1'
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
            width: '100%',
            padding: '20px 0',
            borderRadius: '10px',
            boxShadow:
              ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }}
        >
          <Row gutter={[12, 12]}>
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  Name
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  {currentContact.name}
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  PhoneNumber
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  {currentContact.phoneNumber}
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  Gender
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  Male
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  Category
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  {currentContact.category}
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  Created
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  {/* {convert(currentContact.createdAt)} */}
                  {getFormattedDate(new Date(currentContact.createdAt))}
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col
              span={8}
              style={{
                padding: '0 15px',
                paddingLeft: '30px',
                marginBottom: '15px',
              }}
            >
              <div className=''>
                <Title level={5} style={{ margin: '0', color: 'gray' }}>
                  Updated
                </Title>
                <p
                  level={5}
                  style={{
                    margin: '0',
                    marginBottom: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '',
                  }}
                >
                  {getFormattedDate(new Date(currentContact.updatedAt))}
                </p>
                <Divider />
              </div>
            </Col>{' '}
            <Col>
              <Row alignItems='middle' justifyContent='center'>
                <Button
                  style={{
                    borderRadius: '8px',
                    flex: 1,
                    margin: '0 30px',
                  }}
                  onClick={onEdit}
                >
                  Edit
                </Button>
                <Button
                  style={{
                    Color: '#fff',
                    backgroundColor: 'red',
                    borderRadius: '8px',
                  }}
                  onClick={handelDelete}
                >
                  <Text style={{ color: '#fff' }}>Delete</Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  )
}
{
  /* <div className='site-card-border-less-wrapper'>
<div bordered={false} style={{}}>
  <Row wrap={false}>
    <Col style={{ height: '100%' }}>
      <img
        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''
        style={{
          width: '250px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '10px',
          marginRight: '30px',
        }}
      />
    </Col>
    <Col style={{ paddingTop: '20px' }}>
      <Title level={4}>
        {' '}
        <UserOutlined style={{ marginRight: '10px' }} /> Anjali Gupta
      </Title>{' '}
      <Row className='box' style={{ alignItems: 'center' }}>
        <p level={4}>
          <MailOutlined style={{ marginRight: '10px' }} />
          anjali@gmail.com
        </p>{' '}
        <p level={4}>
          {' '}
          <UserOutlined style={{ marginRight: '10px' }} /> +91 8449588090
        </p>{' '}
      </Row>{' '}
      <Row className='box' style={{ alignItems: 'center' }}>
        <p level={4}>
  
          <CalendarOutlined style={{ marginRight: '10px' }} />
          21-Jan-1981
        </p>{' '}
        <p level={4}>
          {' '}
          <UserOutlined style={{ marginRight: '10px' }} /> Anjali Gupta
        </p>{' '}
      </Row>
      <ButtonGroup>
        <Button
          type='primary'
          size='large'
          style={{ marginRight: '10px', borderRadius: '10px' }}
        >
          Edit
        </Button>{' '}
        <Button
          type='primary'
          size='large'
          style={{
            marginRight: '10px',
            borderRadius: '10px',
            background: 'red',
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
</div>
</div> */
}
