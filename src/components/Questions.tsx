import { Question } from "../hooks/useQuestions";
import getChoices from "../utils/getQuestion";
import { useEffect, useState } from "react";
import ResultBoard from "./ResultBoard";
import QuestionHeader from "./QuestionHeader";
import LoadingLayout from "./LoadingLayout";
import QuizArea from "./QuizArea";
interface Props {
  data: Question[];
  category: number;
}
const Questions = ({ data, category }: Props) => {
  const length = data.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [question, setQuestion] = useState<any | null>(getChoices(data[0]));
  const [end, setEnd] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [score, setScore] = useState(0);
  const [correctanswer, setCorrectAnswer] = useState<string | null>(null);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [seconds, setSeconds] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
    if (!isButtonClicked) {
      setIsButtonClicked(true);
      setDisableButton(true);
      if (answer == null && index == null) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerIndex(null);
      }
      if (currentQuestionIndex < length) {
        setDisableButton(true);
        if (answer === question.correct_answer) {
          setAnswerIndex(index);
          setShowBadge(true);

          setScore(score + 1);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCorrectAnswer(question.correct_answer);

          // setAnswerIndex(null);
          setShowBadge(false);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      } else {
        setEnd(true);
      }
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentQuestionIndex < length) {
        setQuestion(getChoices(data[currentQuestionIndex]));
        setAnswerIndex(null);
        setDisableButton(false);
        setShowBadge(false);
        setSeconds(30);
        console.log(currentQuestionIndex + " on next");
      } else setEnd(true);
    }, 1500);
  }, [currentQuestionIndex]);

  if (end) return <ResultBoard category={category} score={score} />;
  if (isLoading) return <LoadingLayout />;

  return (
    <>
      <QuestionHeader score={score} showBadge={showBadge} seconds={seconds} />

      <QuizArea
        question={question}
        correctanswer={correctanswer}
        disableButton={disableButton}
        answerIndex={answerIndex}
        answerHandler={answerHandler}
      />
    </>
  );
};

export default Questions;
