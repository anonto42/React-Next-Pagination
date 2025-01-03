import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    bio:"",
    userName:"",
    avatar:"",
    Joined:""
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setName: ( state , action ) =>{
            state.name = action.payload;
        },
        setUserName: ( state , action ) =>{
            state.userName = action.payload;
        },
        setBio: ( state , action ) =>{
            state.bio = action.payload;
        },
        setAvatar: ( state , action ) =>{
            state.avatar = action.payload;;
        },
        setJoined: ( state , action ) =>{
            state.Joined = action.payload;
        }
    },
})

export default userSlice;
export const { setName, setUserName , setBio , setAvatar,setJoined} = userSlice.actions;