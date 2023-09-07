import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
