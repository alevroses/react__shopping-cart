import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./stylesheets/App.css";
import { NavBar } from "./components/NavBar";
import { Cart } from "./pages/Cart";
import { Purchases } from "./pages/Purchases";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Purchases></Purchases>
              }></Route>
            <Route
              path="/cart"
              element={<Cart></Cart>}></Route>
            <Route
              path="/*"
              element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export { App };
