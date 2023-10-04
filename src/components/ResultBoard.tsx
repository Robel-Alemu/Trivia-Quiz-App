import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Img,
  VStack,
} from "@chakra-ui/react";
import excellent from "../assets/giphy.gif";
import meh from "../assets/meh.gif";
import terrible from "../assets/terrible.gif";
import bad from "../assets/bad.gif";
import { useState } from "react";
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
  const totalScore = score * 10;
  const reaction =
    totalScore < 25
      ? terrible
      : totalScore < 40
      ? bad
      : totalScore < 70
      ? meh
      : excellent;
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
        <Img
          marginTop="7%"
          borderRadius={20}
          src={reaction}
          width="200px"
          height="200px"
        />

        <Heading marginTop={10}>
          {" "}
          Your Score is{" "}
          <Badge
            variant="solid"
            borderRadius={10}
            paddingX={5}
            paddingY={1}
            fontSize="4xl"
            colorScheme={
              totalScore < 50
                ? "red"
                : score >= 50 || score < 70
                ? "yellow"
                : "green"
            }
          >
            {" "}
            {totalScore}%
          </Badge>{" "}
        </Heading>
        <HStack marginTop={10} maxWidth="96vw">
          <Button
            colorScheme="telegram"
            marginX={5}
            paddingX={10}
            width="65%"
            height="60px"
            fontSize="2xl"
            onClick={() => setDone(true)}
          >
            Done
          </Button>
          <Button
            colorScheme="whatsapp"
            marginX={5}
            paddingX={10}
            width="65%"
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
