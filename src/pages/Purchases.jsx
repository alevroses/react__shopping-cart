import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const Purchases = () => {
  const { products } = useContext(ProductsContext);
  const { addPurchase, deletePurchase } =
    useContext(CartContext);

  const handleAdd = (purchase) => {
    addPurchase(purchase);
  };
  const handleRemove = (id) => {
    deletePurchase(id);
  };

  return (
    <>
      <h1>Purchases: </h1>
      <hr />
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handleAdd={() => handleAdd(product)}
          handleRemove={() =>
            handleRemove(product.id)
          }></Card>
      ))}
    </>
  );
};

export { Purchases };
