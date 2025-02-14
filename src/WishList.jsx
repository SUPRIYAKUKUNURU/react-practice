import React, { useEffect, useState } from "react";


function WishList() {
  const [products, setProducts] = useState([]); 
  const [isWishListed, setIsWishListed] = useState(false);
  const [error,setErrors]=useState()

  useEffect (()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data =>setProducts(data))
    .catch(error=>console.log("fetching error",error));
    },[])

  function handleToggle() {
    console.log("Product added to WishList");
    
    setIsWishListed(!isWishListed);
  }

  return (
    <>
    <div style={{textAlign:"center"}}>
    <h2>Topic:UseState(Conditional Rendering)</h2>

    {products.map(product=>(
      
      <li>{product.id}
      <h3>Title:{product.title.slice(0,8)}</h3>
      <h3>Price:${product.price}</h3>
      <img src={product.image} alt={product.title} width="100"/>
      </li>
    ))}
  
      <h4>Apple Phone</h4>


      <button
        onClick={handleToggle}
        style={{
          backgroundColor: isWishListed ? "red" : "green",
          color: "white",borderRadius:"5px"
        }}
      >
        {isWishListed ? "Remove from Wishlist" : "Add to wishlist"}{" "}
      </button>
      </div>
    </>
  );
}

export default WishList;
