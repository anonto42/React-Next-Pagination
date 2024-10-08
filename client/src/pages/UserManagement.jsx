import React, { useEffect, useState } from 'react'
import AdminLayout from '../Components/Layout/AdminLayout'
import Tabale from '../Components/Shared/Tabale'
import { Avatar } from '@mui/material'
import { dashBoardData } from '../libs/sampleData'
import { transformImage } from '../libs/features'

const UserManagement = () => {

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
      renderCell:( params ) => ( <Avatar alt={params.row.name} src={params.row.avatar} /> )
    },
    {
      field:"name",
      headerName:"Name",
      headingClassName:"table-header",
      width:200
    },
    {
      field:"username",
      headerName:"UserName",
      headingClassName:"table-header",
      width:200
    },
    {
      field:"friends",
      headerName:"Friends",
      headingClassName:"table-header",
      width:150
    },
    {
      field:"groups",
      headerName:"Groups",
      headingClassName:"table-header",
      width:200
    }
  ];

  useEffect(() => {
    setRows(dashBoardData.users.map(i => ( { ...i , id : i._id , avatar : transformImage(i.avatar,50) } ) ))
  }, []);

  return (
    <AdminLayout>
      
      <Tabale heading={"All Users"} colums={columns} rows={rows} />
      
    </AdminLayout>
  )
}

export default UserManagement