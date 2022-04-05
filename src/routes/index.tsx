import Loading from "components/Loading";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = React.lazy(() => import("App"));

function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRouter;
