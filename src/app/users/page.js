import Link from "next/link"
const getUsers=async()=>{
  let data=await fetch("http://localhost:3000/api/users")
  data=await data.json();
  return data;
}


export default async function Page(){
  const users=await getUsers();
console.log(users);
    return(
        <>
          <h1>User data</h1>
          {
            users.map((item)=>(
              <div className="flex m-4">
              <Link href={`users/${item.id}`} className="w-40 p-2">
                Person :{item.name} 
              </Link>
              <Link href={`users/${item.id}/update`}>
                <button className="p-2 bg-red-100">Edit</button>
              </Link>
              </div>
            ))
          }
        </>
    )
}