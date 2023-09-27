import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import useQuestion, { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getChoices";

interface Props {
  data: Question[];
}
const Questions = ({ data }: Props) => {
  const currentQuestion = 0;
  const answerObject = {
    correct_answer: data[currentQuestion].correct_answer,
    incorrect_answers: data[currentQuestion].incorrect_answers,
  };
  const answers = getChoices(answerObject);
  return (
    <>
      <VStack marginY="100">
        <Box bg="tomato" w="100%" p={8} fontSize="3xl" color="white">
          {data[currentQuestion].question}
        </Box>
        <SimpleGrid columns={2} spacing={10} justifyContent="space-around">
          {answers.map((answer) => (
            <Button fontSize="2xl" padding="10" width="600px">
              {answer}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Questions;
