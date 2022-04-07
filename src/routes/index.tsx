import Loading from "components/Loading";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = React.lazy(() => import("App"));
const Login = React.lazy(() => import("containers/auth/Login"));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRouter;
