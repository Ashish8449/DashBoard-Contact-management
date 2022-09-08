import React, { useEffect } from 'react'
import { Avatar, Checkbox, Col, Divider, Row, Typography } from 'antd'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import ContactCard from './ContactCard'
import axios from 'axios'
import { BACKEND_URL } from '../constamts'
import { contactActions } from '../Reducer/ContactsSlice'
import { useDispatch, useSelector } from 'react-redux'
const { Title } = Typography
const { Text, Link } = Typography
export default function SearchTab() {
  const user = useSelector((state) => state.user)
  console.log(user)
  const dispatch = useDispatch()
  const { contacts } = useSelector((state) => state.contacts)
  function getRandomColor() {
    return '#' + Math.random().toString(16).substr(-6)
  }
  const color = getRandomColor()
  const getAllConacts = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/contact/all`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      dispatch(contactActions.getAll(data.data))
      if (data.data) {
       
        dispatch(contactActions.setCurrentContact(data.data[0]._id))
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllConacts()
  }, [])

  return (
    <>
      <div className='' style={{ padding: '10px 20px' }}>
        <Title level={3}>My Contacts</Title>

        {/* seacrh */}

        <div style={{ margin: '30px 0px' }}>
          <Input
            size='large'
            placeholder='Search'
            style={{ background: '   #f5f7fb' }}
            prefix={<SearchOutlined />}
          />
        </div>
      </div>

      <div>
        {/* contact */}
        <div
          className='contactList'
          style={{ height: '80vh', overflowY: 'scroll' }}
        >
          {contacts.map((item, index) => (
            <ContactCard item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
