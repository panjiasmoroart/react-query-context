import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useStateValue } from "./store/StateProvider";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { actionTypes } from "./store";

const queryClient = new QueryClient();

const App = () => {
  const [cookie] = useCookies(["jwt"]);
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    if (!token) {
      const { jwt } = cookie;
      if (jwt) {
        dispatch({ type: actionTypes.SET_TOKEN, payload: jwt });
      }
    }
  }, [dispatch, token, cookie]);

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              {token ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {!token ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!token ? <Signup /> : <Redirect to="/" />}
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
