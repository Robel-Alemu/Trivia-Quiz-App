import { Box, HStack } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: any;
}
const QuestionHeader = ({ children }: Props) => {
  return (
    <HStack
      // bg="brown"
      w="100%"
      p={8}
      fontSize="5xl"
      color="whiteAlpha.800"
      justifyContent="space-around"
    >
      {children}
    </HStack>
  );
};

export default QuestionHeader;
