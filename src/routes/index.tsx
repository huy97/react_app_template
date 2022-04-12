import Loading from "components/Loading";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = React.lazy(() => import("App"));
const Login = React.lazy(() => import("containers/Auth/Login"));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRouter;

