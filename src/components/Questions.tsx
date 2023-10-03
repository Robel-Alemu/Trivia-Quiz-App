import {
  Badge,
  Box,
  Button,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getQuestion";
import { useEffect, useState } from "react";
import ResultBoard from "./ResultBoard";
import QuestionFooter from "./QuestionFooter";
import LoadingLayout from "./LoadingLayout";

interface Props {
  data: Question[];
  category: number;
}
const Questions = ({ data, category }: Props) => {
  const length = data.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState<any | null>(getChoices(data[0]));
  const [end, setEnd] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);
  const [correctanswer, setCorrectAnswer] = useState<string | null>();
  const [answerIndex, setAnswerIndex] = useState<number | null>();
  const [seconds, setSeconds] = useState(2);
  var timer: any;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds == 0) {
        answerHandler(null, null);
        setSeconds(2);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const answerHandler = (answer: string | null, index: number | null) => {
    if (answer || index == null) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion < length) {
      if (answer === question.correct_answer) {
        setAnswerIndex(index);
        setShowBadge(true);

        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setCorrectAnswer(question.correct_answer);
        setCurrentQuestion(currentQuestion + 1);
        setShowBadge(false);
      }
    } else {
      setEnd(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentQuestion < length) {
        setQuestion(getChoices(data[currentQuestion - 1]));
        setShowBadge(false);
        setSeconds(2);
        setAnswerIndex(null);

        console.log(currentQuestion + " on next");
      } else setEnd(true);
    }, 1500);
  }, [currentQuestion]);

  if (end) return <ResultBoard category={category} score={score} />;
  if (currentQuestion == 0) return <LoadingLayout />;

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
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={10}
          paddingX="20"
          paddingY="5"
          justifyContent="space-around"
        >
          {question.answers.map((answer: string, index: number) => (
            <Button
              onClick={() => answerHandler(answer, index)}
              fontSize="2xl"
              padding="12"
              width="700px"
              whiteSpace="normal"
              maxWidth="100%"
              value={answer}
              key={answer}
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

      <QuestionFooter>
        <Box>Score: {score}</Box>
        <Box>Timer: {seconds}</Box>
      </QuestionFooter>
    </>
  );
};

export default Questions;
