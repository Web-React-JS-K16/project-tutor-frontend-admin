/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import './ManagerTagSkill.scss'

import React, { useEffect, useState } from 'react'
import { Table, Tag, Divider, Button, Modal } from 'antd'
import ModelSKill from '../ModalSkill/ModalSkill.component'

const { confirm } = Modal

// eslint-disable-next-line react/prop-types
const ManagerTagSkill = ({
  data,
  dataMajor,
  loadingData,
  getAllMajor,
  getAllTag,
  createTag,
  editTag,
  deleteTag,
}) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loadingEdit, setLoadingEdit] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [tag, setTag] = useState(null)

  useEffect(() => {
    getAllMajor()
    getAllTag()
  }, [getAllTag, getAllMajor])

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = values => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 1000)
    createTag(values)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const showModalEdit = row => {
    setTag(row)
    setVisibleEdit(true)
  }

  const handleOkEdit = values => {
    setLoadingEdit(true)
    setTimeout(() => {
      setLoadingEdit(false)
      setVisibleEdit(false)
    }, 1000)

    editTag({ ...values, _id: tag._id })
  }

  const handleCancelEdit = () => {
    setVisibleEdit(false)
  }

  const showConfirm = row => {
    confirm({
      title: 'Bạn có muốn xóa tag kĩ năng này?',
      okText: 'Có',
      okType: 'primary',
      cancelText: 'Hủy',
      cancelButtonProps: {
        type: 'link',
      },
      onOk() {
        deleteTag({ _id: row._id })
      },
      onCancel() {},
    })
  }

  const columns = [
    {
      title: 'Tên kĩ năng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ngành học',
      dataIndex: 'major',
      key: 'major',
      render: (_id, row) => <Tag color="cyan">{row.majorId.name}</Tag>,
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      render: (_id, row) => (
        <span>
          <Button onClick={() => showModalEdit(row)} className="link link__edit">
            Sửa
          </Button>
          <Divider type="vertical" />
          <Button onClick={() => showConfirm(row)} className="link link__delete">
            Xóa
          </Button>
        </span>
      ),
    },
  ]

  return (
    <div className="tags">
      <Button className="tags__button" type="primary" onClick={showModal}>
        Thêm kĩ năng
      </Button>
      {data ? (
        <Table columns={columns} dataSource={data} className="tags__table" loading={loadingData} />
      ) : null}
      <ModelSKill
        showModal={showModal}
        loading={loading}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        options={dataMajor}
        title="Tạo tag kĩ năng"
      />
      <ModelSKill
        showModal={showModalEdit}
        loading={loadingEdit}
        visible={visibleEdit}
        handleOk={handleOkEdit}
        handleCancel={handleCancelEdit}
        options={dataMajor}
        data={tag}
        title="Chỉnh sửa tag kĩ năng"
      />
    </div>
  )
}

export default ManagerTagSkill
