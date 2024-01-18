import Link from "next/link"
const getProducts=async()=>{
  let data=await fetch("https://dummyjson.com/products")
  data=await data.json();
  return data.products;
}


export default async function Page(){
  const products=await getProducts();
console.log(products);
    return(
        <>
          <h1>User data</h1>
          {
            products.map((item)=>(
              <div>
              <Link href={`products/${item.id}`}>
                Title is :{item.title}
              </Link>
              </div>
            ))
          }
        </>
    )
}