import { selectUserSelector } from "containers/Auth/authSlice";
import withAuth from "helpers/withAuth";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import service from "services";

function App() {
  const user = useSelector(selectUserSelector);

  useEffect(() => {
    service.get(
      "https://unasfrsfck.execute-api.ap-southeast-1.amazonaws.com/dev/hello"
    );
  }, []);

  return <div className="App">Hello World, {user?.username}</div>;
}

export default withAuth(App);
