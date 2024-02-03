import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LoadingScreen from "./components/loading-screen";
import ProtectedRoute from "./components/protected-route";
import Admin from "./routes/admin";
import Invoice from "./routes/invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout></Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/create-account",
    element: <CreateAccount></CreateAccount>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
]);

const GlobalStyles = createGlobalStyle`
/* ${reset} */
* {
  box-sizing: border-box;
}
body {
  background-color: #FAFAFA;
  color: red;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}
export default App;
