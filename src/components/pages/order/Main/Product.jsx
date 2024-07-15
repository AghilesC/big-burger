import React from "react";

export default function Product({ title, imageSource, price }) {
  return (
    <div className="produit">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          {price}
          <div className="title">{title}</div>
          <div className="price"></div>
          <button>Ajouter</button>
        </div>
      </div>
    </div>
  );
}
