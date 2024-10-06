import React, { useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { notificationData } from '../../libs/sampleData'
import UserItem from '../Shared/UserItem'
import { useInputValidation } from '6pp';


const NewGroupe = () => {
  const [ selectedMembers , setSelectedMembers ] = useState([]);
  const [ members , setMembers ] = useState(notificationData);

  const groupName = useInputValidation("")

  const selectMemberHandler = (id) => {

    // setMembers( prevous => prevous.map(i => i._id === id? {...i , isAdded: !i.isAdded } : i))

    setSelectedMembers( prevous => prevous.includes(id)? prevous.filter( i => i !== id ) : [...prevous , id])

  }
  console.log(selectedMembers)

  const submitHendaler = () => {
    console.log("submit")
  }

  const closeHandler = () => {}


  return <Dialog open onClose={closeHandler}>
  <Stack sx={{xs:"1rem",sm:"2rem",width:'350px', px:"20px"}} >
    <DialogTitle>New Group</DialogTitle>

    <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />

    <Typography spacing={"5rem"} variant='body1' mt={"5px"}>Members</Typography>

      <Stack >
        {
          members.map( i => (
            <UserItem user={i.sender} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
          ))
        }
      </Stack>

      <Stack direction={"row"} sx={{display:"flex",justifyContent:"space-evenly",m:"20px"}} >
        <Button variant='text' color='error'>Cancel</Button>
        <Button variant='contained' onClick={submitHendaler}>Create</Button>
      </Stack>
  </Stack>
</Dialog>
}

export default NewGroupe