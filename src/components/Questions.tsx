import {
  Badge,
  Box,
  Button,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getChoices";
import { useEffect, useState } from "react";

interface Props {
  data: Question[];
}
const Questions = ({ data }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(getChoices(data[currentQuestion]));
  const [end, setEnd] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);
  const [correctanswer, setCorrectAnswered] = useState<string | null>();
  const [answerIndex, setAnswerIndex] = useState<number | null>();
  const [seconds, setSeconds] = useState(5);
  var timer: any;
  useEffect(() => {
    // setSeconds(30);
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds == 0) {
        answerHandler(null, null);
        setSeconds(2);
        // setVisible((visible) => !visible);
        // clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const answerHandler = (answer: string | null, index: number | null) => {
    if (answer || index == null) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion < 9) {
      if (answer === question.correct_answer) {
        setAnswerIndex(index);
        setShowBadge(true);

        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCorrectAnswered(question.correct_answer);
        setCurrentQuestion(currentQuestion + 1);
        setShowBadge(false);
      }
    } else {
      setEnd(true);
    }
  };
  setTimeout(() => {});

  useEffect(() => {
    setTimeout(() => {
      if (currentQuestion < 10) {
        setShowBadge(false);
        setSeconds(5);
        setAnswerIndex(null);
        setQuestion(getChoices(data[currentQuestion - 1]));
      }
    }, 2000);
  }, [currentQuestion]);

  if (end) return <div>{score}</div>;
  return (
    <>
      <VStack marginY="100">
        <Box textAlign="center" w="100%" p={8} fontSize="3xl" color="white">
          {question.question}
        </Box>
        {showBadge ? (
          <Badge variant="outline" colorScheme="green">
            +1
          </Badge>
        ) : (
          ""
        )}
        <SimpleGrid columns={2} spacing={10} justifyContent="space-around">
          {question.answers.map((answer, index) => (
            <Button
              onClick={() => answerHandler(answer, index)}
              fontSize="2xl"
              padding="10"
              width="600px"
              whiteSpace="normal"
              maxWidth="100%"
              value={answer}
              key={answer}
              id={answer}
              colorScheme={
                answerIndex == index
                  ? "green"
                  : answer == correctanswer
                  ? "red"
                  : "gray"
              }
            >
              {answer}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>

      <HStack
        bg="yellow"
        w="100%"
        p={8}
        fontSize="4xl"
        color="white"
        justifyContent="space-around"
      >
        <Box>Score: {score}</Box>
        <Box>Timer: {seconds}</Box>
      </HStack>
    </>
  );
};

export default Questions;
