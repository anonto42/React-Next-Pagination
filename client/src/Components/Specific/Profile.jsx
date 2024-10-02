import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon , AlternateEmail as EmailIcon , CalendarMonth as CalendarIcon} from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar sx={{width:200,height:200,objectFit:"contain",marginBottom:"1rem",border:"5px solid white"}} />
      <ProfileCard heading={"Bio"} text={"sadas dasdasd"}  />
      <ProfileCard heading={"Username"} text={"anonto333"} icon={<EmailIcon/>} />
      <ProfileCard heading={"Name"} text={"Sohidul Islam Ananto"} icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={moment("2023-11-04T18:30:00.000Z").fromNow()} icon={<CalendarIcon/>}/>
    </Stack>
  )
}

const ProfileCard = ({text, icon ,heading}) => (
  <Stack direction={"row"} spacing={"1rem"} color={"white"} textAlign={"center"} alignItems={"center"} >
    {
      icon && icon
    }

    <Stack>
      <Typography variant='body1' >{text}</Typography>
      <Typography color='gray' variant='caption'>{heading}</Typography>
    </Stack>
  </Stack>
)

export default Profile