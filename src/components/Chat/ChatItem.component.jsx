/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Avatar } from 'antd'

export const ChatItem = ({ avatar, message }) => {
  return (
    <>
      <Avatar size={24} src={avatar} />
      <span className="message-content">{message}</span>
    </>
  )
}
