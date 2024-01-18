const getProducts=async(id)=>{
    let data=await fetch(`https://dummyjson.com/products/${id}`)
    data=await data.json();
    return data;
  }

export default async function Page({params}){
    console.log("params",params);
    const product=await getProducts(params.productid)
    console.log("product",product);
    return(
        <>
        <h1>User detail page</h1>
        
        <h1>Title: {product.title}</h1>
        <h1>Description: {product.description}</h1>
        {/* <img src={product.images[0]} alt="alt" /> */}

        </>
    )
}