import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//react-e-commerce.eu.auth0.com
//z4S6Hp28tdonNTqf6M0s8BpQ0BD906bX

ReactDOM.render(
  <Auth0Provider
    domain="react-e-commerce.eu.auth0.com"
    clientId="z4S6Hp28tdonNTqf6M0s8BpQ0BD906bX"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
