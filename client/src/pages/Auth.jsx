import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CamaraAltIcon } from '@mui/icons-material'
import { VisuallyHidden } from '../Components/styles/StyledCompo'
import { useFileHandler, useInputValidation , useStrongPassword} from "6pp";
import { userNameValidator } from '../utils/usernameValidator';

const Auth = () => {

  const [isLogin,setIsLogin] = useState(true);
  const name = useInputValidation("");
  const userName = useInputValidation("",userNameValidator);
  const email = useInputValidation("");
  const password = useStrongPassword("");
  const avatar = useFileHandler("single");
  const toogleLogin = () => setIsLogin(!isLogin);

  const handerSignup = () =>{}

  const handerlogin = () =>{}


  return <div style={{ backgroundImage: "linear-gradient(to right, gray , pink)"}}>
  <Container component={"main"} maxWidth="xs" sx={{display:'flex' , justifyContent:"center" , alignItems:"center",height:"100svh"}}>
      <Paper elevation={3} sx={{padding:4, display:"flex",flexDirection:"column",alignItems:"center"}} >
        {
          isLogin? (
            <>
              <Typography variant='h5'>Login</Typography>
              <form style={{ width: "100%" , marginTop:"1rem"}} onSubmit={handerlogin} >

                 <TextField required fullWidth label="Email" type='email' margin='normal' variant='outlined' value={email.value} onChange={email.changeHandler} />
                 <TextField required fullWidth type='password' label="Password" margin='normal' variant='outlined'  />

                 <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' color='primary' type='submit' >Login</Button>

                <Typography textAlign={"center"} m={"1rem"} >Or</Typography>

                <Button sx={{marginTop:'1rem'}} fullWidth variant='text' onClick={toogleLogin}>Sign Up</Button>

              </form>
            </>
          ) : ( 
            <>
            <Typography variant='h5'>Sign Up</Typography>
            <form style={{ width: "100%" , marginTop:"1rem"}} onSubmit={handerSignup} >

              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{width:"10rem",height:"10rem",objectFit:"contain"}} src={avatar.preview} />
                <IconButton sx={{ position:"absolute" , bottom:"0" , right:"0", color:"white", bgcolor:"rgba(0,0,0,0.5)",":hover":{bgcolor:"rgba(0,0,0,0.7)"}}} component="label">
                  <>
                    <CamaraAltIcon />
                    <VisuallyHidden type='file' onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>

                <TextField required fullWidth label="Full Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
                <TextField required fullWidth label="UserName" margin='normal' variant='outlined' value={userName.value} onChange={userName.changeHandler} />
                {
                  userName.error && <Typography sx={{fontSize:"14px"}} color='error'>{userName.error}</Typography> 
                }
                <TextField required fullWidth label="Email" type='email' margin='normal' variant='outlined' value={email.value} onChange={email.changeHandler} />
                <TextField required fullWidth type='password' label="Password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />
                {
                  password.error && <Typography sx={{fontSize:"14px"}} color='error'>{password.error}</Typography>
                }

                <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' color='primary' type='submit' >Sign up</Button>

                <Typography textAlign={"center"} m={"1rem"} >Or</Typography>

              <Button sx={{marginTop:'1rem'}} fullWidth variant='text' onClick={toogleLogin}>Login</Button>

            </form>
          </>

          )
        }
      </Paper>
  </Container>
  </div>
}

export default Auth