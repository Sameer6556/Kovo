import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#0a0a0b",
              color: "#ffffff",
              borderRadius: "10px",
              fontSize: "14px",
              padding: "12px 16px",
              maxWidth: "420px",
            },
            success: { iconTheme: { primary: "#16b981", secondary: "#ffffff" } },
            error: { iconTheme: { primary: "#e03761", secondary: "#ffffff" } },
          }}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
