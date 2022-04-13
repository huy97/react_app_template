import Loading from "components/Loading";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = React.lazy(() => import("App"));
const Login = React.lazy(() => import("containers/Auth/Login"));
const User = React.lazy(() => import("containers/User"));
const Group = React.lazy(() => import("containers/User/Group"));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="users">
            <Route path="groups" element={<Group />} />
            <Route index element={<User />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route index element={<App />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRouter;
