import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getChoices";
import { useEffect, useState } from "react";

interface Props {
  data: Question[];
}
const Questions = ({ data }: Props) => {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(getChoices(data[currentQuestion]));
  const [end, setEnd] = useState(false);

  const answerHandler = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      console.log(currentQuestion);
    } else {
      setEnd(true);
    }
  };

  useEffect(() => {
    if (currentQuestion < 10) setQuestion(getChoices(data[currentQuestion]));
  }, [currentQuestion]);

  if (end) return <div>end</div>;
  return (
    <>
      <VStack marginY="100">
        <Box bg="tomato" w="100%" p={8} fontSize="3xl" color="white">
          {question.question}
        </Box>
        <SimpleGrid columns={2} spacing={10} justifyContent="space-around">
          {question.answers.map((answer) => (
            <Button
              onClick={answerHandler}
              fontSize="2xl"
              padding="10"
              width="600px"
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
