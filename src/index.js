import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-2fw28m-y.us.auth0.com"
  //   clientId="yktQMNFw9HN9rZ9vF1bBL4lYVvZ41fG3"
  //   redirectUri={window.location.origin}
  // >
    <App />
  // </Auth0Provider>,
);