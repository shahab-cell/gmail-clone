import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import firebase from 'firebase/compat/app'
// import 'firebase/firestore'
import { db } from './firebase'

function SendMail() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (formData) => {
    console.log(formData)
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }
  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail_close'
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='to'
          type='text'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail_error'>required field</p>}
        <input
          name='subject'
          placeholder='subject'
          type='text'
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className='sendMail_error'>required field</p>}
        <input
          name='message'
          placeholder='message..'
          className='sendMail_message'
          type='text'
          {...register('message', { required: true })}
        />
        {errors.message && <p className='sendMail_error'>required field</p>}

        <div className='sendMail_option'>
          <Button
            varient='contained'
            color='primary'
            type='submit'
            className='sendMail_button'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
