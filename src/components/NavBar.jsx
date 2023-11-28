import React, { useContext } from "react";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { purchasesList } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand"
          href="#">
          Cart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link active"
                href="#">
                Purchases
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <Badge
              badgeContent={purchasesList.length}
              color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
