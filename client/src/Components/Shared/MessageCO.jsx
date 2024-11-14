import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { highLiteText } from '../../utils/color';
import moment from 'moment';
import { fileFormet } from '../../libs/features';
import RenderAtt from './RenderAtt';

const MessageCO = ({ message ,  user }) => {

    const { sender , content , attachments = [] , createdAt } = message;

    const sameSender = sender?._id === user?._id;

    const timeAgo =  moment(createdAt).fromNow();

  return <div
  style={{
    alignSelf: sameSender ? 'flex-end' : 'flex-start',
    backgroundColor:"white",
    color:"black",
    borderRadius:"5px",
    padding:"0.5rem",
    width:"fit-content"
  }}
  >
    
    {
        !sameSender && <Typography color={highLiteText} variant='caption' fontWeight={"600"} >{sender.name} </Typography>
    }

    {
        content && <Typography variant='body1' >{content}</Typography>
    }
    {
        attachments.length > 0 && attachments.map( ( i , index ) => {
            const url = i.url
            const file = fileFormet(url)
            return <Box key={index}>
                <a href={url} target='_blank' download style={{ color: "black"}}>
                    {
                        RenderAtt(file , url)
                    }
                </a>
            </Box>
        })
    }



    <Typography variant='caption' color='text.secondary' >{timeAgo}</Typography>

  </div>
}

export default memo(MessageCO)