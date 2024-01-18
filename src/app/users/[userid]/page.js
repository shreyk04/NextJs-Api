const getUsers=async(id)=>{
    let data=await fetch(`http://localhost:3000/api/users/${id}`)
    data=await data.json();
    if (Array.isArray(data)) {
        return data[0];
      }
    
    return data;
  }

export default async function Page({params}){
    console.log("params",params);
    const user=await getUsers(params.userid)
    console.log("user",user);
    return(
        <>
        <h1>User detail page</h1>
        
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <h2>Email :{user.email}</h2>

        {/* <img src={product.images[0]} alt="alt" /> */}

        </>
    )
}