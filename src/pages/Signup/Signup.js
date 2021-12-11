import React from "react";
import { Button, Container, Spinner, Stack, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl } from "formik-chakra-ui";
import { useMutation } from "react-query";
import { signupUser } from "../../api";
import { useStateValue } from "../../store/StateProvider";
import { actionTypes } from "../../store";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const Signup = () => {
  // eslint-disable-next-line
  const [{ token }, dispatch] = useStateValue();

  const history = useHistory();

  const [, setCookie] = useCookies(["jwt"]);

  const { isLoading, error, isError, mutateAsync } = useMutation(
    "signup",
    signupUser,
    {
      onSuccess: (data) => {
        dispatch({ type: actionTypes.SET_TOKEN, payload: data.token });
        setCookie("jwt", data.token);
        history.replace("/");
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
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={async (values) => {
            await mutateAsync({
              name: values.name,
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form>
            <InputControl
              name="name"
              label="Name"
              inputProps={{
                type: "text",
                focusBorderColor: "orange.400",
                placeholder: "Enter name...",
              }}
            />
            <InputControl
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                focusBorderColor: "orange.400",
                placeholder: "Enter email...",
              }}
            />
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                type: "password",
                focusBorderColor: "orange.400",
                placeholder: "Enter password...",
              }}
            />
            <Button colorScheme="orange" mt="4" type="submit">
              {isLoading && <Spinner mr="2" size="sm" />} Signup
            </Button>
          </Form>
        </Formik>
      </Stack>
    </Container>
  );
};

export default Signup;
