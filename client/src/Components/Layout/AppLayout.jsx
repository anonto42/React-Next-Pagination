import React from 'react'
import Header from './Header'
import Title from './../Shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../Specific/ChatList';
import { chatsData } from '../../libs/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../Specific/Profile';

const AppLayout = () => WrappedComponent => {
  return (props) => {
    const params = useParams();
    const chatId = params.id
    return (
        <>
            <Title />
            <Header/>
            <Grid container height={"calc(100vh - 4rem)"} >
                <Grid item sm={4} md={3} sx={{display:{ xs: "none" , sm: "block" }}} height={"100%"} >
                  <ChatList chats={chatsData} chatId={chatId} newMessagesAlert={{chatId,count:"1"}}  onlineUsers={true} />
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor={"rgba(0,0,0,0.1)"}>
                    <WrappedComponent {...props} />
                </Grid>
                <Grid item md={4} lg={3} height={"100%"} sx={{display:{ xs: "none" , sm: "block" },padding:"2rem",bgcolor:"rgba(0,0,0,0.8)"}} >
                  <Profile />
                </Grid>
            </Grid>
        </>
    )
  }
}

export default AppLayout