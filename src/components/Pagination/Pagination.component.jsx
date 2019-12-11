/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Pagination } from 'antd'

const CustomPagination = ({ total, onChange, current, ...rest }) => {
  return <Pagination simple current={current} onChange={onChange} total={total} {...rest} />
}

export default CustomPagination
