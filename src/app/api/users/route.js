import { users } from "@/util/db";
import {NextResponse} from "next/server"
export function GET(request){
    const data=users;
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    let payload=await request.json();
    console.log(payload.name);
    if(!payload.name||!payload.email){
        return NextResponse.json({result:"require field not found",success:false},{status:404})
    }
    return NextResponse.json({result:"New user created",success:true},{status:201})


}

