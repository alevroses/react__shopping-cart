import React, { useState } from "react";
import "../stylesheets/card.css";

const Card = ({
  image,
  title,
  description,
  price,
  handleAdd,
  handleRemove,
  handleIncrease,
  handleDelete,
}) => {
  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    handleAdd();
    setAdded(true);
  };
  const clickRemove = () => {
    handleRemove();
    setAdded(false);
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-img"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">
          {description}
        </p>
        <p className="card-price">{price}</p>

        {added ? (
          <button
            type="button"
            className="button-remove"
            onClick={clickRemove}>
            Remove from cart
          </button>
        ) : (
          <button
            type="button"
            className="button-add"
            onClick={clickAdd}>
            Add from cart
          </button>
        )}
      </div>
    </div>
  );
};

export { Card };
