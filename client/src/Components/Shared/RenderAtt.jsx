import React from 'react'
import { transformImage } from '../../libs/features';
import { FileOpen } from '@mui/icons-material';

const RenderAtt = (file,url) => {
  
    switch (file) {
        case "video":
            return <video src={url} preload='none' width={"200px"} controls ></video>

        case "audio":
            return <audio src={url} preload='none' controls ></audio>

        case "image":
            return <img src={transformImage(url,200)} alt="attachment" width={"200px"} height={"150px"} style={{
                objectFit:"contain"
            }} />

        default: 
            return <FileOpen />           
    }
};

export default RenderAtt