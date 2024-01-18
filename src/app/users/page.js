
import Link from "next/link"
import DeleteUser from "../DeleteUser";
const getUsers=async()=>{
  let data=await fetch("http://localhost:3000/api/users",{ next: { tags: ['users'] } })
  data=await data.json();
  return data;
}


const deleteUser=async(userId)=>{
    
  let result=await fetch(`http://localhost:3000/api/user/${userId}`,{
   method:"delete"
  })
  result=await result.json();
  console.log(result);
  if(!result.success){
      alert("True")
  }
  return result;
 
 }


export default async function Page(){

  // let data=awss data.json();

  const users=await getUsers();
console.log(users);

    return(
        <>
          <h1>User data</h1>
          {
            users.map((user,index)=>(
              <div className="flex m-4">
              <Link href={`users/${user.id}`} className="w-40 p-2">
                {index+1} :{user.name} 
              </Link>
              <Link href={`users/${user.id}/update`}>
                <button className="p-2 bg-red-100">Edit</button>
              </Link>
              {/* <button onClick={()=>deleteUser(user.id)}>{`delete- ${user.name} `}</button> */}
              <DeleteUser id={user.id}/>
              </div>
            ))
          }
        </>
    )
}