import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
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
  const [score, setScore] = useState(0);

  const answerHandler = (answer: string) => {
    if (currentQuestion < 9) {
      if (answer === question.correct_answer) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);

      console.log(currentQuestion);
      console.log(answer);
    } else {
      setEnd(true);
    }
  };

  useEffect(() => {
    if (currentQuestion < 10) setQuestion(getChoices(data[currentQuestion]));
  }, [currentQuestion]);

  if (end) return <div>{score}</div>;
  return (
    <>
      <VStack marginY="100">
        <Box bg="tomato" w="100%" p={8} fontSize="3xl" color="white">
          {question.question}
        </Box>
        <SimpleGrid columns={2} spacing={10} justifyContent="space-around">
          {question.answers.map((answer) => (
            <Button
              // ref={answerRef}
              onClick={() => answerHandler(answer)}
              fontSize="2xl"
              padding="10"
              width="600px"
              value={answer}
              key={answer}
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
