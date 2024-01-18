"use client"
import { useState } from "react"




export default function Page(){

 const [name,setName]=useState("")
 const [email,setEmail]=useState("")
 const [age,setAge]=useState("")
 const addUser=async()=>{
    let response=await fetch("http://localhost:3000/api/users",{
        method:'Post',
        body:JSON.stringify({name,age,email})
    });
    response=await response.json();
    console.log(response);
    if(response.success){
        alert("created")
    }

 }

    return(
        <div className="w-screen h-screen flex justify-center items-center">

        <div className="flex flex-col gap-4 bg-red-200 p-4">

            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} className="p-2"/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2"/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} className="p-2"/>
            <button onClick={addUser} className="p-2 bg-gray-50">Add User</button>
        </div>
        </div>
    )
}