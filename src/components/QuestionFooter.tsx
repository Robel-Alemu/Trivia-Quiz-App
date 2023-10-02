import { Box, HStack } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: any;
}
const QuestionFooter = ({ children }: Props) => {
  return (
    <HStack
      bg="yellow"
      w="100%"
      p={8}
      fontSize="4xl"
      color="white"
      justifyContent="space-around"
    >
      {children}
    </HStack>
  );
};

export default QuestionFooter;
