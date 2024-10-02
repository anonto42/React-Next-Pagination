import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../Shared/ChatItem'

const ChatList= ({chats , w ="100%" , newMessagesAlert = [ { chatId:"" , count:0}] , onlineUsers,chatId,handleDeleteChat}) => {
    
    
    return <Stack w={w} direction={"column"}>
      {
          chats?.map((data,index)=>{
            const { avatar,name,_id,groupChat,members} = data ;

              return <div key={index}>
                <ChatItem newMessage={newMessagesAlert} isOnlie={onlineUsers} index={index} avatar={avatar} name={name} _id={_id} key={_id} groupChat={groupChat} sameSender={chatId === _id } handelDeleteChateOpen={handleDeleteChat} />
              </div>
          })
      }
    </Stack>
  }

export default ChatList