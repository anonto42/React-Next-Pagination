import React from 'react'
import AdminLayout from '../Components/Layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import SearchBox from './../Components/Specific/Search';
import { AdminPanelSettings, Group, Message, Notifications, Person } from '@mui/icons-material';
import moment from 'moment';
import { CurveButton, SerchFild } from '../Components/styles/StyledCompo';

const AdminPage = () => {

  const Appbar = (
    <Paper elevation={3} sx={{padding:"2rem",margin:"2rem 0",borderRadius:"1erm"}}>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettings sx={{fontSize:'3rem'}} />
        <SerchFild placeholder='Search...' />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography display={{xs:"none",lg:"block"}}>{moment().format("dddd, D MMMM YYYY")}</Typography>
        <Notifications />
      </Stack>
    </Paper>
  )

  const widgets = (
    <Stack direction={{xs:"column",sm:"row"}} justifyContent={"space-between"} alignItems={"center"} margin={"2rem 0"} spacing={"2rem"}>
      <Widgets title={"Users"} value={4} Icon={<Person />} />
      <Widgets title={"Chat"} value={24} Icon={<Group />} />
      <Widgets title={"Messages"} value={34} Icon={<Message />} />
    </Stack>
  )
  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper elevation={3} sx={{padding:"2rem 3.5rem",borderRadius:"1rem",width:"100%",maxWidth:"45rem"}}>
            <Typography margin={"2rem 0"} variant='h4' >Last Messages</Typography>

            {
              "Chat"
            }

            <Paper elevation={3} sx={{padding:'1rem',borderRadius:"1rem",display:"flex",justifyContent:"center",alignItems:"center",width:{xs:"100%",sm:"50%"},position:"relative",width:"100%",maxWidth:"25rem"}}>
              {"chhchc"}
              <Stack position={"absolute"}
                    direction={"rew"} 
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={"0.5rem"}
                    width={"100%"}
                    height={"100%"}
              >
                <Group /> <Typography>VS</Typography> <Person />
              </Stack>
            </Paper>
          </Paper>
        </Stack>
        {
          widgets
        }
      </Container>
    </AdminLayout>
  )
}

const Widgets =({title,value,Icon})=> <Paper>
  <Stack alignItems={"center"} spacing={"1rem"}>
    <Typography>{value}</Typography>
    <Stack>
      {Icon}
      <Typography>{title}</Typography>
    </Stack>
  </Stack>
</Paper>

export default AdminPage