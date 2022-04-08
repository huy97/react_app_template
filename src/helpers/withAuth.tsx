import { Auth } from "aws-amplify";
import Loading from "components/Loading";
import { selectUserSelector, setUserInfo } from "containers/Auth/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withAuth =
  (Component: any): any =>
  (props: any) => {
    const user = useSelector(selectUserSelector);
    const isAuthenticated = !!user;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function restoreToken() {
        if (!isAuthenticated) {
          try {
            setLoading(true);
            const [currentSession, currentUser] = await Promise.all([
              Auth.currentSession(),
              Auth.currentUserInfo(),
            ]);

            dispatch(
              setUserInfo({
                ...currentUser,
                accessToken: currentSession.getAccessToken().getJwtToken(),
                idToken: currentSession.getIdToken().getJwtToken(),
                refreshToken: currentSession.getRefreshToken().getToken(),
              })
            );
          } catch (error) {
            navigate("/login");
          } finally {
            setLoading(false);
          }
        }
      }

      restoreToken();
    }, [user]);

    if (loading) {
      return <Loading />;
    }

    return isAuthenticated && <Component {...props} />;
  };

export default withAuth;
