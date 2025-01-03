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
        setUserAcount: ( state , action ) =>{
            state.name = action.payload;
            state.userName = action.payload;
            state.bio = action.payload;
            state.avatar = action.payload;
            state.Joined = action.payload;
        }
    },
})

export default userSlice;
export const { setUserAcount } = authSlice.actions;