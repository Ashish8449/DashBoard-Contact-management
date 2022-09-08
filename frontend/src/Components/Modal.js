import { Modal } from 'antd'
import React from 'react'

export default function SimpleModal({ isModalOpen, handleOk, handleCancel, title,...props}) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
     {props.children}
    </Modal>
  )
}
