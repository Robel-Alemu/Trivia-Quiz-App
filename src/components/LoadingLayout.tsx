import {
  AbsoluteCenter,
  Center,
  Flex,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const LoadingLayout = () => {
  return (
    <VStack marginY="20%">
      {" "}
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Heading>Loading Quiz...</Heading>
    </VStack>
  );
};

export default LoadingLayout;
