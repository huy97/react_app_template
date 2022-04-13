import { notification } from "antd";
import { Auth } from "aws-amplify";
import LoginForm from "components/Auth/LoginForm";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "./authSlice";

function Login() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }: any) => {
    try {
      setLoading(true);
      const result = await Auth.signIn(username, password);

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
        message: "Error!",
        description: error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return <LoginForm loading={loading} onFinish={handleLogin} />;
}

export default Login;
