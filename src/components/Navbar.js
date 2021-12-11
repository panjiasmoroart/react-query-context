import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

const NavBar = ({ logout }) => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      padding="3"
      boxShadow="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" w="190px" h="45px" src="/images/logo-chakra.png" />
      </Flex>
      <Flex align="center">
        {/* <Text mr="6">Product</Text> */}
        <Button
          onClick={logout}
          color={"white"}
          bg={"green.300"}
          href={"#"}
          _hover={{
            bg: "green.400",
          }}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
