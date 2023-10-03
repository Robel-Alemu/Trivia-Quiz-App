import { Question } from "../hooks/useQuestions";
import decodeHtmlEntities from "./decodeHtmlEntities";

const getChoices = (data: Question) => {
  let result = {
    question: decodeHtmlEntities(data.question),
    answers: [""],
    correct_answer: decodeHtmlEntities(data.correct_answer),
    category: data.category,
  };

  let answers = new Array();

  data.incorrect_answers.map((answer) =>
    answers.push(decodeHtmlEntities(answer))
  );
  answers.push(decodeHtmlEntities(data.correct_answer));

  result.answers = answers.sort(() => Math.random() - 0.5);

  return result;
};
export default getChoices;
