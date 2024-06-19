import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context/BlogContext.jsx";
import { Provider } from "react-redux";
import { store, newStore } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={newStore}>
        <BrowserRouter>
          <BlogContextProvider>
            <App />
          </BlogContextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
