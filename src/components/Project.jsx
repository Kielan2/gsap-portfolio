import React, { forwardRef } from "react";
import "../css/Cards.css";

const Card = forwardRef(({ title, text, imageSrc }, ref) => {
  return (
    <div className="card Frosted-Glass" ref={ref}>
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
});

export default Card;

