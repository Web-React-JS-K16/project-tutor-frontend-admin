/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './ModalSkill.scss'

import React from 'react'
import { Modal, Button, Select, Form, Input } from 'antd'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
}

const ModelSKill = ({ visible, handleOk, handleCancel, loading, form, options, title, data }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        handleOk(values)
      }
    })
  }
  const { getFieldDecorator } = form
  return (
    <Modal
      visible={visible}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel} type="link">
          Hủy
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          Lưu
        </Button>,
      ]}
    >
      <Form {...formItemLayout}>
        <Form.Item label="Nhập tên kĩ năng" hasFeedback>
          {getFieldDecorator('name', {
            initialValue: data ? data.name : '',
            rules: [{ required: true, message: 'Vui lòng nhập tên kĩ năng', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Chọn ngành học" hasFeedback>
          {getFieldDecorator('majorId', {
            initialValue: Option.initialValue || (data ? data.majorId._id : ''),
            rules: [{ required: true, message: 'Vui lòng chọn ngành học' }],
          })(
            <Select>
              {options
                ? options.map((item, key) => (
                    <Option key={key} value={item._id}>
                      {item.name}
                    </Option>
                  ))
                : null}
            </Select>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}
const WrappedModelSKillForm = Form.create({ name: 'register' })(ModelSKill)

export default WrappedModelSKillForm
