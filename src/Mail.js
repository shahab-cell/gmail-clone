import React, { useEffect, useState } from 'react'
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import { IconButton } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'
import DeleteIcon from '@mui/icons-material/Delete'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import EmailIcon from '@mui/icons-material/Email'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PrintIcon from '@mui/icons-material/Print'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectMail, selectOpenMail } from './features/mailSlice'
function Mail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedMail = useSelector(selectOpenMail)
  console.log(selectOpenMail)

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mailTools_right'>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <IconButton>
            <LabelImportantIcon className='mail_important' />
          </IconButton>
          <p>{selectedMail?.title}</p>
          <p className='mail_time'>{selectedMail?.time}</p>
        </div>

        <div className='mail_message'>{selectedMail?.description}</div>
      </div>
    </div>
  )
}

export default Mail
