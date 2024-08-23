import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-6zk6wa1x1yxhd5m1.us.auth0.com"
    clientId="fmxvKwG0OQY8efI4cJkQRbjwNbi7cVp0"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
