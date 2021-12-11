import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";

const ProductItem = ({ product, loading }) => {
  let productDescription = product?.description;
  return (
    <Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
      <Skeleton isLoaded={!loading}>
        <Image src={product?.image} />
      </Skeleton>
      <Stack p="4">
        <Skeleton isLoaded={!loading}>
          <Heading mb="4" fontSize="xl">
            {product?.name}
          </Heading>
          <Text mb="4">{productDescription.slice(0, 85)}</Text>
          <Button alignSelf="flex-end" colorScheme="orange">
            Read more
          </Button>
        </Skeleton>
      </Stack>
    </Stack>
  );
};

export default ProductItem;
