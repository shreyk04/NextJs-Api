import {user} from "@/util/db";
import {NextResponse} from "next/server"

export function GET(request,content){
    const userData=user.filter((item)=>item.id==content.params.id)
   
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