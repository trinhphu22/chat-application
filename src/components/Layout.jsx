import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Router from "../routers/Router";

import AuthProvider from "../components/Context/AuthProvider";

const Layout = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route
          render={(props) => (
            <div>
              <div className="container">
                <div className="main">
                  <Router />
                </div>
              </div>
            </div>
          )}
        />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Layout;
