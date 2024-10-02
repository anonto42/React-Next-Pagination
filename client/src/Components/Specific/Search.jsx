import React, { useState } from 'react'
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from "@mui/material"
import { useInputValidation } from '6pp';
import { Search as SearchIcon } from "@mui/icons-material"
import UserItem from '../Shared/UserItem';
import { chatsData } from '../../libs/sampleData';

const SearchBox = () => {

  const search = useInputValidation("");

  const [ user , setUser ] = useState(chatsData)

  const isLoadingSendRequest = false;
  const addFriendHandler = (id) => {}

  return <Dialog open >
    <Stack p={"2rem"} direction={"column"} width={"25rem"}>
      <DialogTitle textAlign={"center"}>Find People</DialogTitle>
      <TextField label="" value={search.value} onChange={search.changeHandler} variant='outlined' size='small' InputProps={{ 
        startAdornment:(
          <InputAdornment position='start' >
            <SearchIcon />
          </InputAdornment>
        )
      }} />
      <List >
        {
         user.map(user => (
            <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendRequest} />
          ))
        }
      </List>
    </Stack>
  </Dialog>
}

export default SearchBox