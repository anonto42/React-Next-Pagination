import React, { memo } from 'react'
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { notificationData } from '../../libs/sampleData'

const NotificationBox = () => {

  const friendrequestHandaler = ({_id,accept}) => {

  }

  return <Dialog open >
    <Stack sx={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"} pb={"12px"}>
      <DialogTitle>Notifications</DialogTitle>
      {
        notificationData.length > 0 ? (
        notificationData.map( i => <Notificationitem sender={i.sender} _id={i._id} handler={friendrequestHandaler} /> )
        ) : <Typography textAlign={"center"}>No notifications</Typography>
      }
    </Stack>
  </Dialog>
}

const Notificationitem =memo(({ sender , _id , handler }) => {
  return<ListItem>
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"} >
      <Avatar />
      <Typography variant='body1' sx={{flexGlow:1,display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",width:"100%"}}>{sender.name}</Typography>
      <Stack direction={{xs:"column",sm:"row"}}>
        <Button onClick={ ()=> handler({_id,accept:true})}>Accept</Button>
        <Button color='error' onClick={()=> handler({_id,accept:false})}>Reject</Button>
      </Stack>
  </Stack>
</ListItem>
})

export default NotificationBox