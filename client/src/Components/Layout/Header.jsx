import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { orange } from '../../utils/color'
import { Add, Group, Logout, Menu as MenuIcon , NotificationAdd, Notifications, Search } from '@mui/icons-material'
import { useNavigate } from'react-router-dom'
import SearchBox from './../Specific/Search';
import NewGroupe from './../Specific/NewGroupe';
import NotificationBox from './../Specific/Notification'

const Header = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)
  const [isNotification, setIsNotification] = useState(false)



  const navigate = useNavigate()

  const handerManu = () => {
    setIsMobile(!isMobile)
  }
  const serchDialog = () => {
    setIsSearch(!isSearch)
  }
  const addNweGroupe = () => {
    setIsNewGroup(!isNewGroup)
  }
  const NavigateToGroup = () => navigate('/group')
  const logout = ()=> {}

  const Notification = ( ) => {
    setIsNotification(!isNotification)
  }

  return (
    <>
    <Box sx={{flexGrow:1}} height={"4rem"} >
      <AppBar position='static' sx={{bgcolor:orange}} >
        <Toolbar >
          <Typography variant='h5' sx={{display:{sx:"none", sm:"block"}}}>
            Chatapp
          </Typography>
          <Box sx={{flexGrow:1}} />
          <Box >
              <Tooltip title="Search">
                  <IconButton color='inherit' onClick={serchDialog} >
                    <Search />
                  </IconButton>
              </Tooltip>
              <Tooltip title="New Group">
                <IconButton color='inherit' onClick={addNweGroupe} >
                  <Add />
                </IconButton>  
              </Tooltip>
              <Tooltip title="Manage Group">
                <IconButton color='inherit' onClick={NavigateToGroup} >
                  <Group />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton color='inherit' onClick={Notification} >
                  <Notifications/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton color='inherit' onClick={logout} >
                  <Logout />
                </IconButton>
              </Tooltip>
          </Box>
          <Box sx={{display:{sx:"block",sm:"none",height:"4rem"}}} >
            <IconButton color='inherit' size='lage' onClick={handerManu} >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchBox />
        </Suspense>
      )
    }

    {
      isNewGroup && (
        <Suspense fallback={<Backdrop open />} >
          <NewGroupe />
        </Suspense>
      )
    }
    {
      isNotification && (
        <Suspense fallback={<Backdrop open />} >
          <NotificationBox />
        </Suspense>
      )
    }


    </>
  )
}

export default Header