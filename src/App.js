import React, { useState } from 'react'
import './App.css';
import Login from './components/Login';
import { useEffect } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,

 } from "firebase/auth";
 import { auth } from './firebase/init'

  
function App() {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        setLoading(false)
        if (user) {
          setUser(user)
        }
      }) 
    }, 1000)
  }, [])

  function register() {
    createUserWithEmailAndPassword(auth, 'lala@email.com', 'pass123')
    .then(user => {
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  function login() {
      signInWithEmailAndPassword(auth, 'lala@email.com', 'pass123')
      .then(user => {
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function logout() {
    signOut(auth)
    setUser({})
  }
  
  
  return (
    <div className="nav__login">
      {
        loading ? 
        <div className='skeleton'>
          <div className="btn__login--skeleton"></div>
          <div className="btn__logout--skeleton"></div>
        </div>
        :
        <Login register={register} login={login} logout={logout} user={user}/>
      }
    </div>
  )
}

export default App;
