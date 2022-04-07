import { selectAuthSelector } from "containers/auth/authSlice";
import React from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, Navigate } from "react-router-dom";

function AuthRoute(props: RouteProps) {
  const auth = useSelector(selectAuthSelector);

  if (!auth.token || !auth.user) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...props} />;
}

export default AuthRoute;
