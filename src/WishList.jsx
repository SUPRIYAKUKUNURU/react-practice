import React, { useState } from "react";

function WishList() {
  const [isWishListed, setIsWishListed] = useState(false);

  function handleToggle() {
    console.log("Product added to WishList");
    
    setIsWishListed(!isWishListed);
  }

  return (
    <>
      <h2>Apple Phone</h2>

      <button
        onClick={handleToggle}
        style={{
          backgroundColor: isWishListed ? "red" : "green",
          color: "white",borderRadius:"5px"
        }}
      >
        {isWishListed ? "Remove from Wishlist" : "Add to wishlist"}{" "}
      </button>
    </>
  );
}

export default WishList;
