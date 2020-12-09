import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth, db} from "../../app/myfirebase";
import firebase from "firebase";
export const authority= createAsyncThunk('user/authority', async ({email, password}) => {
    let response
    try{
         response = await auth.signInWithEmailAndPassword(email,password)
    }catch (e){
        response = await auth.createUserWithEmailAndPassword(email, password);
        response = await auth.signInWithEmailAndPassword(email, password);
    }
    response = {isNewUser:response.additionalUserInfo.isNewUser,
        isDelete:false,email:email,password:password,toUpdate:true}
    await update(response)
    return response
})

export const authorityWithGoogle= createAsyncThunk('user/authorityWithGoogle', async () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    let response
    try{
        response = await auth.signInWithPopup(provider)
    }catch (e){
        console.log(e)
    }

    response = {isNewUser:response.additionalUserInfo.isNewUser,
        ...response.additionalUserInfo.profile,
        isDelete:false,toUpdate:false}
    await update(response)
    return response
})

export const passwordReset= createAsyncThunk('user/passwordReset', async ({email}) => {
    let response
    try{
        response = await auth.sendPasswordResetEmail(email)
    }catch (e){
       console.log(e)
    }
    return response
})

const update =async (user)=>{
    let response
    try{
        const node = await db.collection("users").doc(user.email)
        const document =await node.get()
        if (!document.exists || document.data().toUpdate){
            response =  node.set(user)
        }
    }catch (e){
        console.log(e)
    }
    return response
}

const UserSlice = createSlice({
    name: "user",
    initialState : {
        isLogin: false,
    },
    reducers: {
        
    },
    extraReducers:{
        [authority.fulfilled]:(state,action)=>{
            return {...state,...action.payload,isLogin: true}
        },
        [passwordReset.fulfilled]:(state,action)=>{
            console.log(action)
        },
        [authorityWithGoogle.fulfilled]:(state,action)=>{
           return  {...state,...action.payload,isLogin: true}
        },
    }

})

export default UserSlice.reducer