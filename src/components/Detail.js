import React from "react";

export default function Detail(props) {
  const product = props.product;

  return (
    <div>
      <div className="detail">
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
