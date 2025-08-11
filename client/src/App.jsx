import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/login'
import Message from './pages/Message'
import Feed from './pages/Feed'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost';
import { useUser } from '@clerk/clerk-react'
import Layout from './pages/Layout'
const App = () => {
  const {user,isLoaded,isSignedIn}=useUser()
  return (
    <>
    <Routes>
      <Route path='/' element={user ? <Layout/> : <Login/>}></Route>
      {/* <Route index element={<Feed></Feed>}></Route> */}
      <Route path='messages' element={<Message></Message>}></Route>
      <Route path='messages/:userId' element={<ChatBox></ChatBox>}></Route>
      <Route path='connections' element={<Connections></Connections>}></Route>
      <Route path='discover' element={<Discover></Discover>}></Route>
      <Route path='profile' element={<Profile></Profile>}></Route>
      <Route path='profile/:profileId' element={<Profile></Profile>}></Route>
      <Route path='create-post' element={<CreatePost></CreatePost>}></Route>
    </Routes>
    </>
  )
}

export default App
