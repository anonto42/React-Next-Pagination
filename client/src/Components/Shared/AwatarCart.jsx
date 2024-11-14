import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transformImage } from '../../libs/features'

const AwatarCart = ({ avatar=[] , max = 3 }) => {
  return <Stack direction={"row"} position={"relative"} spacing={0.5}>
    <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
            {
                avatar.map((i,index)=>(
                    <Avatar 
                    key={Math.random()*100}
                    src={transformImage(i)}
                    alt={`Avatar`}
                    sx={{
                        width:"2rem",
                        height:"2rem",
                        position:"absolute",
                        mt:"5px",
                        ml:'5px',
                        left:{
                            xs:`${0.5 + index }rem`,
                            sm:`${index} rem`
                        }
                    }}
                    />
                ))
            }
        </Box>
    </AvatarGroup>
  </Stack>
}

export default AwatarCart