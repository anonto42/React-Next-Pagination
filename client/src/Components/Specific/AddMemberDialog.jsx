import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { chatsData } from '../../libs/sampleData'
import UserItem from '../Shared/UserItem'

const AddMemberDialog = ({addMember,isLoadingAddMember,chatId}) => {

    const [ selectedMembers , setSelectedMembers ] = useState([]);
    const [ members , setMembers ] = useState(chatsData);

    const selectMemberHandler = (id) => {

    // setMembers( prevous => prevous.map(i => i._id === id? {...i , isAdded: !i.isAdded } : i))

        setSelectedMembers( prevous => prevous.includes(id)? prevous.filter( i => i !== id ) : [...prevous , id])

  }
    const addMemberSubmitHandaler = () => {
        console.log("Add member clicked")
    }
    const closeHandaler = () => {
        setSelectedMembers([]);
        setMembers([])
    }

  return (
    <Dialog open onClose={closeHandaler} >
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
            <Stack spacing={"1rem"}>
                {
                    members.length > 0 ?
                    members.map ( 
                        user => (
                            <UserItem key={user._id} user={user} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)} />
                        )
                    )
                    : <Typography>No friend</Typography>
                }
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                <Button color='error' onClick={closeHandaler}>Cancel</Button>
                <Button variant='contained' onClick={addMemberSubmitHandaler} disabled={isLoadingAddMember} >Submit Changes</Button>
            </Stack>
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog