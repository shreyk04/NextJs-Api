
"use client"
import React from 'react'
import action from './actions';
import { revalidateTag } from 'next/cache'

function DeleteUser(props) {
    const userId=props.id
    console.log("userid",userId);

    const deleteUser=async()=>{
    
    let result=await fetch(`http://localhost:3000/api/users/${userId}`,{
     method:"delete"
    })
    result=await result.json();
    console.log(result);
    if(result.success){
        action();
        // revalidateTag('users');
    }
    return result;
   
   }
  return (
              <button onClick={deleteUser}>Delete User</button>
  )
}

export default DeleteUser