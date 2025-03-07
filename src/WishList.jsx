import React, { useEffect, useState } from "react";

function WishList() {
  const [products, setProducts] = useState([]); 
  const [isWishListed, setIsWishListed] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => setError("Fetching error: " + error.message));
  }, []);

  function handleToggle() {
    console.log("Product added to WishList");
    setIsWishListed(!isWishListed);
  }

  function handleAddToCart() {
    alert("Product added successfully");
  }

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Topic: UseState (Conditional Rendering)</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="card p-3"
              style={{
                width: "200px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                textAlign: "center",
                padding: "25px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>Title: {product.title.slice(0, 8)}</h3>
              <h3>Price: ${product.price}</h3>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", margin: "auto" }}
              />
              <button className="btn btn-success" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <h4>Apple Phone</h4>

        <button
          onClick={handleToggle}
          style={{
            backgroundColor: isWishListed ? "red" : "green",
            color: "white",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          {isWishListed ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </>
  );
}

export default WishList;
