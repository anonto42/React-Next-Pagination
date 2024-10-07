import React, { useState } from 'react'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material';
import { gray } from '../../utils/color';
import { Close, Dashboard, ExitToApp, Group, ManageAccounts, Menu, Message } from '@mui/icons-material';
import { Link as LinkComponent, Navigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {

    const isAdmin = true;

    
    const [ isMobile , setIsMobile ] = useState(false);
    
    const handleMobile = () => setIsMobile(!isMobile);
    
    const handleClose = () => setIsMobile(false)

    if( !isAdmin ) return <Navigate to="/admin" />
    
  return <Grid container minHeight={"100vh"}>
    <Box sx={{
        display:{ xs:"block", md:"none" },
        position:"fixed",
        right:"1rem",
        top:"1rem"
    }}>
        <IconButton onClick={handleMobile}>
            { isMobile ? <Close /> : <Menu /> }
        </IconButton>
    </Box>
    <Grid
    item
    md={4}
    lg={3}
    sx={
        {
            display:{
                xs:"none",
                md:"block"
            }
        }
    }
    >
        <SideBar />
    </Grid>

    <Grid item xs={12} md={8} lg={9} sx={{bgcolor:gray}} >
        {children}
    </Grid>

    <Drawer open={isMobile} onClose={handleClose} >
        <SideBar w={"50vw"} />
    </Drawer>

  </Grid>
}

const SideBar = ({ w="100%"}) => {

    const adminTabs = [
        {
            name:"Dashboard",
            path:"/admin/dashboard",
            icon:<Dashboard />
        },
        {
            name:"Users",
            path:"/admin/user-management",
            icon:<ManageAccounts />
        },
        {
            name:"Chats",
            path:"/admin/chats-management",
            icon:<Group />
        },
        {
            name:"Messages",
            path:"/admin/messages",
            icon:<Message />
        }
    ]

    const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 50%;
    padding: 1rem 2rem;
    color:black;
    border-bottom:2px solid rgba(0,0,0,0.2);
    margin-top: 20px ;
    &:hover{
    color:rgba(0,0,0,0.54)
    }
    `

    const logOutHandaler = () => {}

    return (
        <Stack width={w} direction={"column"} p={"3rem"}>
            <Typography variant='h5' textTransform={"uppercase"}>
                Admin
            </Typography>
            <Stack spacing={"1rem"}>
                {
                    adminTabs.map( tap => (
                        <Link key={tap.path} to={tap.path} sx={ location.pathname === tap.path &&{
                            borderBottom:"2px solid"
                        }}>
                            <Stack direction={"row"} alignItems={"center"} spacing={"2rem"}>
                                {
                                    tap.icon
                                }
                                <Typography>{tap.name}</Typography>
                            </Stack>
                        </Link>
                    ))
                }
                <Link onClick={logOutHandaler} >
                            <Stack direction={"row"} alignItems={"center"} spacing={"2rem"}>
                                <ExitToApp />
                                <Typography>LogOut</Typography>
                            </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}

export default AdminLayout