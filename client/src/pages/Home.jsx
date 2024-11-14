import React from 'react'
import AppLayout from '../Components/Layout/AppLayout'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return <Box height={"100%"}>
    <Typography p={"2rem"} variant='h6' textAlign={"center"}>
      Selected to chat the people you want
    </Typography>
  </Box>
}

export default AppLayout()(Home)