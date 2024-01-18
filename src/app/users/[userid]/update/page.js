"use client"
import { useEffect, useState } from "react"




export default function Page({params}){
    let id=params.userid;

 const [name,setName]=useState("")
 const [email,setEmail]=useState("")
 const [age,setAge]=useState("")
 useEffect(()=>{
    getUserDetails()
 },[])
const getUserDetails=async()=>{
    let data=await fetch("http://localhost:3000/api/users/"+id)
     data=await data.json();
     console.log(data);
     setName(data.result.name)
     setAge(data.result.age)
     setEmail(data.result.email)
}


const updateUser=async()=>{
 console.log(name,age,email,id);
 let result=await fetch(`http://localhost:3000/api/users/${id}`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({name,email,age})

 })
 if (!result.ok) {
    throw new Error(`Failed to update user. Status: ${result.status}`);
  }
 let response=await result.json();
 console.log(response);
 if(response.success){
    alert("User info updated")
 }else{
    alert("Error")
 }
}
    return(
        <div className="w-screen h-screen flex justify-center items-center">

        <div className="flex flex-col gap-4 bg-red-200 p-4">

            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} className="p-2"/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2"/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} className="p-2"/>
            <button onClick={updateUser} className="p-2 bg-gray-50">Update User</button>
        </div>
        </div>
    )
}