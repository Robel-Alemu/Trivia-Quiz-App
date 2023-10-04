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
import React, { useState } from "react";
import Questions from "./Questions";
import useQuestion from "../hooks/useQuestions";
import QuizDashboard from "./QuizDashboard";
interface Props {
  score: number;
  category: number;
}

const ResultBoard = ({ score, category }: Props) => {
  const [retake, setRetake] = useState(false);
  const [done, setDone] = useState(false);
  const { data } = useQuestion(category);
  if (retake) {
    return <Questions category={category} data={data} />;
  }
  if (done) {
    return <QuizDashboard />;
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // backgroundColor="#3c8ca7"
      bg="#074d63"
      height="100vh"
    >
      <VStack
        width="96vw"
        height="92%"
        borderRadius={20}
        fontSize="5xl"
        textAlign="center"
      >
        {" "}
        <Heading marginTop={60}> Your Score is {score} %</Heading>
        <HStack marginTop={20} width="70%" justifyContent="space-evenly">
          <Button
            width="13%"
            height="60px"
            fontSize="2xl"
            onClick={() => setDone(true)}
          >
            Done
          </Button>
          <Button
            width="13%"
            height="60px"
            fontSize="2xl"
            onClick={() => setRetake(true)}
          >
            Retake
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ResultBoard;
