import React, { useRef } from 'react'
import AppLayout from '../Components/Layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { AttachFileOutlined, Send } from '@mui/icons-material';
import { InputBox } from '../Components/styles/StyledCompo';
import { orange } from '../utils/color';
import FileManue from '../Components/Shared/FileManue';
import { sampleMessage } from '../libs/sampleData';
import MessageCO from '../Components/Shared/MessageCO';


const Chate = () => {

  const user ={
    _id:"askdasdf",
    name:"John Doe"
  }

  const containerRef =  useRef(null);

  return <>
    <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={""} height={"90%"} sx={{overflowX:"hidden",overflowY:"auto"}}>
      {/* {  Messages Render } */}

      {
        sampleMessage.map((i,index)=> (
          <MessageCO message={i} key={index} user={user} />
        ))
      }


    </Stack>

    <form style={{height:"10%"}}>
      <Stack direction={"row"} sx={{}} height={"100%"} p={"1rem"} alignItems={"center"} position={"relative"}>

        <IconButton sx={{position:"absolute",left:"1.5rem",rotate:"30deg"}} >
          <AttachFileOutlined />
        </IconButton>

        <InputBox placeholder='Type Message Hear...' />

        <IconButton type='submit' sx={{backgroundColor:orange,color:"white",marginLeft:"1rem",padding:"0.5rem", "&:hover":{ bgcolor:"error.dark"},rotate:"-30deg"}} >
          <Send />
        </IconButton>

      </Stack>
    </form>
    <FileManue />
  </>
  
}

export default AppLayout()(Chate)