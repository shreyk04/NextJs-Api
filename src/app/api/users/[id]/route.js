import {setUsers, users} from "@/util/db";
import {NextResponse} from "next/server"
import { revalidateTag } from 'next/cache'

export function GET(request,content){
    const userData=users.filter((item)=>item.id==content.params.id)
   
    return NextResponse.json(userData.length==0?{result:'User not found',success:false}:{result:userData[0],success:true},{status:200})

}

export async function PUT(request,content){
    let payload=await request.json();
    console.log("Received payload:", payload);

     let userId=content.params.id;
     console.log(userId)
     if(!payload.name|| !payload.age||!payload.email){

         return NextResponse.json({result:"Error",success:false},{status:400})
     }
     return NextResponse.json({result:payload,success:true},{status:200})
}

export function DELETE(request,content){
    const id=content.params.id;
    const filteredUsers=users.filter((user)=>user.id!=id)
    setUsers(filteredUsers);
    // revalidateTag('users')
    console.log("🚀 ~ DELETE ~ users:", users)
    console.log("🚀 ~ DELETE ~ filteredUsers:", filteredUsers)
    if(id){
        return NextResponse.json({result:"User deleted",success:true},{status:200})
    }else{
        return NextResponse.json({result:"Internal server error",success:false},{status:401})
    }
}