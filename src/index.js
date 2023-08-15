import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Helmet>
      <meta
        http-equiv="Strict-Transport-Security"
        content="max-age=31536000; includeSubDomains"
      />
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="same-origin" />
      {/* permission policy */}
      <meta
        http-equiv="Permissions-Policy"
        content="geolocation=(self),
        microphone=(), camera=(), fullscreen=(self), payment=(), sync-xhr=(self),
      "
      />
      {/* add iframe in permission policy */}
      {/* <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" /> */}
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
      <meta
        http-equiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />
      {/* allow content security policy */}
      <meta http-equiv="Content-Security-Policy" content="use-default" />
      {/* <meta http-equiv="X-Frame-Options" content="DENY" /> */}
      {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'" /> */}
    </Helmet>
    <App />
  </>
);
