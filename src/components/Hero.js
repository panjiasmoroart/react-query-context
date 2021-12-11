import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxW="container.lg"
      display="flex"
      h="75vh"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack height="350px" justify="space-around" mt={{ base: "8", md: "0" }}>
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as="h1">
          React Query, Reducer & Context API
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          as="p"
          maxW={{ base: "100%", md: "80%" }}
        >
          Explore react query context api reducer cookie Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book
        </Text>
        <Box>
          <Button colorScheme="orange">Detail Product</Button>
        </Box>
      </Stack>
      <Flex mt={{ base: "8", md: "0" }} justifyContent="center">
        <Image
          width={{ base: "70%", md: "auto" }}
          mr="4"
          src="/images/undraw_programmer_imem.png"
        />
      </Flex>
    </Container>
  );
};

export default Hero;
