import React from "react";
import style from './style.css'
export default function CardVideo({ name, description, image }) {
  return (
      <div className="card-item">
        <img src={image} alt="imageVideo" />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
  );
}