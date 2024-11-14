import React, { lazy, memo, Suspense, useEffect, useState } from 'react'
import { Avatar, Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { orange } from '../utils/color';
import { Add, Delete, Done, Edit, FastForward, KeyboardBackspace, Menu } from '@mui/icons-material';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AwatarCart from '../Components/Shared/AwatarCart';
import { chatsData, chatsData as sampleMessage } from '../libs/sampleData';
import UserItem from '../Components/Shared/UserItem';

const Groups = () => {
  const chatID = useSearchParams()[0].get("group"); 
  const isMember = false
  const navigate = useNavigate();
  const [groupName ,setGroupName] = useState("");
  const [groupNameUpdateValue ,setGroupNameUpdateValue] = useState("");
  const [ isMobile , setMobile ] = useState(false);
  const [ isEdite , setIsEdite ] = useState(false);
  const [ deleteDialog , setDeleteDialog ] = useState(false);

  const navigateBack = () => {
    navigate("/")
  };

  const handerMobileClose = () => setMobile(false);
  const handerMobile = () => setMobile( pre => !pre );

  const operAddHandaler =() => {};
  const deleteHandeler =() => setDeleteDialog( true )
  const closeDeleteDialog = () => setDeleteDialog(false);
  const deleteFunctionHandel = () => closeDeleteDialog();
 
  const updateGroupName = () => {
    setIsEdite( false );
  };

  const IconBtn = (
  <>
    <Box sx={{display:{xs:"block",sm:"none",position:"fixed",right:"1rem",top:"1rem"}}}>
      <IconButton onClick={handerMobile} >
        <Menu />
      </IconButton>
    </Box>

    <Tooltip title="back">
      <IconButton sx={{position:"absolute",left:"2rem",topt:"2rem",bgcolor:"rgba(0,0,0,0.8)",color:"white",":hover":{bgcolor:"rgba(0,0,0,0.7)"}}} onClick={navigateBack}>
        <KeyboardBackspace />
      </IconButton>
    </Tooltip>
  </>)

  const GroupName = (
    <>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"} >
        {
          isEdite ? <>
            <TextField value={groupNameUpdateValue} onChange={e => setGroupNameUpdateValue(e.target.value)} />
            <IconButton onClick={updateGroupName}>
              <Done></Done>
            </IconButton>
          </> : <>
            <Typography sx={{color:"black"}} variant='h4'>{groupName}</Typography>
            <IconButton onClick={()=>setIsEdite(true)} >
              <Edit />
            </IconButton>
          </>
        }
      </Stack>
    </>
  );

  const ConfirmDeleteDialog = lazy(()=>import("../Components/Specific/DeleteDialogGroup") )
  const AddMember = lazy(()=>import("../Components/Specific/AddMemberDialog"))

  const BTN_group = <Stack
  m={{
    xs:"10px",
    md:"0"
  }}
  direction={{
    sm:"row",
    xs:"column-reverse"
  }}
  spacing={"1rem"}
  p={{
    sm:"1rem",
    xs:"0",
    md:"1rem 4rem"
  }}
  >
    <Button color='error' variant='outlined' startIcon={<Delete />} onClick={deleteHandeler}>Delete Group</Button>
    <Button variant='contained' startIcon={<Add />} onClick={operAddHandaler}>Add Member</Button>
  </Stack> 

  const removeMemberHandaler =(id)=>{
    console.log(id)
  }

  useEffect(()=>{
    setGroupName(`Group Name ${chatID}`)
    setGroupNameUpdateValue(`Group Name ${chatID}`)

    return () => {
      setGroupName("")
      setGroupNameUpdateValue("")
      setIsEdite(false)
    }
  },[chatID])


  return <Grid container height={"100svh"}>
    <Grid item sx={{display:{xs:"none",sm:"block"}}} sm={4} height={"100svh"} bgcolor={orange}>
      <GroupList myGroups={sampleMessage} chatId={chatID} />
    </Grid>
     <Grid item xs={12} sm={8} sx={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",padding:"1rem 3rem"}}>
      {
        IconBtn
      }
      {
        groupName && (
          <>
            { GroupName }
            <Typography margin={"2rem"} alignSelf={"flex-start"} variant='body1'>Members</Typography>

            <Stack 
            maxWidth={"45rem"}
            width={"100%"}
            boxShadow={"border-box"}
            padding={{
              sm:"1rem",
              sx:"0",
              md:"1rem 4rem"
            }}
            spacing={"2rem"}
            height={"50vh"}
            overflow={"auto"}
            >
              {/* Members */}
              
              {
                chatsData.map(i => (
                  <UserItem key={i._id} user={i} isAdded styling={{boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",padding:"1rem 2rem",borderRadius:"1rem"}} handler={removeMemberHandaler} />
                ))
              }
              
            </Stack>
            { BTN_group }
          </>
        )
      }
    </Grid>

    {
      isMember && <Suspense fallback={<Backdrop open ></Backdrop>}> <AddMember /> </Suspense>
    }

    {
      deleteDialog && ( <Suspense fallback={<Backdrop open />}> <ConfirmDeleteDialog open={deleteHandeler} handleClose={closeDeleteDialog} deleteHandler={deleteFunctionHandel} /> </Suspense> )
    }

    <Drawer sx={{display:{xs:"block",sm:"none"}}} open={isMobile} onClose={handerMobileClose}>
      <GroupList w={"50vw"} myGroups={sampleMessage} chatId={chatID} />
    </Drawer>
  </Grid>
}

const GroupList = ({w="100%",myGroups=[],chatId}) => (
  <Stack width={w}>
    {
      myGroups.length > 0 ? (
        myGroups.map( group => <GroupListItem group={group} chatId={chatId} key={group._id} /> ) 
      ) : (
        <Typography textAlign={"center"}>No Group</Typography>
      )
    }
  </Stack>
)

const GroupListItem = memo(({group,chatId}) => {
  const { name , avatar , _id } = group
  return <Link style={{textDecoration:"none",color:"black",borderBottom:"2px solid rgba(0,0,0,0.2)",margin:"5px",padding:"2px 25px"}} to={`?group=${_id}`} onClick={ e => {
    if ( chatId === _id )  e.preventDefault(); 
  }} >
    <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
       <AwatarCart avatar={avatar}/>
       <Typography variant='h6'>{name}</Typography>
    </Stack>
  </Link>
})

export default Groups