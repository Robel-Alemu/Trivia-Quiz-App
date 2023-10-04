import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";

interface QuestionProperties {
  question: string;
  answers: string[];
}

interface Props {
  question: QuestionProperties;
  correctanswer: string | null;
  answerIndex: number | null;
  disableButton: boolean;
  answerHandler: (answer: string, index: number) => void;
}

const QuizArea = ({
  question,
  correctanswer,
  answerIndex,
  disableButton,
  answerHandler,
}: Props) => {
  return (
    <>
      <VStack>
        <Box textAlign="center" p={8} fontSize="3xl" color="white">
          {question.question}
        </Box>
        <SimpleGrid
          marginX="5%"
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={10}
          paddingY="5"
          overflow={"hidden"}
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
              onDoubleClick={() => null}
              padding="12"
              width="90vw"
              whiteSpace="normal"
              maxWidth="90%"
              margin="auto"
              value={answer}
              key={answer}
              variant={"solid"}
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
    </>
  );
};

export default QuizArea;
