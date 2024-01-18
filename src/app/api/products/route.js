import {NextResponse} from "next/server"
export function GET(request){
    return NextResponse.json({name:"Shreya",age:23},{status:200})
}

export async function POST(request){
    let payload=await request.json();
    console.log(payload.name);
    if(!payload.name||!payload.email){
        return NextResponse.json({result:"require field not found",success:false},{status:404})
    }
    return NextResponse.json({result:"New user created",success:true},{status:201})


}