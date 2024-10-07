import React, { memo } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import AwatarCart from './AwatarCart'

const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnlie,
    newMessage,
    index=0,
    handelDeleteChateOpen
}) => {
  return <a style={{textDecoration:"none"}} href={`/chat/${_id}`}>  
  <div style={{
    textDecoration: 'none',
    color: 'black',
    borderBottom:"2px solid rgba(0,0,0,0.2)"
  }}
  sx
  >

    <div 
    style={{
        display:'flex',
        alignItems:'center',
        padding:'1rem',
        backgroundColor: sameSender? 'black' : 'unset',
        color:sameSender? 'white' : 'unset',
        position:"relative"
    }}
    >
        <AwatarCart avatar={avatar} />

        <Stack>
            <Typography>{name}</Typography>
            {
                newMessage && <Typography >{newMessage.count} Message</Typography>
            }
        </Stack>

        {
            isOnlie && (
                <Box sx={{position:"absolute",width:"10px",height:"10px",borderRadius:"50%",background:"green",right:"15px"}} />
            )
        }

    </div>
  
    </div>
  </a>
}

export default memo(ChatItem)