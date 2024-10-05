import React, { useRef } from 'react'
import AppLayout from '../Components/Layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { AttachFileOutlined, Send } from '@mui/icons-material';
import { InputBox } from '../Components/styles/StyledCompo';
import { orange } from '../utils/color';
import FileManue from '../Components/Shared/FileManue';


const Chate = () => {

  const containerRef =  useRef(null);

  const fileManueRef = useRef(null);

  return <>
    <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={"gray"} height={"90%"} sx={{overflowX:"hidden",overflowY:"auto"}}>
      {/* {  Messages Render } */}
    </Stack>
    <form style={{height:"10%"}}>
      <Stack direction={"row"} sx={{}} height={"100%"} p={"1rem"} alignItems={"center"} position={"relative"}>

        <IconButton sx={{position:"absolute",left:"1.5rem",rotate:"30deg"}} ref={fileManueRef}>
          <AttachFileOutlined />
        </IconButton>

        <InputBox placeholder='Type Message Hear...' />

        <IconButton type='submit' sx={{backgroundColor:orange,color:"white",marginLeft:"1rem",padding:"0.5rem", "&:hover":{ bgcolor:"error.dark"},rotate:"-30deg"}} >
          <Send />
        </IconButton>

      </Stack>
    </form>
    <FileManue anchorE1={fileManueRef.current}/>
  </>
  
}

export default AppLayout()(Chate)