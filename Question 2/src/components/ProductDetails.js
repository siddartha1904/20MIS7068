import React from "react";

const ProductDetails = ({ match }) => {
  const productId = match.params.productId;

  // Fetch product details using productId
  // Implement your logic to fetch product details here

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Display other product details here */}
    </div>
  );
};

export default ProductDetails;
