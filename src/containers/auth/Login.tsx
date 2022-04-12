import { notification } from "antd";
import LoginForm from "components/Auth/LoginForm";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import aws from "services/aws";
import { setUserInfo } from "./authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }: any) => {
    try {
      const result = await aws.login({ username, password });

      dispatch(
        setUserInfo({
          id: result.id,
          username,
          attributes: result.attributes,
          accessToken: result.signInUserSession.getAccessToken().getJwtToken(),
          idToken: result.signInUserSession.getIdToken().getJwtToken(),
          refreshToken: result.signInUserSession.getRefreshToken().getToken(),
        })
      );

      navigate("/");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error?.message,
      });
      console.log(error.message);
    }
  };

  return <LoginForm onFinish={handleLogin} />;
}

export default Login;
