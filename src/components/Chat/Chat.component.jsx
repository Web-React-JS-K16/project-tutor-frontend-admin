/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */

import './Chat.scss'

import React from 'react'
import { Avatar } from 'antd'
import { ChatItem } from './ChatItem.component'

export const Chat = ({ message, student, teacher }) => (
  <div className="chat">
    <div className="chat__title">
      <h3>Nội dung tin nhắn</h3>
      <div className="chat__title--student">
        <Avatar size={32} src={student.avatar} />
        <span>{student.displayName}</span>
      </div>
      <div className="chat__title--teacher">
        <Avatar size={32} src={teacher.avatar} />
        <span>{teacher.displayName}</span>
      </div>
    </div>
    <div className="chat__content">
      {message.map(item =>
        item.from.toString() === student._id.toString() ? (
          <div className="chat__content--student">
            <ChatItem
              avatar={student.avatar}
              message={item.content}
              displayName={student.displayName}
            />
          </div>
        ) : (
          <div className="chat__content--teacher">
            <ChatItem
              avatar={teacher.avatar}
              message={item.content}
              displayName={teacher.displayName}
            />
          </div>
        )
      )}
    </div>
  </div>
)
