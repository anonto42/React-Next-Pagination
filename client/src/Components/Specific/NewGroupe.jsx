import React from 'react'
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { notificationData } from '../../libs/sampleData'
import UserItem from '../Shared/UserItem'


const NewGroupe = () => {
  const selectMemberHandler = () => {}
  return <Dialog open >
  <Stack sx={{xs:"1rem",sm:"2rem",width:'350px', px:"20px"}} maxWidth={"35rem"}>
    <DialogTitle>New Group</DialogTitle>

    <TextField />

    <Typography>Members</Typography>

      <Stack >
        {
          notificationData.map( i => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} />
          ))
        }
      </Stack>

      <Stack direction={"row"} sx={{display:"flex",justifyContent:"space-between",m:"20px"}} >
        <Button variant='text' color='error'>Cancel</Button>
        <Button variant='contained'>Create</Button>
      </Stack>
  </Stack>
</Dialog>
}

export default NewGroupe