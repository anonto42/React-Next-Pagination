import React, { useEffect, useState } from 'react'
import AdminLayout from '../Components/Layout/AdminLayout'
import Tabale from '../Components/Shared/Tabale'
import { Avatar, Box, Stack } from '@mui/material'
import { dashBoardData } from '../libs/sampleData'
import { fileFormet, transformImage } from '../libs/features'
import moment from 'moment'
import RenderAtt from './../Components/Shared/RenderAtt';

const Messagemanagement = () => {

  const [ rows , setRows ] = useState([])

  const columns = [
    {
      field:"id",
      headerName:"ID",
      headingClassName:"table-header",
      width:200
    },
    {
      field:"attachments",
      headerName:"Attachments",
      headingClassName:"table-header",
      width:200,
      renderCell:( params ) => {
        const { attachments } = params.row;
         
        return attachments?.length > 0 ? attachments.map(( i , index)=> {
          const url = i.url
          const file = fileFormet(url)

          return <Box key={index} justifyContent={"center"} alignItems={"center"} display={"flex"}>
            <a href={url} download target='_blank' style={{color:"black"}}>
              {
                RenderAtt(file,url)
              }
            </a>
          </Box>
        }): "No attachments"
      }
    },
    {
      field:"content",
      headerName:"Content",
      headingClassName:"table-header",
      width:300
    },
    {
      field:"sender",
      headerName:"Sent By",
      headingClassName:"table-header",
      width:200,
      renderCell:( params ) => ( <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} /> 
        <span>{params.row.sender.name}</span>
      </Stack> )
    },
    {
      field:"chat",
      headerName:"Chat",
      headingClassName:"table-header",
      width:200
    },
    {
      field:"groupChat",
      headerName:"Group Chat",
      headingClassName:"table-header",
      width:100
    },
    {
      field:"createdAt",
      headerName:"Time",
      headingClassName:"table-header",
      width:250
    }
  ];

  useEffect(() => {
    setRows(
      dashBoardData.message.map( i => (
        {
          ...i,
          id: i._id,
          sender:{
            name:i.sender.name,
            avatar: transformImage( i.sender.avatar,50)
          },
          createdAt:moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a")
        }
      ))
    )
  }, []);

  return (
    <AdminLayout>
      
      <Tabale heading={"All Messages"} colums={columns} rows={rows} rowHeight={150} />
      
    </AdminLayout>
  )
}

export default Messagemanagement