import { Question } from "../hooks/useQuestions";

const getChoices = (data: Question) => {
  let result = {
    question: data.question,
    answers: [""],
    correct_answer: data.correct_answer,
  };

  let answers = new Array();

  data.incorrect_answers.map((answer) => answers.push(answer));
  answers.push(data.correct_answer);

  result.answers = answers.sort(() => Math.random() - 0.5);

  return result;
};
export default getChoices;
