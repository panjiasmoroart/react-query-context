import React from "react";
import { Box } from "@chakra-ui/layout";
import { useCookies } from "react-cookie";
import { actionTypes, useStateValue } from "../../store";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Product from "../../components/Product";

const Home = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const history = useHistory();

  const logoutHandler = () => {
    removeCookie("jwt");
    dispatch({ type: actionTypes.SET_TOKEN, payload: null });
    history.push("/login");
  };

  return (
    <Box>
      <NavBar logout={logoutHandler} />
      <Hero />
      <Product />
    </Box>
  );
};

export default Home;
