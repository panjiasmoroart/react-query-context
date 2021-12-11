import {
  Container,
  Grid,
  GridItem,
  Heading,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../api";
import ProductItem from "./ProductItem";

const Product = () => {
  const { isLoading, error, isError, data } = useQuery("product", getProduct);

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
    <Container maxW="container.lg">
      <Heading fontSize="4xl" mb={5}>
        Product Best Seller
      </Heading>
      {false && isLoading && (
        <Spinner
          thickness="4px"
          emptyColor="gray.200"
          color="green.200"
          size="xl"
          display="flex"
          mx="auto"
        />
      )}

      <Grid
        gridGap="4"
        gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
      >
        {data?.map((product) => (
          <GridItem
            key={product._id}
            display="flex"
            justifyContent="center"
            margin="2"
          >
            <ProductItem product={product} loading={isLoading} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;
