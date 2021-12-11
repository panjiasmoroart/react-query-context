import React from "react";
import { Button, Container, Spinner, Stack, useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { InputControl } from "formik-chakra-ui";
import { loginUser } from "../../api";
import { useStateValue } from "../../store/StateProvider";
import { actionTypes } from "../../store";
import { Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  // eslint-disable-next-line
  const [{ token }, dispatch] = useStateValue();

  const [, setCookie] = useCookies(["jwt"]);

  const { isLoading, error, isError, mutateAsync } = useMutation(
    "login",
    loginUser,
    {
      onSuccess: (data) => {
        dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
        setCookie("jwt", data.token);
        toast({
          title: "Login success!",
          status: "success",
          isClosable: true,
          position: "top-right",
        });
        <Redirect to="/" />;
      },
    }
  );

  const toast = useToast();

  if (isError) {
    toast({
      title: error.message,
      status: "error",
      isClosable: true,
      position: "top-right",
    });
  }

  return (
    <Container
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack width="300px" p="6" boxShadow="xl" borderRadius="xl">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await mutateAsync({
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form>
            <InputControl
              isRequired
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                focusBorderColor: "orange.400",
                placeholder: "Enter email...",
              }}
            />
            <InputControl
              isRequired
              name="password"
              label="Password"
              inputProps={{
                type: "password",
                focusBorderColor: "orange.400",
                placeholder: "Enter password...",
              }}
            />
            <Button colorScheme="orange" mt="4" type="submit">
              {isLoading && <Spinner mr="2" size="sm" />} Login
            </Button>
          </Form>
        </Formik>
      </Stack>
    </Container>
  );
};

export default Login;
