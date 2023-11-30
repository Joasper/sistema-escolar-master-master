import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <App /> <App />{" "}
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
