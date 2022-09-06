import { Col, Row, Card, Typography, Button, Divider } from 'antd'
import React from 'react'
import Icon, {
  UserOutlined,
  MailOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import ButtonGroup from 'antd/lib/button/button-group'
import Avatar from 'antd/lib/avatar/avatar'
const { Text, Link } = Typography
const { Title } = Typography
export default function ContactsProfileCard() {
  return (
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
          <Avatar
            size={100}
            src={
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
          />
          <Title level={3} style={{ margin: '0', marginTop: '10px' }}>
            Diane Cooper
          </Title>

          <Text type='secondary'>ashishgururani8449@gmail.com</Text>
          <Row align='middle'>
            <Col>
              {' '}
              <Title level={3} style={{ margin: '0', marginTop: '10px' }}>
                15
              </Title>
              <Text type='secondary'>tag</Text>
            </Col>
            <Divider
              type='vertical'
              style={{
                height: '40px',

                background: 'gray',
                width: '1px',
              }}
            />
            <Col>
              {' '}
              <Title level={3} style={{ margin: '0', marginTop: '10px' }}>
                15
              </Title>
              <Text type='secondary'>tag</Text>
            </Col>
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
                Female
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
                Female
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
                Female
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
                Female
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
                Female
              </p>
              <Divider />
            </div>
          </Col>    <Col
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
                Female
              </p>
              <Divider />
            </div>
          </Col>    <Col
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
                Female
              </p>
              <Divider />
            </div>
          </Col>    <Col
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
                Female
              </p>
              <Divider />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
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
