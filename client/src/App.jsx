import React,{lazy, Suspense, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from './utils/ProtectRoute';
import NotFound from './pages/NotFound';
import Loaders from './Components/Layout/Loaders';
import axios from 'axios';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Chat = lazy(() => import('./pages/Chate'));
const Group = lazy(() => import('./pages/Groups'));
const Admin = lazy(() => import("./pages/AdminPage"))
const AdminLogin = lazy(() => import("./pages/AdminLogin"))
const UserManagemet = lazy(() => import("./pages/UserManagement"))
const MessageManagemet = lazy(() => import("./pages/Messagemanagement"))
const ChatManagemet = lazy(() => import("./pages/ChateManagement"))

const App = () => {

  const user = true

  useEffect(()=>{

    axios.get("/")

  },[])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />} >
            <Route path="/" element={ <Home/> } />
            <Route path="/chat/:id" element={<Chat/>} />
            <Route path="/group" element={<Group/>} />
          </Route>
          <Route path="/auth" element={
            <ProtectRoute user={!user} redirect='/' >
              <Auth/>
            </ProtectRoute>
            } />

            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/admin/dashboard' element={<Admin />} />
            <Route path='/admin/dashboard/user-manage' element={<UserManagemet />} />
            <Route path='/admin/dashboard/message-manage' element={<MessageManagemet />} />
            <Route path='/admin/dashboard/chat-manage' element={<ChatManagemet />} />
            <Route path="*" element={<NotFound/>} /> 
            
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App