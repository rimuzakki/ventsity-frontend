import React, { useState } from 'react'
import { Modal, Button } from 'antd'

function ModalEventAttendees(props) {
  const { modalVisible, handleOk, handleCancel } = props

  return (
    <>
      <Modal title="Basic Modal" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ModalEventAttendees