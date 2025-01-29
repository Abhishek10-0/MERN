import React, {useEffect, useState} from 'react'
import config from './config/config'
import { useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'


function App() {
  // console.log(config.appwriteUrl)
  
  const [loading, setloading] = useState(true)

  const dispatch = useDispatch()

  useEffect((user) => {
    authService.getCurrentUser()
    .then((user) => {
      if(user) {
        dispatch(login({userData: user}))
      }else {
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.log("App :: useEffect :: error", error)
    })
    .finally(() => setloading(false))

  })
  
  return !loading ? (
    <div className='min-h-screen bg-gray-400 flex flex-wrap content-between'>

      <div className='w-full block'>
        {/* <Header /> */}
        <main>
          Hello
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : null
}

export default App
