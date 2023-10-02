import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Progress,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}

const ResultBoard = ({ score }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="teal"
      height="100vh"
    >
      <VStack
        width="98vw"
        height="95%"
        borderRadius={20}
        bg="blackAlpha.600"
        fontSize="5xl"
        textAlign="center"
      >
        {" "}
        <Heading marginTop={60}> Your Score is {score} %</Heading>
        <HStack marginTop={20} width="60%" justifyContent="space-evenly">
          <Button width="13%" height="60px" fontSize="2xl">
            Done
          </Button>
          <Button width="13%" height="60px" fontSize="2xl">
            Retake
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ResultBoard;
