import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BsFillClipboardFill } from "react-icons/bs";
interface Props {
  score: number;
  seconds: number;
  showBadge: boolean;
}
const QuestionHeader = ({ score, showBadge, seconds }: Props) => {
  return (
    <>
      <HStack
        w="100%"
        p={8}
        fontSize="5xl"
        color="whiteAlpha.800"
        justifyContent="space-around"
      >
        <Box>
          <HStack>
            <BsFillClipboardFill />{" "}
            <Text>
              &nbsp;
              {score}{" "}
              {showBadge ? (
                <Badge variant="outline" colorScheme="green" fontSize="xl">
                  +1 points
                </Badge>
              ) : (
                ""
              )}
            </Text>
          </HStack>

          {/* Score : {score}{" "} */}
        </Box>

        <HStack
          display="flex"
          justifyContent="center"
          bg="transparent"
          alignItems="center"
        >
          <BsFillStopwatchFill color="orange" /> <Text>{seconds}</Text>
        </HStack>
      </HStack>
    </>
  );
};

export default QuestionHeader;
