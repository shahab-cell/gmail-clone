import { CheckBox, StartOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import './EmailRow.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from './features/mailSlice'
function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
    navigate('/mail')
  }

  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow_options'>
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StartOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className='emailRow_title'>{title}</h3>

      <div className='emailRow_message'>
        <h4>
          {subject}
          <span className='emailRow_description'>{description}</span>
        </h4>
      </div>

      <p className='emailRow_time'>{time}</p>
    </div>
  )
}

export default EmailRow
