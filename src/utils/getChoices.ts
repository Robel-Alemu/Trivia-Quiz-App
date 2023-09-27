interface Props {
  correct_answer: string;
  incorrect_answers: string[];
}

const getChoices = ({ correct_answer, incorrect_answers }: Props) => {
  const answers = new Array();
  answers.push(correct_answer);
  //   console.log()
  incorrect_answers.map((answer) => answers.push(answer));
  const returnedAnswers = answers.sort(() => Math.random() - 0.5);
  return returnedAnswers;
};
export default getChoices;
