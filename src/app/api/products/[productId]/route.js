import {user} from "@/util/db";
import {NextResponse} from "next/server"

export function GET(request,content){
    const userData=user.filter((item)=>item.id==content.params.id)
   
    return NextResponse.json(userData.length==0?{result:'User not found',success:false}:userData,{status:200})

}