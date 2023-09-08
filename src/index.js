import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CategoryProvider,
  DateProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  AlertProvider,
} from "./context/index";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <WishlistProvider>
                <AlertProvider>
                  <App />
                </AlertProvider>
              </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
