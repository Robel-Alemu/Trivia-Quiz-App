import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getQuestion";
import { useEffect, useState } from "react";
import ResultBoard from "./ResultBoard";
import QuestionHeader from "./QuestionHeader";
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
  const [seconds, setSeconds] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  var timer: any;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setSeconds(30);
    }, 3000);
  }, []);
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
    setDisableButton(true);
    if (answer || index == null) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion < length) {
      setDisableButton(true);
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
        setAnswerIndex(null);
        setDisableButton(false);
        setShowBadge(false);
        setSeconds(30);
        console.log(currentQuestion + " on next");
      } else setEnd(true);
    }, 1500);
  }, [currentQuestion]);

  if (end) return <ResultBoard category={category} score={score} />;
  if (isLoading) return <LoadingLayout />;

  return (
    <>
      <QuestionHeader score={score} showBadge={showBadge} seconds={seconds} />

      <VStack>
        <Box textAlign="center" w="100%" p={8} fontSize="3xl" color="white">
          {question.question}
        </Box>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={10}
          paddingX="20"
          paddingY="5"
          justifyContent="space-around"
        >
          {question.answers.map((answer: string, index: number) => (
            <Button
              isDisabled={
                answer == correctanswer || answerIndex == index
                  ? false
                  : disableButton
              }
              onClick={() => answerHandler(answer, index)}
              fontSize="2xl"
              padding="12"
              width="700px"
              whiteSpace="normal"
              maxWidth="100%"
              value={answer}
              key={answer}
              variant={"solid"}
              colorScheme={
                answerIndex == index
                  ? "green"
                  : answer == correctanswer
                  ? "pink"
                  : "gray"
              }
            >
              {answer}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Questions;
