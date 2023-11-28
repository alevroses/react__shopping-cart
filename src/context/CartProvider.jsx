import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

const CartProvider = ({ children }) => {
  const purchasesReducer = (
    state = initialState,
    action = {}
  ) => {
    switch (action.type) {
      case "[CART] Add purchase":
        return [...state, action.payload];

      case "[CART] Increase amount purchase":
        return state.map((item) => {
          const quantity = item.amount + 1;
          if (item.id === action.payload)
            return { ...item, amount: quantity };

          return item;
        });

      case "[CART] Decrease amount purchase":
        return state.map((item) => {
          const quantity = item.amount - 1;
          if (
            item.id === action.payload &&
            item.amount > 1
          )
            return { ...item, amount: quantity };
        });

      case "[CART] Delete purchase":
        return state.filter(
          (purchase) =>
            purchase.id !== action.payload
        );

      default:
        return state;
    }
  };
  const [purchasesList, dispatch] = useReducer(
    purchasesReducer,
    initialState
  );

  const addPurchase = (purchase) => {
    purchase.amount = 1;
    const action = {
      type: "[CART] Add purchase",
      payload: purchase,
    };

    dispatch(action);
  };
  const increaseAmount = (id) => {
    const action = {
      type: "[CART] Increase amount purchase",
      payload: id,
    };
    dispatch(action);
  };
  const decreaseAmount = (id) => {
    const action = {
      type: "[CART] Decrease amount purchase",
      payload: id,
    };

    dispatch(action);
  };
  const deletePurchase = (id) => {
    const action = {
      type: "[CART] Delete purchase",
      payload: id,
    };

    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        purchasesList,
        addPurchase,
        increaseAmount,
        decreaseAmount,
        deletePurchase,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
