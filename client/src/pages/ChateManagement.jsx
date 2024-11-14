import React, { useEffect, useState } from 'react'
import AdminLayout from '../Components/Layout/AdminLayout'
import Tabale from '../Components/Shared/Tabale'
import { Avatar, Stack } from '@mui/material'
import { dashBoardData } from '../libs/sampleData'
import { transformImage } from '../libs/features'
import AwatarCart from './../Components/Shared/AwatarCart';

const ChateManagement = () => {

  const [ rows , setRows ] = useState([])

  const columns = [
    {
      field:"id",
      headerName:"ID",
      headingClassName:"table-header",
      width:200
    },
    {
      field:"avatar",
      headerName:"Avatar",
      headingClassName:"table-header",
      width:200,
      renderCell:( params ) => ( <AwatarCart avatar={params.row.avatar} /> )
    },
    {
      field:"name",
      headerName:"Name",
      headingClassName:"table-header",
      width:300
    },
    {
      field:"totalMembers",
      headerName:"Total Members",
      headingClassName:"table-header",
      width:120
    },
    {
      field:"members",
      headerName:"Members",
      headingClassName:"table-header",
      width:400,
      renderCell: (params)=> <AwatarCart max={100} avatar={params.row.members} />
    },
    {
      field:"totalMembers",
      headerName:"Total Members",
      headingClassName:"table-header",
      width:120
    },
    {
      field:"creator",
      headerName:"Created By",
      headingClassName:"table-header",
      width:250,
      renderCell:(params)=> (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
          <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
          <span>{params.row.creator.name}</span>
        </Stack>
      )
    }
  ];

  useEffect(() => {
    setRows(dashBoardData.chats.map(i => ( { 
      ...i , 
      id:i._id, 
      avatar: i.avatar.map( i => transformImage(i,50)),
      members:i.members.map(i => transformImage(i.avatar,50)),
      creator:{
        name:i.creator.name,
        avatar:transformImage(i.creator.avatar,50)  // Assuming avatar is an array of strings
      }
     })))
  }, []);

  return (
    <AdminLayout>
      
      <Tabale heading={"All Chats"} colums={columns} rows={rows} />
      
    </AdminLayout>
  )
}

export default ChateManagement