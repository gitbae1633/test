import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Error404 from "../components/error/Error404";
import Register from "../components/user/Register";
import UserUpdate from "../components/user/UserUpdate";
import Main from "../components/Main";
import SiteLayout from "../components/layout/SiteLayout";
import Product from "../components/Product/Product";
import Business from "../components/Business/Business";
import User from "../components/user/User";
import UserMain from "./UserMain";
import AdminMain from "./AdminMain";
import Receive from "../components/Receive/Receive";
import ProductModal from "../components/Receive/ProductModal";

const AdminRoute = ({ role, info }) => {
  console.log(info);
  const layout = (children, page) => (
    <SiteLayout role={role} page={page} info={info}>
      {children}
    </SiteLayout>
  );
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Router>
        <Routes>
          {role === "admin" ? (
            <>
              <Route path="/" element={layout(<AdminMain />)} />
              <Route
                path="/register"
                element={layout(<Register />, "/register")}
              />
              <Route
                path="/register2"
                element={layout(<User />, "/register2")}
              />
            </>
          ) : (
            <>
              <Route path="/" element={layout(<UserMain />)} />
              <Route
                path="/product"
                element={layout(<Product />, "/product")}
              />
              <Route
                path="/business"
                element={layout(<Business />, "/business")}
              />
              <Route
                path="/receive"
                element={layout(<Receive />, "/receive")}
              />
              <Route
                path="/productmodal"
                element={layout(<ProductModal />, "/productmodal")}
              />
            </>
          )}

          <Route path="*" element={layout(<Error404 />)} />
        </Routes>
      </Router>
    </Box>
  );
};

export default AdminRoute;
