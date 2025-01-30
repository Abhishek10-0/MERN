import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {Logout} from '../../store/authslice'

function Logout() {

    const dispatch = useDispatch()
    


  return (
    <div>Logout</div>
  )
}

export default Logout