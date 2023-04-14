import React, { useEffect } from 'react'

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice'
import Login from './Login'
import { auth } from './firebase'

function App() {
  const message = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      } else {
      }
    })
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Routes>
              <Route path='/Mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>

          {message && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
